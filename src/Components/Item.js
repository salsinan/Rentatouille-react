import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <li key={item.id} className="item">
        <Link to={`/items/${item.id}`} item={item}>
          <div id="itemLink">
            <img src={item.photo} alt={item.itemTitle} id="itemImage"></img>
            <div>
              <b>{item.itemTitle}</b>
            </div>
          </div>
        </Link>
        <div>Price: ${item.price}/day</div>
    </li>

  )
}

export default Item
