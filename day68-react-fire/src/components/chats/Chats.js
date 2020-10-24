import React from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import ChatCard from "./ChatCard";

export default function Chats({ userId }) {
  const documentReference = useFirestore().collection("chats");
  const chats = useFirestoreCollectionData(documentReference);

  return (
    <div className="chats">
      {chats.map((chat) => (
        <ChatCard {...chat} key={chat.created_at} currentUserId={userId} />
      ))}
    </div>
  );
}
