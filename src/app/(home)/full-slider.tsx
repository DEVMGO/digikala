import React from 'react'
import { WidgetsType } from './_types/types'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const FullSlider = ({ data }: {
    data: WidgetsType
}) => {
    console.log("data_slider => ", data?.data)
    return (
        <div className='w-full max-w-[121rem]'>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                loop={true}
                autoplay
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="w-full relative"
            >
                {!!data && data?.data?.map((item, index) => (
                    <SwiperSlide key={index} className="w-full h-full mt-2">
                        <Image
                            width={1936}
                            height={400}
                            src={item.image ?? ""}
                            alt={item.title}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default FullSlider