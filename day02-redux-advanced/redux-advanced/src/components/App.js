import React, { useEffect } from "react";
import Spinner from "./Spinner";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../redux/actions";

const Content = () => {
  const orderInProcess = useSelector(({ ui }) => ui.orderInProcess);
  return orderInProcess ? <OrderBook /> : <Books />;
};

export default function store({ getBooks, isLoading }) {
  const isLoading = useSelector(({ ui }) => ui.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="container app__container">
      <h1>Learning Redux Patterns</h1>

      {isLoading && <Spinner />}

      <Content />
    </div>
  );
}
