import pool from "../database/postgres_connect";

const controller: any = {};

controller.create = async (idParam: number, idAdresse: number) => {
  const query = `
  INSERT INTO
    adresse_impression (
      id_type_adresse,
      id_param_impression
    )
    VALUES (
      $1,
      $2
  );
  `;

  const values = [idAdresse, idParam];

  try {
    await pool.query(query, values);
    return [true];
  } catch (error) {
    return [false, error];
  }
};

controller.update = async (id: number, idParam: number, idAdresse: number) => {
  const query = `
    UPDATE adresse_impression
    SET
      id_type_adresse = $1,
      id_param_impression = $2
      
    WHERE id = $3
    RETURNING *;
  `;

  const values = [idAdresse, idParam, id];

  try {
    const result = await pool.query(query, values);
    return [result.rows[0]];
  } catch (error) {
    return [false, error];
  }
};

controller.list = async () => {
  const query = `
    SELECT * FROM adresse_impression ;
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
    DELETE FROM adresse_impression WHERE id = $1;
  `;

  const values = [id];

  try {
    await pool.query(query, values);
    return [true];
  } catch (error) {
    return [false, error];
  }
};

controller.deleteByAdresse = async (adresseId: number) => {
  const query = `
    DELETE FROM adresse_impression WHERE id_type_adresse = $1;
  `;

  const values = [adresseId];

  try {
    await pool.query(query, values);
    return [true];
  } catch (error) {
    return [false, error];
  }
};

controller.deleteByParam = async (paramId: number) => {
  const query = `
    DELETE FROM adresse_impression WHERE id_param_impression = $1;
  `;

  const values = [paramId];

  try {
    await pool.query(query, values);
    return [true];
  } catch (error) {
    return [false, error];
  }
};

export default controller;
