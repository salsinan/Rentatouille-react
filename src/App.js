import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Profile from './Components/Profile';
import ItemDetails from './Components/ItemDetails';
import Footer from './Components/Footer';

function App() {
  const API_URL = "http://localhost:3500/"
  const [items, setItems] = useState([])
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const searchValue = search.toLowerCase();
    const filtered = items.filter(item =>
      ((item.itemTitle).toLowerCase()).includes(searchValue) 
      || ((item.itemBody).toLowerCase()).includes(searchValue)
      || (item.category.toLowerCase().includes(searchValue)))

    setSearchResults(filtered);
  }, [items, search])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsResponse = await fetch(`${API_URL}items`);
        const usersResponse = await fetch(`${API_URL}users`);
        if (!itemsResponse.ok || !usersResponse.ok) throw Error('No data to show')
        const itemsList = await itemsResponse.json();
        const usersList = await usersResponse.json();
        setItems(itemsList);
        setUsers(usersList);
      } catch (err) {
        setFetchError(err.message);
      }
    }
    fetchItems();
  }, [])

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
                fetchError={fetchError}
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
        <Route exact path="/items/:id" element={
          <ItemDetails 
            items={items}
            users={users}
          />
        }>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
