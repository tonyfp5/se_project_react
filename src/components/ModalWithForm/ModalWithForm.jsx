import "./ModalWithForm.css";
import closeIcon from "../../assets/close.png";

function ModalWithForm({
  name,
  title,
  buttonText,
  children,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${
        isOpen ? "modal_opened" : ""
      }`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>

        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img
            src={closeIcon}
            alt="Close"
            className="modal__close-icon"
          />
        </button>

        <form
          className="modal__form"
          name={name}
          onSubmit={onSubmit}
        >
          {children}

          <button
            type="submit"
            className="modal__submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;