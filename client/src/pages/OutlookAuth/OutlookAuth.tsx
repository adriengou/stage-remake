import React from "react";
import OutlookAuthButton from "../../components/OutlookAuthButton/OutlookAuthButton";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../../services/microsoftGraphAuth";
import OutlookViewer from "../../components/OutlookViewer/OutlookViewer";

const msalInstance = new PublicClientApplication(msalConfig);

export default function OutlookAuth() {
  const [accessToken, setAccessToken] = React.useState("");

  React.useEffect(() => {
    console.warn(accessToken);
  }, [accessToken]);

  return (
    <div>
      <MsalProvider instance={msalInstance}>
        <OutlookAuthButton setAccessToken={setAccessToken} />
        <OutlookViewer accessToken={accessToken} />
      </MsalProvider>
    </div>
  );
}
