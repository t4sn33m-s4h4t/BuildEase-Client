 
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import Title from "../Components/Shared/Title";
import useCoupons from "../CustomHooks/useCoupons.jsx";
import { useRef, useState } from "react";
import Modal from "../Components/ManageCoupons/Modal.jsx";
import useAxiosSecure from "../CustomHooks/useAxiosSecure.jsx";
import { toast } from "react-toastify";
import Loading from "./Loading.jsx";

export default function ManageCoupons() {
    const { coupons, refetch, isLoading } = useCoupons();
    const [openModal, setOpenModal] = useState(false);
    const titleInput = useRef(null);
    const descriptionInput = useRef(null);
    const percentageInput = useRef(null);
    const codeInput = useRef(null);

    const axiosSecure = useAxiosSecure();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const Coupon = {
            title: titleInput.current.value,
            description: descriptionInput.current.value,
            percentage: percentageInput.current.value,
            code: codeInput.current.value,
        };
        setOpenModal(false);
        try {
            await axiosSecure.post('/coupons', Coupon);
            toast.success("Coupon Added Successfully");
            refetch();
        } catch (error) {
            toast.error("Failed to Add Coupon");
            console.error(error);
        }
    };

    const expireCoupon = async (id) => {
        try {
            await axiosSecure.patch(`/coupon/${id}`);
            refetch();
            toast.info("Coupon Expired Successfully");
        } catch (error) {
            console.error(error);
            toast.error("Failed to Expire Coupon");
        }
    };

    const handleDelete = async (id) => {
        try {
            await axiosSecure.delete(`/coupon/${id}`);
            refetch();
            toast.success("Coupon Deleted Successfully");
        } catch (error) {
            console.error(error);
            toast.error("Failed to Delete Coupon");
        }
    };

    if (isLoading) return <Loading />;

    return (
        <div className="block bg-gray-100 dark:bg-gray-900 min-h-screen py-8">
            <Modal
                handleSubmit={handleSubmit}
                setOpenModal={setOpenModal}
                openModal={openModal}
                titleInput={titleInput}
                descriptionInput={descriptionInput}
                percentageInput={percentageInput}
                codeInput={codeInput}
            />
            <Title Heading="Manage Coupons" />
            <Button onClick={() => setOpenModal(true)} className="bg-purple-700 dark:bg-purple-700 mx-auto mb-10 hover:bg-purple-800">
                Add Coupon
            </Button>
            {coupons?.length ? (
                <div className="overflow-x-auto md:w-[70vw] w-[80vw] mx-auto p-0 md:p-3 lg:p-4">
                    <Table className="min-w-full table-auto bg-white dark:bg-gray-800 rounded-md shadow-lg">
                        <TableHead>
                            <TableHeadCell className="text-gray-800 dark:text-gray-300">Title</TableHeadCell>
                            <TableHeadCell className="text-gray-800 dark:text-gray-300">Description</TableHeadCell>
                            <TableHeadCell className="text-gray-800 dark:text-gray-300">Percentage</TableHeadCell>
                            <TableHeadCell className="text-gray-800 dark:text-gray-300">Code</TableHeadCell>
                            <TableHeadCell className="text-gray-800 dark:text-gray-300">Expire</TableHeadCell>
                            <TableHeadCell className="text-gray-800 dark:text-gray-300">Delete</TableHeadCell>
                        </TableHead>
                        <TableBody className="divide-y">
                            {coupons.map((coupon) => (
                                <TableRow
                                    key={coupon._id}
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {coupon.title}
                                    </TableCell>
                                    <TableCell className="text-gray-600 dark:text-gray-300">{coupon.description}</TableCell>
                                    <TableCell className="text-gray-600 dark:text-gray-300">{coupon.percentage}</TableCell>
                                    <TableCell className="text-gray-600 dark:text-gray-300">{coupon.code}</TableCell>
                                    <TableCell>
                                        <button
                                            disabled={coupon.expired}
                                            onClick={() => expireCoupon(coupon._id)}
                                            className={`${coupon.expired
                                                ? 'bg-yellow-800'
                                                : 'bg-yellow-400 hover:bg-yellow-500'
                                                } px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring focus:ring-yellow-300`}
                                        >
                                            {coupon.expired ? "Expired" : "Expire"}
                                        </button>
                                    </TableCell>
                                    <TableCell>
                                        <button
                                            onClick={() => handleDelete(coupon._id)}
                                            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
                                        >
                                            Delete
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            ) : (
                <p className="text-center text-gray-800 dark:text-gray-300">No Coupons Found</p>
            )}
        </div>
    );
} 