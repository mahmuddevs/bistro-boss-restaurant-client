import PageBanner from "../../components/PageBanner"
import ShopItems from "./components/ShopItems"

const Shop = () => {
    return (
        <div>
            <PageBanner
                heading='OUR SHOP'
                subHeading='Would you like to try a dish?'
                mainBanner={true}
                img={"/assets/shop/banner2.jpg"}
            />
            <ShopItems />
        </div>
    )
}

export default Shop