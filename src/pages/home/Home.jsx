import Title from "../../components/Title"
import Banner from "./components/Banner"
import FromMenu from "./components/FromMenu"
import HomeAbout from "./components/HomeAbout"
import OrderOnline from "./components/OrderOnline"

const Home = () => {
    return (
        <>
            <Title title='Home' />
            <Banner />
            <OrderOnline />
            <HomeAbout />
            <FromMenu />
        </>
    )
}

export default Home