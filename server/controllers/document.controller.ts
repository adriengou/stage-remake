import pool from "../database/postgres_connect";

const controller: any = {};

controller.create = async (
  note: string,
  nom_document: string,
  id_ouverture: number
) => {
  const query = `
    INSERT INTO documents (note, nom_document, id_ouverture)
    VALUES ($1, $2, $3)
  `;

  const values = [note, nom_document, id_ouverture];

  try {
    await pool.query(query, values);
    return [true];
  } catch (error) {
    return [false, error];
  }
};

export default controller;
