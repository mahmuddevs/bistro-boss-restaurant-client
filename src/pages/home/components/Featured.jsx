import SectionHeading from "../../../components/SectionHeading"

const Featured = () => {
    return (
        <div style={{ backgroundColor: 'rgba(21, 21, 21, 0.7)', backgroundImage: `url('/assets/home/featured.jpg')`, backgroundBlendMode: 'overlay' }}
            className="bg-cover bg-center bg-no-repeat my-16 md:my-32 py-16 md:py-32"
        >
            <section className="w-11/12 md:container xl:w-8/12 mx-auto">
                <SectionHeading subHeading='Check it Out' heading='FEATURED DISH FROM OUR MENU' textWhite={true} />
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <img src="/assets/home/featured.jpg" alt="" />
                    <div className="text-white space-y-4">
                        <h5 className="text-xl">March 20, 2023</h5>
                        <h4 className="text-2xl">WHERE CAN I GET SOME?</h4>
                        <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="border-b-2 border-white text-white rounded-lg py-2.5 px-6 hover:bg-[#D9D9D9]/30 transition-colors duration-500">Read More</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Featured