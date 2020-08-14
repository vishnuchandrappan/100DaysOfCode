import React from "react";
import { buyCake } from "../redux/cakeActions";
import { useSelector, useDispatch } from "react-redux";
const CakeContainerWithHooks = () => {
  const numberOfCakes = useSelector(({ numberOfCakes }) => numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="menu align-center">
        <button
          onClick={() => {
            dispatch(buyCake());
          }}
        >
          buy 1 cake! with hooks
        </button>
      </div>

      <div className="status align-center">
        <h2>
          Cakes in Stock : <span>{numberOfCakes}</span>
        </h2>
      </div>
    </div>
  );
};

export default CakeContainerWithHooks;
