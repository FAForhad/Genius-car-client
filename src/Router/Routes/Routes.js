import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivarteRoute from "../PrivateRoute/PrivarteRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/checkout/:id',
        loader: ({ params }) => fetch(`https://genius-car-server-jade.vercel.app/services/${params.id}`),
        element: <CheckOut></CheckOut>,
      },
      {
        path: '/orders',
        element: <PrivarteRoute><Orders></Orders></PrivarteRoute>,
        loader: ({ params }) => fetch(`https://genius-car-server-jade.vercel.app/services`)
      }
    ]
  }
]);

export default router;