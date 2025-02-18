import { Card, Badge } from "flowbite-react";
import Title from '../Components/Shared/Title';
import { useAuth } from "../CustomHooks/useAuth";
import useAgreementId from '../CustomHooks/useAgreementId';
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import useCheckAdmin from "../CustomHooks/useCheckAdmin";
import { Navigate } from "react-router-dom";

export default function UserProfile() {
    const { user } = useAuth();
    const { agreement } = useAgreementId(user?.email);
    const [isImageError, setIsImageError] = useState(false);
    const { data } = useCheckAdmin();

    if (data?.userRole === 'admin') {
        return <Navigate to="/dashboard/admin-profile" />;
    }

    return (
        <>
            <Title Heading="My Profile" />
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900 dark:to-indigo-900 text-black dark:text-white shadow-lg">
                <div className="flex flex-col items-center md:p-8 p-0">
                    {/* Profile Picture */}
                    <div className="relative">
                        {isImageError ? (
                            <FaUserCircle size={120} className="text-gray-400 dark:text-gray-600" />
                        ) : (
                            <img
                                alt="User profile"
                                height="120"
                                width="120"
                                src={user?.photoURL || "https://via.placeholder.com/120"}
                                className="rounded-full border-4 border-white dark:border-gray-800 shadow-md"
                                onError={() => setIsImageError(true)}
                            />
                        )}
                        <Badge
                            color="success"
                            className="absolute -bottom-2 right-0"
                        >
                            {(data && data?.userRole === 'member') ? "Member" : "User"}
                        </Badge>
                    </div>

                    {/* User Name and Email */}
                    <h5 className="mt-4 text-2xl font-bold">
                        {user?.displayName || "User Name"}
                    </h5>
                    <span className="text-sm font-light">
                        {user?.email || "user@example.com"}
                    </span>

                    {/* Apartment Information */}
                    <div className="w-full text-center md:text-left mt-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md p-1 md:p-6 shadow-inner">
                        <h6 className="mb-4 text-lg font-semibold text-purple-700 dark:text-purple-400">
                            Apartment Information
                        </h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p>
                                <strong>Accept Date:</strong>{" "}
                                <span className="text-gray-500 dark:text-gray-400">
                                    {
                                    !agreement?.requestDate ? "N/A" : (new Date(agreement?.requestDate).toLocaleDateString())
                                }
                                </span>
                            </p>
                            <p>
                                <strong>Floor:</strong>{" "}
                                <span className="text-gray-500 dark:text-gray-400">
                                    {!agreement?.floorNo ? "N/A" : agreement.floorNo}
                                </span>
                            </p>
                            <p>
                                <strong>Block:</strong>{" "}
                                <span className="text-gray-500 dark:text-gray-400">
                                    {!agreement?.blockName ? "N/A" : agreement.blockName}
                                </span>
                            </p>
                            <p>
                                <strong>Room No:</strong>{" "}
                                <span className="text-gray-500 dark:text-gray-400">
                                    {!agreement?.apartmentNo ? "N/A" : agreement.apartmentNo}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}