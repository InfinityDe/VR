"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { socialNetworks } from './dataHeader'
import React from 'react'
import { useTranslation } from 'react-i18next'

// ... (importaciones existentes)

export function Header() {
    const [t, i18n] = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    const isSpanish = i18n.language === "es";

    return (
        <div className='absolute z-20 inline-block w-full -top-5 -md:top-10'>
            <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
                <div className="container flex justify-between mx-auto md:flex items-center">
                    <Link href="/">
                        <img
                            src='/assets/LOGO.png'
                            alt="Logo de la empresa"
                            style={{ width: '100px', height: '100px' }}
                            className="my-3 text-4xl text-center md:text-left mx-auto md:mx-0"
                        />
                    </Link>

                    <div className="flex items-center justify-center gap-7">
                        <div>
                            <button onClick={() => changeLanguage("es")} className={`text-${isSpanish ? 'black' : 'gray-500'} px-2 py-2 md:px-3 md:py-2`}>ES</button>
                            <button onClick={() => changeLanguage("en")} className={`text-${isSpanish ? 'gray-500' : 'black'} px-2 py-2 md:px-3 md:py-2`}>EN</button>
                        </div>
                        {socialNetworks.map(({ logo, src }) => (
                            <Link key={src} href={src} target="_blank" className="transition-all duration-300 hover:text-black text-gray-500">
                                {logo} 
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
