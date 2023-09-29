import PopupWithForm from './PopupWithForm';
import React from 'react';
import useForm from '../hooks/useForm';

function AddPlacePopup({ isOpen, onClose, onAddCard }) {
  //name & link for api

  const { values, handleChange, setValues } = useForm({});
  //очищаем поля формы при открытии попап
  React.useEffect(() => {
    if (!isOpen) return;
    setValues({});
  }, [isOpen]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddCard({
      name: values.name,
      link: values.link,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__form-section">
        <input
          type="text"
          className="popup__field"
          id="input-place-name"
          name="name"
          placeholder="Название нового места"
          minLength="2"
          maxLength="30"
          onChange={handleChange}
          value={values.name ?? ''}
          required
        />
        <span className="popup__message-error"></span>
      </div>
      <div className="popup__form-section">
        <input
          type="url"
          className="popup__field"
          id="input-url-image-place"
          name="link"
          placeholder="URL картинки"
          onChange={handleChange}
          value={values.link ?? ''}
          required
        />
        <span className="popup__message-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
