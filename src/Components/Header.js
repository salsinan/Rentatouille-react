import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Rentatouille</h1>
      <h2>Rent a Tool</h2>
      <nav>
        <form>
            <label htmlFor='search'>Search</label>
            <input 
                type="text"
                placeholder='Search for an item'
            />
        </form>
        <ul>
            <li key="home">
                <Link to="/">Home</Link>
            </li>
            <li key="about">
                <Link to="/about">About</Link>
            </li>
            <li key="login">
                <Link to="/login">Login/Sign Up</Link>
            </li>
            <li key="logout">
                <Link to="/logout">Logout</Link>
            </li>
            <li key="profile">
                <Link to="/user/:id">My Profile</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
