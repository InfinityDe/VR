import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/scrollbar';
import { serviceData } from "./Slider.data";
import { RxArrowTopRight } from "react-icons/rx";
import React from "react";
import { useTranslation } from "react-i18next";


export function Slider() {
    const [t] = useTranslation("services");


    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-[240px] md:h-[340px] w-[270px] md:w-[550px]">
            {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="flex px-6 py-8 h-[200px] md:h-auto text-black rounded-lg cursor-pointer bg-gray-500 sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-black hover:text-white transition-all duration-300">
                        <div className="mb-4 text-4xl transition-all duration-300 group-hover:text-white">{item.icon}</div>
                        <div>
                        <h3>{t(`Services.title.${item.title}`)}</h3>
                            <p className="text-sm transition-all duration-300 group-hover:text-white">{t(`Services.description.${item.description}`)}</p>
                        </div>
                        <div className="text-3xl">
                            <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-white" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
