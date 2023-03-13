import express from "express";
import cors from "cors";
import { PORT } from "../common/environment";

import ouvertureRouter from "./routes/ouverture.route";

const app = express();

//express middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//debug middleware
app.use((req, res, next) => {
  console.log(
    `
    --------------------------------------------------
    url: ${req.url}
    method: ${req.method}
    body: ${JSON.stringify(req.body)}
    file: ${req.file}
    --------------------------------------------------
  `
  );

  next();
});

//api routers
app.use("/ouverture", ouvertureRouter);

app.listen(PORT, () => {
  console.log("server open at port " + PORT);
});
