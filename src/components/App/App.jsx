import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import "./App.css";
import {
  coordinates,
  API_KEY,
  defaultClothingItems,
} from "../../utils/constants";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";

import "./App.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: {
      F: 999,
      C: 999,
    },
    city: "",
    condition: "",
    isDay: true,
  });

  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
 const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

 const handleToggleSwitchChange = (unit) => {
   setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
 };
 

  const handleCardClick = (item) => {
    setSelectedCard(item);
    setActiveModal("preview");
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCloseActiveModal = () => {
    setActiveModal("");
    setSelectedCard({});
  };

  useEffect(() => {
    getWeather(coordinates, API_KEY)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((error) => {
        console.error("Failed to get weather data:", error);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);
 
  return (
    <CurrentTemperatureUnitContext.provider value={{currentTemperatureUnit, handleToggleSwitchChange}}> 
    <div className="page"> 
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />

        <Main
          weatherData={weatherData}
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
          
        />
      </div>

      <ModalWithForm
        name="add-garment"
        buttonText="Add garment"
        title="New garment"
        isOpen={activeModal === "add-garment"}
        onClose={handleCloseActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name
          <input
            type="text"
            id="name"
            name="name"
            className="modal__input"
            placeholder="Name"
            required
          />
        </label>

        <label htmlFor="imageUrl" className="modal__label">
          Image
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            className="modal__input"
            placeholder="Image URL"
            required
          />
        </label>

        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>

          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              type="radio"
              id="hot"
              name="weather"
              value="hot"
              className="modal__radio-input"
              required
            />
            <span className="modal__custom-radio" />
            Hot
          </label>

          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              type="radio"
              id="warm"
              name="weather"
              value="warm"
              className="modal__radio-input"
            />
            <span className="modal__custom-radio" />
            Warm
          </label>

          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              type="radio"
              id="cold"
              name="weather"
              value="cold"
              className="modal__radio-input"
            />
            <span className="modal__custom-radio" />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>

      <ItemModal
        isOpen={activeModal === "preview"}
        card={selectedCard}
        onClose={handleCloseActiveModal}
      />

      <Footer />
    </div>
    </CurrentTemperatureUnitContext.provider>
  );
};

export default App;
