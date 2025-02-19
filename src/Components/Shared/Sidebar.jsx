 
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import useCheckAdmin from "../../CustomHooks/useCheckAdmin";
import { FaUser, FaBullhorn, FaMoneyCheckAlt, FaHistory, FaUserShield, FaUsers, FaFileContract } from "react-icons/fa";
import { MdPayment, MdAnnouncement, MdCardGiftcard } from "react-icons/md";
import logo from "../../assets/logo.png";
import { MdDashboard } from 'react-icons/md';
const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const { data } = useCheckAdmin();
    const userMenu = [ 
        { title: "My Profile", path: '/dashboard/profile', icon: <FaUser /> },
        { title: "Announcements", path: '/dashboard/announcements', icon: <FaBullhorn /> },
    ];

    const memberMenu = [
        { title: "My Profile", path: '/dashboard/profile', icon: <FaUser /> },
        { title: "Announcements", path: '/dashboard/announcements', icon: <FaBullhorn /> },
        { title: "Make Payment", path: '/dashboard/make-payment', icon: <MdPayment />, spacing: true },
        { title: "Payment History", path: '/dashboard/payment-history', icon: <FaHistory /> },
    ];

    const adminMenu = [
        {title: "Overview", path: '/dashboard/overview', icon: <MdDashboard />},
        { title: "Admin Profile", path: '/dashboard/admin-profile', icon: <FaUserShield /> },
        { title: "Manage Members", path: '/dashboard/manage-members', icon: <FaUsers /> },
        { title: "Make Announcements", path: '/dashboard/make-announcements', icon: <MdAnnouncement /> },
        { title: "Agreement Requests", path: '/dashboard/agreement-requests', icon: <FaFileContract /> },
        { title: "Manage Coupons", path: '/dashboard/manage-coupons', icon: <MdCardGiftcard /> },
        { title: "Announcements", path: '/dashboard/announcements', icon: <FaBullhorn />, spacing: true },
        { title: "Coupons", path: '/dashboard/coupons', icon: <FaMoneyCheckAlt /> },
    ];

    const Menus = (data?.userRole === 'admin') ? adminMenu : data?.userRole === 'member' ? memberMenu : userMenu;

    return (
        <div
            className={`fixed min-h-full top-0 z-30 bg-purple-950 dark:bg-gray-800 md:p-5 p-1 pt-8 w-12 ${open ? "md:w-72" : "md:w-20"
                } duration-300 relative`}
        >
            <BsArrowLeftShort
                className={`bg-white dark:text-purple-800 text-2xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer hidden md:block ${!open ? "md:rotate-180" : "md:rotate-0"
                    }`}
                onClick={() => setOpen(!open)}
            />
            <Link to="/dashboard" className={`mb-3 rubik-dirt-regular text-3xl font-bold text-dark text-center hidden ${!open ? 'md:hidden' : "md:block"} text-white`}>
                Dashboard
            </Link>
            <Link to="/dashboard">
                <img className={`mb-3 text-center bg-purple-50 rounded ${open && "md:hidden"}`} src={logo} alt="" />
            </Link>
            <div className="mt-10">
                {
                    Menus.map((menu) => (
                        <>
                            <hr className={` ${menu.spacing && 'my-4'} mx-auto duration-300 w-2/3 ${(menu.spacing && open) ? 'block' : 'hidden'}`} />
                            <NavLink
                                to={menu?.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-gray-300 text-md items-center flex gap-4 pointer p-2 rounded-md bg-gray-50 bg-opacity-15 dark:bg-gray-700 dark:bg-opacity-50"
                                        : "text-gray-300 text-md items-center flex gap-4 pointer p-2 rounded-md hover:bg-gray-50 hover:bg-opacity-15 dark:hover:bg-gray-700 dark:hover:bg-opacity-50"
                                }
                            >
                                <span>
                                    {menu.icon}
                                </span>
                                <span className={`text-base font-medium flex-1 scale-0 ${!open ? "md:scale-0" : "md:scale-100"} duration-300`}>
                                    {menu.title}
                                </span>
                            </NavLink>
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar; 