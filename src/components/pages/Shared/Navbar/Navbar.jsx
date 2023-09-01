import { Link } from "react-router-dom";
import logo from '../../../../../public/logo.jpg'
import LoginPopup from "../../Home/Login/LoginPopup/LoginPopup";
import logBanner from '../../../../assets/login-banner.jpg'
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";


const Navbar = () => {
    const { users,logOut } = useContext(AuthContext);
    // console.log(users);


    const handleLogOut=()=>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error.message)
        })
    }

    const navItems = <>
        <li> <Link to='/' >Home</Link> </li>
        <li> <Link to='/blog' >Blog</Link></li>
        <li> <Link to='/allToys' >All Toys</Link> </li>

        {
            users?.email ? <>
                <li> <Link to='/myToys' >My Toys</Link> </li>
                <li> <Link to='/addToys' >Add Toy</Link> </li>
                <li><button onClick={handleLogOut}>Log out</button></li>
            </> : <li><button onClick={() => window.my_modal_3.showModal()}>Login</button></li>
        }




    </>
    return (
        <div className="navbar p-10 bg-base-200 text-base-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                < Link to='/'>

                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src={logo} />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end ">
                <label className="btn btn-ghost btn-circle avatar tooltip " data-tip={users?.email}>
                    <div className="w-10 rounded-full ">
                        <img src={users?.photoURL} />

                    </div>
                </label>
            </div>
            {/* login popup modal */}
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                    <div>
                        <img src={logBanner} alt="loginBanner" />
                        <h2 className="text-3xl font-medium">Please Choose Your Login Option!</h2>
                        <LoginPopup></LoginPopup>
                    </div>

                </form>
            </dialog>
        </div>
    );
};

export default Navbar;