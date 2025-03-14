"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import ThemeToggler from "./ThemeToggler"
import menuData from "./menuData"

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [stickyMenu, setStickyMenu] = useState(false)

  const pathUrl = usePathname()

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true)
    } else {
      setStickyMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu)
    return () => window.removeEventListener("scroll", handleStickyMenu)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.getElementById("navbar")
      const hamburger = document.getElementById("hamburger")

      if (
        navbar &&
        hamburger &&
        !navbar.contains(event.target as Node) &&
        !hamburger.contains(event.target as Node) &&
        navigationOpen
      ) {
        setNavigationOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [navigationOpen])

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <header
      id="Header"
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        stickyMenu
          ? "bg-white/95 backdrop-blur-sm py-3 shadow-md dark:bg-gray-900/95 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-primary/20 after:to-transparent"
          : "bg-transparent py-7"
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <Link href="/" className="group flex items-center transition-all duration-300 hover:opacity-90">
            <div className="relative flex items-center">
              <div className="relative overflow-hidden rounded-md">
                <Image
                  src="/images/logo/logo.png"
                  alt="Entrencik Logo"
                  width={80}
                  height={80}
                  className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105 dark:brightness-110"
                  priority
                />
              </div>
              <div className="ml-2 flex flex-col">
                <span className="font-serif text-2xl font-extrabold tracking-tight text-gray-800 transition-colors duration-300  dark:text-white">
                  Entrencik
                </span>
                <span className="text-xs font-medium text-gray-400 dark:text-gray-400 group-hover:text-primary">Predict Your Future</span>
              </div>
            </div>
          </Link>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            id="hamburger"
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          id="navbar"
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "!visible mt-4 h-auto max-h-[80vh] overflow-y-auto rounded-lg bg-white p-6 shadow-lg transition-all duration-300 dark:bg-gray-900 xl:h-auto xl:overflow-visible xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, index) => (
                <li key={index} className={`${menuItem.submenu ? "group relative" : ""}`}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-md px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-800 xl:px-0 xl:py-1 xl:hover:bg-transparent xl:dark:hover:bg-transparent"
                      >
                        {menuItem.title}
                        <span className="transition-transform duration-300 xl:group-hover:rotate-180">
                          <svg
                            className={`h-3 w-3 fill-current transition-transform duration-300 ${
                              activeDropdown === index ? "rotate-180" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`mt-2 space-y-2 rounded-md bg-white p-2 shadow-md transition-all duration-300 dark:bg-gray-800 xl:absolute xl:left-0 xl:mt-0 xl:min-w-[200px] xl:translate-y-10 xl:opacity-0 xl:invisible xl:group-hover:translate-y-0 xl:group-hover:opacity-100 xl:group-hover:visible ${
                          activeDropdown === index ? "block" : "hidden xl:block"
                        }`}
                      >
                        {menuItem.submenu.map((item, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={item.path || "#"}
                              className="block rounded px-3 py-2 text-sm transition-all duration-200 hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-700"
                              onClick={() => setNavigationOpen(false)}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={`relative block rounded-md px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-800 xl:px-0 xl:py-1 xl:hover:bg-transparent xl:dark:hover:bg-transparent ${
                        pathUrl === menuItem.path ? "text-primary" : "text-gray-700 dark:text-gray-200"
                      } xl:after:absolute xl:after:bottom-0 xl:after:left-0 xl:after:h-0.5 xl:after:w-0 xl:after:bg-primary xl:after:transition-all xl:after:duration-300 xl:hover:after:w-full xl:group-hover:text-primary/90`}
                      onClick={() => setNavigationOpen(false)}
                    >
                      <span className="relative inline-block transition-transform duration-300 xl:hover:translate-x-0.5">
                        {menuItem.title}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 xl:mt-0">
            <ThemeToggler />

            <Link
              href="/signin"
              className="group relative inline-block text-base font-medium text-gray-700 transition-colors duration-300 hover:text-primary dark:text-gray-200"
              onClick={() => setNavigationOpen(false)}
            >
              Sign In
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/signup"
              className="flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 px-7 py-2.5 text-base font-medium text-white shadow-sm transition-all duration-300 ease-in-out hover:from-primary/90 hover:to-primary hover:shadow-md hover:translate-y-[-1px] active:translate-y-[1px] active:shadow-sm"
              onClick={() => setNavigationOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

