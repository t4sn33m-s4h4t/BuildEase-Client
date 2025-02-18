 
import { Spinner } from 'flowbite-react';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black dark:bg-gray-900 opacity-60 z-50 flex justify-center items-center">
      <Spinner color="warning" aria-label="Loading spinner" />
    </div>
  );
};

export default Loading; 