const SectionHeading = ({ subHeading, heading }) => {
    return (
        <div className="font-normal flex flex-col items-center gap-4 mb-12">
            <h4 className="text-[#D99904] text-xl">---{subHeading}---</h4>
            <h2 className="text-[#151515] uppercase text-4xl border-y-4 border-y-[#E8E8E8] py-4 px-16">{heading}</h2>
        </div>
    )
}

export default SectionHeading