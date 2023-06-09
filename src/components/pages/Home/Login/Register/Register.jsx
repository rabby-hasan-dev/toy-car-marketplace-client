import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../Providers/AuthProvider";


const Register = () => {
    const { signIn, profilesUpdate } = useContext(AuthContext);


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        signIn(email, password)
            .then(result => {
                profilesUpdate(name, photo)
                    .then()
                    .catch(error => console.log(error.message))

                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="hero bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleRegister} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Your Photo link" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p>if you already have an account <Link to='/login' className="link text-primary">Login</Link>  </p>
                                <p>

                                </p>

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-info">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;