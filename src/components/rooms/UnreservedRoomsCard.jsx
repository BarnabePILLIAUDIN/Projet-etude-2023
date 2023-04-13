import axios from "axios"

const UnreservedRoomsCard = (props) => {
  const { roomNumber, capacity, facilities, userId } = props

  const handleReserve = () => {
    axios.post(`/api/reserve/${roomNumber}`,{userId})
  }

  return (
    <div>
      <h2>Number: {roomNumber} (max-capacity: {capacity})</h2>
      <ul>
        {facilities.map((facility,id) => (
          <li key={facility}>{ id}: {facility}</li>
        ))}
        <button onClick={handleReserve}>Reserve</button>
      </ul>
    </div>
  )
}

export default UnreservedRoomsCard
