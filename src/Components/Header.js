import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Header = ({ 
    isLoggedIn, handleLoginClick, handleLogoutClick, user 
}) => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Rent A Tool Logo" id="logo"></img>
      </Link>
      <nav>
        <aside id="navButtons">
          { isLoggedIn ? 
              <button onClick={handleLogoutClick}>
                <Link to="/">Logout</Link>
              </button>
              : 
              <button onClick={handleLoginClick}>
                <Link to="/">login</Link>
              </button>
          }
          {
            isLoggedIn &&
              <button>
                <Link to={`/users/${user.id}`}>
                  Dashboard
                </Link>
              </button>
          }
        </aside>
      </nav>
    </header>
  )
}

export default Header
