"use client"
import { fadeIn } from "@/utils/motionTransitions";
import { Circle } from "../Circle";
import { motion } from 'framer-motion'
import { Slider } from "./Slider";
import { useEffect, useState } from 'react';
import React from "react";
import { useTranslation } from "react-i18next";

export function Services() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [t] = useTranslation("services");

  useEffect(() => {
    function updateScreenSize() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="flex flex-col md:flex-row gap-x-5 -top-5 -md:top-10"
        style={{ marginTop: isSmallScreen ? '400px' : '0' }}
      >
        <Circle />
                <div className="flex flex-col text-center md:text-left md:w-[30vw] mb-10">
                    <motion.h1 className="mb-4 text-4xl text-black"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        {t("Services.primero")} <span className="text-black">{t("Services.segundo")}</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="max-w-md text-black text-xl">{t("Services.parrafo")}
                    </motion.p>
                </div>

                <motion.div
                    variants={fadeIn('up', 0.7)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    >
                    <Slider />
                </motion.div>
            </div>
        </div>
    )
}
