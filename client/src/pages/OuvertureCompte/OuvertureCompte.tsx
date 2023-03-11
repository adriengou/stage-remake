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

  const onSubmit = (data: any) => {
    console.log(data, errors);
  };

  return (
    <div className="page-ouverture">
      <h1>Ouverture de compte</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <PartiesSociete register={register} errors={errors} />
        </div>
        <div>
          <PartiesBanque
            register={register}
            errors={errors}
            fieldArray={banqueArray}
          />
        </div>
        <div>
          <PartiesTva register={register} errors={errors} watch={watch} />
        </div>
        <div>
          <PartiesUtilisateurs
            register={register}
            errors={errors}
            fieldArray={utilisateurArray}
          />
        </div>
        <div>
          <PartiesDocuments
            register={register}
            errors={errors}
            fieldArray={documentArray}
            watch={watch}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
