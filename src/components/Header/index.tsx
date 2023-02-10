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
      bg-light-200 text-secondary-500 font-bold flex 
      py-12 px-9 sm:px-10 md:px-16 relative
    "
    >
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-lg uppercase hidden sm:flex" role="img">
          Dermato
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
                absolute top-full w-full backdrop-blur-lg bg-light-200 min-h-screen sm:min-h-fit z-40
                left-0 h-[calc(100vh_-_${headerHeight}px)] !flex`
              : ""
          }`}
        >
          <ul
            className={`flex gap-12 ${
              isNavExpanded ? "flex-col text-center w-full" : ""
            }`}
          >
            <li>
              <Link
                href="/"
                className="hover:text-primary-500 transition-colors"
              >
                Início
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="hover:text-primary-500 transition-colors"
              >
                Serviços
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="hover:text-primary-500 transition-colors"
              >
                Sobre
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="hover:text-primary-500 transition-colors"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
