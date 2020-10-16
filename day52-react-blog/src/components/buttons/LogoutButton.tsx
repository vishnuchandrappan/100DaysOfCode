import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import { logoutRequest } from "../../redux/actions/auth";

export default function LogoutButton({ children = "Logout" }: any) {
  const dispatch = useDispatch();
  const { isSubmitting } = useSelector((state: RootState) => state.ui);

  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={() => {
        dispatch(logoutRequest());
      }}
    >
      {isSubmitting ? (
        <CircularProgress color="secondary" size={20} />
      ) : (
        children
      )}
    </Button>
  );
}
