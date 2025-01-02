import { div } from "motion/react-client"

const LoginForm = () => {
    return (
        <div className="w-11/12 sm:w-7/12">
            <h3 className="text-[#151515] font-bold text-4xl text-center mb-6">Login</h3>
            <form className="space-y-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="" className="input input-bordered" readOnly />
                    <a>Reload Capcha</a>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Type Capcha" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#D1A054]/70 text-white">Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm