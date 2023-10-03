import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)

    }

    return (
        <div>
            <Navber></Navber>
            <div className="hero min-h-[65vh] bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold py-4">Register Now !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6 flex items-center">
                                    <input className='bg-black px-7 py-2 text-white rounded-lg' type="submit" value="Register" />
                                </div>
                            </form>
                            <p>Alredy have an account <Link to='/login'><button className="btn btn-link">Login</button></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;