import { Card, Badge } from "flowbite-react";
import Title from '../Components/Shared/Title';
import { useAuth } from "../CustomHooks/useAuth";
import useAgreementId from '../CustomHooks/useAgreementId'
export default function Profile() {
    const { user } = useAuth();
    const { agreement } = useAgreementId(user?.email)
    
    return (
        <>
            <Title Heading="My Profile" />
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-purple-50 to-indigo-50 text-black shadow-lg">
                <div className="flex flex-col items-center md:p-8 p-0">


                    <div className="relative">
                        <img
                            alt="User profile"
                            height="120"
                            src={user?.photoURL || "https://via.placeholder.com/120"}
                            width="120"
                            className="rounded-full border-4 border-white shadow-md"
                        />
                        <Badge
                            color="success"
                            className="absolute -bottom-2 right-0"
                        >
                            User
                        </Badge>
                    </div>


                    <h5 className="mt-4 text-2xl font-bold">
                        {user?.displayName || "User Name"}
                    </h5>
                    <span className="text-sm font-light">
                        {user?.email || "user@example.com"}
                    </span>


                    <div className="w-full text-center md:text-left mt-6 bg-white text-gray-800 rounded-lg p-1 md:p-6 shadow-inner">
                        <h6 className="mb-4 text-lg font-semibold text-purple-700">
                            Apartment Informations
                        </h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p>
                                <strong>Accept Date:</strong> <span className="text-gray-500">{!agreement?.requestDate ? "N/A" : (new Date(agreement?.requestDate).toLocaleDateString())}</span>
                            </p>
                            <p>
                                <strong>Floor:</strong> <span className="text-gray-500">{!agreement?.floorNo ? "N/A" : agreement.floorNo}</span>
                            </p>
                            <p>
                                <strong>Block:</strong> <span className="text-gray-500">{!agreement?.blockName ? "N/A" : agreement.blockName}</span>
                            </p>
                            <p>
                                <strong>Room No:</strong> <span className="text-gray-500">{!agreement?.apartmentNo ? "N/A" : agreement.apartmentNo }</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    );
}
