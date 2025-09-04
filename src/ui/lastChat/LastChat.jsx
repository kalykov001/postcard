"use client";
import { useState, useEffect } from "react";
import "./lastChat.css";

export default function LastChat({ visible, onClose }) {
  const [messages, setMessages] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [showTyping, setShowTyping] = useState(false);

  const baynurMessage =
    "Жаным, когда ты рядом, мир становится ярче, а сердце наполняется теплом. Будь всегда со мной, я люблю тебя всем сердцем.";
  const begimayMessage = "Жаным, ты — моё всё, и твои слова согрели мою душу. Я хочу быть с тобой в каждом мгновении. Я люблю тебя.";

  useEffect(() => {
    if (!visible) return;

    setMessages([{ sender: "Байэл", text: baynurMessage }]);
    setCurrentText("");
    setShowTyping(true);

    let index = 0;
    const typingInterval = setInterval(() => {
      setCurrentText(begimayMessage.slice(0, index + 1));
      index++;
      if (index === begimayMessage.length) {
        clearInterval(typingInterval);
        setMessages((prev) => [
          ...prev,
          { sender: "Медина💗", text: begimayMessage },
        ]);
        setShowTyping(false);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="chat-overlay">
      {/* Крестик вынесен за пределы контейнера */}
      <button className="close-btn" onClick={onClose}>
        ✖️
      </button>

      <div className="chat-container">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${
              msg.sender === "Байэл" ? "chat-right" : "chat-left"
            }`}
          >
            <p className="person">{msg.sender}</p>
            <div className="bubble">{msg.text}</div>
          </div>
        ))}

        {showTyping && (
          <div className="chat-message chat-left">
            <p className="person">Медина💗...</p>
            <div className="bubble">{currentText || "…"}</div>
          </div>
        )}
      </div>
    </div>
  );
}

function createHeart(e) {
  const button = e.currentTarget;
  const heart = document.createElement('span');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  
  // Позиция сердечка относительно кнопки
  const rect = button.getBoundingClientRect();
  heart.style.left = (e.clientX - rect.left - 12) + 'px';
  heart.style.top = (e.clientY - rect.top - 12) + 'px';

  button.appendChild(heart);

  // Удаляем сердечко после анимации
  setTimeout(() => {
    heart.remove();
  }, 1000);
}