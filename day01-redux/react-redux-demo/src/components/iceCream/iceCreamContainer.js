import React from "react";
import { buyIceCream } from "../../redux/actions";
import { connect } from "react-redux";
export function iceCreamContainer({ buyIceCream, numberOfIceCreams }) {
  return (
    <div className="app iceCream__app">
      <div className="container iceCream__container">
        <div className="menu align-center iceCream__menu">
          <button
            onClick={() => {
              buyIceCream();
            }}
          >
            buy 1 ice Cream!
          </button>
        </div>

        <div className="status align-center iceCream__status">
          <h2>
            Ice Creams in Stock : <span>{numberOfIceCreams}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ iceCream: { numberOfIceCreams } }) => {
  return {
    numberOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer);
