import Sidebar from '../Components/Shared/Sidebar'
import Navbar from '../Components/Shared/Navbar.jsx'
import Footer from '../Components/Shared/Footer.jsx'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <div>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
