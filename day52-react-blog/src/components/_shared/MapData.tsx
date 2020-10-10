import React from "react";
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';

interface MapDataProps {
  data: any[];
  Component: any;
}

export default function MapData({ data, Component }: MapDataProps) {

  const { isFetching } = useSelector(({ ui }: RootState) => ui);

  const isLoading = ():boolean => data.length && isFetching
  return (
    <>
      {data.map((item) => (
        <Component key={item.id} {...item} />
      ))}
      {isLoading && (
        <div className="full-page">
          <CircularProgress size={40} />
        </div>
      )}
    </>
  );
}
