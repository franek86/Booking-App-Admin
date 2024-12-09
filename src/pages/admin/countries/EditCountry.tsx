import { useParams } from "react-router-dom";
import EditCountryForm from "@/components/admin/countries/EditCountryForm";

function EditCountry() {
  const { id } = useParams();

  return <EditCountryForm countryId={id} />;
}

export default EditCountry;
