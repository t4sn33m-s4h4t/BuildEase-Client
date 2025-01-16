import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const isAdmin = true;
    const userMenu = [
        { title: "My Profile", path: '/dashboard/profile' },
        { title: "Announcements", path: '/dashboard/announcements' },
    ];
    const memberMenu = [
        { title: "My Profile", path: '/dashboard/profile' },
        { title: "Make Payment", path: '/dashboard/make-payment' },
        { title: "Payment History", path: '/dashboard/payment-history' },
        { title: "Announcements", path: '/dashboard/announcements' },
    ];
    const adminMenu = [
        { title: "Admin Profile", path: '/dashboard/profile' },
        { title: "Manage Members", path: '/dashboard/manage-members' },
        { title: "Make Announcements", path: '/dashboard/make-announcements' },
        { title: "Agreement Requests", path: '/dashboard/agreement-requests' },
        { title: "Manage Coupons", path: '/dashboard/manage-coupons' },
        { title: "Announcements", path: '/dashboard/announcements', spacing: true },
        { title: "Coupons", path: '/dashboard/coupons' },
    ];
    const Menus = adminMenu
    // { title: "Media", spacing: true },  
    return (
        <div
            className={`fixed min-h-full top-0 z-30 bg-purple-950  md:p-5 p-1 pt-8 w-12 ${open ? "md:w-72" : "md:w-20"
                } duration-300 relative`}
        >
            <BsArrowLeftShort
                className={`bg-white text-dark-purple text-2xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer hidden md:block ${!open ? "md:rotate-180" : "md:rotate-0"
                    }`}
                onClick={() => setOpen(!open)}
            />
            <h2 className={`mb-3 rubik-dirt-regular text-3xl font-bold text-dark text-center hidden ${!open ? 'md:hidden' : "md:block"} text-white`}>
                Dashboard
            </h2>
            <div className="mt-12">
                {
                    Menus.map((menu, i) => (
                        <>
                            <hr className={` ${menu.spacing && 'my-4'} duration-300 w-2/3 ${(menu.spacing && open) ? 'block' : 'hidden'}`} />
                            <NavLink
                                to={menu?.path} key={i}
                                className={({ isActive }) =>
                                    isActive ? "text-gray-300 text-md items-center flex gap-4 pointer p-2 rounded-md hover:bg-gray-50 hover:bg-opacity-15 bg-gray-50 bg-opacity-15"
                                        : "text-gray-300 text-md items-center flex gap-4 pointer p-2 rounded-md hover:bg-gray-50 hover:bg-opacity-15"
                                }
                            >
                                <span>
                                    <RiDashboardFill />
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