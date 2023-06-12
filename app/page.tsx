"use client"

import { useEffect, useRef } from "react"

import CustomButton from "@/components/ui/button-1"
import AnimatedTitle from "@/components/landing/animated-title"
import MainTitle from "@/components/landing/main-title"

export default function IndexPage() {
  useEffect(() => {
    const section = document.querySelector("section") as HTMLElement
    section.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault()
        section.scrollLeft += e.deltaY
      },
      { passive: false }
    )
  })

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
          <AnimatedTitle
            title="PRODUCTOS"
            subtitle="Sube tus prendas, zapatillas y da vida a tu tienda en segundos."
            image="https://assets.vogue.com/photos/60d88c184b12a701e3d2f114/16:9/w_2991,h_1682,c_limit/Paris%20Mens%20SS22%20day%205%20by%20STYLEDUMONDE%20Street%20Style%20Fashion%20Photography_95A0608FullRes.jpg"
            side="left"
            position="bg-top"
          />
          <AnimatedTitle
            title="COMPARTE"
            subtitle="Comparte tus tesoros en tus redes sociales y con una audiencia lista para descubrir nuevas marcas."
            image="https://media.vogue.es/photos/5d3efffb90d7160008c443d2/16:9/pass/005-The-Complex-Case-Streetwear-Vogueint-June14-Getty-Images.jpg"
            side="right"
            position="bg-center"
          />
          <AnimatedTitle
            title="VENDE"
            subtitle="¡Gana dinero vendiendo productos de calidad! Simplifica y maximiza tus ganancias. Crea una base de clientes ansiosa por comprar."
            image="https://hips.hearstapps.com/hmg-prod/images/0-copy-1653495593.jpg"
            side="left"
            position="bg-center"
          />
          <AnimatedTitle
            title="RECONOCIMIENTO"
            subtitle="Obtén feedback valioso y construye tu reputación. Gana visibilidad y conquista el corazón de los aficionados con tus productos."
            image="https://views.fr/wp-content/uploads/2017/08/CxyHX17WgAEmlus.jpg"
            side="left"
            position="bg-center"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 py-10">
        <p className="text-2xl font-bold text-gray-800">
          Cambia la industria con nosotros
        </p>
        <CustomButton title="EMPEZAR AHORA" url="/" color="primary" />
      </div>
      <section
        id="section"
        className="flex h-full w-full overflow-x-hidden"
      >
        <div className="z-50 flex h-screen w-screen flex-none snap-start flex-col items-center justify-center gap-4 bg-red-500">
          <h1 className="text-4xl font-bold text-white">Hola</h1>
        </div>
        <div className="z-50 flex h-screen w-screen flex-none snap-start flex-col items-center justify-center gap-4 bg-green-500">
          <h1 className="text-4xl font-bold text-white">Hola 2</h1>
        </div>
        <div className="z-50 flex h-screen w-screen flex-none snap-start flex-col items-center justify-center gap-4 bg-yellow-300">
          <h1 className="text-4xl font-bold text-white">Hola 3</h1>
        </div>
      </section>
    </main>
  )
}
