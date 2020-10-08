import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function SubmitButton({
  children = "Submit",
  onClick,
  setSubmitting,
  submitting,
}: any) {
  const { isSubmitting } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    if (!isSubmitting) {
      setSubmitting(false);
    }
  }, [isSubmitting, setSubmitting]);

  return (
    <Button
      variant="contained"
      color="primary"
      disabled={isSubmitting}
      onClick={onClick}
    >
      {submitting ? <CircularProgress size="20" /> : children}
    </Button>
  );
}
