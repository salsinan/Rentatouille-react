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
    document.getElementById('reservationSuccess').style.display = "block";
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
          <div id="reservationSuccess" style={{display:'none'}}>{success}</div>
          <button 
            id="rentBtn" 
            className="itemUpdate"
            onClick={handleSubmit}
          >
              Reserve
          </button>
          <div className='btnContainer'>
            <button 
              type="submit" 
              id="deleteBtn"
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
