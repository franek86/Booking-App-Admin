import SearchForm from "@/components/SearchForm";
import { parseDateFromURL, parseOption } from "@/util/helper";
import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchData = {
    departureDate: parseDateFromURL(queryParams.get("departureDate")),
    returnDate: parseDateFromURL(queryParams.get("returnDate")),
    destination: parseOption(queryParams.get("destination")),
    cabins: parseOption(queryParams.get("cabins")),
  };

  return (
    <div className='custom-container'>
      <SearchForm searchParams={searchData} />
    </div>
  );
}

export default Search;
