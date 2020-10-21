import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import { auth } from "../../services/firebase";
import { db } from "../../services/firebase";

export default function ChatContainer() {
  const user = auth().currentUser;

  const [chats, setChats] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const fetchChats = () => {
    setLoading(true);
    setError("");
    try {
      db.ref("chats").on("value", (snapshot) => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });

        chats.sort((a, b) => {
          return a.timestamp - b.timestamp;
        });

        setChats(chats);
        setLoading(false);
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await db.ref("chats").push({
        content,
        timestamp: Date.now(),
        uid: user.uid,
      });
      setContent("");
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  }

  return (
    <Chat
      chats={chats}
      error={error}
      loading={loading}
      content={content}
      handleChange={handleChange}
      user={user}
      handleSubmit={handleSubmit}
    />
  );
}
