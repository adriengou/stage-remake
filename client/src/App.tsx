import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const routes = {
  "/ouverture": <></>,
  "/paramadresse": <></>,
};

function App() {
  const router = () => {
    const pathname = window.location.pathname;
    return (
      routes[pathname as keyof typeof routes] || (
        <h1>ERROR 404: Page not found.</h1>
      )
    );
  };

  return router();
}

export default App;
