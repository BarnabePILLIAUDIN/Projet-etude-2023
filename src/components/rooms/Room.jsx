const Room = (props) => {
  const { roomNumber, capacity, facilities, id } = props

  return (
    <div className="m-[100px] p-[20px] text-center rounded-sm bg-blue-100 min-w-[350px] min-h-[260px] relative grid overflow-hidden">
      <h2 className="text-5xl bg-blue-300/25 rounded-sm ml-[500px] mr-[500px]">{`Salle N° ${roomNumber}`}</h2>
      <h3 className="text-3xl mt-[5px]">{`Capacité : ${capacity}`}</h3>
      {facilities.map((facility, index) => (
        <h2 key={index}>{`${facility}`}</h2>
      ))}
      <a href={`/api/rooms/deleteRoom/${id}`}>Supprimer</a>
    </div>
  )
}

export default Room
