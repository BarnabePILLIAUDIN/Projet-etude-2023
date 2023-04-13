const FormFacilities = () => {
  return (
    <div>
      <form action="/api/facilities/postFacilities" method="post" className="flex flex-col">
        <label htmlFor="name">Facility name</label>
        <input type="text" name="name" id="name" className="border border-black"/>
        <button type="submit" className="bg-black text-white py-2 px-4 ">Add</button>
      </form>
    </div>
  )
}

export default FormFacilities
