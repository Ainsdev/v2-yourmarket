import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import CustomButton from "@/components/ui/button-1"
import AnimatedTitle from "@/components/landing/animated-title"
import MainTitle from "@/components/landing/main-title"

export default function IndexPage() {
  return (
    <main className="flex h-max w-full flex-1 flex-col items-center justify-start px-5 pt-20 text-center">
      <MainTitle />
      <div className="relative flex flex-col items-center justify-center gap-4">
        <div className="sticky top-0 z-0 w-screen">
          <video
            className="aspect-auto h-full w-full"
            autoPlay={true}
            loop
            muted
          >
            <source
              src="https://res.cloudinary.com/doacxwg1x/video/upload/v1685811508/STG_flash_zklobe.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="z-30 flex h-max w-full flex-col items-center justify-center">
          <div className="group relative flex h-48 w-full items-center justify-center overflow-hidden sm:h-80 lg:h-96">
            <div className="absolute z-20 h-full w-screen bg-secondary  transition-all duration-1000 ease-in-out group-hover:translate-x-full" />
            <div
              className="absolute z-10 h-full w-screen 
            bg-[url('https://media.vogue.es/photos/5d3efffb90d7160008c443d2/16:9/pass/005-The-Complex-Case-Streetwear-Vogueint-June14-Getty-Images.jpg')]
            bg-cover bg-center  bg-no-repeat  blur-sm transition-all duration-1000 ease-in-out group-hover:blur-none"
            />
            <div className="z-30 flex items-center justify-center">
              <h3 className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-3xl font-extrabold text-transparent transition group-hover:animate-text sm:text-7xl xl:text-[105px] 2xl:text-9xl">
                1. SUBE TUS PRODUCTOS
              </h3>
            </div>
          </div>
          <div className="group relative flex h-48 w-full items-center justify-center overflow-hidden sm:h-80 lg:h-96">
            <div className="absolute z-20 h-full w-screen bg-secondary  transition-all duration-1000 ease-in-out group-hover:translate-x-full" />
            <div
              className="absolute z-10 h-full w-screen 
            bg-[url('https://media.vogue.es/photos/5d3efffb90d7160008c443d2/16:9/pass/005-The-Complex-Case-Streetwear-Vogueint-June14-Getty-Images.jpg')]
            bg-cover bg-center  bg-no-repeat  blur-sm transition-all duration-1000 ease-in-out group-hover:blur-none"
            />
            <div className="z-30 flex items-center justify-center">
              <h3 className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-3xl font-extrabold text-transparent transition group-hover:animate-text sm:text-7xl xl:text-[105px] 2xl:text-9xl">
                1. SUBE TUS PRODUCTOS
              </h3>
            </div>
          </div>
          <AnimatedTitle
            title="PROBANDO 123"
            subtitle=""
            image="'https://media.vogue.es/photos/5d3efffb90d7160008c443d2/16:9/pass/005-The-Complex-Case-Streetwear-Vogueint-June14-Getty-Images.jpg'"
          />
        </div>
      </div>
    </main>
  )
}
