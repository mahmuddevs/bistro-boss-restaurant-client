import SingleItem from "./SingleItem"

const MenuItems = () => {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
        </div>
    )
}

export default MenuItems