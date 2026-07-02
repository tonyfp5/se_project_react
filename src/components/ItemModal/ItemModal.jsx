import "./ItemModal.css";

function ItemModal({ item, onClose }) {
  if (!item) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="item-modal" onClick={(evt) => evt.stopPropagation()}>
        <button className="item-modal__close" onClick={onClose} type="button">
          X
        </button>

        <img className="item-modal__image" src={item.imageUrl} alt={item.name} />

        <div className="item-modal__footer">
          <h2 className="item-modal__name">{item.name}</h2>
          <p className="item-modal__weather">Weather: {item.type}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;