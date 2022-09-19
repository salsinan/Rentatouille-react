import { Link, useParams } from 'react-router-dom';
import Item from './Item';

const Profile = ({ user, items }) => {
  const { id } = useParams();
  const userItems = items.filter(item => item.user_id == id);
  return (
    <main className="userInfo">
        {user && user.id ?
            <section>
                <img src={user.avatar} alt={`${user.username}'s avatar`} id="avatar"></img>
                <p>Username: {user.username}</p>
                <p 
                style={{ marginBottom: "4rem", borderBottom: "1px solid black"}}
                >
                  {user.location}
                </p>
                <h4>
                  Your Listed Touilles
                </h4>
                <div 
                  style={{
                    width: "100%",
                    display: "flex",
                    flexFlow: "row wrap",
                    justifyContent: "center"
                  }}
                >
                  {userItems && 
                    <div>
                      {userItems.map(item =>(
                        <Item item={item}/>
                      ))}
                    </div>
                  }
                  {!userItems &&
                    <div>You have no listed items</div>
                  }
                  <Link to="/items/create">
                    <button>Post New Item</button>
                  </Link>
                </div>
            </section>
            :
            <section>
                <div>The user does not exist</div>
            </section>
        }
    </main>
  )
}

export default Profile
