import React from "react";
import "./TypeAdresse.css";
import {
  typeAdresseService,
  paramImpressionService,
  adresseImpressionService,
} from "../../services/api";
import { useForm } from "react-hook-form";

export default function TypeAdresse() {
  const [adresseList, setAdresseList] = React.useState<any[]>([]);
  const [adresseImpressionList, setAdresseImpressionList] = React.useState<
    any[]
  >([]);
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
    updateLists();
  }, []);

  const updateLists = (adresseId?: number) => {
    typeAdresseService.list().then((response) => {
      console.warn("type", response);
      setAdresseList(response);
    });

    adresseImpressionService.list().then((response) => {
      console.warn("param", response);
      setAdresseImpressionList(response);
    });

    paramImpressionService.list().then((response) => {
      console.warn("asso", response);
      setParamList(response);
    });
  };

  const getRelatedParams = (adresseId: number) => {
    const associations = adresseImpressionList.filter(
      (p) => p.id_type_adresse == adresseId
    );

    let params = paramList.filter((p) => {
      const found = associations.find((a) => a.id_param_impression == p.id);
      return found ? true : false;
    });

    params = params.map((par) => par.nom);
    console.warn("related", adresseId, adresseImpressionList);
    return params.join(", ");
  };

  const onEdit = (id: number) => {
    const row = adresseList.find((param: any) => param.id == id);
    console.log(row);
    Object.keys(row).forEach((key: string) => setValue(key, row[key]));
    setToUpdate(id);
  };

  const onCancelEdit = () => {
    reset();
    setToUpdate(undefined);
  };

  const onDelete = async (id: number) => {
    const result = await typeAdresseService.delete(id);

    setAdresseList((oldParamList: any) =>
      oldParamList.filter((param: any) => param.id != id)
    );

    return result;
  };

  const onSubmit = async (data: any) => {
    let result;

    if (toUpdate) {
      result = await typeAdresseService.update(data, toUpdate);

      setAdresseList((oldParamList: any) =>
        oldParamList.map((param: any) => {
          if (param.id == data.id) {
            return data;
          }

          return param;
        })
      );
    } else {
      result = await typeAdresseService.create(data);
      console.log(result);
      setAdresseList([...adresseList, result]);
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
            <th>Paramètre impression</th>
            <th colSpan={1}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {adresseList.map((elem: any) => (
            <tr>
              <td>{elem.id}</td>
              <td>{elem.nom}</td>
              <td>{getRelatedParams(elem.id)}</td>
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
          <label>Paramètre impression</label>
          <select {...register("param_impression")}>
            {paramList.map((p) => (
              <option>{p.nom}</option>
            ))}
          </select>
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
