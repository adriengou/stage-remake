import pool from "../database/postgres_connect";
import documentController from "./document.controller";

const controller: any = {};

controller.create = async (data: any) => {
  const data_json = JSON.stringify(data);
  const query = `
    INSERT INTO ouverture (donnee)
    VALUES ($1)
    RETURNING id
  `;
  const values = [data_json];

  let result;

  try {
    result = await pool.query(query, values);
  } catch (error) {
    return [false, error];
  }

  const id_ouverture = result.rows[0].id;

  console.log(id_ouverture);
  try {
    data.documents_joint.forEach(async (element: any) => {
      await documentController.create(element.note, element.name, id_ouverture);
    });
  } catch (error) {}

  return [true];
};

export default controller;
