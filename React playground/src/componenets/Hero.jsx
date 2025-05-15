"use client"
import { motion } from "framer-motion"
import { HiAcademicCap, HiCode, HiLightningBolt, HiCube, HiChip, HiPuzzle, HiSparkles } from "react-icons/hi"

const HeroSection = ({ scrollToSection }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  const floatingIconVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  const handleGetStartedClick = () => {
    scrollToSection("contact")
  }

  return (
    <section
      id="home"
      className="w-full min-h-screen pt-24 pb-16 bg-gradient-to-b from-purple-50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 text-blue-500 opacity-20"
            variants={floatingIconVariants}
            animate="animate"
          >
            <HiCode className="w-24 h-24" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-10 text-purple-500 opacity-20"
            variants={floatingIconVariants}
            animate="animate"
            transition={{ delay: 0.5 }}
          >
            <HiCube className="w-32 h-32" />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-1/4 text-green-500 opacity-20"
            variants={floatingIconVariants}
            animate="animate"
            transition={{ delay: 1 }}
          >
            <HiChip className="w-20 h-20" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/4 text-yellow-500 opacity-20"
            variants={floatingIconVariants}
            animate="animate"
            transition={{ delay: 1.5 }}
          >
            <HiPuzzle className="w-16 h-16" />
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-3 py-1 rounded-full bg-white shadow-sm mb-6"
            variants={itemVariants}
          >
            <span className="text-blue-600 mr-2">★</span>
            <span className="text-sm font-medium">Transform your future with new skills</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" variants={itemVariants}>
            Unlock Your Potential with
            <motion.span className="text-blue-600 block md:inline" variants={pulseVariants} animate="animate">
              {" "}
              Digital & Vocational{" "}
            </motion.span>
            Skills
          </motion.h1>

          {/* Subheading */}
          <motion.p className="text-lg text-gray-700 mb-8 max-w-3xl" variants={itemVariants}>
            Gain the practical skills employers are looking for. Our platform offers hands-on training in digital
            technologies and vocational trades to help you build a successful career.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 mb-12" variants={itemVariants}>
            <motion.button
              onClick={handleGetStartedClick}
              className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-all text-base font-medium flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiLightningBolt className="mr-2" />
              Get Started Now
            </motion.button>
            <motion.button
              className="bg-white text-gray-800 py-3 px-8 rounded-md border border-gray-300 hover:bg-gray-50 transition-all text-base font-medium flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiAcademicCap className="mr-2" />
              Explore Courses
            </motion.button>
          </motion.div>

          {/* Skills Categories */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl" variants={itemVariants}>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <HiCode className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">Digital Skills</h3>
              <p className="text-gray-600 text-center">
                Web development, data science, UX/UI design, and digital marketing.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <HiCube className="text-green-600 text-xl" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">Vocational Training</h3>
              <p className="text-gray-600 text-center">
                Carpentry, electrical, plumbing, automotive, and healthcare skills.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <HiSparkles className="text-purple-600 text-xl" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">Career Development</h3>
              <p className="text-gray-600 text-center">
                Resume building, interview skills, networking, and professional growth.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
