import Item from './Item';

const Profile = ({ user, items }) => {
  return (
    <main className="userInfo">
        {user.id ?
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
                  {user.items.map(item => (
                    <Item item={items[item]}/>
                  ))}
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
