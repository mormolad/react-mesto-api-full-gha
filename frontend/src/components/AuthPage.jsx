import React from 'react';

function AuthPage({ title, buttonText, subTextButtonElement, name, onSubmit }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //обработка поля имени
  function handleChangeName(e) {
    setEmail(e.target.value);
  }
  // обработака поля рода деятельности
  function handleChangeDescription(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ email, password });
  }

  return (
    <div className="not-login-page">
      <h1 className="not-login-page__title">{title}</h1>
      <form
        className={`not-login-page__content not-login-page__content_${name}`}
        name={`form-not-login-page-${name}`}
        id={`content-not-login-page-${name}`}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="not-login-page__form-section">
          <input
            type="text"
            className="not-login-page__field"
            id="input-email"
            name="inputUserEmail"
            minLength="2"
            maxLength="40"
            placeholder="Email"
            onChange={handleChangeName}
            value={email ?? ''} // что бы компонент сразу был управляемым
            required
          />
          <span className="not-login-page__message-error"></span>
        </div>
        <div className="not-login-page__form-section">
          <input
            type="password"
            className="not-login-page__field"
            id="input-password"
            name="inputPassword"
            minLength="2"
            maxLength="200"
            placeholder="Пароль"
            onChange={handleChangeDescription}
            value={password ?? ''} // что бы компонент сразу был управляемым
            required
          />
          <span className="popup__message-error"></span>
        </div>
        <button
          type="submit"
          title={title}
          className="not-login-page__submit"
          id="button-submit-user-data"
        >
          {buttonText}
        </button>
        {subTextButtonElement}
      </form>
    </div>
  );
}

export default AuthPage;
