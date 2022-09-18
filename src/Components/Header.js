import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({ search, setSearch }) => {
  return (
    <header>
      <h1>Rentatouille</h1>
      <h2>Rent a Tool</h2>
      <nav>
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>Search</label>
            <input
                id = "search"
                type="text"
                placeholder='Search for an item'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/login">Login/Sign Up</Link>
            </li>
            <li>
                <Link to="/logout">Logout</Link>
            </li>
            <li>
                <Link to="/user/:id">My Profile</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
