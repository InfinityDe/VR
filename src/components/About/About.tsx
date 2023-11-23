"use client"
import { motionTransitionsAbout } from "@/utils/motionTransitions";
import { Avatar } from "../Avatar";
import { motion } from 'framer-motion'
import { dataAboutSkills, dataCounter } from "./About.data";
import CountUp from "react-countup";
import { useState } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";

export function About() {
    const [index, setIndex] = useState(0)

    return (
        <div className="items-center min-h-screen px-6 mx-auto align-middle mt-36 md:mt-0 md:flex md:max-w-4xl pb-36 md:pb-0">
            <Avatar />
            <motion.div
                initial={motionTransitionsAbout.initial}
                animate={motionTransitionsAbout.animate}
                transition={motionTransitionsAbout.transition}
            >
                <h1 className="mb-6 md:text-4xl text-black">Exelencia a tu Servicio</h1>
                <p className="text-black text-xl">En Infinity transformamos tus idead en realidad. Somos inovadores, audaces y apasionados en nuestro trabajo. Únete a nosotros en el camino hacia el éxito en línea.</p>

                <div className="grid justify-between grid-cols-2 gap-3 my-8 md:flex md:grid-cols-4 md:gap-6">
                    {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
                        <div key={id} className={`${lineRight && 'ltr'}`}>
                            <div className={`${lineRight && 'px-4 border-2 border-transparent md:border-e-black'} ${lineRightMobile && 'border-e-black'}`}>
                                <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-black">
                                    + <CountUp end={endCounter} start={0} duration={4} />
                                </p>
                                <p className="text-xs uppercase max-w-[100px] text-black">
                                    {text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col mt-10 mb-3 md:flex-row justify-evenly md:mt-15 md:mb-5">
                    {dataAboutSkills.map((dataText, itemIndex) => {
                        const { id, text } = dataText;

                        return (
                            <div key={id}
                                className={`${
                                    index === id 
                                    ? 'duration-300 transition-all border-black bg-black text-white' 
                                    : 'border-grey-500 bg-white text-black'} 
                                        cursor-pointer md:text-lg relative px-2 md:px-8 py-4 border-2 rounded-xl flex justify-between items-center my-3 text-grey-500`}
                                onClick={() => setIndex(itemIndex)}
                            >
                                <p className="mr-4 text-md md:text-lg">{text}</p>
                                {index === id ? (
                                    <BiDownArrow classname="transform:rotate-90 transition-0.9" />
                                ) : (
                                    <BiLeftArrow />
                                )}
                            </div>
                        )
                    })}
                </div>
                <div className="max-w-4xl p-4 mx-auto bg-black/70 rounded-xl">
                    {dataAboutSkills[index].skills.map((items, index) => (
                        <div key={index} className="flex justify-center max-w-100 gap-4 mx-auto">
                            <span>{items.title} {" "} </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div> 
    )
}