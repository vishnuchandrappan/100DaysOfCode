import React from "react";

export default function ChatCard({
  chat_content,
  uid,
  created_at,
  currentUserId,
}) {
  return (
    <div className={`chat ${uid === currentUserId ? "my-chat" : "other-chat"}`}>
      <div className="content">
        {uid !== currentUserId && <span className="user_details">{uid}</span>}
        <span className="text">{chat_content}</span>
      </div>
    </div>
  );
}
