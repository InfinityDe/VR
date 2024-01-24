import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serviceData } from "./Slider.data";
import { RxArrowTopRight } from "react-icons/rx";
import React from "react";
import { useTranslation } from "react-i18next";


export function Slider() {
  const [t] = useTranslation("services");

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <SlickSlider {...settings} className="h-[240px] md:h-[340px] w-[270px] md:w-[550px]">
      {serviceData.map((item, index) => (
        <div key={index} >
          <div
            className="flex px-4 py-7 h-[200px] md:h-auto text-black rounded-lg cursor-pointer bg-gray-500 sm:flex-col gap-x-5 sm:gap-x-0 group hover:bg-black hover:text-white transition-all duration-300"
            style={{ marginRight: "10px" }}
          >
            <div className="mb-4 text-4xl transition-all duration-300 group-hover:text-white">
              {item.icon}
            </div>
            <div>
              <h3>{t(`Services.title.${item.title}`)}</h3>
              <p className="text-sm transition-all duration-300 group-hover:text-white">
                {t(`Services.description.${item.description}`)}
              </p>
            </div>
            <div className="text-3xl">
              <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-white" />
            </div>
          </div>
        </div>
      ))}
    </SlickSlider>
  );
}