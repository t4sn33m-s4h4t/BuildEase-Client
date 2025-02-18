import { Pagination as PG } from "flowbite-react";

export default function Pagination({ refetch, currentPage, totalPages, setCurrentPage }) {
  const onPageChange = (page) => {
    setCurrentPage(page);
    refetch();
  };

  return (
    <div className="flex mt-8 mb-16 overflow-x-auto sm:justify-center bg-white dark:bg-gray-900">
      <PG
        className="mx-auto text-gray-900 dark:text-gray-300"
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}