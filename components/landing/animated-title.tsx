type Props = {
  title: string
  subtitle: string
  image: string
}

export default function AnimatedTitle({ title, subtitle, image }: Props) {
  return (
    <div className="group relative flex h-48 w-full items-center justify-center overflow-hidden bg-secondary sm:h-80 lg:h-96">
      <div className="absolute z-20 h-full w-screen bg-secondary  transition-all duration-1000 ease-in-out group-hover:translate-x-full" />
      <div
        className="absolute z-10 h-full w-screen 
            scale-95
            bg-[url('https://media.vogue.es/photos/5d3efffb90d7160008c443d2/16:9/pass/005-The-Complex-Case-Streetwear-Vogueint-June14-Getty-Images.jpg')] bg-cover  bg-center  bg-no-repeat blur-sm transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:blur-none"
      />
      <div className="z-30 flex items-center justify-center">
        <h3 className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-3xl font-extrabold text-transparent transition group-hover:animate-text sm:text-7xl xl:text-[105px] 2xl:text-9xl">
          {title}
        </h3>
      </div>
    </div>
  )
}
