export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "YourMarket",
  description:
    "Vende Ropa unica y de calidad.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Productos",
      href: "/products",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
