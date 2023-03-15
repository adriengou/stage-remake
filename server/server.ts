import express from "express";
import cors from "cors";
import { PORT } from "../common/environment";

import ouvertureRouter from "./routes/ouverture.route";
import paramImpresssionRouter from "./routes/paramImpression.route";
import typeAdresseRouter from "./routes/typeAdresse.route";
import adresseImpressionRouter from "./routes/adresseImpression.route";

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
app.use("/paramimpression", paramImpresssionRouter);
app.use("/typeadresse", typeAdresseRouter);
app.use("/adresseimpression", adresseImpressionRouter);

app.listen(PORT, () => {
  console.log("server open at port " + PORT);
});
