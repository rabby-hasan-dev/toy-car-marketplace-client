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
import ErrorPage from "../components/pages/Shared/Error/ErrorPage";
import SingleToyDetails from "../components/pages/Home/SingleToyDetails/SingleToyDetails";
import SingleToy from "../components/pages/Home/AllToys/SingleToy/SingleToy";
import SingleMyToy from "../components/pages/Home/MyToys/SingleMyToy";
import UpdateToy from "../components/pages/Home/MyToys/UpdateToy/UpdateToy";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'loginPopup',
        element: <LoginPopup></LoginPopup>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'allToys',
        element: <AllToy></AllToy>,
        loader: () => fetch('https://toy-car-server-rabby65301-gmailcom.vercel.app/allToy')
      },
      {
        path: 'singleToyDetails/:id',
        element: <PrivateRoutes><SingleToy></SingleToy></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://toy-car-server-rabby65301-gmailcom.vercel.app/allToy/${params.id}`)
      },
      {
        path: 'singleToy/:id',
        element: <PrivateRoutes>
          <SingleToyDetails></SingleToyDetails>
        </PrivateRoutes>,
        loader: ({ params }) => fetch(`https://toy-car-server-rabby65301-gmailcom.vercel.app/singleToy/${params.id}`)
      },
      {
        path: 'myToys',
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>,
      },
      {
        path: 'singleMyToys/:id',
        element: <SingleMyToy></SingleMyToy>,
        loader: ({ params }) => fetch(`https://toy-car-server-rabby65301-gmailcom.vercel.app/allToy/${params.id}`)
      },
      {
        path: 'addToys',
        element: <AddToys></AddToys>
      },
      {
        path: 'updateToy/:id',
        element:<UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`https://toy-car-server-rabby65301-gmailcom.vercel.app/allToy/${params.id}`)
        
      },
    ]
  },
]);

export default router;