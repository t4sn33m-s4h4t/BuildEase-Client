 
import { useEffect, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { toast } from "react-toastify";
import { useAuth } from "../CustomHooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import useApartmentId from "../CustomHooks/useApartmentId";
import Title from "../Components/Shared/Title";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";

const Agreement = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const { apartment } = useApartmentId(id);

  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    floorNo: "",
    blockName: "",
    apartmentNo: "",
    rent: "",
  });

  useEffect(() => {
    setFormData({
      ...formData,
      userName: user?.displayName,
      userEmail: user?.email,
      floorNo: apartment.floorNo,
      blockName: apartment.blockName,
      apartmentNo: apartment.apartmentNo,
      rent: apartment.rent,
    });
  }, [user, apartment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosSecure.post("/apartments/agreement", formData);
      toast.success("Agreement added successfully!");
      navigate('/');
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.error(error);
    }
  };

  return (
    <div className="py-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl my-10 mx-auto p-8 bg-white dark:bg-gray-800 rounded-md shadow-lg">
        <Title Heading="Add Apartment Agreement" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label value="User Name" className="mb-2 text-gray-800 dark:text-gray-300" />
              <TextInput
                id="userName"
                name="userName"
                type="text"
                value={formData.userName}
                disabled
                className="border-none focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              />
            </div>
            <div>
              <Label value="User Email" className="mb-2 text-gray-800 dark:text-gray-300" />
              <TextInput
                id="userEmail"
                name="userEmail"
                type="email"
                value={formData.userEmail}
                disabled
                className="border-none focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label value="Floor No" className="mb-2 text-gray-800 dark:text-gray-300" />
              <TextInput
                id="floorNo"
                name="floorNo"
                type="text"
                placeholder="Enter floor No"
                value={formData.floorNo}
                disabled
                className="border-none focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              />
            </div>
            <div>
              <Label value="Block Name" className="mb-2 text-gray-800 dark:text-gray-300" />
              <TextInput
                id="blockName"
                name="blockName"
                type="text"
                placeholder="Enter block name"
                value={formData.blockName}
                disabled
                className="border-none focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label value="Apartment No" className="mb-2 text-gray-800 dark:text-gray-300" />
              <TextInput
                name="apartmentNo"
                type="text"
                value={formData.apartmentNo}
                disabled
                className="border-none focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              />
            </div>

            <div>
              <Label value="Rent" className="mb-2 text-gray-800 dark:text-gray-300" />
              <TextInput
                name="rent"
                type="text"
                value={formData.rent + "$"}
                readOnly
                disabled
                className="border-none focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              />
            </div>

            <div>
              <Label value="Status" className="mb-2 text-gray-800 dark:text-gray-300" />
              <TextInput
                name="Status"
                type="text"
                value="Pending"
                readOnly
                disabled
                className="border-none focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800 text-white dark:bg-purple-800 dark:hover:bg-purple-900"
            >
              Agreement
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Agreement; 