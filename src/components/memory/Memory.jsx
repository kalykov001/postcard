"use client";
import { useState } from "react";
import "./memory.css";
import { RiMemoriesLine } from "react-icons/ri";

export default function Memory({ onClose }) {
  const [open, setOpen] = useState(false);
const isActify = true 
  return (
    <div className="page">
      {/* Кнопка */}
      <button className="button-green" onClick={() => setOpen(true)}>
        Открыть воспоминание<RiMemoriesLine/>
      </button>

      {/* Модальное окно */}
      {open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={onClose}>Закрыть ❌</button>
            <h2>Наши воспоминания</h2>
            <p>Давай окунёмся всего на пару минут в наши воспоминания…</p>
          </div>
        </div>
      )}
    </div>
  );
}
