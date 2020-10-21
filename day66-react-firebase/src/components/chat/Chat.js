import React from "react";

const Chat = ({
  chats,
  error,
  loading,
  content,
  handleChange,
  user,
  handleSubmit,
}) => {
  return (
    <div className="container">
      {loading ? <span>Loading...</span> : ""}
      <div className="chats">
        {chats.map((chat) => {
          return (
            <div
              className={`chat-bubble ${
                user.uid === chat.uid ? "current-user" : ""
              }`}
            >
              <span className="content">{chat.content}</span>
              <span className="timestamp">{chat.timestamp}</span>
            </div>
          );
        })}
      </div>
      <div className="new-chat">
        <form class="chat-form" onSubmit={handleSubmit}>
          {error && <span className="error-msg">{error}</span>}
          <textarea
            className="form-control"
            value={content}
            onChange={handleChange}
          ></textarea>
          <div className="btn-container">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <div className="user-details">
        <span>Logged in as : {user.email}</span>
      </div>
    </div>
  );
};

export default Chat;
