import { useState } from "react"
import { CiMenuFries } from "react-icons/ci"
import { IoMdClose } from "react-icons/io"
import { Link, NavLink } from "react-router-dom"
import { motion } from "motion/react"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const navItems = (
        <>
            <li className="flex justify-between">
                <NavLink>Home</NavLink>
                <IoMdClose onClick={() => { setNavOpen(false) }} className="block lg:hidden cursor-pointer" />
            </li>
            <li>
                <NavLink>Contact Us</NavLink>
            </li>
            <li>
                <NavLink>Dashboard</NavLink>
            </li>
            <li>
                <NavLink>Our Menu</NavLink>
            </li>
            <li>
                <NavLink>Our Shop</NavLink>
            </li>
        </>
    )
    return (
        <header className="z-50 fixed left-0 right-0 bg-[#151515]/50">
            <div className="w-11/12 md:container mx-auto flex justify-between items-center py-2 text-white">
                <Link to='/' className="font-cinzel">
                    <h4 className="font-black md:text-2xl">BISTRO BOSS</h4>
                    <p className="font-bold md:text-2xl tracking-wider">RESTAURANT</p>
                </Link>
                <nav>
                    <motion.ul className={`uppercase flex flex-col lg:flex-row lg:items-center gap-6 font-extrabols fixed lg:static top-0  w-56 h-screen lg:h-auto lg:w-auto p-8 bg-green-500 lg:bg-transparent`}
                        initial={{ right: '-14rem' }}
                        animate={{ right: navOpen ? '0' : '-14rem' }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    >
                        {navItems}
                        <li>
                            <img src="/assets/icon/cart.png" alt="" className="w-10" />
                        </li>
                        <li>
                            Sign Out
                        </li>
                    </motion.ul>
                    <div>
                        <CiMenuFries onClick={() => { setNavOpen(true) }} className="block lg:hidden" />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header