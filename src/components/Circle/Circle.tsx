"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Circle() {
    return (
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden" className="bottom-0 right-0 hidden md:inline-block md:absolute -z-10" style={{ width: '33%', height: '50%' }}>
    <Image src="/assets/Pincel.png" width={10} height={10} layout="responsive" className="w-full h-full" alt="" unoptimized />
</motion.div>

    )
}
