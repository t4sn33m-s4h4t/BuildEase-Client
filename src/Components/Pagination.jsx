
import { Pagination as PG } from "flowbite-react";
import { useState } from "react";

export default function Pagination({refetch, currentPage,totalPages, setCurrentPage}) {
  

  const onPageChange = (page) => {
    setCurrentPage(page)
    refetch()
  };

  return (
    <div className="flex mt-8 mb-16 overflow-x-auto sm:justify-center">
      <PG className=" mx-auto" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}
