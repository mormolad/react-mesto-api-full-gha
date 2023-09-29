import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from 'react';
import useForm from '../hooks/useForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, setCurentUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  //управление полями имя и род занятия
  React.useEffect(() => {
    setValues({ ...values, name: currentUser.name, about: currentUser.about });
  }, [currentUser, isOpen]);

  //обработчик кнопки Сохранить в форме
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: values.name,
      about: values.about,
    });
  }
  const { values, handleChange, setValues } = useForm({});

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-user"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__form-section">
        <input
          minLength="2"
          maxLength="200"
          className="popup__field"
          id="input-user-name"
          name="name"
          placeholder="Имя автора"
          onChange={handleChange}
          value={values.name ?? ''} // что бы компонент сразу был управляемым
          required
        />
        <span className="popup__message-error"></span>
      </div>
      <div className="popup__form-section">
        <input
          type="text"
          className="popup__field"
          id="input-user-employment"
          name="about"
          minLength="2"
          maxLength="200"
          placeholder="Род деятельности"
          onChange={handleChange}
          value={values.about ?? ''} // что бы компонент сразу был управляемым
          required
        />
        <span className="popup__message-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
