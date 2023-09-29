import logoHeader from '../images/logo-header.svg';
import { Link } from 'react-router-dom';
function HeaderLogout({ title, route }) {
  return (
    <header className="header header_logout">
      <img src={logoHeader} className="header__logo" alt="логотип сайта" />
      <Link to={`../${route}`} className="header__nav-link">
        {title}
      </Link>
    </header>
  );
}

export default HeaderLogout;
