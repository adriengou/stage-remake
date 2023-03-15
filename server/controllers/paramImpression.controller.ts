import pool from "../database/postgres_connect";
import adresseImpressionController from "./adresseImpression.controller";

const controller: any = {};

controller.create = async (
  nom: string,
  taille_police: number,
  alignement: "gauche" | "droite",
  distance_haut: number,
  cadre: boolean,
  libelle: boolean,
  distance_bas: number
) => {
  const query = `
  INSERT INTO
    param_impression (
      nom,
      taille_police,
      alignement,
      distance_haut,
      cadre,
      libelle,
      distance_bas
    )
    VALUES (
      $1,
      $2,
      $3,
      $4,
      $5,
      $6,
      $7
  );
  `;

  const values = [
    nom,
    taille_police,
    alignement,
    distance_haut,
    cadre,
    libelle,
    distance_bas,
  ];

  try {
    await pool.query(query, values);
    return [true];
  } catch (error) {
    return [false, error];
  }
};

controller.update = async (
  id: number,
  nom: string,
  taille_police: number,
  alignement: "gauche" | "droite",
  distance_haut: number,
  cadre: boolean,
  libelle: boolean,
  distance_bas: number
) => {
  const query = `
    UPDATE param_impression
    SET
      nom = $1,
      taille_police = $2,
      alignement = $3,
      distance_haut = $4,
      cadre = $5,
      libelle = $6,
      distance_bas = $7,
    WHERE id = $8
    RETURNING *;
  `;

  const values = [
    nom,
    taille_police,
    alignement,
    distance_haut,
    cadre,
    libelle,
    distance_bas,
    id,
  ];

  try {
    const result = await pool.query(query, values);
    return [result.rows[0]];
  } catch (error) {
    return [false, error];
  }
};

controller.list = async () => {
  const query = `
    SELECT * FROM param_impression ;
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
    DELETE FROM param_impression WHERE id = $1;
  `;

  const values = [id];

  try {
    await adresseImpressionController.deleteByParam(id);
    await pool.query(query, values);
    return [true];
  } catch (error) {
    return [false, error];
  }
};

controller.getOne = async (id: number) => {
  const query = `
    SELECT * FROM param_impression WHERE id = $1;
  `;

  const values = [id];

  try {
    const result = await pool.query(query, values);
    return [result.rows[0]];
  } catch (error) {
    return [false, error];
  }
};

export default controller;
