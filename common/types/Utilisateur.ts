export type Utilisateur = {
  nom: string;
  prenom: string;
  email: string;
  droit_access: "administrateur" | "membre" | "menfou";
};
