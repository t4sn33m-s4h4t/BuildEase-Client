import Navbar from '../Components/Shared/Navbar.jsx'
import Footer from '../Components/Shared/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Shared/Sidebar.jsx'
import { useEffect, useState } from 'react'
const DashboardLayout = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Add or remove the 'dark' class from the body
        if (isDarkMode) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
    
        // Clean up the effect on unmount to prevent memory leaks
        return () => {
          document.body.classList.remove('dark'); // Ensure class is removed when component unmounts
        };
      }, [isDarkMode]); // The effect runs whenever isDarkMode changes
    
      const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
      };
    return (
        <div>
            <Navbar />
            
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
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
