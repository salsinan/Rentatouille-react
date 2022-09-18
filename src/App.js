import { useState } from 'react';
import Home from './Components/Home';

function App() {
  const [items, setItems] = useState([
    {
      "id": 1,
      "user_id": 1,
      "photo": "https://via.placeholder.com/600/92c952",
      "category": "garden",
      "itemTitle": "lawnmower",
      "itemBody": "A machine that mows lawns",
      "price": 10
    },
    {
      "id": 2,
      "user_id": 3,
      "photo": "https://via.placeholder.com/600/92c952",
      "category": "garden",
      "itemTitle": "vacuum",
      "itemBody": "A machine that mows lawns",
      "price": 10
    },
    {
      "id": 3,
      "user_id": 2,
      "photo": "https://via.placeholder.com/600/92c952",
      "category": "garden",
      "itemTitle": "printer",
      "itemBody": "A machine that mows lawns",
      "price": 10
    }
  ])

  return (
    <div className="App">
      <Home 
        items={items}
      />

    </div>
  );
}

export default App;
