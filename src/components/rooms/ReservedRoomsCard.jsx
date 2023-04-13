import Link from "next/link"

const ReservedRoomsCard = (props) => {
  const { roomNumber, capacity, facilities } = props

  return (
    <div>
      <h2>Number: {roomNumber} (max-capacity: {capacity})</h2>
      <ul>
        {facilities.map((facility,id) => (
          <li key={facility}>{ id}: {facility}</li>
        ))}
        <Link href={`/api/free/${roomNumber}`}>Free</Link>
      </ul>
    </div>
  )
}

export default ReservedRoomsCard