import Navbar from '../Components/Shared/Navbar.jsx'
import Footer from '../Components/Shared/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Shared/Sidebar.jsx'
const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className='flex-1 px-2 min-h-screen'>
                <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DashboardLayout
