const SingleItem = ({ }) => {
    return (
        <div className='flex gap-6'>
            <img src='/assets/menu/dessert-bg.jpeg' alt=""
                className='h-24 w-28 rounded- rounded-full rounded-ss-none'
            />
            <div>
                <h4 className='text-[#151515] text-xl'>ROAST DUCK BREAST ------------------</h4>
                <p className='text-[#737373]'>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
            </div>
            <div className="text-[#BB8506] font-normal text-xl">
                $14.5
            </div>
        </div>
    )
}

export default SingleItem