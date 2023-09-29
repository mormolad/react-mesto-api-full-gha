import Header from './Header';
import Footer from './Footer';
import AuthPage from './AuthPage';
import auth from '../utils/auth';
import React from 'react';

function Login({ setLoggedIn, loggedIn, setEmailUser }) {
  function handleSubmit({ email, password }) {
    auth
      .requestUser({ email, password, endPoint: 'signin' })
      .then((data) => {
        localStorage.setItem('jwt', data.message);
        setEmailUser(email);
        setLoggedIn(true);
      })
      .catch(console.error);
  }

  return (
    <>
      <Header title={'Регистрация'} loggedIn={loggedIn} route={'sign-up'} />
      <AuthPage
        title={'Вход'}
        buttonText={'Войти'}
        subTextButtonElement={''}
        name={'login'}
        onSubmit={handleSubmit}
      />
      <Footer />
    </>
  );
}

export default Login;
