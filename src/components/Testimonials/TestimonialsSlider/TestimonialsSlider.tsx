import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { testimonialsData } from "./TestimonialsSlider.data"
import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"

export function TestimonialSlider() {

    const [t] = useTranslation("testimonials");

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autplaySpeed:  3000
    };

    return (
        <div>
            <Slider {...settings} className="h[380px] md:[300px] w-[270px] md:w-[550px]">
                {testimonialsData.map(({ id, name, testimonial, image }) => (
                    <div key={id}>
                        <Image src={`/assets/${image}`} alt={name} width="100" height="100" className="mx-auto" />
                        <h4 className="text-center">{name}</h4>
                        <div className="mt-5 text-center">{t(`Testimonials.test.${testimonial}`)}</div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
