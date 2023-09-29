import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import logoHeader from '../images/logo-header.svg';
import closeButton from '../images/closeIcon.png';
import burgerButton from '../images/burgerIcon.png';

function HeaderLogin({ setLoggedIn, emailUser }) {
  const isSizePhone = useMediaQuery({ query: '(max-width: 1023px)' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //обработка кнопки Выйти в шапке сайта
  function handleButtonExit() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
  }

  return (
    <header className="header">
      {isSizePhone ? (
        <>
          <div
            className={`header__menu ${
              isMenuOpen === true ? 'header__menu_open' : ' '
            }`}
          >
            <p className="header__email">{emailUser}</p>
            <p className="header__nav-link" onClick={handleButtonExit}>
              Выйти
            </p>
          </div>
          <div className="header__main-header">
            <img
              src={logoHeader}
              className="header__logo"
              alt="логотип сайта"
            />
            <button className="header__button-menu" onClick={handleClick}>
              {isMenuOpen ? (
                <img
                  src={closeButton}
                  alt="кнопка бургер меню"
                  className="header__img-menu-button"
                />
              ) : (
                <img
                  src={burgerButton}
                  alt="кнопка бургер меню"
                  className="header__img-menu-button"
                />
              )}
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={logoHeader} className="header__logo" alt="логотип сайта" />
          <p className="header__email">{emailUser}</p>
          <p className="header__nav-link" onClick={handleButtonExit}>
            {' '}
            Выйти
          </p>
        </>
      )}
    </header>
  );
}

export default HeaderLogin;
