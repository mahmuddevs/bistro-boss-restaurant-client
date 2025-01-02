const HomeAbout = () => {
    return (
        <section
            style={{ backgroundImage: `url('/assets/home/chef-service.jpg')` }}
            className={`w-11/12 md:container mx-auto my-14 lg:my-24 p-6 md:p-24 bg-cover bg-center bg-no-repeat`}
        >
            <div className='bg-white flex flex-col gap-4 items-center justify-center mx-auto text-center p-6 md:p-28'>
                <h3 className='font-cinzel font-normal text-5xl'>Bistro Boss</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </section>
    )
}

export default HomeAbout