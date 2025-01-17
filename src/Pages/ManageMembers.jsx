import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import Title from "../Components/Shared/Title";
import useUsers from "../CustomHooks/useUsers.jsx";
import Loading from './Loading.jsx';
import { toast } from "react-toastify";
import useAxiosSecure from "../CustomHooks/useAxiosSecure.jsx";

export default function ManageMembers() {
  const { users, isLoading, refetch } = useUsers();
  const axiosSecure = useAxiosSecure()
  const removeMember = async (userEmail) => {
    try {
      const response = await axiosSecure.put(`/users/${userEmail}`);
      console.log(response)
      if (response.status === 200) {
        toast.success("User deleted successfully!");
        refetch() 
      } else {
        toast.error("Failed to delete user. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="block">
      <Title Heading="Manage Members" />
      <div className="overflow-x-auto w-[85vw] max-w-2xl mx-auto p-0 md:p-3 lg:p-4">
        <Table className="min-w-full table-auto">
          <TableHead>
            <TableHeadCell>User Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Role</TableHeadCell>
            <TableHeadCell>
             Remove
            </TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            {users.map((user) => (
              <TableRow
                key={user._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user.name}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">{user.email}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">{user.role}</TableCell>
                <TableCell>
                  <button
                    onClick={() => removeMember(user.email)} 
                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
                  >
                    Remove
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
