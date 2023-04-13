import Page from "@/components/Page"
import FormFacilities from "@/components/facilities/FormFacilities"

const createFacility = () => {
  return (
    <Page title={"EasyRoom; Add a facility"}>
      <FormFacilities></FormFacilities>
    </Page>
  )
}

export default createFacility