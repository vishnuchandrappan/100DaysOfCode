import React from "react";
import { useFirestore, useUser } from "reactfire";
import Chat from "./Chat";

export default function ChatContainer() {
  const user = useUser();
  const fireStore = useFirestore().collection("chats");

  const initialValues = {
    chat_content: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    await fireStore.add({
      ...values,
      created_at: Date.now(),
      uid: user.uid,
    });
    setSubmitting(false);
    resetForm();
  };

  return (
    <Chat
      user={user}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  );
}
