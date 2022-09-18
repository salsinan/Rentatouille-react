import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Profile from './Components/Profile';

function App() {
  const [items, setItems] = useState([
    {
      "id": 1,
      "user_id": 1,
      "photo": "https://via.placeholder.com/600/92c952",
      "category": "garden",
      "itemTitle": "lawnmower",
      "itemBody": "manual, lightweight lawnmower",
      "price": 10
    },
    {
      "id": 2,
      "user_id": 3,
      "photo": "https://via.placeholder.com/600/92c952",
      "category": "home",
      "itemTitle": "vacuum",
      "itemBody": "cordless BRAND vacuum cleaner in perfect condition",
      "price": 5
    },
    {
      "id": 3,
      "user_id": 2,
      "photo": "https://via.placeholder.com/600/92c952",
      "category": "office",
      "itemTitle": "printer",
      "itemBody": "1-year-old hp printer. No setup necessary.",
      "price": 2
    }
  ])

  const [users, setUsers] = useState([
    {
      "id":1,
      "avatar": "https://via.placeholder.com/600/92c952",
      "username": "Bob",
      "location": "There"
    },
    {
      "id":2,
      "avatar": "https://via.placeholder.com/600/92c952",
      "username": "Leon",
      "location": "Here"
    },
    {
      "id":3,
      "avatar": "https://via.placeholder.com/600/92c952",
      "username": "Samantha",
      "location": "Somewhere"
    },
  ])
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchValue = search.toLowerCase();
    const filtered = items.filter(item =>
      ((item.itemTitle).toLowerCase()).includes(searchValue) 
      || ((item.itemBody).toLowerCase()).includes(searchValue)
      || (item.category.toLowerCase().includes(searchValue)))

    setSearchResults(filtered);
  }, [items, search])

  const handleLoginClick = () => {
    setIsLoggedIn(true)
  
    const user_id = Math.floor(Math.random() * 4)
    const randomUser = users.filter(user => (
      user.id === user_id
    ))
    setUser(randomUser[0]);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false)
    setUser({});
  }

  return (
    <div className="App">
      <Header 
        search={search}
        setSearch={setSearch}
        isLoggedIn={isLoggedIn}
        handleLoginClick={handleLoginClick}
        handleLogoutClick= {handleLogoutClick}
        user = {user}
      />
      <Routes>
        <Route exact path="/" element={
            <Home 
                items={searchResults}
            />
        }>
        </Route>
        <Route exact path="/users/:id" element={
          <Profile 
            user = {user}
          />
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
