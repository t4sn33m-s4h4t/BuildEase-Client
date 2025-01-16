import { HiInformationCircle } from 'react-icons/hi';
import Title from '../Components/Shared/Title';
import useAnnouncements from '../CustomHooks/useAnnouncements';
import { Alert, Card } from 'flowbite-react';

import { motion } from 'framer-motion';

const Announcements = () => {
  const { announcements } = useAnnouncements()
  return (
    <div className="mb-10">
      <Title Heading="All Announcements" />

      {announcements.length ? (
        <div className="grid grid-cols-1 gap-6">
          {
            announcements.map(announcement => <motion.div 
            key={announcement._id}
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [1, -0.2, 0.11, -0.6] }}
            >
              <Alert
                color="purple"
                icon={HiInformationCircle}
                additionalContent={"=> " + announcement.description}
                rounded
                className="mx-auto w-4/5 shadow-md hover:shadow-lg"
              >
                <p className='text-lg'> <span className="font-medium">Announcement: </span>{announcement.title}</p>
              </Alert>
            </motion.div>
            )}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No announcements available.</p>
      )}
    </div>
  )
}

export default Announcements

