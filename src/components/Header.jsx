import Image from "next/image"
import { BurgerMenuIcon } from "./Icons"
import Link from "next/link"

const COMPACT_LOGO_SIZE = 32

export function Header() {
  return (
    <header className="flex items-center justify-between py-3 px-4 gap-2">
      <button>
        <BurgerMenuIcon size={24} className="text-dark" />
      </button>

      <nav className="w-full flex items-center justify-center">
        <Link href="/">
          <Image
            src="/logos/letters.png"
            alt="Nourish Logo"
            width={COMPACT_LOGO_SIZE}
            height={COMPACT_LOGO_SIZE}
            className="aspect-square object-cover"
          />
        </Link>
      </nav>
    </header>
  )
}
