import { Router } from "express";
import typeAdresseController from "../controllers/typeAdresse.controller";

const router = Router();

// READ
router.get("/", async (req, res, next) => {
  try {
    const [rows, error] = await typeAdresseController.list();

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
    const { nom } = req.body;

    const [rows, error] = await typeAdresseController.create(nom);

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
    const { nom } = req.body;

    const id = req.params.id;

    const [rows, error] = await typeAdresseController.update(id, nom);

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
    const [result, error] = await typeAdresseController.delete(id);

    if (error) {
      return res.status(500);
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400);
  }
});

export default router;
