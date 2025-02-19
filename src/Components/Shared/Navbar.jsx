
import {
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar as Nv,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import logo from '../../assets/logo.png';
import DarkLogo from '../../assets/logo_dark.png'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaBuilding, FaInfoCircle } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { useAuth } from "../../CustomHooks/useAuth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import ThemeController from "../ThemeController";
import { IoLogInSharp } from "react-icons/io5";
import BackToTop from "../BackToTop";
import { BsFileEarmarkRuledFill } from "react-icons/bs";

const Navbar = () => {
  const { user, signOutUser, setUser } = useAuth();
  const [imgSrc, setImgSrc] = useState(user?.photoURL);
  useEffect(() => {
    setImgSrc(user?.photoURL);
  }, [user]);
  const navigate = useNavigate();

  async function logOut() {
    try {
      await signOutUser();
      setUser(null);
      toast.success("Logged Out Successfully!");
      navigate('/');
    } catch (error) {
      toast.error('Error logging out:', error.message);
    }
  }

  const menus = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />
    },
    {
      name: "Apartment",
      path: "/apartment",
      icon: <FaBuilding />
    },
    {
      name: "About",
      path: "/about",
      icon: <FaInfoCircle />
    }
  ];
  if (user && user.email) {
    menus.push(
      {
        name: "Terms",
        path: "/terms",
        icon: <BsFileEarmarkRuledFill />

      },
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
    );
  }
  
  const [isImageError, setIsImageError] = useState(false);
  return (
    <div className="px-2 md:px-12 lg:px-36 bg-purple-200 dark:bg-gray-800 sticky top-0 z-50">
      <ThemeController />
      <BackToTop />
      <Nv fluid rounded className="bg-transparent">
        <NavbarBrand as={Link} to="/">
        <img className="md:max-w-14 max-w-12 mr-1 md:mr-3 dark:hidden" src={logo} alt="" />
        <img className="md:max-w-14 max-w-12 mr-1 md:mr-3 hidden dark:block" src={DarkLogo} alt="" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white hidden lg:block">BuildEase</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          {
            user?.email ?
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  isImageError ? (
                    <FaUserCircle size={55} className="text-gray-400" />
                  ) : (
                    <img
                      alt="User profile"
                      height="55"
                      width="55"
                      src={user?.photoURL || "https://via.placeholder.com/120"}
                      className="rounded-full border-4 border-white shadow-md"
                      onError={() => setIsImageError(true)}
                    />
                  )
                }
              >
                <DropdownHeader>
                  <span className="block text-sm">{user?.displayName}</span>
                </DropdownHeader>
                <DropdownItem as={Link} to="/dashboard/profile">Profile</DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={logOut}>Log out</DropdownItem>
              </Dropdown>
              :
              <div className="flex items-center gap-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-purple-600 font-bold dark:text-purple-400'
                      : 'text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400'
                  }
                  to="/login"
                >
                  <div className="flex items-center gap-2">
                    <span><BiLogInCircle /></span>
                    <span>Login</span>
                  </div>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-purple-600 font-bold dark:text-purple-400'
                      : 'text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400'
                  }
                  to="/register"
                >
                  <div className="flex items-center gap-2">
                    <span><IoLogInSharp /></span>
                    <span>Register</span>
                  </div>
                </NavLink>
              </div>
          }
          <NavbarToggle className="ml-2" />
        </div>
        <NavbarCollapse>
          {
            menus.map((menu) => (
              <NavLink
                key={menu.path}
                to={menu.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-purple-600 font-bold dark:text-purple-400'
                    : 'text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400'
                }
              >
                <div className="flex items-center gap-2">
                  <span>{menu.icon}</span>
                  <span>{menu.name}</span>
                </div>
               
              </NavLink>
            ))
          }
        </NavbarCollapse>
      </Nv>
    </div>
  );
};

export default Navbar;