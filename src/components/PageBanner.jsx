const PageBanner = ({ heading, subHeading, mainBanner = false, img }) => {
    return (
        <section
            style={{ backgroundImage: `url(${img})` }}
            className="h-[35vh] sm:h-[45vh] lg:h-[85vh] grid place-items-center bg-cover bg-center bg-no-repeat">
            <div className="bg-[#151515]/60 w-11/12 md:w-8/12 mt-10 text-center text-white space-y-4 md:space-y-8 py-6 md:py-8 lg:py-20 px-8">
                <h2 className={`font-bold font-cinzel text-3xl ${mainBanner ? 'md:text-4xl lg:text-7xl' : 'md:text-3xl lg:text-5xl'} `}>{heading}</h2>
                <p className={`font-semibold text-base  ${mainBanner ? 'md:text-lg lg:text-2xl' : ''}`}>{subHeading}</p>
            </div>
        </section>
    )
}

export default PageBanner