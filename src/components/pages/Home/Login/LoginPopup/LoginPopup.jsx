import { Link } from "react-router-dom";
import { FaBeer, FaGithub, FaGoogle, FaInbox } from 'react-icons/fa';

const LoginPopup = () => {
    return (
    <>
        <div className=" mt-2 flex justify-between ">
        <Link to='/login' >
            <button className="bg-blue-500 my-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                <span><FaInbox></FaInbox></span> SigIn With Email
            </button></Link> 
        <button  className="bg-red-500 my-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            <FaGoogle></FaGoogle> SigIn With Google
        </button> 
        

    </div>
    
    </>
    );
};

export default LoginPopup;