import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import Title from "../Components/Shared/Title";
import useUsers from "../CustomHooks/useUsers.jsx"; // Import your custom hook

export default function ManageMembers() {
  let { users, deleteUser } = useUsers(); // Assuming deleteUser is provided in your custom hook

  // Temporary hardcoded data for demonstration
  users = [
    {
      name: "John Doe",
      _id: "user1",
      email: "john@example.com",
      role: "Admin",
    },
    {
      name: "Jane Smith",
      _id: "user2",
      email: "jane@example.com",
      role: "Editor",
    },
    {
      name: "Mark Johnson",
      _id: "user3",
      email: "mark@example.com",
      role: "Viewer",
    },
    {
      name: "Emily Davis",
      _id: "user4",
      email: "emily@example.com",
      role: "Moderator",
    },
  ];

  return (
    <div className="overflow-x-auto mx-auto max-w-screen-lg p-4">
      <Title Heading="Manage Members" />
      <Table className="min-w-full table-auto">
        <TableHead>
            <TableHeadCell>User Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Role</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Delete</span>
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
                  onClick={() => deleteUser(user._id)} // Call the delete function
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
  );
}
