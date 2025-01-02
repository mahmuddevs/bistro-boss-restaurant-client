import Title from "../../components/Title"
import Banner from "./components/Banner"
import FromMenu from "./components/FromMenu"
import HomeAbout from "./components/HomeAbout"
import OrderOnline from "./components/OrderOnline"
import Recommend from "./components/Recommend"

const Home = () => {
    return (
        <>
            <Title title='Home' />
            <Banner />
            <OrderOnline />
            <HomeAbout />
            <FromMenu />
            <Recommend />
        </>
    )
}

export default Home