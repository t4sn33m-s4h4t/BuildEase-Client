import { useState } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaBuilding, FaSearch } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard" },
        { title: "Pages" },
        { title: "Media", spacing: true },
        {
            title: "Projects",
            submenu: true,
            submenuItems: [
                { title: "Submenu 1" },
                { title: "Submenu 2" },
                { title: "Submenu 3" },
            ],
        },
        { title: "Analytics" },
        { title: "Inbox" },
        { title: "Profile", spacing: true },
        { title: "Setting" },
        { title: "Logout" },
    ];
    return (
        <div
            className={`bg-purple-950 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"
                } duration-300 relative`}
        >
            <BsArrowLeftShort
                className={`bg-white text-dark-purple text-2xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"
                    }`}
                onClick={() => setOpen(!open)}
            />
            <div className="inline-flex">
                <FaBuilding  className={`bg-amber-300 mr-2 text-3xl rounded cursor-pointer block float-left ${open && "rotate-[360deg]"} duration-300`}>
                </FaBuilding>
                <p className={`text-white origin-left font-medium text-2xl ${!open && "scale-0"} duration-300`}>BuildEase</p>
            </div>
            <div className={`flex items-center  item-center rounded-md bg-gray-50 bg-opacity-15 mt-6 ${open ? 'px-4 py-1' : 'px-2 py-2'} `}>
                <FaSearch className={`text-white ${open && 'mr-2'} text-lg block float-left cursor-pointer`} />
                <input type="text" placeholder="Search" className={`border-0 focus:ring-0 text-base focus:border-0 bg-transparent w-full text-white outline-none ${!open && "hidden"}`} />
            </div>
            <div className="mt-2">
                {
                    Menus.map((menu, i) => (
                        <>
                            <hr className={` ${menu.spacing && 'mt-4'} duration-300 w-2/3 ${(menu.spacing && open) ? 'block' : 'hidden'}`} />
                            <Link key={i} className={` text-gray-300 text-md items-center flex gap-4 pointer p-2 rounded-md hover:bg-gray-50 hover:bg-opacity-15 ${menu.spacing ? 'mt-4' : 'mt-1'}`}>
                                <span>
                                    <RiDashboardFill />
                                </span>
                                <span className={`text-base font-medium flex-1 ${!open && "scale-0"} duration-300`}>
                                    {menu.title}
                                </span>
                            </Link>
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;