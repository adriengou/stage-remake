import { Router } from "express";
import paramImpressionController from "../controllers/paramImpression.controller";

const router = Router();

// READ
router.get("/", async (req, res, next) => {
  try {
    const [rows, error] = await paramImpressionController.list();

    if (error) {
      return res.status(500);
    }

    return res.status(200).json(rows);
  } catch (error) {
    return res.status(400);
  }
});

// CREATE
router.post("/", async (req, res, next) => {
  try {
    const {
      nom,
      taille_police,
      alignement,
      distance_haut,
      cadre,
      libelle,
      distance_bas,
    } = req.body;

    const [rows, error] = await paramImpressionController.create(
      nom,
      taille_police,
      alignement,
      distance_haut,
      cadre,
      libelle,
      distance_bas
    );

    if (error) {
      return res.status(500);
    }

    return res.status(200).json(rows);
  } catch (error) {
    return res.status(400);
  }
});

// UPDATE
router.put("/:id", async (req, res, next) => {
  try {
    const {
      nom,
      taille_police,
      alignement,
      distance_haut,
      cadre,
      libelle,
      distance_bas,
    } = req.body;

    const id = req.params.id;

    const [rows, error] = await paramImpressionController.update(
      id,
      nom,
      taille_police,
      alignement,
      distance_haut,
      cadre,
      libelle,
      distance_bas
    );

    if (error) {
      return res.status(500);
    }

    return res.status(200).json(rows);
  } catch (error) {
    return res.status(400);
  }
});

// DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    const [result, error] = await paramImpressionController.delete(id);

    if (error) {
      return res.status(500);
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400);
  }
});

export default router;
