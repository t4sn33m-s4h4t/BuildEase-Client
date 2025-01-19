import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import Title from "../Components/Shared/Title";
import useCoupons from "../CustomHooks/useCoupons.jsx";
import { useRef, useState } from "react";
import Modal from "../Components/ManageCoupons/Modal.jsx";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../CustomHooks/useAxiosSecure.jsx";
import { toast } from "react-toastify";
import Loading from "./Loading.jsx";

export default function ManageCoupons() {

    const { coupons, refetch, isLoading } = useCoupons()
    const [openModal, setOpenModal] = useState(false);
    const titleInput = useRef(null);
    const descriptionInput = useRef(null);
    const percentageInput = useRef(null);
    const codeInput = useRef(null);
    
    const axiosSecure = useAxiosSecure()
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const Coupon = {
            title: titleInput.current.value,
            description: descriptionInput.current.value,
            percentage: percentageInput.current.value,
            code: codeInput.current.value,
        }
        setOpenModal(false)
        try {
            const res = await axiosSecure.post('/coupons', Coupon)
            toast.success("Coupon Added Successfully")
            refetch()
        } catch (error) {
            toast.error("Coupon Added Failed")
            console.error(error)
        }

        
    }
    const expireCoupon=async(id)=>{
        try {
            const req = await axiosSecure.patch(`/coupon/${id}`)
            refetch()
            toast.info("Coupon Expired Successfully");
           } catch (error) {
            console.error(error)
            toast.error("Failed to Expire Coupon")
           }
    }
    const handleDelete = async (id)=>{
       try {
        const req = await axiosSecure.delete(`/coupon/${id}`)
        refetch()
        toast.success("Coupon Deleted Successfully");
       } catch (error) {
        console.error(error)
        toast.error("Failed to Delete Coupon")
       }
    }

    if (isLoading) return <Loading />
    return (
        <div className="block ">
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
                <Button onClick={() => setOpenModal(true)} className="bg-purple-700 mx-auto mb-10">Add Coupon</Button>
            {
                coupons?.length ? 
                <div className="overflow-x-auto md:w-[70vw] w-[80vw] mx-auto p-0 md:p-3 lg:p-4">
                <Table className="min-w-full table-auto">
                    <TableHead>
                        <TableHeadCell>Title</TableHeadCell>
                        <TableHeadCell>Description</TableHeadCell>
                        <TableHeadCell>Percentage</TableHeadCell>
                        <TableHeadCell>Code</TableHeadCell>
                        <TableHeadCell>Expire</TableHeadCell>
                        <TableHeadCell>Delete</TableHeadCell>
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
                                        className={`${coupon.expired? 'bg-yellow-800'  : 'bg-yellow-400 hover:bg-yellow-500 '} px-4 py-2 text-sm font-medium text-white rounded-md  focus:outline-none focus:ring focus:ring-red-300`}
                                    >
                                        {coupon.expired ? "Expired" : "Expire"}
                                    </button>
                                </TableCell><TableCell>
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
            :
            <p className="text-center">No Coupons Found</p>
            }
        </div>
    );
}
