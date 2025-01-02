import Title from "../../components/Title"
import Banner from "./components/Banner"
import Featured from "./components/Featured"
import FromMenu from "./components/FromMenu"
import HomeAbout from "./components/HomeAbout"
import OrderOnline from "./components/OrderOnline"
import Recommend from "./components/Recommend"
import Testimonials from "./components/Testimonials"

const Home = () => {
    return (
        <>
            <Title title='Home' />
            <Banner />
            <OrderOnline />
            <HomeAbout />
            <FromMenu />
            <Recommend />
            <Featured />
            <Testimonials />
        </>
    )
}

export default Home