import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader } from "./Loader";

export const FetchData = ({ render, entity }) => {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${entity}`)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [entity]);

  return <>{loading ? <Loader /> : render(data)}</>;
};
