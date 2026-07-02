import "./Header.css";

function Header({ onAddClick }) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__logo">WTWR</h1>

        <p className="header__date">
          {currentDate}
        </p>
      </div>

      <button
        className="header__add-btn"
        onClick={onAddClick}
      >
        + Add Clothes
      </button>
    </header>
  );
}

export default Header;