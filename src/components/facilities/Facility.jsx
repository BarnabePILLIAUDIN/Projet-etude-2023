const Facility = (props) => {
  const { name, id } = props
  
  return (
    <div className="m-[100px] p-[20px] text-center rounded-sm bg-blue-100 min-w-[150px] min-h-[150px] relative grid overflow-hidden">
      <h2 className="text-5xl bg-blue-300/25 rounded-sm ml-[500px] mr-[500px] p-10">{name}</h2>
      <a href={`/api/facilities/deleteFacility/${id}`}>Supprimer</a>
    </div>
  )
}

export default Facility
