import React from "react";
import { useState } from "react";
import {
  OuvertureData,
  SocieteData,
  BanqueData,
} from "../../../../common/types/OuvertureData";
import {
  PartiesSociete,
  PartiesBanque,
  PartiesTva,
  PartiesDocuments,
  PartiesUtilisateurs,
} from "./PartiesFormulaire/PartiesFormulaire";

export default function OuvertureCompte() {
  //form data state
  const [ouvertureForm, setOuvertureForm] = useState<OuvertureData>(
    {} as OuvertureData
  );

  //functions
  const handlePartChange = (
    partName: string,
    partData: SocieteData | BanqueData
  ) => {
    setOuvertureForm({
      ...ouvertureForm,
      [partName]: partData,
    });
  };

  return (
    <div className="page-ouverture">
      <div className="form-progress"></div>
      <form action="">
        <PartiesSociete />
        <PartiesBanque />
        <PartiesTva />
        <PartiesUtilisateurs />
        <PartiesDocuments />
      </form>
    </div>
  );
}
