import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "@/contexts/AppContext";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";

import Loader from "../../Loader";
import ConfirmDialog from "../../ConfirmDialog";
import Pagination from "@/components/Pagination";
import ItemsPerPage from "@/components/ItemsPerPage";

import useFetchCountries from "@/hooks/country/useFetchCountries";
import useDeleteCountry from "@/hooks/country/useDeleteCountry";

function CountriesLists() {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(12);
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(null);
  const { setOpenConfirmDialog } = useAppContext();

  const { isError, isLoading, data } = useFetchCountries(page, perPage);
  const { deleteCountryMutation } = useDeleteCountry();

  const handleOpenDialog = (id: string) => {
    console.log(id);
    setOpenConfirmDialog(true);
    setSelectedCountryId(id);
  };
  const handleDelete = () => {
    if (selectedCountryId) {
      deleteCountryMutation.mutate(selectedCountryId, {
        onSettled: () => setSelectedCountryId(null),
      });
    }
  };

  const onChangePerPage = (value: string) => {
    const selectedValueNumber = parseInt(value);
    setPerPage(selectedValueNumber);
  };

  if (isError) {
    return <h1>Error while fetching countires.</h1>;
  }

  if (isLoading) return <Loader />;

  return (
    <>
      <ItemsPerPage handleChange={onChangePerPage} currentValue={perPage} />
      <div className='grid gap-4 grid-cols-2 lg:grid-cols-4 mt-5'>
        {data?.countries?.map(({ _id, name, shortCountryCode, longCountryCode, iconFlag }) => (
          <Card key={name}>
            <CardHeader>
              <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent className='flex'>
              {iconFlag && <img src={iconFlag} alt={name} className='w-16 h-16' />}
              <div className='flex flex-col mx-3'>
                <div className='font-bold'>
                  {shortCountryCode} - {longCountryCode}
                </div>
                <div>120 bases</div>
                <div>1220 yachts</div>
              </div>
            </CardContent>

            <CardFooter className='flex justify-between'>
              <NavLink to={`/countries/${_id}`}>
                <Button variant='green'>Edit</Button>
              </NavLink>
              <Button onClick={() => handleOpenDialog(_id)} variant='destructive'>
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <ConfirmDialog message='Are you sure that you want delete?' onConfirm={() => handleDelete()} />

      <Pagination currentPage={page} totalPage={data?.totalPages || 1} onPageChange={(page) => setPage(page)} />
    </>
  );
}

export default CountriesLists;
