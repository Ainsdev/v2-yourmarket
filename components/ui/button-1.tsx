import { cn } from "@/lib/utils"
import Link from "next/link"

type Props = {
  title: string
  url: string
  color: string
}

export default function CustomButton({ title, url,color }: Props) {
  return (
    <Link href={url} className="group relative px-6 py-3 font-bold text-primary">
      <span className={
        cn(
          "absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 ",
          `bg-${color}`
        )
      }></span>
      <span className="absolute inset-0 h-full w-full border-4 border-orange-500"></span>
      <span className="relative text-secondary text-lg">{title}</span>
    </Link>
  )
}
