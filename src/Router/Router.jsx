import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import DashboardLayout from "../Layout/DashboardLayout"
import Error from '../Pages/Error'
import Home from '../Pages/Home.jsx'
import Apartment from '../Pages/Apartment'
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import Agreement from "../Pages/Agreement.jsx";
import Profile from "../Pages/Profile.jsx";
import AdminProfile from "../Pages/AdminProfile.jsx";
import Announcements from "../Pages/Announcements.jsx";
import AdminAnnouncements from "../Pages/AdminAnnouncements.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'apartment',
        element: <Apartment />
      },
      {
        path: 'agreement/:id',
        element: <Agreement />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <Profile />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'announcements',
        element: <Announcements />,
      },
      {
        path: 'admin-profile',
        element: <AdminProfile />
      },
      {
        path: 'admin-announcements',
        element: <AdminAnnouncements />
      },
    ]
  }
]);
export default router;