import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6"
import { Link } from "react-router-dom"

const LoginForm = () => {
    return (
        <div className="w-11/12 sm:w-7/12">
            <h3 className="text-[#151515] font-bold text-2xl md:text-4xl text-center mb-6">Login</h3>
            <form className="space-y-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="" className="input input-bordered" readOnly />
                    <a className="hover:underline hover:text-blue-600 cursor-pointer">Reload Capcha</a>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Type Capcha" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#D1A054]/70 text-white">Sign In</button>
                </div>
            </form>
            <div className="text-center space-y-4 mt-4">
                <p className="text-[#D1A054] text-xl font-medium">New here? <Link to='/auth/register' className="font-bold hover:underline">Create a New Account</Link></p>
                <p className="text-[#444444] font-normal text-base">Or sign in with</p>
                <div className="text-4xl flex gap-6 justify-center items-center">
                    <a href="" className="p-2 border-2 border-[#444444] rounded-full"><FaFacebookF /></a>
                    <a href="" className="p-2 border-2 border-[#444444] rounded-full"><FaGoogle /></a>
                    <a href="" className="p-2 border-2 border-[#444444] rounded-full"><FaGithub /></a>
                </div>
            </div>
        </div>
    )
}

export default LoginForm