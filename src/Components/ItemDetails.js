import { useParams } from 'react-router-dom';

const ItemDetails = ({ items, users }) => {
  const { id } = useParams();
  const item = items.find(item => item.id == id);
  const user = users.find(user => user.id == item.user_id)
  return (
    <main className='itemDetails'>
      {item &&
        <div>
          <img src={item.photo} alt={item.itemTitle} id="itemImage"></img>
          <p>
            <b>{item.itemTitle}</b>
          </p>
          <p><b>Price:</b> ${item.price}/day</p>
          <p><b>Description:</b> {item.itemBody}</p>
          <p><b>Listed By:</b> {user.username}</p>
          <p>#{item.category}</p>
          <button id="rentBtn">Rent Now</button>
        </div>
      }
      {!item &&
        <>
          <p> Item not Found </p>
        </>
      }
    </main>
  )
}

export default ItemDetails
