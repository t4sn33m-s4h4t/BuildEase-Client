 
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import Title from "../Components/Shared/Title";
import useAgreements from "../CustomHooks/useAgreements";
import useAxiosSecure from '../CustomHooks/useAxiosSecure';
import { toast } from "react-toastify";

export default function AgreementRequests() {
    const { agreements, refetch } = useAgreements();
    const axiosSecure = useAxiosSecure();

    const handleAccept = async (id, userName) => {
        try {
            await axiosSecure.put(`/agreement/${id}`, { action: "accept" });
            toast.success("Agreement accepted successfully!");
            await axiosSecure.post("/announcements", {
                title: `${userName} has just joined our building`,
                description: `Welcome ${userName}, Now you are a member of our Building`,
            });
            refetch();
        } catch (error) {
            console.error("Failed to accept the agreement:", error.response?.data?.message || error.message);
            toast.error("An error occurred while accepting the agreement.");
        }
    };

    const handleReject = async (id) => {
        try {
            await axiosSecure.put(`/agreement/${id}`, { action: "reject" });
            toast.success("Agreement rejected successfully!");
            refetch();
        } catch (error) {
            console.error("Failed to reject the agreement:", error.response?.data?.message || error.message);
            toast.error("An error occurred while rejecting the agreement.");
        }
    };

    return (
        <div className="block bg-gray-100 dark:bg-gray-900 min-h-screen py-8">
            <Title Heading="Agreement Requests" />
            {agreements.length ? (
                <div className="overflow-x-auto md:w-[70vw] w-[80vw] mx-auto p-0 md:p-3 lg:p-4">
                    <Table className="min-w-full table-auto bg-white dark:bg-gray-800 rounded-md shadow-lg">
                        <TableHead>
                            <TableHeadCell className="text-gray-800 dark:text-gray-300">User Name</TableHeadCell>
                            <TableHeadCell className="text-gray-800 dark:text-gray-300">User Email</TableHeadCell>
                            <TableHeadCell className="text-gray-800 dark:text-gray-300">Floor No</TableHeadCell>
                            <TableHeadCell className="text-gray-800 dark:text-gray-300">Block Name</TableHeadCell>
                            <TableHeadCell className="text-gray-800 dark:text-gray-300">Room No</TableHeadCell>
                            <TableHeadCell className="text-gray-800 dark:text-gray-300">Rent</TableHeadCell>
                            <TableHeadCell className="text-gray-800 dark:text-gray-300">Request Date</TableHeadCell>
                            <TableHeadCell className="text-gray-800 dark:text-gray-300">Actions</TableHeadCell>
                        </TableHead>
                        <TableBody className="divide-y">
                            {agreements.map((agreement) => (
                                <TableRow
                                    key={agreement._id}
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {agreement.userName}
                                    </TableCell>
                                    <TableCell className="text-gray-600 dark:text-gray-300">{agreement.userEmail}</TableCell>
                                    <TableCell className="text-gray-600 dark:text-gray-300">{agreement.floorNo}</TableCell>
                                    <TableCell className="text-gray-600 dark:text-gray-300">{agreement.blockName}</TableCell>
                                    <TableCell className="text-gray-600 dark:text-gray-300">{agreement.apartmentNo}</TableCell>
                                    <TableCell className="text-gray-600 dark:text-gray-300">{agreement.rent}</TableCell>
                                    <TableCell className="text-gray-600 dark:text-gray-300">
                                        {new Date(agreement.requestDate).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell className="flex space-x-2">
                                        <button
                                            onClick={() => handleAccept(agreement._id, agreement.userName)}
                                            className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                                        >
                                            Accept
                                        </button>
                                        <button
                                            onClick={() => handleReject(agreement._id)}
                                            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
                                        >
                                            Reject
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            ) : (
                <p className="text-center text-gray-800 dark:text-gray-300">No Data Found</p>
            )}
        </div>
    );
} 