import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";

// import Menu from "../pages/Menu/Menu/Menu";
// import Order from "../pages/Order/Order/Order";
// import Login from "../pages/Login/Login";
// import SignUp from "../pages/SignUp/SignUp";
// import PrivateRoute from "./PrivateRoute";
// import Secret from "../pages/Shared/Secret/Secret";
// import Dashboard from "../Layout/Dashboard";
// import Cart from "../pages/Dashboard/Cart/Cart";
// import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
// import AddItems from "../pages/Dashboard/AddItems/AddItems";
// import AdminRoute from "./AdminRoute";
// import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
// import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
// import Payment from "../pages/Dashboard/Payment/Payment";
// import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
// import UserHome from "../pages/Dashboard/UserHome/UserHome";
// import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);
