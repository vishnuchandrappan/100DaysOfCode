import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";

interface MapDataProps {
  data: any[];
  Component: any;
}

export default function MapData({ data, Component }: MapDataProps) {
  const { isSubmitting } = useSelector(({ ui }: RootState) => ui);

  return (
    <>
      {data.map((item) => (
        <Component key={item.id} {...item} />
      ))}
      {isSubmitting && (
        <div className="full-page">
          <CircularProgress color="secondary" size={40} />
        </div>
      )}
    </>
  );
}
