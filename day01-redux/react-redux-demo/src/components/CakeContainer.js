import React from "react";
import { buyCake } from "../redux/cakeActions";
import { connect } from "react-redux";
const CakeContainer = ({ numberOfCakes, buyCake }) => {
  return (
    <div className="app">
      <h1>Cake App</h1>
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
    </div>
  );
};

const mapStateToProps = ({ numberOfCakes }) => {
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
