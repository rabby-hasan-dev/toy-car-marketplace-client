
import { Outlet } from "react-router-dom";
import Footer from "../components/pages/Shared/Footer/Footer";
import Navbar from "../components/pages/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div className="mx-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;