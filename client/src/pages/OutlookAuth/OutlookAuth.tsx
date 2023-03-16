import React from "react";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "../../services/microsoftGraphAuth";
import OutlookAuthButton from "../../components/OutlookAuthButton/OutlookAuthButton";
import OutlookViewer from "../../components/OutlookViewer/OutlookViewer";

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
