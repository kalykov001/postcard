"use client";
import { useState, useEffect } from "react";
import "./chat.css";

export default function Chat({ visible, onClose }) {
  const [message, setMessage] = useState("");
  const [showTyping, setShowTyping] = useState(false); // для левого сообщения

  const fullMessage =
    "Жаным, когда ты рядом, мир становится ярче, а сердце наполняется теплом. Будь всегда со мной, я люблю тебя всем сердцем.";

  useEffect(() => {
    if (!visible) return;
    setMessage("");
    setShowTyping(false);

    let index = 0;
    const interval = setInterval(() => {
      setMessage(fullMessage.slice(0, index + 1));
      index++;
      if (index === fullMessage.length) {
        clearInterval(interval);
        // После завершения печати показываем три точки слева
        setTimeout(() => setShowTyping(true), 500); // можно задержку 0.5 сек
      }
    }, 100);

    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="chat-overlay">
      <button className="close-btn" onClick={onClose}>
        ✖️
      </button>
      <div className="chat-container">
        <div className="chat-message chat-right">
          <p className="person">Байэл...</p>
          <div className="bubble">{message}</div>
        </div>

        <div className="chat-message chat-left">
          <p className="person"> {showTyping ? "Медина💗..." : ""}</p>
          <div className={showTyping ? "bubble typing person" : ""}>
            {showTyping ? "…" : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
