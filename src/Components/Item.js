import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <li key={item.id} className="item">
        <Link to={`items/${item.id}`}>
          <img src={item.photo} alt={item.itemTitle} id="itemImage"></img>
          <p>
            <b>{item.itemTitle}</b>
          </p>
        </Link>
        {/* <p>Description: {item.itemBody}</p> */}
        {/* <p>Category: {item.category}</p> */}
        <p>Price: ${item.price}/day</p>
        {/* <p>By User: {item.user_id}</p> */}
    </li>

  )
}

export default Item
