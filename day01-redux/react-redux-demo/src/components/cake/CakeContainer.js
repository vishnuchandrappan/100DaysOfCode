import React from "react";
import { buyCake } from "../../redux/actions";
import { connect } from "react-redux";
import CakeContainerWithHooks from "./CakeContainerWithHooks";
const CakeContainer = ({ numberOfCakes, buyCake }) => {
  return (
    <div className="app">
      <div className="container">
        <div className="menu align-center">
          <button
            onClick={() => {
              buyCake();
            }}
          >
            buy 1 cake!
          </button>
        </div>

        <div className="status align-center">
          <h2>
            Cakes in Stock : <span>{numberOfCakes}</span>
          </h2>
        </div>
      </div>
      <CakeContainerWithHooks />
    </div>
  );
};

const mapStateToProps = ({ cake: { numberOfCakes } }) => {
  return {
    numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
