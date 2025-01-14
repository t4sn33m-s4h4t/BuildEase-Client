import { createBrowserRouter  } from "react-router-dom";
import Root from "../Layout/Root";
import Error from '../Pages/Error'
import Home from '../Pages/Home.jsx' 
import Apartment from '../Pages/Apartment' 
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
        }
      ]
    },
  ]);
  export default router;