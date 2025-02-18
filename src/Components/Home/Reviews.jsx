 
import { FaStar, FaUser } from 'react-icons/fa';
import Title from '../Shared/Title';
import { toast } from 'react-toastify';

const Reviews = () => {
    return (
        <div className="shadow-lg py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Title
                    Heading="Customer Reviews"
                    Subheading="Share your experience and read what others have to say."
                /> 
                    <div className="bg-purple-600 p-6 rounded-md shadow-lg text-white"> 
                        <div className="gap-4 grid grid-cols-1 md:grid-cols-3"> 

                            <div className="bg-purple-700 p-4 rounded-md ">
                                <div className="flex items-center mb-2">
                                    <FaUser className="w-6 h-6 mr-2" />
                                    <p className="font-semibold">Sin Theta</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar
                                            key={index}
                                            className="w-4 h-4 text-yellow-400"
                                        />
                                    ))}
                                </div>
                                <p className="text-sm">
                                    "Great service and excellent support! Highly recommended."
                                </p>
                            </div>
 
                            <div className="bg-purple-700 p-4 rounded-md">
                                <div className="flex items-center mb-2">
                                    <FaUser className="w-6 h-6 mr-2" />
                                    <p className="font-semibold">Tan Theta</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    {[...Array(4)].map((_, index) => (
                                        <FaStar
                                            key={index}
                                            className="w-4 h-4 text-yellow-400"
                                        />
                                    ))}
                                </div>
                                <p className="text-sm">
                                    "The platform is user-friendly and the team is very responsive."
                                </p>
                            </div>
 
                            <div className="bg-purple-700 p-4 rounded-md">
                                <div className="flex items-center mb-2">
                                    <FaUser className="w-6 h-6 mr-2" />
                                    <p className="font-semibold">Cos Theta</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar
                                            key={index}
                                            className="w-4 h-4 text-yellow-400"
                                        />
                                    ))}
                                </div>
                                <p className="text-sm">
                                    "Amazing experience! Everything was seamless and efficient."
                                </p>
                            </div>
                        </div>
                    </div>
                 
            </div>
        </div>
    );
};

export default Reviews;