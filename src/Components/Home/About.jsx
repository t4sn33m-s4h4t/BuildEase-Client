import { Card } from 'flowbite-react';
import Title from '../Shared/Title';

function About() {
  return (
    <section className="py-2 ">
      <div className="container mx-auto px-6 lg:px-12">
        <Title 
          Heading="About BuildEase" 
          Subheading="Your all-in-one platform for building management and affordable online room rentals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-lg dark:bg-gray-800">
            <h3 className="dynapuff mb-4 text-2xl font-bold text-gray-800 dark:text-white">
              Simplified Building Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Manage your buildings effortlessly with BuildEase's smart tools. 
              Monitor rental activities and streamline operations in one place.
            </p>
          </Card>

          <Card className="shadow-lg dark:bg-gray-800">
            <h3 className="dynapuff mb-4 text-2xl font-bold text-gray-800 dark:text-white">
              Affordable Rentals
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Find cost-effective rental options tailored to your needs. 
              BuildEase ensures affordability without compromising quality.
            </p>
          </Card>

          <Card className="shadow-lg dark:bg-gray-800">
            <h3 className="dynapuff mb-4 text-2xl font-bold text-gray-800 dark:text-white">
              Reliable Platform
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Trust us to provide a secure and dependable platform for all your renting 
              and building management requirements.
            </p>
          </Card>

          <Card className="shadow-lg dark:bg-gray-800">
            <h3 className="dynapuff mb-4 text-2xl font-bold text-gray-800 dark:text-white">
              Comprehensive Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Enjoy 24/7 customer support to address all your queries and concerns. 
              BuildEase is here to assist you at every step.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default About;
