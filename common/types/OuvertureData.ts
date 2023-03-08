import { CompteBancaire } from "./CompteBancaire";
import { Utilisateur } from "./Utilisateur";
import { DocumentJoint } from "./DocumentJoint";
export type OuvertureData = {
  //Société
  politesse: "M." | "Mme" | "autre";
  raison_sociale: string;
  complement?: string;
  complement_sur_ligne: boolean;
  complement_2?: string;
  adresse: string;
  complement_adresse?: string;
  code_postal: string;
  pays: string;
  telephone: string;
  telephone_2?: string;
  email: string;
  site_web?: string;

  //Relations bancaires
  bic: string;
  code_banque: string;
  code_guichet: string;
  abreviation: string;
  nom_banque: string;
  pays_banque: string;
  liste_compte_banquaire: CompteBancaire;

  //Gestion de la tva
  soumis_tva?: boolean;
  numero_tva?: string;
  forfaitaire?: string;
  taux_vente?: string;
  taux_achat?: string;
  taux_investissement?: string;
  activer_comptabilite: boolean;
  periode_decompte: "mensuelle" | "trimestrielle" | "annuelle";
  devise_tva: string;
  arrondir_5_cts: boolean;

  //liste utilisateurs
  liste_utilisateur: Utilisateur;

  //documents joints
  liste_document: DocumentJoint;
};
