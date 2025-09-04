"use client";
import { useState } from "react";
import "./chatLetter.css";
import Chat from "../../ui/chat/Chat";

export default function ChatLetter() {
  const [chatVisible, setChatVisible] = useState(false);

  return (
    <div className="main">
      <div className="mainbek">
        <button onClick={() => setChatVisible(true)} className="btn">
          Открыть письмо💌
        </button>
      </div>

      <Chat visible={chatVisible} onClose={() => setChatVisible(false)} />
    </div>
  );
}
