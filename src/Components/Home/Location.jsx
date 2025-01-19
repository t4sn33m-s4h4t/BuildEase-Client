import { Card } from 'flowbite-react';
import ReactModalImage from 'react-modal-image';
import mapImg from '../../assets/map.png'
import Title from '../Shared/Title';
const Location = () => {
    const apartmentDetails = {
        name: 'Bashundhara City',
        address: 'Bashundhara City, Plot 01, Block B, Bashundhara R/A, Dhaka 1229, Bangladesh',
        description: `Bashundhara City is one of the largest shopping malls in Bangladesh, located in the bustling Bashundhara Residential Area of Dhaka. It offers a wide variety of retail stores, dining options, and entertainment facilities.`,
        directions: `From Gulshan: Head south on Road 36, turn left onto Bashundhara Road, and the mall is on your left, near the 3rd intersection.`,
        imageUrl: mapImg
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-16">
            <Title
                Heading=" Apartment Location and Directions"
                Subheading="Your all-in-one platform for building management and affordable online room rentals."
            />
            <div className="flex flex-col items-center lg:flex-row gap-12">
                <div className="flex-1">
                    <Card className="shadow-lg dark:bg-gray-800 p-6">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                            {apartmentDetails.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                            <span className="font-medium">Address:</span> {apartmentDetails.address}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            <span className="font-medium">Description:</span> {apartmentDetails.description}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            <span className="font-medium">Directions:</span> {apartmentDetails.directions}
                        </p>
                    </Card>
                </div>

                <div className="flex-1">
                    <div className="relative group">
                        <ReactModalImage
                            small={apartmentDetails.imageUrl}
                            large={apartmentDetails.imageUrl}
                            alt="Apartment Location"
                            className="w-full h-full object-cover cursor-pointer rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
