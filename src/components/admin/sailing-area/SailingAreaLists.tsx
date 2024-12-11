import { useState } from "react";
import useFetchSailingArea from "@/hooks/sailing-area/useFetchSailingArea";

import Pagination from "@/components/Pagination";
import Loader from "@/components/Loader";

function SailingAreaLists() {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const { isLoading, data: sailingArea, isError } = useFetchSailingArea(page, perPage);

  const { totalPages } = sailingArea?.pagination || {};
  if (isError) {
    return <h1>Error while fetching countires.</h1>;
  }

  if (isLoading) return <Loader />;

  return (
    <>
      {/* TO DO: Add in reusable Table component */}
      {sailingArea?.data.map(({ area }) => (
        <div key={area}>{area}</div>
      ))}
      <Pagination currentPage={page} totalPage={totalPages || 1} onPageChange={(page) => setPage(page)} />
    </>
  );
}

export default SailingAreaLists;
