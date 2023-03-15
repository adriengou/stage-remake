import React from "react";
import "./Impression.css";
import ParamImpression from "../../components/ParamImpression/ParamImpression";
import TypeAdresse from "../../components/TypeAdreesse/TypeAdresse";

export default function Impression() {
  return (
    <div className="impression">
      <ParamImpression />
      <TypeAdresse />
    </div>
  );
}
