import { useEffect, useState } from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';

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

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const searchValue = search.toLowerCase();
    const filtered = items.filter(item =>
      ((item.itemTitle).toLowerCase()).includes(searchValue) 
      || ((item.itemBody).toLowerCase()).includes(searchValue)
      || (item.category.toLowerCase().includes(searchValue)))

    setSearchResults(filtered);
  }, [items, search])

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className="App">
      <Header 
        search={search}
        setSearch={setSearch}
        isLoggedIn={isLoggedIn}
        handleLoginClick={handleLoginClick}
      />
      <Routes>
        <Route exact path="/" element={
            <Home 
                items={searchResults}
            />
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
