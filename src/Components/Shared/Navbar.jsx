import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar as Nv,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import logo from '../../assets/logo.png'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../CustomHooks/useAuth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";



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
      path: "/"
    },
    {
      name: "Apartment",
      path: "/apartment"
    }

  ]
  return (
    <div className="px-1 md:px-20 lg:px-44 bg-slate-200">
      <Nv fluid rounded className="bg-transparent">
        <NavbarBrand as={Link} href="/">
          <img className="md:max-w-14 max-w-12 mr-1 md:mr-3" src={logo} alt="" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">BuildEase</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img={imgSrc} rounded />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
            </DropdownHeader>
            <DropdownItem as={Link} to="/dashboard">Dashboard</DropdownItem>
            <DropdownDivider />
            <DropdownItem onClick={logOut}>Log out</DropdownItem>
          </Dropdown>
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
              {menu.name}
            </NavLink>

            ))
          }


        </NavbarCollapse>

      </Nv>
    </div>
  )
}

export default Navbar
