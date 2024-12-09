import Modal from "@/components/Modal";

import CreateCountryForm from "./CreateCountryForm";

function CreateCountry() {
  return (
    <Modal title='Add country'>
      <CreateCountryForm />
    </Modal>
  );
}

export default CreateCountry;
