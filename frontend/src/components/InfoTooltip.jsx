import React from 'react';

function InfoTooltip({ title, isOpen, onClose, registerStatus }) {
  //установка слушателя для закрытия попапа по кнопке esc и последущее его удаление при закрытии
  React.useEffect(() => {
    if (!isOpen) return;
    function clickEsc(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', clickEsc);
    return () => document.removeEventListener('keydown', clickEsc);
  }, [isOpen, onClose]);

  //закрыть попап при клике по оверлею
  function clickOverley(evt) {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  }

  return (
    <div
      className={`popup ${isOpen === true ? 'popup_enable' : ' '}`}
      id={`popupStatusRegister`}
      title="модальное окно статуса регистрации"
      onClick={clickOverley}
    >
      <div className={'popup__content popup__content_register'}>
        <div
          className={`popup__image-register ${
            registerStatus
              ? 'popup__image-register_good'
              : 'popup__image-register_bad'
          }`}
        />
        <h2 className="popup__title_register">{title}</h2>
        <button
          type="button"
          title="закрыть модальное окно"
          className="popup__close-popup"
          id="button-close-popup-edit-user"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
