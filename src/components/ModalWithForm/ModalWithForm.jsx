import { useEffect } from "react";
import AddItemForm from "../AddItemForm/AddItemForm.jsx";
import "./ModalWithForm.css";

function ModalWithForm({ onClose, onAddItem }) {
  useEffect(() => {
    function handleEscape(evt) {
      if (evt.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal__content">
        <button
          className="modal__close"
          onClick={onClose}
        >
          X
        </button>

        <h2>Add Garment</h2>

        <AddItemForm
          onClose={onClose}
          onAddItem={onAddItem}
        />
      </div>
    </div>
  );
}

export default ModalWithForm;
