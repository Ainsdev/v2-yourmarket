import clsx from "clsx"

type Props = {
  title: string
  subtitle: string
  image: string
  side: string
  position: string
}

export default function AnimatedTitle({
  title,
  subtitle,
  image,
  side,
  position,
}: Props) {
  return (
    <div className="group relative flex h-48 w-full items-center justify-center gap-5 overflow-hidden bg-secondary transition-all duration-700 ease-in hover:flex-col hover:justify-start sm:h-80 lg:h-96">
      <div
        className={clsx(
          "absolute z-20 h-full w-screen bg-secondary  transition-all duration-1000 ease-in-out ",
          side == "left"
            ? "group-hover:translate-x-full"
            : "group-hover:-translate-x-full"
        )}
      />
      <div
        className={clsx(
          "absolute z-10 h-full w-screen scale-95 bg-cover bg-no-repeat blur-sm transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:blur-[2px] ",
          position
        )}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="z-30 flex items-center justify-center">
        <h3 className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-400 via-orange-700 to-orange-400  bg-clip-text text-3xl font-extrabold text-transparent transition group-hover:animate-text group-hover:bg-white sm:text-7xl xl:text-[105px] 2xl:text-9xl">
          {title}
        </h3>
      </div>
      <div className="z-30 hidden items-center justify-center group-hover:flex">
        <p className="text-center text-lg font-medium text-secondary sm:text-2xl xl:text-3xl">
          {subtitle}
        </p>
      </div>
    </div>
  )
}
