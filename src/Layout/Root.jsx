import Navbar from '../Components/Shared/Navbar.jsx';
import Footer from '../Components/Shared/Footer.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import Slider from '../Components/Home/Slider.jsx'; 

const Root = () => {
    const location = useLocation();  
    
    return (
        <div>
            <Navbar /> 
            {location.pathname === "/" && <Slider />}
            <div className='px-2 md:px-12 lg:px-36'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;