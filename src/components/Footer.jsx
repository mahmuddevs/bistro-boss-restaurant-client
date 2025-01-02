import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6"

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="grid md:grid-cols-2">
                <div className="bg-[#1F2937]">
                    <div className="flex gap-4 flex-col items-center md:items-end m-20">
                        <h3 className="text-3xl font-medium">CONTACT US</h3>
                        <div className="space-y-3 text-center md:text-right">
                            <p>123 ABS Street, Uni 21, Bangladesh</p>
                            <p>+88 123456789</p>
                            <p>Mon - Fri: 08:00 - 22:00</p>
                            <p>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#111827] h-full space-y-4">
                    <div className="m-20 space-y-6 items-center text-center md:text-start">
                        <h3 className="text-3xl font-medium">FOLLOW US</h3>
                        <p>Join us on social media</p>
                        <div className="flex gap-4 text-3xl justify-center md:justify-start">
                            <a href=""><FaFacebookF /></a>
                            <a href=""><FaInstagram /></a>
                            <a href=""><FaTwitter /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#151515] text-center py-4">
                Copyright © CulinaryCloud. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer