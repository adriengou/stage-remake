import { Router } from "express";
import ouvertureController from "../controllers/ouverture.controller";
import upload from "../middlewares/multer.middleware";

const router = Router();
router.post("/upload", async (req, res) => {
  upload(req, res, (err: any) => {
    if (err) {
      return res.status(400);
    }

    const files = req.files as Express.Multer.File[];
    const fileNames = files.map((file: any) => file.filename);

    return res.status(200).json(fileNames);
  });
});

router.post("/", async (req, res) => {
  const data = req.body;
  const [result, error] = await ouvertureController.create(data);

  if (!result) {
    res.status(400).send(error);
    return;
  }
  res.status(200).send("OK");
});

export default router;
