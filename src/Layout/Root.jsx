import Navbar from '../Components/Shared/Navbar.jsx'
import Footer from '../Components/Shared/Footer.jsx'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className='px-1 md:px-20 lg:px-44'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root
