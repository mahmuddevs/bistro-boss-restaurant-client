const RecommendedCard = () => {
    return (
        <div className="card p-0 rounded-none drop-shadow-sm">
            <figure className="rounded-none">
                <img
                    src="/assets/menu/salad-bg.jpg"
                    alt="Pizza"
                    className="rounded-none" />
            </figure>
            <div className="card-body bg-[#F3F3F3] items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="flex mx-auto border-b-2 bg-[#E8E8E8] text-[#BB8506] border-[#BB8506] rounded-lg py-2.5 px-6 hover:bg-[#1F2937] hover:border-none transition-colors duration-500">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default RecommendedCard