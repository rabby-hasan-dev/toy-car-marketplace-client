import { Link } from "react-router-dom";
import { FaBeer, FaGithub, FaGoogle, FaInbox } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";

const LoginPopup = () => {
    const { googlePopup } = useContext(AuthContext);

    const handleGooglePopup = () => {
        googlePopup()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error.message));
    }

    return (
        <>
            <div className=" mt-2 flex justify-between ">
                <Link to='/login' >
                    <button className="bg-blue-500 my-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        <span><FaInbox></FaInbox></span> SigIn With Email
                    </button></Link>
                <button onClick={handleGooglePopup} className="bg-red-500 my-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    <FaGoogle></FaGoogle> SigIn With Google
                </button>


            </div>

        </>
    );
};

export default LoginPopup;