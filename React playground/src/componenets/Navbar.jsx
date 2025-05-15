"use client"

import { useState } from "react"
import { HiX, HiMenu } from "react-icons/hi"
import { motion } from "framer-motion"

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/#home",
  },
  {
    id: 2,
    title: "About Us",
    path: "/#about",
  },
  {
    id: 3,
    title: "Our Service",
    path: "/#services",
  },
  {
    id: 4,
    title: "Testimonials",
    path: "/#testimonials",
  },
]

const Navbar = ({ scrollToSection }) => {
  const [activeLink, setActiveLink] = useState("/#home")
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = (path) => {
    setActiveLink(path)
    setIsOpen(false)

    // This would handle scrolling to the section
    const sectionId = path.replace("/#", "")
    scrollToSection(sectionId)
  }

  const handleGetInTouchClick = () => {
    // Scroll to the GetInTouch section
    scrollToSection("contact")
    setIsOpen(false)
  }

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/" className="flex space-x-0 cursor-pointer">
            <div className="w-5 h-5 rounded-full bg-blue-500"></div>
            <div className="w-5 h-5 rounded-full bg-red-500 -ml-2"></div>
          </a>
        </div>

        {/* Desktop Menu Section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(menu.path)
                  }}
                  className={`inline-block py-2 font-medium relative group transition-colors duration-300
                    ${activeLink === menu.path ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                >
                  {menu.title}
                  <div
                    className={`w-2 h-2 absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full transition-all duration-300
                      ${activeLink === menu.path ? "bg-blue-600" : "group-hover:bg-blue-600 opacity-0 group-hover:opacity-100"}`}
                  ></div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in touch button - Desktop */}
        <div className="hidden md:block">
          <motion.button
            onClick={handleGetInTouchClick}
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-all text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg absolute w-full left-0 py-4 px-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(menu.path)
                  }}
                  className={`block py-2 px-2 rounded transition-colors duration-200
                    ${activeLink === menu.path ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"}`}
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <li>
              <motion.button
                onClick={handleGetInTouchClick}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all text-sm font-medium mt-2"
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </motion.button>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
