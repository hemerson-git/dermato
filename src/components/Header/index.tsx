import { useState, useRef } from "react";
import Link from "next/link";
import { List, X } from "phosphor-react";

export function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = headerRef.current?.clientHeight;

  return (
    <header
      ref={headerRef}
      id="main-header"
      className="
      bg-gray-50 text-secondary-500 font-bold flex 
      py-12 px-10 relative
    "
    >
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-lg uppercase hidden sm:flex" role="img">
          Logo
        </span>

        <button
          onClick={() => setIsNavExpanded((prevState) => !prevState)}
          type="button"
          className="block sm:hidden"
        >
          {isNavExpanded ? (
            <X size={24} className="text-primary-500" weight="bold" />
          ) : (
            <List className="text-primary-500" size={24} weight="bold" />
          )}
        </button>

        <nav
          className={`hidden sm:block ${
            isNavExpanded
              ? `
                absolute top-full w-full backdrop-blur-lg 
                left-0 h-[calc(100vh_-_${headerHeight}px)] !flex`
              : ""
          }`}
        >
          <ul
            className={`flex gap-12 ${
              isNavExpanded ? "flex-col text-center justify-center w-full" : ""
            }`}
          >
            <li>
              <Link href="/">Início</Link>
            </li>

            <li>
              <Link href="/">Serviços</Link>
            </li>

            <li>
              <Link href="/">Sobre</Link>
            </li>

            <li>
              <Link href="/">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
