import LoginForm from "./components/LoginForm"

const Login = () => {
    return (
        <section
            style={{ background: `url('/assets/others/authentication.png')` }}
            className="py-6 md:py-0 min-h-screen bg-cover bg-no-repeat grid place-items-center"
        >
            <div className="grid md:grid-cols-2 py-4 h-auto w-[90%] md:h-[80vh] md:w-[80%] place-items-center"
                style={{ boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }}
            >
                <img src="/assets/others/authentication2.png" alt="" className="w-[70%]" />
                <LoginForm />
            </div>
        </section>
    )
}

export default Login