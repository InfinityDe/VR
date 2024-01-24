import { fadeIn } from "@/utils/motionTransitions";
import { motion } from 'framer-motion';
import { cardContent } from "./Work.data";
import { useState, useEffect } from "react";
import classNames from 'classnames';
import React from "react";
import { useTranslation } from "react-i18next";


export function Work() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      function updateScreenSize() {
        setIsSmallScreen(window.innerWidth < 768);
      }
  
      window.addEventListener('resize', updateScreenSize);
      updateScreenSize();
  
      return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
    };

    const cardVariants = {
        expanded: {
            width: "450px",
            opacity: 1
        },
        collapsed: {
            width: "200px",
            opacity: 0.5
        }
    };

    const [t] = useTranslation("work");

    return (

    <div className="flex items-center justify-center h-screen">
      <div
        className="flex flex-col md:flex-row gap-x-5 -top-5 -md:top-10"
        style={{ marginTop: isSmallScreen ? '1800px' : '0' }}
      >
            <div className="grid pb-32 md:min-h-screen mt-28 md:mt-0 place-items-center">
                <div>
    
                    <motion.h1
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="my-5 text-2xl text-center md:text-4-xl text-black mt-20"
                    >{t("Work.title1")}<span className="text-black">{t("Work.title2")}</span>
                    </motion.h1>
                    
                    <motion.div
                        className="flex flex-col items-center h-full gap-5 px-2 md:flex-row"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        {cardContent.map(({ id, title, imageUrl, skills }) => {
                            const cardStyle = {
                                backgroundImage: `url(/assets/${imageUrl})`
                            };

                            return (
                                <motion.div
                                    key={id}
                                    className={classNames(
                                        'card',
                                        'cursor-pointer',
                                        'h-[400px]',
                                        'bg-auto',
                                        'bg-no-repeat',
                                        'bg-center',
                                        'rounded-[20px]',
                                        { expanded: id === expandedIndex }
                                    )}
                                    initial={{ opacity: 1 }}
                                    variants={cardVariants}
                                    animate={id === expandedIndex ? 'expanded' : 'collapsed'}
                                    exit={{
                                        opacity: 1
                                    }}
                                    transition={{ duration: 0.5 }}
                                    onClick={() => handleClick(id)}
                                    style={cardStyle}
                                >
                                    <div className="flex flex-col justify-end h-full">
                                        <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center p-3">
                                            <h2 className="text-xl font-semibold text-center text-white">{title}</h2>
                                            {id === expandedIndex && (
                                                <>
                                                    <div className="flex gap-5 mt-3">
                                                        {skills.map((data, index) => (
                                                            <p key={index}>{data.icon}</p>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                        
                    </motion.div>
                    
                </div>
            </div>
        </div>
        </div>
    );
}
