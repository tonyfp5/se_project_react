import { useState } from "react";
import "./AddItemForm.css";

function AddItemForm({ onClose, onAddItem }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [type, setType] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !imageUrl || !type) return;

    setIsSaving(true);

    setTimeout(() => {
      onAddItem({
        _id: Date.now().toString(),
        name,
        imageUrl,
        type,
        liked: false,
      });

      setName("");
      setImageUrl("");
      setType("");
      setIsSaving(false);
      onClose();
    }, 500);
  }

  return (
    <form className="modal__form" onSubmit={handleSubmit}>
      <input
        className="modal__input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="modal__input"
        type="url"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <select
        className="modal__input"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Select garment type</option>
        <option value="tshirt">T-Shirt</option>
        <option value="jacket">Jacket</option>
      </select>

      <button
        className="modal__submit"
        type="submit"
        disabled={!name || !imageUrl || !type || isSaving}
      >
        {isSaving ? "Saving..." : "Add"}
      </button>
    </form>
  );
}

export default AddItemForm;