import { useState, useEffect } from 'react';
import { fadeIn } from '@/utils/motionTransitions';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import { Header } from '@/components/Header'
import React from 'react';
import { useTranslation } from 'react-i18next'



export function Introduction() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isFormSubmited, setFormSubmited] = useState(false)

  const openContactModal = () => {
    setContactModalOpen(true);
  }

  const closeContactModal = () => {
    setFormSubmited(false)
    setContactModalOpen(false);
  }

  const [state, handleSubmit] = useForm("mzbllbzg");
  useEffect(() => {
    if (state.succeeded) {
      setFormSubmited(true);
    }
  }, [state.succeeded])

  const [t] = useTranslation ("home");

  return (
    <div className="w-full z-10 mt-20">
      <Header />
        <div className="w-full h-full">
            <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
                <motion.div className="hidden w-auto h-auto mx-auto md:block"
                    variants={fadeIn('right', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <Image src="/assets/Cohete.png" priority width="550" height="125" alt=""/>
                </motion.div>

                <motion.div variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <h1 className="mb-5 text-4xl leading-tight md:mb-10 text-black">{t("Home.title1")}<br />
                        <span className="text-black">{t("Home.title2")}</span></h1>
                    <p className="max-w-sm  mb-10 text-xl md:max-w-6xl md:mx-0 md:mb-16 md:text-2xl text-black">{t("Home.text")}<br />
                    </p>

                    <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
                        <button onClick={openContactModal} className="px-6 py-3 my-2 transition-all border-2 cursor-pointer border-black rounded-xl hover:shadow-xl hover:shadow-black bg-black">{t("Home.boton.title")}
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>

        {isContactModalOpen && !isFormSubmited && (
        <form onSubmit={handleSubmit}>
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="bg-white p-6 rounded-md">

            <h2 className="text-2xl mb-3 text-black">{t("Home.boton.text1")}</h2>
            <div className="mb-3">
              <label htmlFor="name" className="text-black">{t("Home.boton.text2")}</label>
              <input type="text" name='name' id="name" required className="w-full border border-gray-300 rounded-md p-2 text-black" />
              <ValidationError prefix='Name' field='name' errors={state.errors}/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="text-black">{t("Home.boton.text3")}</label>
              <input type="email" name='email' id="email" required className="w-full border border-gray-300 rounded-md p-2 text-black" />
              <ValidationError prefix='Email' field='email' errors={state.errors} />
            </div>
            <div className="mb-3">
            <label htmlFor="email" className="text-black">{t("Home.boton.text4")}</label>
              <textarea id="message" name='message' required className="w-full border border-gray-300 rounded-md p-2 text-black"></textarea>
              <ValidationError prefix='Message' field='message' errors={state.errors} />
            </div>

            <button type='submit' disabled={state.submitting} className="px-4 py-2 bg-black text-white rounded-md">{t("Home.boton.text5")}</button>
            <button onClick={closeContactModal} className="ml-2 px-4 py-2 bg-gray-300 text-black rounded-md">{t("Home.boton.text6")}</button>
          </div>
            </div>
          </form>
        )}

        {isFormSubmited && (
          <motion.div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70' initial={{ opacity:0 }} animate={{opacity: 1}} exit={{opacity:0}}>
            <div className='bg-white p-6 rounded-md z-50'>
              <h2 className='text-2x1 mb-3 text-black'>{t("Home.boton.text7")}</h2>
              <p>{t("Home.boton.text8")}</p>
              <button 
              onClick={() => {closeContactModal()}} className='m1-2 px-4 py-2 bg-black text-white rounded-md'
              > Home
              </button>
            </div>
          </motion.div>
          )}
    </div>  
  )
}
