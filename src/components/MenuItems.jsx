import { useLocation } from "react-router-dom"
import SingleItem from "./SingleItem"

const MenuItems = ({ }) => {
    const { pathname } = useLocation()
    return (
        <>
            <div className="grid md:grid-cols-2 gap-6">
                <SingleItem />
                <SingleItem />
                <SingleItem />
                <SingleItem />
            </div>
            {
                pathname === '/' ? (
                    <button className="flex mx-auto mt-12 border-b-2 border-[#1f2937] rounded-lg py-2.5 px-6 hover:bg-[#D9D9D9] transition-colors duration-500">
                        View Full  Menu
                    </button>
                ) : (
                    <button className="flex mx-auto mt-12 border-b-2 border-[#1f2937] rounded-lg py-2.5 px-6 hover:bg-[#D9D9D9] transition-colors duration-500">
                        ORDER YOUR FAVOURITE FOOD
                    </button>
                )
            }
        </>
    )
}

export default MenuItems