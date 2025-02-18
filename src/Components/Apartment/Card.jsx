import { Link } from 'react-router-dom';

const ApartmentCard = ({ apartment }) => {
    return (
        <div className="mx-auto max-w-lg w-full shadow-lg rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={apartment.image}
                    alt="Apartment"
                    className="w-full h-40 object-cover rounded"
                />
                {/* Rent Badge */}
                <div className="absolute top-0 left-0 bg-black bg-opacity-50 px-2 py-1 text-white rounded-br-lg text-sm">
                    {apartment.rent}$
                </div>
                {/* Apartment Number Badge */}
                <div className="absolute top-0 right-0 bg-black bg-opacity-50 px-2 py-1 text-white rounded-bl-lg text-sm">
                    Apart No: {apartment.apartmentNo}
                </div>
            </div>

            {/* Details Section */}
            <div className="p-4">
                <div className="flex justify-between">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        Floor: {apartment.floorNo}
                    </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        Block: {apartment.blockName}
                    </p>
                </div>

                {/* Agreement Button */}
                <Link to={`/agreement/${apartment._id}`}>
                    <button className="mt-4 w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800">
                        Agreement
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ApartmentCard;