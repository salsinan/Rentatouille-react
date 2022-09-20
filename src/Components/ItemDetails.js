import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = ({ items, users, handleDelete }) => {
  const [reserveDate, setReserveDate] = useState("");
  const [success, setSuccess] = useState('');
  const { id } = useParams();
  const item = items.find(item => item.id == id);
  const user = users.find(user => user.id == item.user_id)

  const handleSubmit = () => {
    reserveDate.target.valueAsDate ?
      setSuccess(`Item reserved on ${reserveDate.target.valueAsDate.toDateString()}`)
    : setSuccess("Please select a date and try again.")
  }

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
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="reserveDate"></label>
            <input 
              type="date"
              name="reserveDate"
              id="reserveDate"
              onChange={setReserveDate}
            />
          </form>
          <button 
            id="rentBtn" 
            className="itemUpdate"
            onClick={handleSubmit}
          >
              Reserve
          </button>
          <div id="reservationSuccess">{success}</div>
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
