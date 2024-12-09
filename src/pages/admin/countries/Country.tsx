import CountriesLists from "@/components/admin/countries/CountriesLists";
import CreateCountry from "@/components/admin/countries/CreateCountry";

function Country() {
  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='main-heading'>Countries</h1>
        <CreateCountry />
      </div>
      <CountriesLists />
    </>
  );
}

export default Country;
