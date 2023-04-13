const Facility = (props) => {
  const { name, id } = props
  
  return (
    <div>
      <p>{name}</p>
      <a href={`/api/facilities/deleteFacility/${id}`}>Supprimer</a>
    </div>
  )
}

export default Facility
