import React from "react";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function SubmitButton({ children = "Submit", onClick }: any) {
  const { isSubmitting } = useSelector((state: RootState) => state.ui);
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={isSubmitting}
      onClick={onClick}
    >
      {isSubmitting ? <CircularProgress /> : children}
    </Button>
  );
}
