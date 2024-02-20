import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { fadeIn } from '@/utils/motionTransitions';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header'
import { useTranslation } from 'react-i18next'
import Image from 'next/image';

const h1Style = {
  marginBottom: '5px',
  fontSize: '55px',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: '800',
  lineHeight: 0.8
}

export function Introduction() {
  const [t] = useTranslation ("home");
  const ref = useRef<HTMLImageElement | null>(null);

  const calc = (x: number, y: number) => [(y - window.innerHeight / 2) / 20, -(x - window.innerWidth / 2) / 20, 1.1];
  const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

  return (
    <div className="w-full z-10 mt-20" onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}>
      <Header />
        <div className="w-full h-full">
          <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-1 md:text-left relative z-1">
            <motion.div 
              className="hidden w-auto h-auto mx-auto md:block"
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Image 
                src="/assets/fondo.png" 
                width="683" 
                height="125" 
                alt=""
                style= {{ position: 'absolute',
                          left: '-1.7%',
                          top: '-20.8%',
                          transform: 'translate (-50%, -50%)',
                          zIndex: '1'
                        }}
              />
        
              <animated.img
                ref={ref}
                src='/assets/cabeza.png'
                width='583'
                height='125'
                alt=''
                style={{
                  position: 'absolute',
                  left: '42%',
                  top: '-1%',
                  transform: props.xys.interpolate(trans),
                  zIndex: '1'
                }}
              />
            </motion.div>
                <motion.div 
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    style={{ zIndex: '2' }}
                >
                    <motion.h1 
                      className="mb-5 text-l leading-tight md:mb-10 text-white"
                      initial= {{ y:-100, opacity:0 }}
                      animate= {{ y:50, opacity:1 }}
                      transition={{ duration: 0.5 }}
                      >{t("Home.title1")}<br />
                    </motion.h1>

                    <motion.h1
                      style={h1Style}
                      initial= {{ y:-100, opacity:0 }}
                      animate= {{ y:60, opacity:1 }}
                      transition={{ duration:0.5, delay: 0.2 }}
                      >{t("Home.title2")}
                    </motion.h1>
                    <motion.h1
                      style={h1Style}
                      initial= {{ y:-100, opacity:0 }}
                      animate= {{ y:60, opacity:1 }}
                      transition={{ duration:0.5, delay: 0.2 }}
                      >{t("Home.title21")}
                    </motion.h1>
                    <motion.h1
                      style={h1Style}
                      initial= {{ y:-100, opacity:0 }}
                      animate= {{ y:60, opacity:1 }}
                      transition={{ duration:0.5, delay: 0.2 }}
                      >{t("Home.title22")}
                    </motion.h1>
                    
                    <div style={{ marginTop:'120px' }}>
                      <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row" >
                        <button className="px-6 py-3 my-2 transition-all cursor-pointer rounded-3xl hover:shadow-xl hover:shadow-black hover:bg-black hover:text-white bg-white text-black" style={{ transition: 'box-shadow 0.3s'}}>
                        {t("Botones.boton1")}
                        </button>
                        <button className="px-6 py-3 my-2 transition-all cursor-pointer rounded-3xl hover:shadow-xl hover:shadow-black bg-black hover:bg-white hover:text-black" style={{ transition: 'box-shadow 0.3s'}}>
                        {t("Botones.boton2")}
                        </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>  
  )
}

