import { useParams } from 'react-router-dom';

const ItemDetails = ({ items, users, handleDelete }) => {
  const { id } = useParams();
  const item = items.find(item => item.id == id);
  const user = users.find(user => user.id == item.user_id)

  return (
    <main className='itemDetails'>
      {item !== undefined &&
        <div>
          <img src={item.photo} alt={item.itemTitle} id="itemImage"></img>
          <p><b>{item.itemTitle}</b></p>
          <p><b>Price:</b> ${item.price}/day</p>
          <p><b>Description:</b> {item.itemBody}</p>
          <p><b>Listed By:</b> {user.username}</p>
          <p>#{item.category}</p>
          <button id="rentBtn" className="itemUpdate">Reserve</button>
          <div>
            <button 
              type="submit" 
              className="itemUpdate"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </div>
        </div>
      }
      {item == undefined &&
        <div>
          <p> Item not Found </p>
        </div>
      }
    </main>
  )
}

export default ItemDetails
