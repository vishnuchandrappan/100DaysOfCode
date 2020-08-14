import React from "react";
import CakeContainer from "./cake/CakeContainer";
import IceCreamContainer from "./iceCream/iceCreamContainer";
export default function AppContainer() {
  return (
    <div className="app__container">
      <h1>Cake App</h1>
      <div className="apps">
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </div>
  );
}
