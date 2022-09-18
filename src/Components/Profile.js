
const Profile = ({ user }) => {
  return (
    <main>
        <section>
        <img src={user.avatar}></img>
        <p>Username: {user.username}</p>
        </section>
      
    </main>
  )
}

export default Profile
