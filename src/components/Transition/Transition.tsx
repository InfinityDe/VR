"use client"
import { AnimatePresence, motion, Variants } from "framer-motion"
import { transitionVariantPage } from '@/utils/motionTransitions'

interface TransitionProps {
    delay: number;
}

export function Transition() {
    const transitionDiv = ({ delay }: TransitionProps) => (
        <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#ffff] z-30"
            variants={transitionVariantPage}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay, duration: 0.6, ease: "easeInOut" }}
        />
    );

    return (
        <AnimatePresence mode="wait">
            <div>
                {transitionDiv({ delay: 0.2 })}
                {transitionDiv({ delay: 0.4 })}
            </div>
        </AnimatePresence>
    );
}
