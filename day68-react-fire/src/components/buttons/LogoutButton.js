import React from "react";
import { useAuth } from "reactfire";

export default function LogoutButton({ children = "Logout" }) {
  const auth = useAuth();
  return (
    <button
      onClick={() => {
        auth.signOut();
      }}
    >
      {children}
    </button>
  );
}
