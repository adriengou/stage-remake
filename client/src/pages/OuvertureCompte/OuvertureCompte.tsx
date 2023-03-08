import { useFieldArray, useForm } from "react-hook-form";
import {
  PartiesBanque,
  PartiesDocuments,
  PartiesSociete,
  PartiesTva,
  PartiesUtilisateurs,
} from "./PartiesFormulaire/PartiesFormulaire";

import "./OuvertureCompte.css";

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

  const onSubmit = (data: any) => {
    console.log(data, errors);
  };

  return (
    <div className="page-ouverture">
      <div className="form-progress"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <PartiesSociete register={register} errors={errors} />
        </div>
        <div>
          <PartiesBanque
            register={register}
            errors={errors}
            formArray={banqueArray}
          />
        </div>
        <div>
          <PartiesTva register={register} errors={errors} watch={watch} />
        </div>
        <div>
          <PartiesUtilisateurs
            register={register}
            errors={errors}
            formArray={utilisateurArray}
          />
        </div>
        <div>
          <PartiesDocuments register={register} errors={errors} />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
