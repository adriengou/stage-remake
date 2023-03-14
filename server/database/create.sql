-- Active: 1678783217472@@127.0.0.1@5433@stage

CREATE TABLE
    IF NOT EXISTS ouverture (
        id SERIAL PRIMARY KEY,
        donnee VARCHAR(500)
    );

CREATE TABLE
    IF NOT EXISTS documents (
        id SERIAL PRIMARY KEY,
        note VARCHAR(500),
        nom_document VARCHAR(500),
        id_ouverture SERIAL REFERENCES ouverture(id)
    );

CREATE TABLE
    IF NOT EXISTS param_impression (
        id SERIAL PRIMARY KEY,
        nom VARCHAR(50),
        taille_police INT,
        alignement VARCHAR(50),
        distance_haut INT,
        cadre BOOLEAN,
        libelle BOOLEAN,
        distance_bas INT
    );

CREATE TABLE
    IF NOT EXISTS type_adresse (
        id SERIAL PRIMARY KEY,
        nom VARCHAR(50)
    );

CREATE TABLE
    IF NOT EXISTS adresse_impression (
        id_type_adresse SERIAL REFERENCES type_adresse(id),
        id_param_impression SERIAL REFERENCES param_impression(id),
        PRIMARY KEY(
            id_type_adresse,
            id_param_impression
        )
    );