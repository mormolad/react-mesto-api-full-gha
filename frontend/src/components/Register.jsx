import Header from './Header';
import Footer from './Footer';
import AuthPage from './AuthPage';
import InfoTooltip from './InfoTooltip';
import auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Register(props) {
  const [isStatusAuthPopupOpen, setIsStatusAuthPopupOpen] = useState(false);
  const [titlePopup, setTitlePopup] = useState('');
  const [registerStatus, setRegisterStatus] = useState(false);
  const navigate = useNavigate();
  function handleSubmit({ email, password }) {
    // Передаём значения управляемых компонентов во внешний обработчик
    auth
      .requestUser({ email, password, endPoint: 'signup' })
      .then((res) => {
        setTitlePopup('Вы успешно зарегистрировались!');
        setRegisterStatus(true);
      })
      .catch((err) => {
        setTitlePopup('Что-то пошло не так! Попробуйте ещё раз.');
        setRegisterStatus(false);
        console.log(err);
      })
      .finally(() => {
        setIsStatusAuthPopupOpen(true);
      });
  }
  const closePopup = () => {
    setIsStatusAuthPopupOpen(false);
    navigate('/', { replace: true });
  };

  return (
    <>
      <Header title={'Войти'} route={'sign-in'} />
      <AuthPage
        title={'Регистрация'}
        buttonText={'Зарегистрироваться'}
        subTextButtonElement={
          <p className="not-login-page__sub-text-button">
            Уже зарегистрированы?{' '}
            <Link to="/sign-in" className="not-login-page__sub-text-button">
              Войти
            </Link>
          </p>
        }
        name={'register'}
        onSubmit={handleSubmit}
      />
      <Footer />
      <InfoTooltip
        title={titlePopup}
        isOpen={isStatusAuthPopupOpen}
        onClose={closePopup}
        registerStatus={registerStatus}
      />
    </>
  );
}

export default Register;
