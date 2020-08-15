import React, { useEffect } from "react";
import Spinner from "./Spinner";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../redux/actions";
import Routes from "../routes/Routes";


export default function App() {
  const isLoading = useSelector(({ ui }) => ui.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="container app__container">
      <h1>Learning Redux Patterns</h1>

      {isLoading && <Spinner />}

      <Routes />
    </div>
  );
}
