import { HOST, PORT } from "./../../../common/environment";

const request = async (
  path: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  body?: any
) => {
  const options: any = {
    method,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${HOST}:${PORT}${path}`, options);
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
};

export const paramImpressionService = {
  list: () => request("/paramimpression", "GET"),

  create: (data: any) => request("/paramimpression", "POST", data),

  getByadresse: (id: number) => request("/paramimpression/" + id, "GET"),

  update: (id: number, data: any) =>
    request("/paramimpression/" + id, "PUT", data),

  delete: (id: number) => request("/paramimpression/" + id, "DELETE"),
};

export const typeAdresseService = {
  list: () => request("/typeadresse", "GET"),

  create: (data: any) => request("/typeadresse", "POST", data),

  update: (id: number, data: any) => request("/typeadresse/" + id, "PUT", data),

  delete: (id: number) => request("/typeadresse/" + id, "DELETE"),
};

export const adresseImpressionService = {
  list: () => request("/adresseimpression", "GET"),

  getByadresse: (id: number) => request("/adresseimpression/" + id, "GET"),

  create: (data: any) => request("/adresseimpression", "POST", data),

  update: (id: number, data: any) =>
    request("/adresseimpression/" + id, "PUT", data),

  delete: (id: number) => request("/adresseimpression/" + id, "DELETE"),
};
