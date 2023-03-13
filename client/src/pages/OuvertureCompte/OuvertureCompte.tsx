import { useFieldArray, useForm } from "react-hook-form";
import {
  PartiesBanque,
  PartiesDocuments,
  PartiesSociete,
  PartiesTva,
  PartiesUtilisateurs,
} from "./PartiesFormulaire/PartiesFormulaire";

import "./OuvertureCompte.css";
import { useState } from "react";
import { HOST, PORT } from "../../../../common/environment";

export default function OuvertureCompte() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const banqueArray = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "relation_bancaire", // unique name for your Field Array
  });

  const utilisateurArray = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "utilisateurs", // unique name for your Field Array
  });

  const documentArray = useFieldArray({
    control,
    name: "documents_joint",
  });

  const onSubmit = async (data: any, event: any) => {
    const formData = new FormData();
    const fileList = data.documents.map((elem: any) => {
      return elem[0];
    });
    fileList.forEach((doc: any, index: number) => {
      formData.append("file", doc);
    });

    console.log(fileList);

    //send data
    const uploadRes = await fetch(`${HOST}:${PORT}/ouverture/upload`, {
      method: "POST",
      body: formData,
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
    });

    const fileNames = await uploadRes.json();

    data.documents_joint = data.documents_joint.map(
      (doc: any, index: number) => {
        return {
          ...doc,
          name: fileNames[index],
        };
      }
    );

    const res = await fetch(`${HOST}:${PORT}/ouverture`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="page-ouverture">
      <h1>Ouverture de compte</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <PartiesSociete register={register} errors={errors} />
        </div>

        <div className="line"></div>

        <div>
          <PartiesBanque
            register={register}
            errors={errors}
            fieldArray={banqueArray}
          />
        </div>

        <div className="line"></div>

        <div>
          <PartiesTva register={register} errors={errors} watch={watch} />
        </div>

        <div className="line"></div>

        <div>
          <PartiesUtilisateurs
            register={register}
            errors={errors}
            fieldArray={utilisateurArray}
          />
        </div>

        <div className="line"></div>

        <div>
          <PartiesDocuments
            register={register}
            errors={errors}
            fieldArray={documentArray}
            watch={watch}
          />
        </div>

        <div className="line"></div>

        <div className="actions">
          <button type="submit">Envoyer</button>
          <button type="button">Exporter</button>
        </div>
      </form>
    </div>
  );
}
