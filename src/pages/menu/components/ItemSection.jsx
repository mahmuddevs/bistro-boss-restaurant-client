import MenuItems from "../../../components/MenuItems"
import PageBanner from "../../../components/PageBanner"



const ItemSection = ({ heading, subHeading, img, data }) => {
    return (
        <section className="my-7 md:my-12">
            <PageBanner
                heading={heading}
                subHeading={subHeading}
                img={img}
            />
            <div className="w-11/12 md:container xl:w-8/12 mx-auto my-14 md:my-24">
                <MenuItems />
            </div>
        </section>
    )
}

export default ItemSection