import * as msal from "@azure/msal-browser";
import { MICROSOFT_GRAPH } from "../../../common/environment";

export const msalConfig = {
  auth: MICROSOFT_GRAPH,
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const msalInstance = new msal.PublicClientApplication(msalConfig);
export const loginRequest = {
  scopes: ["User.Read", "Calendars.ReadWrite"],
};
