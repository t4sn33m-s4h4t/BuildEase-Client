import Sidebar from '../Components/Shared/Sidebar';
import Navbar from '../Components/Shared/Navbar.jsx';
import Footer from '../Components/Shared/Footer.jsx';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="  dark:bg-gray-900 text-gray-900 dark:text-gray-300 min-h-screen">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-4">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;