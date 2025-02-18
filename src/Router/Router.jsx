
import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../Layout/Root";
import DashboardLayout from "../Layout/DashboardLayout"
import Error from '../Pages/Error'
import Home from '../Pages/Home.jsx'
import About from "../Pages/About.jsx"
import Favorites from "../Pages/Favorites.jsx"
import MakePayment from '../Pages/MakePayment.jsx'
import Apartment from '../Pages/Apartment'
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import Agreement from "../Pages/Agreement.jsx";
import PaymentHistory from '../Pages/PaymentHistory.jsx'
import Profile from "../Pages/Profile.jsx";
import AdminProfile from "../Pages/AdminProfile.jsx";
import Announcements from "../Pages/Announcements.jsx";
import AdminAnnouncements from "../Pages/AdminAnnouncements.jsx";
import ManageMembers from "../Pages/ManageMembers.jsx";
import ManageCoupons from "../Pages/ManageCoupons.jsx";
import AgreementRequests from "../Pages/AgreementRequests.jsx";
import Coupons from "../Components/Home/Coupons.jsx";
import AdminProtectedRoute from "./AdminProtectedRoute.jsx";
import SecureRoute from "./SecureRoute.jsx"
import PrivateRoute from "./PrivateRoute.jsx"
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
        path: 'about',
        element: <About />
      },
      {
        path: 'favorites',
        element: <Favorites />
      },
      {
        path: 'agreement/:id',
        element: <Agreement />
      },
      {
        path: 'login',
        element: <SecureRoute><Login /></SecureRoute>, 
      },
      {
        path: 'register',
        element: <SecureRoute><Register /></SecureRoute>, 
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute> <DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: '',
        element: <Navigate to="/dashboard/profile"/> ,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'admin-profile',
        element: <AdminProtectedRoute> <AdminProfile /> </AdminProtectedRoute>
      },
      {
        path: 'announcements',
        element:  <Announcements />,
      },
      {
        path: 'make-announcements',
        element: <AdminProtectedRoute> <AdminAnnouncements /> </AdminProtectedRoute>,
      },
      {
        path: 'manage-members',
        element: <AdminProtectedRoute> <ManageMembers /> </AdminProtectedRoute>,
      },
      {
        path: 'coupons',
        element: <Coupons /> ,
      },
      {
        path: 'manage-coupons',
        element: <AdminProtectedRoute> <ManageCoupons /> </AdminProtectedRoute>,
      },
      {
        path: 'agreement-requests',
        element: <AdminProtectedRoute> <AgreementRequests /> </AdminProtectedRoute>,
      },
      {
        path: 'make-payment',
        element: <MakePayment />
      },
      {
        path: 'payment-history',
        element: <PaymentHistory />
      }
    ]
  }
]);
export default router;