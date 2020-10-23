import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="full-page">
      <Loader />
    </div>
  );
}

export function Loader() {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
}
