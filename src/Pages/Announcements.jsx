import Title from '../Components/Shared/Title';
import useAnnouncements from '../CustomHooks/useAnnouncements';
import { Card } from 'flowbite-react';

const Announcements = () => {
  const { announcements } = useAnnouncements();

  return (
    <div className="">
      <Title Heading="Announcements" />

      {announcements && announcements.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map(({_id, title, description}) => (
          <Card key={_id} className="shadow-md hover:shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600 mt-2">{description}</p>
          </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No announcements available.</p>
      )}
    </div>
  );
};

export default Announcements;
