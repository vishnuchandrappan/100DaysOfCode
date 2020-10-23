import React from "react";
import { useUser } from "reactfire";
import Chat from "./Chat";

export default function ChatContainer() {
  const user = useUser();

  return <Chat user={user.email} />;
}
