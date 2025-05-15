"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Subscribed with: ${email}`)
    setEmail("")
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const linkHoverVariants = {
    hover: { x: 5, transition: { duration: 0.2 } },
  }

  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <motion.div
        className="bg-blue-600 rounded-xl p-8 md:p-12 mx-4 md:mx-8 lg:mx-auto max-w-7xl -mt-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-md">
            <motion.h2
              className="text-white text-3xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Get Skills Updates
            </motion.h2>
            <motion.p
              className="text-blue-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Stay updated with our latest courses, workshops, and industry certifications in digital and vocational
              skills
            </motion.p>
          </div>
          <motion.form
            className="w-full md:w-auto flex-1 max-w-md"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-r-lg flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
                <span className="ml-1">→</span>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.div>

      {/* Main Footer */}
      <motion.div
        className="max-w-7xl mx-auto py-16 px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="flex">
                <div className="w-4 h-4 rounded-full bg-blue-600 mr-1"></div>
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
              </div>
              <h3 className="ml-2 font-bold text-lg">SkillsHub</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Empowering careers through practical digital and vocational skills training. Join our community of
              learners and industry professionals.
            </p>
            <div className="flex space-x-3">
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300"
                whileHover={{ y: -5, backgroundColor: "#e5e7eb" }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300"
                whileHover={{ y: -5, backgroundColor: "#e5e7eb" }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300"
                whileHover={{ y: -5, backgroundColor: "#e5e7eb" }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300"
                whileHover={{ y: -5, backgroundColor: "#e5e7eb" }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300"
                whileHover={{ y: -5, backgroundColor: "#e5e7eb" }}
                whileTap={{ scale: 0.9 }}
              >
                <FaYoutube />
              </motion.a>
            </div>
          </motion.div>

          {/* Courses Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Courses</h3>
            <ul className="space-y-3">
              {[
                "CCTV Installation",
                "Camera Systems",
                "Network Security",
                "Web Development",
                "Electrical Installation",
              ].map((item) => (
                <motion.li key={item} whileHover="hover">
                  <motion.a href="#" className="text-gray-600 hover:text-blue-600 block" variants={linkHoverVariants}>
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Learning Paths", "Certification Guide", "Career Support", "Equipment Guide", "Industry Partners"].map(
                (item) => (
                  <motion.li key={item} whileHover="hover">
                    <motion.a href="#" className="text-gray-600 hover:text-blue-600 block" variants={linkHoverVariants}>
                      {item}
                    </motion.a>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {["FAQ", "Technical Help", "Course Selection", "Payment Options", "Contact Us"].map((item) => (
                <motion.li key={item} whileHover="hover">
                  <motion.a href="#" className="text-gray-600 hover:text-blue-600 block" variants={linkHoverVariants}>
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">123 Training Center Ave</li>
              <li className="text-gray-600">Tech City, TC 12345</li>
              <li className="text-gray-600">info@skillshub.com</li>
              <li className="text-gray-600">+1 (555) 123-4567</li>
              <motion.li whileHover="hover" className="mt-4">
                <motion.a href="#contact" className="text-blue-600 font-medium block" variants={linkHoverVariants}>
                  Get in Touch →
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} SkillsHub - Digital & Vocational Training
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">All Rights Reserved</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
