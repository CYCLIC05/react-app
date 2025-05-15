"use client"
import { motion } from "framer-motion"
import { HiShieldCheck, HiVideoCamera } from "react-icons/hi"

export default function MonitoringComponent() {
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

  return (
    <section className="py-16 bg-gray-50">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-8 p-4 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Left section - Text content */}
        <motion.div className="w-full md:w-1/2 p-6" variants={itemVariants}>
          <div className="text-green-500 font-medium mb-2 flex items-center">
            <HiShieldCheck className="mr-2" />
            SECURITY MONITORING
          </div>

          <h2 className="text-4xl font-bold mb-6">
            Master Professional
            <br />
            Security Systems
          </h2>

          <p className="text-gray-600 mb-8">
            Learn how to install, configure, and maintain advanced security systems including CCTV cameras, access
            control, and integrated monitoring solutions. Our hands-on training prepares you for real-world security
            installation careers.
          </p>

          <motion.a
            href="#services"
            className="inline-flex items-center text-blue-500 font-medium hover:underline"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Explore our security courses
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Right section - Security monitoring visualization */}
        <motion.div className="w-full md:w-1/2 p-6 relative" variants={itemVariants}>
          {/* Curved line decoration */}
          <div className="absolute inset-0 z-0">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <path
                d="M200,100 C100,150 100,250 200,300"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </div>

          {/* Navigation buttons */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </motion.div>

          <motion.div
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

          {/* Main card with blue background */}
          <motion.div
            className="relative mb-8 mx-auto w-64 z-10"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-blue-600 rounded-2xl p-6 text-white text-center">
              {/* Camera icon */}
              <div className="absolute top-4 right-4">
                <HiVideoCamera className="h-5 w-5" />
              </div>

              {/* Certification text */}
              <div className="text-left text-sm mb-4">Certification Progress</div>

              {/* Progress circle */}
              <div className="flex justify-center items-center mb-6">
                <div className="relative w-32 h-32">
                  {/* Background circle */}
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#4B5563" strokeWidth="10" strokeOpacity="0.3" />
                    {/* Green progress arc (approx 73.4%) */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#4ADE80"
                      strokeWidth="10"
                      strokeDasharray="251 340"
                      strokeDashoffset="25"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                      initial={{ strokeDashoffset: "251" }}
                      animate={{ strokeDashoffset: "25" }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </svg>
                  {/* Percentage text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                      className="text-3xl font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    >
                      73.4
                    </motion.div>
                    <div className="text-xl">%</div>
                  </div>
                </div>
              </div>

              {/* Course info */}
              <div className="text-center">
                <div className="font-semibold text-lg">CCTV Installation</div>
                <div className="text-xs opacity-80 mb-6">
                  Professional certification
                  <br />
                  in security systems
                </div>
              </div>

              {/* Course progress section */}
              <div className="bg-blue-700 rounded-lg p-3 flex justify-between items-center">
                <div>
                  <div className="text-xs opacity-80">Course Progress</div>
                  <div className="text-sm">Advanced Level</div>
                </div>
                <div className="flex flex-col items-end">
                  <HiShieldCheck className="h-5 w-5 mb-1" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Security metrics card */}
          <motion.div
            className="relative z-10 bg-white shadow-xl rounded-xl p-4 w-64 mx-auto"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Camera feed visualization */}
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium">Camera Feeds</div>
              <HiVideoCamera className="text-blue-500" />
            </div>

            {/* Camera status bars */}
            <div className="flex items-end justify-between gap-2 mb-4 h-16">
              <div className="w-1/5 bg-green-200 rounded-t-md h-full relative group">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Cam 1
                </div>
              </div>
              <div className="w-1/5 bg-green-200 rounded-t-md h-3/4 relative group">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Cam 2
                </div>
              </div>
              <div className="w-1/5 bg-red-200 rounded-t-md h-1/2 relative group">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Cam 3
                </div>
              </div>
              <div className="w-1/5 bg-green-200 rounded-t-md h-1/4 relative group">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Cam 4
                </div>
              </div>
              <div className="w-1/5 bg-green-200 rounded-t-md h-2/3 relative group">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Cam 5
                </div>
              </div>
            </div>

            {/* System status indicators */}
            <div className="flex gap-1 mb-2 items-center">
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
              <span className="text-xs text-gray-500 mr-2">Online</span>

              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <span className="text-xs text-gray-500 mr-2">Alert</span>

              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <span className="text-xs text-gray-500">Standby</span>
            </div>
          </motion.div>

          {/* Motion detection element on the right */}
          <motion.div
            className="absolute bottom-10 right-0 flex flex-col items-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex items-center mb-2">
              <span className="text-xs font-medium mr-2">Motion Detection</span>
              <div className="bg-blue-500 rounded-full w-4 h-4 animate-pulse"></div>
            </div>
            <div className="flex items-end gap-1">
              <motion.div
                className="bg-blue-400 w-5 h-12 rounded-t-md"
                animate={{ height: ["12px", "48px", "12px"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              ></motion.div>
              <motion.div
                className="bg-blue-400 w-5 h-24 rounded-t-md"
                animate={{ height: ["24px", "96px", "24px"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.3 }}
              ></motion.div>
              <motion.div
                className="bg-blue-400 w-5 h-16 rounded-t-md"
                animate={{ height: ["16px", "64px", "16px"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.6 }}
              ></motion.div>
              <motion.div
                className="bg-blue-400 w-5 h-20 rounded-t-md"
                animate={{ height: ["20px", "80px", "20px"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.9 }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
