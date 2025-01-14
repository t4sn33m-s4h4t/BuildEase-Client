import { createBrowserRouter  } from "react-router-dom";
import Root from "../Layout/Root";
import Error from '../Pages/Error'
import Home from '../Pages/Home.jsx' 
import Apartment from '../Pages/Apartment' 
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
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
          path: 'login',
          element: <Login />
        },
        {
          path: 'Register',
          element: <Register />
        },
      ]
    },
  ]);
  export default router;