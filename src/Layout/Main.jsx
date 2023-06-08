import Home from "../components/pages/Home/Home/Home";
import Footer from "../components/pages/Shared/Footer/Footer";
import Navbar from "../components/pages/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div className="mx-10">
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;