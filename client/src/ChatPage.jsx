import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="60ebb83e-1d08-4950-9b5e-6f5407ddd5ef"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatPage;
