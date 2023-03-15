import pool from "../database/postgres_connect";
import paramImpressionController from "./paramImpression.controller";
import adresseImpressionController from "./adresseImpression.controller";

const controller: any = {};

controller.create = async (nom: string, paramId: number) => {
  // verifier que le param existe
  const [param, error] = await paramImpressionController.getOne(paramId);

  const query = `
  INSERT INTO
    type_adresse (
      nom,
    )
    VALUES (
      $1,
  )
  RETURNING *;
  `;

  const values = [nom];

  try {
    const result = await pool.query(query, values);

    if (param) {
      //if the param exist, add id and param id in adresse impression relation
      const adresseId = result.rows[0];
      await adresseImpressionController.create(paramId, adresseId);
    }

    return [true];
  } catch (error) {
    return [false, error];
  }
};

controller.update = async (id: number, nom: string) => {
  const query = `
    UPDATE type_adresse
    SET
      nom = $1,
      
    WHERE id = $2
    RETURNING *;
  `;

  const values = [nom, id];

  try {
    const result = await pool.query(query, values);
    return [result.rows[0]];
  } catch (error) {
    return [false, error];
  }
};

controller.list = async () => {
  const query = `
    SELECT * FROM type_adresse ;
  `;

  try {
    const result = await pool.query(query);
    return [result.rows];
  } catch (error) {
    return [false, error];
  }
};

controller.delete = async (id: number) => {
  const query = `
    DELETE FROM type_adresse WHERE id = $1;
  `;

  const values = [id];

  try {
    await adresseImpressionController.deleteByAdresse(id);
    await pool.query(query, values);
    return [true];
  } catch (error) {
    return [false, error];
  }
};

export default controller;
