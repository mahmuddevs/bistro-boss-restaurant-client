import ProductCard from "../../../components/ProductCard"
import SectionHeading from "../../../components/SectionHeading"

const Recommend = () => {
    return (
        <section className="w-11/12 md:container xl:w-8/12 mx-auto">
            <SectionHeading subHeading='Should Try' heading='CHEF RECOMMENDS' />
            <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 gap-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    )
}

export default Recommend