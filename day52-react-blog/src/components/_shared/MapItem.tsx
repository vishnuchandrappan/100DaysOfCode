import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import { CircularProgress } from "@material-ui/core";

interface MapItemProps {
  data: any[];
  Component: any;
}

export default function MapItem({ data, Component }: MapItemProps) {
  const { isSubmitting } = useSelector(({ ui }: RootState) => ui);

  return (
    <>
      {data.map((value) => (
        <Component key={value} value={value} />
      ))}
      {(data.length === 0 && isSubmitting) && <CircularProgress color="secondary" size={40} />}
    </>
  );
}
