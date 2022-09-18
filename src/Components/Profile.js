
const Profile = ({ user }) => {
  return (
    <main>
        {user.id ?
            <section>
                <img src={user.avatar} alt={`${user.username}'s avatar`}></img>
                <p>{user.id}</p>
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
