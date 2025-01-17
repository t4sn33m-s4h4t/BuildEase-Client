import React from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
const ApartmentCard = ({ apartment }) => {
    return (
        <Card className="mx-auto max-w-lg w-full shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="relative">
                <img
                    src={apartment.image}
                    alt="Apartment"
                    className="w-full h-56 object-cover"
                />
                <div className="absolute top-0 left-0 bg-black bg-opacity-50 px-4 py-2 text-white rounded-br-lg">
                    {apartment.rent}$
                </div>
                <div className="absolute top-0 right-0 bg-black bg-opacity-50 px-4 py-2 text-white rounded-br-lg">
                    Apart No: {apartment.apartmentNo}
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800">
                <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold">
                            <span className="text-gray-900 dark:text-white">Floor: {apartment.floorNo}</span>
                        </p>
                        <p className="text-lg font-semibold">
                            <span className="text-gray-900 dark:text-white">Block: {apartment.blockName}</span>
                        </p>
                    </div>
                </div>
                <Link to={`/agreement/${apartment._id}`}>
                    <button className="mt-12 w-full px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800">
                        Agreement
                    </button>
                </Link>
            </div>
        </Card>
    );
};

export default ApartmentCard;
