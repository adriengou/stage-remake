import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import OuvertureCompte from "./pages/OuvertureCompte/OuvertureCompte";
import OutlookAuth from "./pages/OutlookAuth/OutlookAuth";
import Impression from "./pages/Impression/Impression";

const routes = {
  ouverture: <OuvertureCompte />,
  impression: <Impression />,
  outlook: <OutlookAuth />,
  redirect: <></>,
};

function App() {
  const router = () => {
    const pathname = window.location.pathname.split("/")[1];
    console.log(pathname);
    return (
      routes[pathname as keyof typeof routes] || (
        <h1>ERROR 404: Page not found.</h1>
      )
    );
  };

  return router();
}

export default App;
