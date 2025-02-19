import Title from '../Components/Shared/Title';
import ApartmentCard from '../Components/Apartment/card';
import Pagination from '../Components/Pagination';
import useApartments from '../CustomHooks/useApartments';
import Loading from './Loading';
import { useState } from 'react';
import { Button, Label, TextInput, Select } from 'flowbite-react';

const Apartment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [minRent, setMinRent] = useState('');
  const [maxRent, setMaxRent] = useState('');
  const [sortRent, setSortRent] = useState('');
   
  const [filterMinRent, setFilterMinRent] = useState('');
  const [filterMaxRent, setFilterMaxRent] = useState('');

  const { apartments, count, isLoading, refetch } = useApartments({
    page: currentPage,
    limit: 8,
    minRent: filterMinRent,
    maxRent: filterMaxRent,
    sortRent,  
  });

  const totalPages = Math.ceil(count / 8);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((minRent === '' || minRent >= 0) && (maxRent === '' || maxRent >= 0)) { 
      setFilterMinRent(minRent);
      setFilterMaxRent(maxRent);
      setCurrentPage(1);
      refetch();
    }
  };
 
  const handleSortChange = (e) => {
    setSortRent(e.target.value);
    setCurrentPage(1);  
    refetch();
  };

  if (isLoading) return <Loading />;

  return (
    <div className="dark:bg-gray-900 min-h-screen py-8">
      <Title Heading="All Apartments" />
       
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <form
          onSubmit={handleSubmit}
          className="flex items-end gap-4 flex-wrap"
        >
          <div>
            <Label htmlFor="setMinRent" value="Minimum Rent" />
            <TextInput
              id="setMinRent"
              type="number"
              value={minRent}
              onChange={(e) => setMinRent(e.target.value)}
              min="0"
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="setMaxRent" value="Maximum Rent" />
            <TextInput
              id="setMaxRent"
              type="number"
              value={maxRent}
              onChange={(e) => setMaxRent(e.target.value)}
              min="0"
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-700 text-white"
          >
            Search
          </Button>
        </form>
 
        <div className="w-full md:w-auto">
          <Label htmlFor="sortRent" value="Sort by Rent" />
          <Select 
            id="sortRent"
            value={sortRent}
            onChange={handleSortChange}
            className="w-full md:w-auto"
          >
            <option value="">Default Sorting</option>
            <option value="asc">Rent: Low to High</option>
            <option value="desc">Rent: High to Low</option>
          </Select>
        </div>
      </div>
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="cardView">
        {apartments?.length > 0 ? (
          apartments.map((apartment, i) => (
            <ApartmentCard key={i} apartment={apartment} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No apartments found
          </div>
        )}
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