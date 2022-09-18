import Item from './Item';

const Profile = ({ user, items }) => {
  return (
    <main>
        {user.id ?
            <section>
                <img src={user.avatar} alt={`${user.username}'s avatar`}></img>
                <p>{user.id}</p>
                <ul>
                  {user.items.map(item => (
                    <Item item={items[item]}/>
                  ))}
                </ul>
            </section>
            :
            <section>
                <p>The user does not exist</p>
            </section>
        }
    </main>
  )
}

export default Profile
