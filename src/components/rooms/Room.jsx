const Room = (props) => {
  const { roomNumber, capacity, facilities, id } = props

  return (
    <div>
      <h1>{`Salle N° ${roomNumber}`}</h1>
      <h2>{`Capacité : ${capacity}`}</h2>
      {facilities.map((facility, index) => (
        <h2 key={index}>{`Equipement ${index} : ${facility}`}</h2>
      ))}
      <a href={`/api/rooms/deleteRoom/${id}`}>Supprimer</a>
    </div>
  )
}

export default Room
