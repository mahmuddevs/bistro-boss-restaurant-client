import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6"
import { Link } from "react-router-dom"

const RegisterForm = () => {
    return (
        <div className="w-11/12 sm:w-7/12">
            <h3 className="text-[#151515] font-bold text-2xl md:text-4xl text-center mb-6">Register</h3>
            <form className="space-y-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#D1A054]/70 text-white">Sign Up</button>
                </div>
            </form>
            <div className="text-center space-y-4 mt-4">
                <p className="text-[#D1A054] text-xl font-medium">Already Registered? <Link to='/auth/login' className="font-bold hover:underline">Go to Login</Link></p>
                <p className="text-[#444444] font-normal text-base">Or sign up with</p>
                <div className="text-4xl flex gap-6 justify-center items-center">
                    <a href="" className="p-2 border-2 border-[#444444] rounded-full"><FaFacebookF /></a>
                    <a href="" className="p-2 border-2 border-[#444444] rounded-full"><FaGoogle /></a>
                    <a href="" className="p-2 border-2 border-[#444444] rounded-full"><FaGithub /></a>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm