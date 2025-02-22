import useApartments from '../../CustomHooks/useApartments';
import Loading from '../../Pages/Loading';
import Title from '../Shared/Title';
import ApartmentCard from '../Apartment/card';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const HomeApartments = () => {
  const { apartments, isLoading } = useApartments({
    limit: 8,
  });

  if (isLoading) return <Loading />;

  return (
    <div className='py-8 bg-white dark:bg-gray-900'>
      <Title 
        Heading="Our Apartments" 
        Subheading="Choose your favourite one and be a part of the family"
      />

      <div id='cardView' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
        {apartments?.map((apartment, i) => (
          <ApartmentCard key={i} apartment={apartment} />
        ))}
      </div>

      <Link to='/apartment'>
        <Button className='px-24 mx-auto mt-10' color="purple">
          See All
        </Button>
      </Link>
    </div>
  );
};

export default HomeApartments;