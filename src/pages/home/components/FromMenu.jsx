import MenuItems from "../../../components/MenuItems"
import SectionHeading from "../../../components/SectionHeading"

const FromMenu = () => {
    return (
        <>
            <section className="w-11/12 md:container xl:w-8/12 mx-auto">
                <SectionHeading subHeading='Check it out' heading='FROM OUR MENU' />
                <MenuItems />
            </section>
            <section className="w-11/12 md:container xl:w-8/12 mx-auto bg-[#151515] my-16 md:my-32">
                <h3 className="font-semibold text-xl  md:text-5xl text-center text-white py-24">Call Us: +88 0192345678910</h3>
            </section>
        </>
    )
}

export default FromMenu