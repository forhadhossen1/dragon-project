
import Header from '../Shared/Header/Header';
import Navber from '../Shared/Navber/Navber';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'))
    }


    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="hero min-h-[65vh] bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold py-4">Login Your Account</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
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
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6 flex items-center">

                                    <input className='bg-black px-7 py-2 text-white rounded-lg'  type="submit" value="Login" />
                                    {/* <Link to=''>
                                        <button className="btn bg-black border-none text-white px-7">Login</button>
                                    </Link> */}
                                </div>
                            </form>
                            <p>Do not have an account <Link to='/register'><button className="btn btn-link">Register</button></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;