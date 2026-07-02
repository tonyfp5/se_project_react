import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import ModalWithForm from "./components/ModalWithForm/ModalWithForm.jsx";
import WeatherCard from "./components/WeatherCard/WeatherCard.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
import { initialItems } from "./utils/mockData";
import { useWeather } from "./hooks/useWeather";
import { clothingRules } from "./utils/clothingRules";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState(initialItems);

  const { temperature, error } = useWeather();

  function handleAddClick() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleAddItem(newItem) {
    setItems([newItem, ...items]);
    handleCloseModal();
  }

  function handleLike(id) {
    setItems(
      items.map((item) =>
        item._id === id ? { ...item, liked: !item.liked } : item
      )
    );
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item._id !== id));
  }

  function getFilteredItems() {
    if (temperature === null) return items;

    const rule = clothingRules.find((r) => r.condition(temperature));

    if (!rule) return items;

    return items.filter((item) => rule.items.includes(item.type));
  }

  return (
    <div className="page">
      <Header onAddClick={handleAddClick} />

      <WeatherCard temperature={temperature} error={error} />

      <Main
        onAddClick={handleAddClick}
        items={getFilteredItems()}
        onLike={handleLike}
        onDelete={handleDelete}
      />

      {isModalOpen && (
        <ModalWithForm
          onClose={handleCloseModal}
          onAddItem={handleAddItem}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;