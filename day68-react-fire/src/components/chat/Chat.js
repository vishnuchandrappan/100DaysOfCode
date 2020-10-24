import { Formik } from "formik";
import React from "react";
import Chats from "../chats/Chats";

const Chat = ({ user, initialValues, handleSubmit }) => {
  return (
    <div className="container">
      <h6 align="right">logged in as, {user.email}</h6>

      <Chats userId={user.uid} />

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting, values, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="chat_content"
                value={values.chat_content}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Type something..."
              />
              <button
                type="submit"
                disabled={isSubmitting || values.chat_content.length === 0}
              >
                {isSubmitting ? "..." : "Send"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Chat;
