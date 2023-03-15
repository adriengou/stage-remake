-- Active: 1678783217472@@127.0.0.1@5433@stage

-- create

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
        'test',
        5,
        'gauche',
        10,
        false,
        true,
        15
    );

UPDATE param_impression
SET
    nom = 'testupdate',
    taille_police = 4,
    alignement = 'droite'
WHERE id = 1
RETURNING *;

SELECT * FROM param_impression ;

DELETE FROM param_impression WHERE distance_haut = 10;