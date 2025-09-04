"use client";
import { useState } from "react";
import ModalVideo from "../../ui/modalVideo/ModalVideo";

export default function MemoriesButton() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div>
      <div className="mainbek">
        <button className="btn" onClick={openModal}>
          Воспоминание 🎬
        </button>
      </div>

      <ModalVideo
        visible={modalVisible}
        onClose={closeModal} // передаем правильную функцию
         src="https://drive.google.com/file/d/1xjlx3K0PRc6vdxXvDxxiPIQBZNaFF7qN/preview"
      />
    </div>
  );
}
