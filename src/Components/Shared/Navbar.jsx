import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar as Nv,
  NavbarBrand,
  NavbarCollapse,
  
  NavbarToggle,
} from "flowbite-react";
import logo from '../../assets/logo.png'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaBuilding } from 'react-icons/fa';
import { useAuth } from "../../CustomHooks/useAuth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { IoLogInSharp } from "react-icons/io5";



const Navbar = () => {

  const { user, signOutUser, setUser } = useAuth();
  const [imgSrc, setImgSrc] = useState(user?.photoURL);
  useEffect(() => {
    setImgSrc(user?.photoURL)
  }, [user])
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
    }
  ];
  
  
  const [isImageError, setIsImageError] = useState(false);
  return (
    <div className="px-1 md:px-20 lg:px-44 bg-purple-200 sticky top-0 z-50">
      <Nv fluid rounded className="bg-transparent">
        <NavbarBrand as={Link} to="/">
          <img className="md:max-w-14 max-w-12 mr-1 md:mr-3" src={logo} alt="" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">BuildEase</span>
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
                <DropdownItem as={Link} to="/dashboard">Dashboard</DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={logOut}>Log out</DropdownItem>
              </Dropdown>
              :
              <div className="flex items-center gap-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-purple-600 font-bold dark:text-purple-400'
                      : 'text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:purple-blue-400'
                  }
                  to="/login"
                >
                 <div className="flex items-center gap-2"> <span><BiLogInCircle /></span>
                 <span>Login</span></div>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-purple-600 font-bold dark:text-purple-400'
                      : 'text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:purple-blue-400'
                  }
                  to="/register"
                >
                   <div className="flex items-center gap-2"> <span><IoLogInSharp /></span>
                   <span>Register</span></div>
                </NavLink>
              </div>
          }
          <NavbarToggle className="ml-2" />
        </div>
        <NavbarCollapse>
          {
            menus.map((menu => <NavLink
              key={menu.path}
              to={menu.path}

              className={({ isActive }) =>
                isActive
                  ? 'text-purple-600 font-bold dark:text-purple-400'
                  : 'text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:purple-blue-400'
              }
            >
               <div className="flex items-center gap-2"> <span>{menu.icon}</span>
               <span>{menu.name}</span></div>
            </NavLink>

            ))
          }


        </NavbarCollapse>

      </Nv >
    </div >
  )
}

export default Navbar
