import { useState } from 'react';

const AddItemForm = ({ navigate, addItem, items, setItems, user }) => {
  const [newItemTitle, setNewItemTitle] = useState('')
  const [newItemBody, setNewItemBody] = useState('')
  const [newItemPrice, setNewItemPrice] = useState(0)
  const [newItemCategory, setNewItemCategory] = useState('garden')

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const user_id = user.id ? user.id : Math.floor(Math.random() * 4);
    const newItem = {id, user_id, photo:"https://via.placeholder.com/600/92c952", category: newItemCategory, itemTitle: newItemTitle, itemBody: newItemBody, price: newItemPrice}
    const allItems = [...items, newItem];
    setItems(allItems);
    addItem(newItem);

    setNewItemTitle('');
    setNewItemBody('');
    setNewItemCategory('');
    setNewItemPrice(0);
    navigate(`/users/${user_id}`);
  }

  return (
    <form className="addItemForm" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input 
        id="title"
        type="text"
        placeholder="Briefly describe your item..."
        value={newItemTitle}
        onChange={(e) => setNewItemTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input 
        id="description"
        type="text"
        placeholder="Describe your item in detail..."
        value={newItemBody}
        onChange={(e) => setNewItemBody(e.target.value)}
      />
      <label htmlFor="price">Price</label>
      <input 
        id="price"
        type="text"
        placeholder="Enter the daily rental price..."
        value={newItemPrice}
        onChange={(e) => setNewItemPrice(e.target.value)}
      />
      <label htmlFor="category">Category</label>
      <select 
        id="category"
        value={newItemCategory}
        onChange={(e) => setNewItemCategory(e.target.value)}
        >
        <option value="electronics">Electronics</option>
        <option value="home">Home</option>
        <option value="garden">Garden</option>
        <option value="attire">Attire</option>
        <option value="toys">Toys</option>
        <option value="outdoors">Outdoors</option>
        <option value="pets">Pet Supplies</option>
        <option value="office">Office</option>
        <option value="general">General</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddItemForm
