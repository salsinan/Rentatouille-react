import { Link, useParams } from 'react-router-dom';
import Item from './Item';

const Profile = ({ users, items }) => {
  const { id } = useParams();
  const userItems = items.filter(item => item.user_id == id);
  const user = users.find(user => user.id == id);
  return (
    <div className='userProfile'>
      {users.length > 0 ?
        <main className="userInfo">
        <figure>
          <img src={user.avatar} alt={`${user.username}'s avatar`} id="avatar"></img>
          <figcaption>Username: {user.username}</figcaption>
          <figcaption>{user.location}</figcaption>
        </figure>
        <hr></hr>
        <h4>
          Your Listed Touilles
        </h4>
          {userItems && 
            <div id="userItems">
              {userItems.map(item =>(
                <Item item={item} key={item.id}/>
              ))}
            </div>
          }
          {userItems.length === 0 &&
            <div>You have no listed items</div>
          }
          <Link to="/items/create">
            <button id="postBtn">Post New Item</button>
          </Link>
        </main>
      :
        <main>
          The users database appears to be empty. Please refresh the page.
        </main>
      }
    </div> 
  )
}

export default Profile
