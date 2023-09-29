import HeaderLogin from './HeaderLogin';
import HeaderLogout from './HeaderLogout';

function Header({ loggedIn, setLoggedIn, emailUser, title, route }) {
  return (
    <>
      {loggedIn ? (
        <HeaderLogin setLoggedIn={setLoggedIn} emailUser={emailUser} />
      ) : (
        <HeaderLogout setLoggedIn={setLoggedIn} title={title} route={route} />
      )}
    </>
  );
}

export default Header;
