export interface OuvertureData {
  societe: SocieteData;
  banque: BanqueData;
}

export interface SocieteData {
  raison_sociale: string;
  prenom: string;
  complement: string;
  rue: string;
  code_postal: string;
  ville: string;
  pays: string;
  email: string;
  telephone: string;
  site_web: string;
}

export interface BanqueData {
  bic: string;
  code_banque: string;
  code_guichet: string;
  abreviation: string;
  nom_banque: string;
  npa: string;
  lieu: string;
  pays: string;
  compte_banques: CompteBanque[];
}

export interface CompteBanque {}
