import RegisterForm from "./components/RegisterForm"

const Register = () => {
    return (
        <section
            style={{ background: `url('/assets/others/authentication.png')` }}
            className="py-6 md:py-0 min-h-screen bg-cover bg-no-repeat grid place-items-center"
        >
            <div className="grid md:grid-cols-2 py-4 place-items-center"
                style={{ boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }}
            >
                <img src="/assets/others/authentication2.png" alt="" className="w-[40%] md:w-[70%] md:col-start-2 md:row-start-1" />
                <RegisterForm className="md:col-start-1 md:row-start-2" />
            </div>
        </section>
    )
}

export default Register