import Navbar from '../Components/Shared/Navbar.jsx'
import Footer from '../Components/Shared/Footer.jsx'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className='md:px-12 lg:px-36'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root
