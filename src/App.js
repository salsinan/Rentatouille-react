import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Profile from './Components/Profile';
import ItemDetails from './Components/ItemDetails';
import AddItemForm from './Components/AddItemForm';
import Footer from './Components/Footer';
import apiRequest from './Components/apiRequest';
import PageNotFound from './Components/PageNotFound';

function App() {
  const API_URL = "http://localhost:3500/"
  const [items, setItems] = useState([])
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const searchValue = search.toLowerCase();
    const filtered = items.filter(item =>
      ((item.itemTitle).toLowerCase()).includes(searchValue) 
      || ((item.itemBody).toLowerCase()).includes(searchValue)
      || (item.category.toLowerCase().includes(searchValue)))

    setSearchResults(filtered);
  }, [items, search])

  const fetchItems = async () => {
    try {
      const itemsResponse = await fetch(`${API_URL}items`);
      const usersResponse = await fetch(`${API_URL}users`);
      if (!itemsResponse.ok || !usersResponse.ok) throw Error('No data to show. Please reload the page.')
      const itemsList = await itemsResponse.json();
      const usersList = await usersResponse.json();
      setItems(itemsList);
      setUsers(usersList);
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchItems();
    setUser(users[0]);
  }, [])

  const handleLoginClick = () => {
    if (!isLoading && !fetchError) {
      setIsLoggedIn(true);
    
      // Generate a random user
      const user_id = Math.floor(Math.random() * 4);
      const randomUser = users.filter(user => (
        user.id === user_id
      ))
      setUser(randomUser[0]);
    }
    else {
      navigate('/pagenotfound');
    }
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false)
    setUser({});
    navigate('/');
  }

  const addItem = async (newItem) => {
    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
    }
    const result = await apiRequest(`${API_URL}items`, postOptions)
    if (result) setFetchError(result);
  }

  const handleDelete = async (id) => {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems);

    const deletOptions = { method: 'DELETE' };
    const reqUrl = `${API_URL}items/${id}`;
    const result = await apiRequest(reqUrl, deletOptions);
    if (result) setFetchError(result);
    fetchItems();
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
            users={users}
            items={items}
          />
        }>
        </Route>
        <Route exact path="/items/create" element={
          <AddItemForm 
            items={items}
            user={user}
            setItems={setItems}
            addItem={addItem}
            navigate={navigate}
          />
        }>
        </Route>
        <Route exact path="/items/:id" element={
          <ItemDetails 
            items={items}
            handleDelete={handleDelete}
            users={users}
          />
        }>
        </Route>
        <Route exact path="/*" element={
          <PageNotFound/>
        }>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
