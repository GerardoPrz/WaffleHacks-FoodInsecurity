import {
  CafeteriaIcon,
  EducationIcon,
  HomeIcon,
  MenuIcon,
  SmallFoodGeneratorIcon,
} from "@/components/Icons"
import Link from "next/link"
import Image from "next/image"

const WEBSITE_SECTIONS = {
  HOME: {
    text: "Inicio",
    href: "/",
    img: "home.png",
    icon: HomeIcon,
  },

  MENUS: {
    text: "Menús",
    href: "/menus",
    img: "menu.png",
    isDisabled: true,
    icon: MenuIcon,
  },
  RECIPE_GENERATOR: {
    href: "/",
    icon: SmallFoodGeneratorIcon,
    isMain: true,
    img: "small-food-generator-icon.png",
  },
  CAFETERIAS: {
    text: "Cafeterías",
    href: "/cafeterias",
    icon: CafeteriaIcon,
    isDisabled: true,
    img: "cafeteria.png",
  },
  EDUCATION: {
    text: "Educación",
    href: "/education",
    icon: EducationIcon,
    isDisabled: true,
    img: "cafeteria.png",
  },
}

export function MobileNavbar() {
  return (
    <nav className="flex justify-between items-center text-secondary drop-shadow-2xl w-full bg-white sticky bottom-0">
      {Object.values(WEBSITE_SECTIONS).map(
        ({ text, href, icon: Icon, isMain, img, isDisabled }) => (
          <Link
            key={text ?? href}
            className={`py-2 flex flex-col items-center justify-center w-full ${
              isMain ? "text-primary" : "text-secondary"
            }
            ${isDisabled && "pointer-events-none"}
            `}
            href={href}
            disabled={isDisabled}
          >
            {img ? (
              <Image
                src={`/icons/${img}`}
                width={isMain ? 48 : 32}
                height={isMain ? 48 : 32}
                alt={text ?? "Sección"}
              />
            ) : (
              <Icon />
            )}
            {text && <span className="text-xs">{text}</span>}
          </Link>
        ),
      )}
    </nav>
  )
}
