import "./ItemCard.css";

function ItemCard({ item, onLike, onDelete, onCardClick }) {
  return (
    <div className="card">
      <h2 className="card__name">{item.name}</h2>

      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={onCardClick}
      />

      <div className="card__buttons">
        <button
          className={`card__like ${item.liked ? "card__like_active" : ""}`}
          onClick={onLike}
          type="button"
        >
          ♥
        </button>

        <button className="card__delete" onClick={onDelete} type="button">
          🗑️
        </button>
      </div>
    </div>
  );
}

export default ItemCard;