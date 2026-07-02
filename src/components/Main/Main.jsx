import ItemCard from "../ItemCard/ItemCard.jsx";
import "./Main.css";

function Main({ onAddClick, items, onLike, onDelete }) {
  return (
    <main className="main">
      <div className="main__header">
        <p className="main__text">Today is a good day to wear:</p>

        <button className="main__add-btn" onClick={onAddClick}>
          + Add clothes
        </button>
      </div>

      <section className="cards">
        {items.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onLike={() => onLike(item._id)}
            onDelete={() => onDelete(item._id)}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;