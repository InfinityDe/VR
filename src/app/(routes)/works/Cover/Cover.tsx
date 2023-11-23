"use client"
import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine } from 'tsparticles-engine'
import { optionsParticles } from "./particleOptions"
import { Work } from "@/components/Work"
import { Circle } from "@/components/Circle"
 
export function Cover() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => { }, [])

    return (
        <div id="cover" style={{ position: 'relative' }}>
          <Particles
            className="absolute w-full h-full translate-z-0"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={optionsParticles}
          />
          <div className="mx-auto">
            <Work />
          </div>
        </div>
      );
}
