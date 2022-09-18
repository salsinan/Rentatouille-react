import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <section>
        <img src={item.photo} alt={item.itemTitle}></img>
        <Link to="/items/:id">
            <p>
            {item.itemTitle}
            </p>
        </Link>
        <p>Description: {item.itemBody}</p>
        <p>Price: ${item.price}/day</p>
        <p>By User: {item.user_id}</p>
    </section>

  )
}

export default Item
