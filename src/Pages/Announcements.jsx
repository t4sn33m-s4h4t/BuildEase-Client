 
import { HiInformationCircle } from 'react-icons/hi';
import Title from '../Components/Shared/Title';
import useAnnouncements from '../CustomHooks/useAnnouncements';
import { Alert } from 'flowbite-react';
import { motion } from 'framer-motion';

const Announcements = () => {
  const { announcements } = useAnnouncements();
  return (
    <div className="mb-10 bg-gray-100 dark:bg-gray-900 min-h-screen py-8">
      <Title Heading="All Announcements" />

      {announcements.length ? (
        <div className="grid grid-cols-1 gap-6">
          {announcements.map((announcement) => (
            <motion.div
              key={announcement._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [1, -0.2, 0.11, -0.6] }}
            >
              <Alert
                color="purple"
                icon={HiInformationCircle}
                additionalContent={
                  <p className="text-lg text-gray-800 dark:text-gray-300">
                    {"=> " + announcement.description}
                  </p>
                }
                rounded
                className="mx-auto w-4/5 shadow-md hover:shadow-lg bg-white dark:bg-gray-800"
              >
                <p className="text-xl lg:text-2xl text-gray-900 dark:text-white">
                  {announcement.title}
                </p>
              </Alert>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-300 text-center">
          No announcements available.
        </p>
      )}
    </div>
  );
};

export default Announcements; 