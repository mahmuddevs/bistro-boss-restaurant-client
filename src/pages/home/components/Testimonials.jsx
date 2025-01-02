import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation } from 'swiper/modules';
import SectionHeading from '../../../components/SectionHeading';
import ReactStars from 'react-stars';
import { FaQuoteLeft } from 'react-icons/fa6';

const Testimonials = () => {
    return (
        <div className='w-full sm:w-11/12 md:container xl:w-8/12 mx-auto mb-16 md:mb-32'>
            <SectionHeading subHeading='What Our Clients Say' heading='TESTIMONIALS' />
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation]}
                className="mySwiper"
                fadeEffect={{ crossFade: true }}
            >
                <SwiperSlide>
                    <div className='flex flex-col items-center w-10/12 mx-auto'>
                        <ReactStars
                            count={5}
                            value={4}
                            edit={false}
                            half={true}
                            size={48}
                            color2={'#ffd700'}
                        />
                        <h3 className='text-8xl'><FaQuoteLeft /></h3>
                        <p className='text-center text-[#444444] font-normal text-base sm:text-xl mb-4'>"Every visit here feels like a special occasion. From the friendly staff to the delightful menu, everything is perfect. The desserts, in particular, are to die for!"</p>
                        <h4 className='text-[#CD9003] font-medium text-xl sm:text-3xl uppercase'>JANE DOE</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center w-10/12 mx-auto'>
                        <ReactStars
                            count={5}
                            value={5}
                            edit={false}
                            half={true}
                            size={48}
                            color2={'#ffd700'}
                        />
                        <h3 className='text-8xl'><FaQuoteLeft /></h3>
                        <p className='text-center text-[#444444] font-normal text-base sm:text-xl mb-4'>"This restaurant has become my go-to spot for family dinners. The ambiance is cozy, the service is exceptional, and the dishes are absolutely mouthwatering. Highly recommended!"</p>
                        <h4 className='text-[#CD9003] font-medium text-xl sm:text-3xl uppercase'>Emily Brown</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center w-10/12 mx-auto'>
                        <ReactStars
                            count={5}
                            value={3.5}
                            edit={false}
                            half={true}
                            size={48}
                            color2={'#ffd700'}
                        />
                        <h3 className='text-8xl'><FaQuoteLeft /></h3>
                        <p className='text-center text-[#444444] font-normal text-base sm:text-xl mb-4'>"The food here is simply exquisite! The flavors are perfectly balanced, and the presentation is top-notch. It's clear the chefs put a lot of love into their work. A true gem for food lovers!"</p>
                        <h4 className='text-[#CD9003] font-medium text-xl sm:text-3xl uppercase'>John Smith</h4>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonials