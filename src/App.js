import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Item from './Components/Item';
import Footer from './Components/Footer';

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
    },
    {
      "id": 4,
      "user_id": 2,
      "photo": "https://via.placeholder.com/600/92c952",
      "category": "garden",
      "itemTitle": "shovel",
      "itemBody": "stainless steel",
      "price": 2
    },
    {
      "id": 5,
      "user_id": 1,
      "photo": "https://via.placeholder.com/600/92c952",
      "category": "music",
      "itemTitle": "guitar",
      "itemBody": "electric guitar with speakers",
      "price": 20
    },
  ])

  const [users, setUsers] = useState([
    {
      "id":1,
      "avatar": "https://via.placeholder.com/600/92c952",
      "username": "Bob",
      "location": "Beaverton, OR",
      "items": [0, 4]
    },
    {
      "id":2,
      "avatar": "https://via.placeholder.com/600/92c952",
      "username": "Leon",
      "location": "Baltimore, MD",
      "items": [2, 3]
    },
    {
      "id":3,
      "avatar": "https://via.placeholder.com/600/92c952",
      "username": "Samantha",
      "location": "San Francisco, CA",
      "items": [1]
    }
  ])
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const searchValue = search.toLowerCase();
    const filtered = items.filter(item =>
      ((item.itemTitle).toLowerCase()).includes(searchValue) 
      || ((item.itemBody).toLowerCase()).includes(searchValue)
      || (item.category.toLowerCase().includes(searchValue)))

    setSearchResults(filtered);
  }, [items, search])

  const handleLoginClick = () => {
    setIsLoggedIn(true);
    
    // Generate a random user
    const user_id = Math.floor(Math.random() * 4);
    const randomUser = users.filter(user => (
      user.id === user_id
    ))
    setUser(randomUser[0]);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false)
    setUser({});
    navigate('/');
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
                setSearch={setSearch}
            />
        }>
        </Route>
        <Route exact path="/users/:id" element={
          <Profile 
            user={user}
            items={items}
          />
        }>
        </Route>
        {/* <Route exact path="/items/:id" element={
          <Item />
        }>
        </Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
