import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import CircularProgress from "@material-ui/core/CircularProgress";

interface SubmitButtonProps {
  children: string;
  onClick: () => void;
  resetForm: () => void;
  setSubmitting: (value: boolean) => void;
  submitting: boolean;
}

export default function SubmitButton({
  children = "Submit",
  onClick,
  setSubmitting,
  submitting,
  resetForm,
}: SubmitButtonProps) {
  const { isSubmitting } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    if (!isSubmitting) {
      setSubmitting(false);
      resetForm();
    }
  }, [isSubmitting, setSubmitting, resetForm]);

  return (
    <Button
      variant="contained"
      color="primary"
      disabled={isSubmitting}
      onClick={onClick}
    >
      {submitting ? <CircularProgress color="secondary" size={20} /> : children}
    </Button>
  );
}
