const User = (props) => {
  const { first, last, isAdmin,_id } = props.user
  
  return (
    <div className="flex flex-col">
      <h2>{first} {last}</h2>
      {
        isAdmin?<h3>Admin</h3>:<>Not Admin</>
      }
      <a href={`/api/deleteUser/${_id}`}>Supprimer</a>
    </div>
  )
}

export default User