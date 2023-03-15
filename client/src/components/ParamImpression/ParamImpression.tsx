import React from "react";
import "./ParamImpression.css";
import { paramImpressionService } from "../../services/api";
import { useFieldArray, useForm } from "react-hook-form";

export default function ParamImpression() {
  const [paramList, setParamList] = React.useState<any[]>([]);
  const [toUpdate, setToUpdate] = React.useState<number>();

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    paramImpressionService.list().then((response) => {
      console.warn(response);
      setParamList(response);
    });
  }, []);

  const onEdit = (id: number) => {
    const row = paramList.find((param: any) => param.id == id);
    console.log(row);
    Object.keys(row).forEach((key: string) => setValue(key, row[key]));
    setToUpdate(id);
  };

  const onCancelEdit = () => {
    reset();
    setToUpdate(undefined);
  };

  const onDelete = async (id: number) => {
    const result = await paramImpressionService.delete(id);

    setParamList((oldParamList: any) =>
      oldParamList.filter((param: any) => param.id != id)
    );

    return result;
  };

  const onSubmit = async (data: any) => {
    let result;

    data = {
      ...data,
      taille_police: Number(data.taille_police),
      distance_haut: Number(data.distance_haut),
      distance_bas: Number(data.distance_bas),
      cadre: data.cadre == "true" ? true : false,
      libelle: data.libelle == "true" ? true : false,
    };

    if (toUpdate) {
      result = await paramImpressionService.update(data, toUpdate);

      setParamList((oldParamList: any) =>
        oldParamList.map((param: any) => {
          if (param.id == data.id) {
            return data;
          }

          return param;
        })
      );
    } else {
      result = await paramImpressionService.create(data);
      console.log(result);
      setParamList([...paramList, result]);
    }

    return result;
  };

  return (
    <div className="paramimpression">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Taille de police</th>
            <th>Alignement</th>
            <th>Distance Haut</th>
            <th>Distance Bas</th>
            <th>Cadre</th>
            <th>Libelle</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paramList.map((elem: any) => (
            <tr>
              <td>{elem.id}</td>
              <td>{elem.nom}</td>
              <td>{elem.taille_police}</td>
              <td>{elem.alignement}</td>
              <td>{elem.distance_haut}</td>
              <td>{elem.distance_bas}</td>
              <td>{elem.cadre ? "oui" : "non"}</td>
              <td>{elem.libelle ? "oui" : "non"}</td>
              <td>
                <button onClick={() => onEdit(elem.id)}>Modifier</button>
                <button onClick={() => onDelete(elem.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>ID</label>
          <input readOnly type="number" {...register("id")} />
        </div>

        <div className="field">
          <label>Nom</label>
          <input type="text" {...register("nom")} />
        </div>

        <div className="field">
          <label>Taille de police</label>
          <input type="number" {...register("taille_police")} />
        </div>

        <div className="field">
          <label>Alignement</label>
          <input type="text" {...register("alignement")} />
        </div>

        <div className="field">
          <label>Distance Haut</label>
          <input type="number" {...register("distance_haut")} />
        </div>

        <div className="field">
          <label>Distance Bas</label>
          <input type="number" {...register("distance_bas")} />
        </div>

        <div className="field checkbox">
          <label>Cadre</label>
          <input type="checkbox" {...register("cadre")} />
        </div>

        <div className="field checkbox">
          <label>Libellé</label>
          <input type="checkbox" {...register("libelle")} />
        </div>

        <button type="submit">{toUpdate ? "Modifier" : "Ajouter"}</button>

        {toUpdate && (
          <button type="button" onClick={onCancelEdit}>
            Annuler
          </button>
        )}
      </form>
    </div>
  );
}

function TableauElement(props: any) {
  const [isUpdate, setIsUpdate] = React.useState(false);

  const elem = props.elem;

  return (
    <>
      <td>{elem.id}</td>
      <td>{elem.nom}</td>
      <td>{elem.taille_police}</td>
      <td>{elem.alignement}</td>
      <td>{elem.distance_haut}</td>
      <td>{elem.distance_bas}</td>
      <td>{elem.cadre ? "oui" : "non"}</td>
      <td>{elem.libelle ? "oui" : "non"}</td>
      <td>
        <button>Modifier</button>
        <button>Supprimer</button>
      </td>
    </>
  );
}
