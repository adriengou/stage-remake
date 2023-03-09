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
  const path = window.location.pathname;
  const [partie, setPartie] = useState("societe");

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
      <div className="form-progress">
        {["societe", "banque", "tva", "utilisateur", "document"].map(
          (elem: string, index: number) => (
            <div key={index} onClick={() => setPartie(elem)}>
              <p>{elem.toUpperCase()}</p>
              <div className={partie == elem ? "selected" : ""}></div>
            </div>
          )
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div hidden={partie !== "societe"}>
          <PartiesSociete register={register} errors={errors} />
        </div>

        <div hidden={partie !== "banque"}>
          <PartiesBanque
            register={register}
            errors={errors}
            fieldArray={banqueArray}
          />
        </div>

        <div hidden={partie !== "tva"}>
          <PartiesTva register={register} errors={errors} watch={watch} />
        </div>

        <div hidden={partie !== "utilisateur"}>
          <PartiesUtilisateurs
            register={register}
            errors={errors}
            fieldArray={utilisateurArray}
          />
        </div>

        <div hidden={partie !== "document"}>
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
