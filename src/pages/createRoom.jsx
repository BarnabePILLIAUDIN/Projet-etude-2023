import Page from "@/components/Page"
import FormFacilities from "@/components/facilities/FormFacilities"
import FormRooms from "@/components/rooms/FormRooms"
import { useState } from "react"

const CreateRoom = () => {
  const [addFacility, setAddFacility] = useState(false)
  
  return (
    <Page title="EasyRoom: Add a new room">
      <FormRooms />
      <div className="mt-12">
      {
          addFacility 
          ? <><FormFacilities /> <button className="bg-orange-400 text-white px-4 py-2" onClick={()=>{setAddFacility(false)}}>Cancel</button></>
          : <h3 className="text-xl font-semi-bold mt-12 ml-5">Missing a facility ? <span className="bg-blue-700 text-white py-4 px-8 ml-5 rounded" onClick={()=>{setAddFacility(true)}}>Then create it!</span></h3>
        
        }
      </div>
    </Page>
  )
}

export default CreateRoom