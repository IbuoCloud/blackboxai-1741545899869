"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const Navbar = () => {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Reservar",
      href: "/reservar",
    },
    {
      name: "Sesiones",
      href: "/sesiones",
    },
    {
      name: "Salas",
      href: "/salas",
    },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50 dark:bg-gray-950/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Estudio Musical
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive 
                      ? "text-black dark:text-white"
                      : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-[21px] left-0 right-0 h-px bg-black dark:bg-white"
                      layoutId="navbar-indicator"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/registro"
              className="rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
