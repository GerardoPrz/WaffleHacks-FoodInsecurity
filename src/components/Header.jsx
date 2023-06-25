import Image from "next/image"
import { BurgerMenuIcon } from "./Icons"
import Link from "next/link"

const COMPACT_LOGO_WIDTH = 48
const COMPACT_LOGO_HEIGHT = 24

export function Header() {
  return (
    <header className="flex items-center justify-between py-3 px-4 gap-2 sticky top-0 bg-white drop-shadow-sm opacity-100 z-50">
      <button>
        <BurgerMenuIcon size={24} className="text-dark" />
      </button>

      <nav className="w-full flex items-center justify-center">
        <Link href="/">
          <Image
            src="/logos/letters.png"
            alt="Nourish Logo"
            width={COMPACT_LOGO_WIDTH}
            height={COMPACT_LOGO_HEIGHT}
          />
        </Link>
      </nav>
    </header>
  )
}
