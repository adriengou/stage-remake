import React from "react";
import "./OutlookAuthButton.css";
import { loginRequest } from "../../services/microsoftGraphAuth";
import { PopupRequest } from "@azure/msal-browser/dist/request/PopupRequest";
import { useMsal } from "@azure/msal-react/";

export default function OutlookAuthButton(props: any) {
  const { instance } = useMsal();

  const handleLogin = async () => {
    try {
      const { accessToken } = await instance.loginPopup(loginRequest);
      console.warn(accessToken);
      props.setAccessToken(accessToken);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button onClick={handleLogin} className="outlook-auth-button">
        Sign in
      </button>
    </>
  );
}
