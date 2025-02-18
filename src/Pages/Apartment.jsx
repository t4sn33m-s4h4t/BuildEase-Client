 
import Title from '../Components/Shared/Title';
import ApartmentCard from '../Components/Apartment/card';
import Pagination from '../Components/Pagination';
import useApartments from '../CustomHooks/useApartments';
import Loading from './Loading';
import { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';

const Apartment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [minRent, setMinRent] = useState('');
  const [maxRent, setMaxRent] = useState('');

  const { apartments, count, isLoading, refetch } = useApartments({
    page: currentPage,
    limit: 8,
    minRent,
    maxRent,
  });

  const totalPages = Math.ceil(count / 6);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (minRent >= 0 && maxRent >= 0) {
      setCurrentPage(1);
      refetch();
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="  dark:bg-gray-900 min-h-screen py-8">
      <Title Heading="All Apartments" />
      <form
        onSubmit={handleSubmit}
        className="flex md:justify-between items-center md:flex-row flex-col mx-auto gap-4 mb-10 md:items-end"
      >
        <div className="flex gap-5">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="setMinRent"
                value="Minimum Rent"
                className="text-gray-800 dark:text-gray-300"
              />
            </div>
            <TextInput
              id="setMinRent"
              type="number"
              value={minRent}
              onChange={(e) => setMinRent(e.target.value)}
              required
              min="0"
              className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-600"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="setMaxRent"
                value="Maximum Rent"
                className="text-gray-800 dark:text-gray-300"
              />
            </div>
            <TextInput
              id="setMaxRent"
              type="number"
              value={maxRent}
              onChange={(e) => setMaxRent(e.target.value)}
              required
              min="0"
              className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-600"
            />
          </div>
        </div>
        <div>
          <Button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white dark:bg-purple-800 dark:hover:bg-purple-900"
          >
            Search
          </Button>
        </div>
      </form>
      <div className="grid" id="cardView">
        {apartments?.map((apartment, i) => (
          <ApartmentCard key={i} apartment={apartment} />
        ))}
      </div>
      <Pagination
        refetch={refetch}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Apartment; 