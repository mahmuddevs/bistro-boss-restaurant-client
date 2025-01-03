import MenuItems from "../../../components/MenuItems"
import SectionHeading from "../../../components/SectionHeading"

const Offer = () => {
    return (
        <section className="w-11/12 md:container xl:w-8/12 mx-auto my-14 md:my-24">
            <SectionHeading
                subHeading="Don't miss"
                heading="TODAY'S OFFER"
            />
            <MenuItems />
        </section>
    )
}

export default Offer