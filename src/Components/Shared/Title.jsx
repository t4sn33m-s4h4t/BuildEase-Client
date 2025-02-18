import { motion } from 'framer-motion';

const Title = ({ Heading, Subheading }) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="py-12  dark:bg-gray-900 text-center  "
    >
      <div className="container mx-auto px-6 sm:px-12">
        <h2 className="mb-3 text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          {Heading}
        </h2>
        <p className="text-base font-medium text-gray-600 dark:text-gray-400">
          {Subheading}
        </p>
      </div>
    </motion.div>
  );
};

export default Title;