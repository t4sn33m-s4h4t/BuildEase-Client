 
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Title from '../Components/Shared/Title';
import useStat from '../CustomHooks/useStat';
const Overview = () => {
    const { stats } = useStat();
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
    <div>
      <Title Heading="Statistics" />
            <div className="flex flex-col lg:flex-row gap-5 justify-around mx-auto my-8">
                <div className="bg-white dark:bg-gray-800 p-6 max-w-2xl lg:w-1/3 rounded-md shadow-lg">
                    <h3 className="text-xl font-bold text-center mb-4 text-purple-600 dark:text-purple-400">Room Statistics</h3>
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

                <div className="bg-white dark:bg-gray-800 p-6 max-w-2xl lg:w-1/3 rounded-md shadow-lg">
                    <h3 className="text-xl font-bold text-center mb-4 text-purple-600 dark:text-purple-400">User & Member Distribution</h3>
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
    </div>
  )
}

export default Overview
