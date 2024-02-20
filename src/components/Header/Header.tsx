"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import { socialNetworks } from './dataHeader'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

export function Header() {
    const [t, i18n] = useTranslation("nav");

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    const [showSearchInput, setShoeSearchInput] = useState(false)

    const handleLogoClick = () => {
        setShoeSearchInput(!showSearchInput)
    }

    const animateInput = (show: boolean) => {
        return show ? 'translateX(0)' : 'translateX(-100%)'
    }

    const isSpanish = i18n.language === "es";

    return (
        <div className='absolute z-20 inline-block w-full -top-1 bg-transparent'>
            <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
                <div className="container flex justify-between mx-auto md:flex">
                    <div className='flex items-center gap-7'>
                        <Image
                            src='/assets/LOGO.png'
                            width="100"
                            height="100"
                            alt="Logo de la empresa"
                            style={{ width: '50px', height: '50px' }}
                            className="my-3 text-4xl text-center md:text-left mx-auto md:mx-0"
                        />
                        <Image
                            src='/assets/icono_menu.png'
                            alt='logo de la empresa'
                            width="1000"
                            height="1000"
                            style={{ width: '30px', height: '30px' }}
                            className='my-5 text-4xl text-center md:text-left' />
                            <button className='relative overflow-hidden bg-transparent items-center border-none py-2 px-4 inline-block text-base uppercase cursor-pointer transform -skew-x-12 group hover:text-white -mr-5'>
                                <span className='relative z-10 inline-block transform skew-x-12 group-hover:skew-x-0 transition-transform'><p>{t("Nav.t1")}</p></span>
                                <span className='absolute top-0 bottom-full right-0 left-0 bg-black opacity-0 z-index--1 transition-all duration-500 group-hover:top-0 group-hover:bottom-0 group-hover:opacity-100'></span>
                            </button>
                            <button className='relative overflow-hidden bg-transparent items-center border-none py-2 px-1 inline-block text-base uppercase cursor-pointer transform -skew-x-12 group hover:text-white -mr-5'>
                                <span className='relative z-10 inline-block transform skew-x-12 group-hover:skew-x-0 transition-transform'><p>{t("Nav.t2")}</p></span>
                                <span className='absolute top-0 bottom-full right-0 left-0 bg-black opacity-0 z-index--1 transition-all duration-500 group-hover:top-0 group-hover:bottom-0 group-hover:opacity-100'></span>
                            </button>
                            <button className='relative overflow-hidden bg-transparent items-center border-none py-2 px-1 inline-block text-base uppercase cursor-pointer transform -skew-x-12 group hover:text-white -mr-5'>
                                <span className='relative z-10 inline-block transform skew-x-12 group-hover:skew-x-0 transition-transform'><p>{t("Nav.t3")}</p></span>
                                <span className='absolute top-0 bottom-full right-0 left-0 bg-black opacity-0 z-index--1 transition-all duration-500 group-hover:top-0 group-hover:bottom-0 group-hover:opacity-100'></span>
                            </button>
                            <button className='relative overflow-hidden bg-transparent items-center border-none py-2 px-1 inline-block text-base uppercase cursor-pointer transform -skew-x-12 group hover:text-white'>
                                <span className='relative z-10 inline-block transform skew-x-12 group-hover:skew-x-0 transition-transform'><p>{t("Nav.t4")}</p></span>
                                <span className='absolute top-0 bottom-full right-0 left-0 bg-black opacity-0 z-index--1 transition-all duration-500 group-hover:top-0 group-hover:bottom-0 group-hover:opacity-100'></span>
                            </button>
                            
                    </div>

                    <div className="flex items-center justify-center gap-7">
                        <div>
                            <button onClick={() => changeLanguage("en")} className={`text-${isSpanish ? 'gray-500' : 'white'} px-2 py-2 md:px-1 md:py-2`}>EN</button>
                            <button onClick={() => changeLanguage("es")} className={`text-${isSpanish ? 'white' : 'gray-500'} px-2 py-2 md:px-1 md:py-2`}>ES</button>
                        </div>
                        {socialNetworks.map(({ logo, id }) => (
                            <div key={id} className="container relative box-border w-auto">
                              <input
                                checked={true}
                                className="checkbox box-border w-30 h-30 absolute right-17 top-10 z-9 cursor-pointer appearance-none"
                                type="checkbox"
                              />
                              <div className="mainbox transition-all ease-in-out duration-300 box-border relative w-230 h-50 flex flex-row-reverse items-center justify-center rounded-3xl bg-black">
                                <div className="iconContainer box-border pt-5 w-auto transition-all duration-300 ease-in-out cursor-pointer relative flex items-center p-5 leanding-none capitalize" onClick={handleLogoClick}>
                                  {logo}
                                </div>
                                {showSearchInput && (
                                <input
                                  className="search_input box-border h-full bg-transparent border-none outline-none pb-1 pl-10 text-white transition-transform duration-1000 ease-in-out"
                                  placeholder={t("Nav.t6")}
                                  type="text"
                                  style={{ transform: animateInput(showSearchInput) }}
                                />
                                )}
                              </div>
                            </div>
                          
                        ))}
                        <div className='bg-primary font-bold py-2 px-8 rounded-3xl'>
                            <button className='text-sm'>{t("Nav.t5")}</button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

