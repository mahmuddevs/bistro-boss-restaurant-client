import PageBanner from "../../components/PageBanner"
import ItemSection from "./components/ItemSection"
import Offer from "./components/Offer"

const Menu = () => {
    return (
        <div>
            <PageBanner
                heading='asjdh'
                subHeading='alskdkasjdlkasjlkdlaksd'
                mainBanner={true}
                img={"/assets/menu/banner3.jpg"}
            />
            <Offer />
            <ItemSection
                heading='asjdh'
                subHeading='alskdkasjdlkasjlkdlaksd'
                img={"/assets/home/chef-service.jpg"}

            />
            <ItemSection
                heading='asjdh'
                subHeading='alskdkasjdlkasjlkdlaksd'
                img={"/assets/home/chef-service.jpg"}

            />
            <ItemSection
                heading='asjdh'
                subHeading='alskdkasjdlkasjlkdlaksd'
                img={"/assets/home/chef-service.jpg"}

            />
        </div>
    )
}

export default Menu