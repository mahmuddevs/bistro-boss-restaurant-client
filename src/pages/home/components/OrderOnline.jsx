import SectionHeading from "../../../components/SectionHeading"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

const OrderOnline = () => {
    return (
        <section className="w-11/12 md:container mx-auto my-14 lg:my-24">
            <SectionHeading subHeading='From 11:00am to 10:00pm' heading='ORDER ONLINE' />
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="mb-16">
                        <img
                            src="/assets/home/slide1.jpg"
                            alt="Slide 1"
                            className="w-full h-full"
                        />
                        <div className="text-white font-cinzel font-normal text-4xl text-center -mt-16">Salads</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-16">
                        <img
                            src="/assets/home/slide2.jpg"
                            alt="Slide 2"
                            className="w-full h-full"
                        />
                        <div className="text-white font-cinzel font-normal text-4xl text-center -mt-16">Soups</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-16">
                        <img
                            src="/assets/home/slide3.jpg"
                            alt="Slide 3"
                            className="w-full h-full"
                        />
                        <div className="text-white font-cinzel font-normal text-4xl text-center -mt-16">Pizzas</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-16">
                        <img
                            src="/assets/home/slide4.jpg"
                            alt="Slide 4"
                            className="w-full h-full"
                        />
                        <div className="text-white font-cinzel font-normal text-4xl text-center -mt-16">Desserts</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-16">
                        <img
                            src="/assets/home/slide5.jpg"
                            alt="Slide 5"
                            className="w-full h-full"
                        />
                        <div className="text-white font-cinzel font-normal text-4xl text-center -mt-16">Salads</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default OrderOnline