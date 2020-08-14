import React, { useState } from "react";
import { buyCake } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
const CakeContainerWithHooks = () => {
  const numberOfCakes = useSelector(
    ({ cake: { numberOfCakes } }) => numberOfCakes
  );
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);

  return (
    <div className="container">
      <div className="menu align-center">
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(buyCake(number));
          }}
        >
          buy {number} cake! with hooks
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
