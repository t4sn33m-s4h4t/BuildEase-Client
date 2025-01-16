import { Card, Badge } from "flowbite-react";
import Title from '../Components/Shared/Title';
import { useAuth } from "../CustomHooks/useAuth";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function AdminProfile() {
    const { user } = useAuth();

    const stats = {
        totalRooms: 300,
        availableRooms: 50,
        users: 150,
        members: 50,
    };

    const roomData = [
        { name: "Available Rooms", value: stats.availableRooms },
        { name: "Unavailable Rooms", value: stats.totalRooms - stats.availableRooms },
    ];

    const userData = [
        { name: "Users", value: stats.users },
        { name: "Members", value: stats.members },
    ];

    const COLORS_ROOMS = ["#4CAF50", "#FF5722"];
    const COLORS_USERS = ["#2196F3", "#FFC107"];

    return (
        <>
            <Title Heading="Admin Profile" />
            <Card className="max-w-xl mb-5 mx-auto bg-gradient-to-br from-purple-50 to-indigo-50 text-black shadow-xl">
                <div className="flex flex-col items-center md:p-8 p-0">
                
                    <div className="relative">
                        <img
                            alt="Admin profile"
                            height="140"
                            src={user?.photoURL || "https://via.placeholder.com/140"}
                            width="140"
                            className="rounded-full border-4 border-white shadow-md"
                        />
                        <Badge
                            color="success"
                            className="absolute -bottom-2 right-0"
                        >
                            Admin
                        </Badge>
                    </div>
                    <h5 className="mt-4 text-2xl font-extrabold text-gray-800">
                        {user?.displayName || "Admin Name"}
                    </h5>
                    <span className="text-sm font-light text-gray-600">
                        {user?.email || "admin@example.com"}
                    </span>

                    <div className="w-full text-center md:text-left mt-6 bg-white text-gray-800 rounded-lg p-1 md:p-6 shadow-inner">
                        <h6 className="mb-4 text-lg font-semibold text-purple-700">
                            Stats Details
                        </h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p>
                                <strong>No. of Rooms:</strong> <span className="text-gray-500">{!stats?.totalRooms ? "N/A" : stats.totalRooms}</span>
                            </p>
                            <p>
                                <strong>Available Rooms:</strong> <span className="text-gray-500">{!stats?.availableRooms ? "N/A" : (100-(100*stats.availableRooms / stats.totalRooms)).toFixed(2)+'%'}</span>
                            </p>
                            <p>
                                <strong>No. of Users:</strong> <span className="text-gray-500">{!stats?.users ? "N/A" : stats.users}</span>
                            </p>
                            <p>
                                <strong>No. of Members:</strong> <span className="text-gray-500">{!stats?.members ? "N/A" : stats.members}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Card>

            <Title Heading="Statistics" />
            <div className=" flex flex-col lg:flex-row gap-5 justify-around mx-auto my-8">
                <div className="bg-white p-6 max-w-2xl lg:w-1/3 rounded-lg shadow-lg ">
                    <h3 className="text-xl font-bold text-center mb-4 text-purple-600">Room Statistics</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={roomData}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label={(entry) => `${entry.name}: ${entry.value}`}
                                dataKey="value"
                            >
                                {roomData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS_ROOMS[index % COLORS_ROOMS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-6 max-w-2xl lg:w-1/3 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-center mb-4 text-purple-600">User & Member Distribution</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={userData}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label={(entry) => `${entry.name}: ${entry.value}`}
                                dataKey="value"
                            >
                                {userData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS_USERS[index % COLORS_USERS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
}
