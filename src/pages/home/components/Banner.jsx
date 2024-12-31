import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";


const Banner = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeThumbIndex, setActiveThumbIndex] = useState(0);

    return (
        <div>
            <Swiper
                loop
                spaceBetween={10}
                navigation
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Thumbs, Navigation]}
                onSlideChange={(swiper) => setActiveThumbIndex(swiper.activeIndex)}
                className="main-swiper h-[35vh] sm:h-[45vh] lg:h-[85vh]"
            >
                <SwiperSlide>
                    <img
                        src="/assets/home/01.jpg"
                        alt="Slide 1"
                        className="h-full w-full object-center"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/assets/home/02.jpg"
                        alt="Slide 2"
                        className="h-full w-full object-center"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/assets/home/03.png"
                        alt="Slide 3"
                        className="h-full w-full object-center"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/assets/home/04.jpg"
                        alt="Slide 4"
                        className="h-full w-full object-center"
                    />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
                modules={[Thumbs]}
                className="thumbs-swiper w-11/12 md:w-1/2 mx-auto"
                style={{ marginTop: "10px" }}
            >
                <SwiperSlide>
                    <img
                        src="/assets/home/01.jpg"
                        alt="Thumbnail 1"
                        className={`h-20 w-full object-cover cursor-pointer ${activeThumbIndex === 0 ? 'border-4 border-blue-500' : ''}`}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/assets/home/02.jpg"
                        alt="Thumbnail 2"
                        className={`h-20 w-full object-cover cursor-pointer ${activeThumbIndex === 1 ? 'border-4 border-blue-500' : ''}`}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/assets/home/03.png"
                        alt="Thumbnail 3"
                        className={`h-20 w-full object-cover cursor-pointer ${activeThumbIndex === 2 ? 'border-4 border-blue-500' : ''}`}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/assets/home/04.jpg"
                        alt="Thumbnail 4"
                        className={`h-20 w-full object-cover cursor-pointer ${activeThumbIndex === 3 ? 'border-4 border-blue-500' : ''}`}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
