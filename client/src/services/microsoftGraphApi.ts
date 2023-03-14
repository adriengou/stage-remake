const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me", //e.g. https://graph.microsoft.com/v1.0/me
};

const callMsGraph = async (
  accessToken: string,
  path: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  body?: any
) => {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options: any = {
    method,
    headers,
  };

  if (body) {
    options.body = body;
  }

  try {
    const response = await fetch(graphConfig.graphMeEndpoint + path, options);
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
};

export const msGraphService = {
  list: (accessToken: string) => callMsGraph(accessToken, "/events", "GET"),

  create: (accessToken: string, id: string, event: any) =>
    callMsGraph(accessToken, "/events/" + id, "POST", event),

  update: (accessToken: string, id: string, event: any) =>
    callMsGraph(accessToken, "/events/" + id, "PATCH", event),

  delete: (accessToken: string, id: string) =>
    callMsGraph(accessToken, "/events/" + id, "DELETE"),
};
