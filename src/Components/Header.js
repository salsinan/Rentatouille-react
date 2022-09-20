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
          { isLoggedIn ?
            <div id="navButtons">
              <button onClick={handleLogoutClick}>
                <Link to="/">Logout</Link>
              </button>
              <button>
                <Link to={`/users/${user.id}`}>
                  Dashboard
                </Link>
              </button>
            </div>
              : 
            <div id="navButtons">
              <button onClick={handleLoginClick}>
                <Link to="/">login</Link>
              </button>
            </div>
          }
      </nav>
    </header>
  )
}

export default Header
