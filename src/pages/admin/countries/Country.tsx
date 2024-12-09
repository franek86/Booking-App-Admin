import CountriesLists from "@/components/admin/countries/CountriesLists";
import CreateCountry from "@/components/admin/countries/CreateCountry";

function Country() {
  return (
    <>
      <div className='w-3/4 inline-flex justify-end'>
        <CreateCountry />
      </div>
      <CountriesLists />
    </>
  );
}

export default Country;
