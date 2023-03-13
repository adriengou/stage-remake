import React from "react";
import { countryList } from "../../../../../common/data/countryList";
import { currencyList } from "../../../../../common/data/currencyList";
import "./PartiesFormulaire.css";

export function PartiesSociete({ register, errors }: any) {
  return (
    <>
      <h2>Société</h2>
      <div className="field text">
        <label htmlFor="">Politesse</label>
        <select
          {...register("politesse", { required: true })}
          aria-invalid={errors.politesse ? "true" : "false"}
        >
          <option value="0">Monsieur</option>
          <option value="1">Madame</option>
        </select>
      </div>

      <div className="field text">
        <label htmlFor="">Nom / Raison sociale</label>
        <input
          {...register("raison_sociale", { required: true })}
          aria-invalid={errors.raison_sociale ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Prénom / Complément</label>
        <input
          {...register("complement", { required: false })}
          aria-invalid={errors.complement ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Complément 2</label>
        <input
          {...register("complement_2", { required: false })}
          aria-invalid={errors.complement_2 ? "true" : "false"}
        />
      </div>

      <div className="field checkbox">
        <label htmlFor="">Prénom / Complément sur ligne séparée</label>
        <input
          type="checkbox"
          {...register("complement_ligne", { required: false })}
          aria-invalid={errors.complement_ligne ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Rue</label>
        <input
          {...register("rue", { required: true })}
          aria-invalid={errors.rue ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Complément d'adresse</label>
        <input
          {...register("complement_adresse", { required: false })}
          aria-invalid={errors.complement_adresse ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">NPA</label>
        <input
          {...register("societe_npa", { required: true })}
          aria-invalid={errors.societe_npa ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Localité</label>
        <input
          {...register("localite_societe", { required: true })}
          aria-invalid={errors.localite_societe ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Canton-Province</label>
        <input
          {...register("localite_societe", { required: true })}
          aria-invalid={errors.localite_societe ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Pays</label>
        <select
          {...register("pays_societe", { required: true })}
          aria-invalid={errors.pays_societe ? "true" : "false"}
        >
          {countryList.map((country: string, index: number) => (
            <option key={index} value={index}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="field text">
        <label htmlFor="">Téléphone</label>
        <input
          {...register("telephone_societe", { required: true })}
          aria-invalid={errors.telephone_societe ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Téléphone 2</label>
        <input
          {...register("telephone_societe_2", { required: false })}
          aria-invalid={errors.telephone_societe_2 ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Email</label>
        <input
          {...register("email_societe", { required: true })}
          aria-invalid={errors.email_societe ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Site web</label>
        <input
          {...register("site_web_societe", { required: false })}
          aria-invalid={errors.site_web_societe ? "true" : "false"}
        />
      </div>
    </>
  );
}

export function PartiesBanque({ register, errors, fieldArray }: any) {
  return (
    <>
      <h2>Banque</h2>
      <div className="field text">
        <label htmlFor="">BIC / Swift</label>
        <input
          {...register("email_societe", { required: true })}
          aria-invalid={errors.email_societe ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Clearing / Code banque</label>
        <input
          {...register("code_banque", { required: true })}
          aria-invalid={errors.code_banque ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Code guichet / agence</label>
        <input
          {...register("code_guichet", { required: true })}
          aria-invalid={errors.code_guichet ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Abréviation</label>
        <input
          {...register("abreviation", { required: true })}
          aria-invalid={errors.abreviation ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Nom banque</label>
        <input
          {...register("nom_banque", { required: true })}
          aria-invalid={errors.nom_banque ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">NPA</label>
        <input
          {...register("npa_banque", { required: true })}
          aria-invalid={errors.npa_banque ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Lieu</label>
        <input
          {...register("lieu_banque", { required: true })}
          aria-invalid={errors.lieu_banque ? "true" : "false"}
        />
      </div>

      <div className="field text">
        <label htmlFor="">Pays</label>
        <select
          {...register("pays_banque", { required: true })}
          aria-invalid={errors.pays_banque ? "true" : "false"}
        >
          {countryList.map((country: string, index: number) => (
            <option key={index} value={index}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="array field">
        {fieldArray.fields.map((field: any, index: number) => (
          <div key={field.id} className="array-element">
            <button type="button" onClick={() => fieldArray.remove(index)}>
              Supprimer relation bancaire
            </button>
            <div className="break"></div>
            <div className="field text">
              <label>N° Compte</label>
              <input
                {...register(`relation_bancaire.${index}.numero_compte`)}
              />
            </div>

            <div className="field text">
              <label>clé RIB</label>
              <input {...register(`relation_bancaire.${index}.cle_rib`)} />
            </div>

            <div className="field text">
              <label>IBAN</label>
              <input {...register(`relation_bancaire.${index}.iban`)} />
            </div>

            <div className="field text">
              <label htmlFor="">Devise</label>
              <select {...register(`relation_bancaire.${index}.devise`)}>
                {currencyList.map((currency: any, index: number) => (
                  <option key={index} value={index}>
                    {currency.name + " - " + currency.code}
                  </option>
                ))}
              </select>
            </div>

            <div className="field text">
              <label>QR-IBAN</label>
              <input {...register(`relation_bancaire.${index}.qr_iban`)} />
            </div>

            <div className="field text">
              <label>partie bancaire du n° de référence</label>
              <input
                {...register(`relation_bancaire.${index}.partie_bancaire`)}
              />
            </div>
          </div>
        ))}
        <button type="button" onClick={() => fieldArray.append()}>
          Ajouter relation bancaire
        </button>
      </div>
    </>
  );
}

export function PartiesTva({ register, errors, watch }: any) {
  const watchTva = watch("soumis_tva", "0");
  const showTva = watchTva == "1";

  return (
    <>
      <h2>TVA</h2>
      <div className="tva">
        <div className="field text">
          <label htmlFor="">TVA</label>
          <select
            {...register("soumis_tva", { required: true })}
            aria-invalid={errors.soumis_tva ? "true" : "false"}
          >
            <option value="0">non soumis</option>
            <option value="1">soumis</option>
          </select>
        </div>

        {showTva && (
          <>
            <div className="field text">
              <label htmlFor="">numéro TVA</label>
              <input
                {...register("numero_tva", { required: true })}
                aria-invalid={errors.numero_tva ? "true" : "false"}
              />
            </div>
            <div className="field text">
              <label htmlFor="">Taux Vente (%)</label>
              <input
                {...register("taux_vente", { required: true })}
                aria-invalid={errors.taux_vente ? "true" : "false"}
              />
            </div>

            <div className="field text">
              <label htmlFor="">Taux Achat (%)</label>
              <input
                {...register("taux_achat", { required: true })}
                aria-invalid={errors.taux_achat ? "true" : "false"}
              />
            </div>

            <div className="field text">
              <label htmlFor="">Taux Investissement (%)</label>
              <input
                {...register("taux_investissement", { required: true })}
                aria-invalid={errors.taux_investissement ? "true" : "false"}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export function PartiesUtilisateurs({ register, errors, fieldArray }: any) {
  return (
    <>
      <h2>Utilisateurs</h2>
      <div className="array field">
        {fieldArray.fields.map((field: any, index: number) => (
          <div key={field.id} className="array-element">
            <button type="button" onClick={() => fieldArray.remove(index)}>
              Supprimer utilisateur
            </button>
            <div className="break"></div>

            <div className="field text">
              <label>Nom</label>

              <input {...register(`utilisateurs.${index}.nom`)} />
            </div>

            <div className="field text">
              <label>Prénom</label>

              <input {...register(`utilisateurs.${index}.prenom`)} />
            </div>

            <div className="field text">
              <label>Email</label>

              <input {...register(`utilisateurs.${index}.email`)} />
            </div>

            <div className="field text">
              <label>Droits d'accès</label>
              <select {...register(`utilisateurs.${index}.droit_acces`)}>
                <option value="0">Aucun</option>
                <option value="1">Secrétariat</option>
                <option value="2">Comptabilité</option>
                <option value="3">Ressources Humaines</option>
                <option value="4">Administration</option>
              </select>
            </div>
          </div>
        ))}
        <button type="button" onClick={() => fieldArray.append()}>
          Ajouter utilisateur
        </button>
      </div>
    </>
  );
}

export function PartiesDocuments({ register, errors, fieldArray, watch }: any) {
  const watchDocuments = watch("documents_join", []);

  return (
    <>
      <h2>Documents joints</h2>
      <div className="array field">
        {fieldArray.fields.map((field: any, index: number) => (
          <div key={field.id} className="array-element">
            <button type="button" onClick={() => fieldArray.remove(index)}>
              Supprimer document
            </button>
            <div className="break"></div>

            <div className="field file">
              <input type="file" {...register(`documents.${index}`)} />
            </div>
            <div className="field text">
              <label>Note</label>

              <textarea
                rows={4}
                cols={50}
                {...register(`documents_joint.${index}.note`)}
              />
            </div>
          </div>
        ))}

        <button type="button" onClick={() => fieldArray.append()}>
          Ajouter document
        </button>
      </div>
    </>
  );
}
