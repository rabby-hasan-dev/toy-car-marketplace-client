import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home/Home/Home";
import Login from "../components/pages/Home/Login/Login/Login";
import Register from "../components/pages/Home/Login/Register/Register";
import LoginPopup from "../components/pages/Home/Login/LoginPopup/LoginPopup";
import Blog from "../components/pages/Home/Blog/Blog";
import MyToys from "../components/pages/Home/MyToys/MyToys";
import AddToys from "../components/pages/Home/AddToys/AddToys";
import AllToy from "../components/pages/Home/AllToys/AllToy";
import PrivateRoutes from "./PrivateRoutes";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'loginPopup',
          element:<LoginPopup></LoginPopup>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'allToys',
          element:<AllToy></AllToy>
        },
        {
          path:'myToys',
          element:<PrivateRoutes><MyToys></MyToys></PrivateRoutes>
        },
        {
          path:'addToys',
          element:<AddToys></AddToys>
        },
      ]
    },
  ]);

  export default router;