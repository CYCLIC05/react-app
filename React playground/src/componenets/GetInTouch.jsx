
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaVideo, FaCalendarAlt, FaComments, FaUserGraduate, FaShieldAlt, FaSolarPanel, FaCode } from "react-icons/fa"

const GetInTouch = () => {
  const [activeTab, setActiveTab] = useState("teachers")
  const [selectedTeacher, setSelectedTeacher] = useState(null)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    topic: "",
  })

  const carouselRef = useRef(null)
  const [carouselIndex, setCarouselIndex] = useState(0)

  // Teacher profiles data
  const teachers = [
    {
      id: 1,
      name: "Samuel Wilson",
      role: "Web Design Instructor",
      experience: "8+ years",
      availability: "Mon-Wed",
      image: "/placeholder.svg?height=200&width=200",
      color: "bg-blue-500",
      icon: <FaCode />,
      description:
        "Expert in UI/UX design principles and modern frontend frameworks. Samuel specializes in responsive design and interactive web applications.",
    },
    {
      id: 2,
      name: "Marvel Johnson",
      role: "Cybersecurity Specialist",
      experience: "10+ years",
      availability: "Tue-Thu",
      image: "/placeholder.svg?height=200&width=200",
      color: "bg-purple-500",
      icon: <FaShieldAlt />,
      description:
        "Former security consultant with expertise in network security, ethical hacking, and digital forensics. Marvel teaches practical security skills for the real world.",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Solar Technology Expert",
      experience: "12+ years",
      availability: "Wed-Fri",
      image: "/placeholder.svg?height=200&width=200",
      color: "bg-green-500",
      icon: <FaSolarPanel />,
      description:
        "Certified renewable energy specialist with hands-on experience in solar panel installation, maintenance, and system design for residential and commercial applications.",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const tabVariants = {
    inactive: { opacity: 0.7 },
    active: {
      opacity: 1,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 },
    },
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 200 },
    },
    tap: { scale: 0.98 },
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    alert(`Session booked with ${selectedTeacher.name}!`)
    setShowBookingForm(false)
    setSelectedTeacher(null)
  }

  const nextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex === teachers.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex === 0 ? teachers.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-blue-600 font-semibold uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            CONNECT & LEARN
          </motion.span>
          <motion.h2
            className="text-4xl font-bold mt-2 mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            Get in Touch With Our Experts
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Schedule virtual meetings with our instructors for personalized learning experiences in web design,
            cybersecurity, solar installation, and more.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <motion.div
            className="inline-flex bg-gray-100 rounded-full p-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <motion.button
              className={`px-6 py-2 rounded-full ${activeTab === "teachers" ? "bg-blue-600 text-white" : "text-gray-700"}`}
              onClick={() => setActiveTab("teachers")}
              variants={tabVariants}
              animate={activeTab === "teachers" ? "active" : "inactive"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <FaUserGraduate className="mr-2" />
                Meet Our Teachers
              </span>
            </motion.button>
            <motion.button
              className={`px-6 py-2 rounded-full ${activeTab === "support" ? "bg-blue-600 text-white" : "text-gray-700"}`}
              onClick={() => setActiveTab("support")}
              variants={tabVariants}
              animate={activeTab === "support" ? "active" : "inactive"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <FaComments className="mr-2" />
                Customer Support
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden mb-12">
          <div className="relative">
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="flex"
                animate={{ x: `-${carouselIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              >
                {teachers.map((teacher) => (
                  <div key={teacher.id} className="w-full flex-shrink-0 px-4">
                    <TeacherCard
                      teacher={teacher}
                      cardVariants={cardVariants}
                      onClick={() => {
                        setSelectedTeacher(teacher)
                        setShowBookingForm(true)
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10"
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>

            <motion.button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10"
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>

            <div className="flex justify-center mt-4">
              {teachers.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 mx-1 rounded-full ${index === carouselIndex ? "bg-blue-600" : "bg-gray-300"}`}
                  onClick={() => setCarouselIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <AnimatePresence mode="wait">
          {activeTab === "teachers" && (
            <motion.div
              key="teachers"
              className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
            >
              {teachers.map((teacher) => (
                <motion.div key={teacher.id} variants={itemVariants}>
                  <TeacherCard
                    teacher={teacher}
                    cardVariants={cardVariants}
                    onClick={() => {
                      setSelectedTeacher(teacher)
                      setShowBookingForm(true)
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "support" && (
            <motion.div
              key="support"
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">How Can We Help You?</h3>
                  <p className="text-gray-600 mb-6">
                    Our customer support team is available to assist you with any questions about our courses, technical
                    issues, or general inquiries.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <FaComments className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Live Chat Support</h4>
                        <p className="text-gray-600">Available Monday-Friday, 9am-5pm</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-green-100 p-3 rounded-full mr-4">
                        <FaVideo className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Technical Support</h4>
                        <p className="text-gray-600">Get help with platform access and virtual classroom issues</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-purple-100 p-3 rounded-full mr-4">
                        <FaCalendarAlt className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Enrollment Assistance</h4>
                        <p className="text-gray-600">Help with course selection and registration</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <form className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-4 text-gray-900">Send Us a Message</h4>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                        <textarea
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          rows="4"
                          placeholder="Describe your issue or question"
                        ></textarea>
                      </div>

                      <motion.button
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium"
                        whileHover={{ scale: 1.02, backgroundColor: "#2563eb" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Submit Request
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Booking Modal */}
        <AnimatePresence>
          {showBookingForm && selectedTeacher && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBookingForm(false)}
            >
              <motion.div
                className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 rounded-full ${selectedTeacher.color} flex items-center justify-center text-white mr-4`}
                  >
                    {selectedTeacher.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedTeacher.name}</h3>
                    <p className="text-gray-600">{selectedTeacher.role}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
                      <input
                        type="text"
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="What would you like to discuss?"
                        required
                      />
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <motion.button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                        onClick={() => setShowBookingForm(false)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Cancel
                      </motion.button>

                      <motion.button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md"
                        whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Book Session
                      </motion.button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-blue-600 rounded-xl p-8 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                viewport={{ once: true }}
              >
                98%
              </motion.div>
              <p className="text-blue-100">Student satisfaction rate</p>
            </div>

            <div className="text-center">
              <motion.div
                className="text-4xl font-bold mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                viewport={{ once: true }}
              >
                24/7
              </motion.div>
              <p className="text-blue-100">Virtual classroom access</p>
            </div>

            <div className="text-center">
              <motion.div
                className="text-4xl font-bold mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                viewport={{ once: true }}
              >
                15+
              </motion.div>
              <p className="text-blue-100">Expert instructors</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Teacher Card Component
const TeacherCard = ({ teacher, onClick, cardVariants }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
    >
      <div className={`h-2 ${teacher.color}`}></div>
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={teacher.image || "/placeholder.svg"}
                alt={teacher.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{teacher.name}</h3>
            <p className="text-gray-600">{teacher.role}</p>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <span className="mr-4">Experience: {teacher.experience}</span>
              <span>Available: {teacher.availability}</span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-gray-600">{teacher.description}</p>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex space-x-2">
            <span className={`inline-block w-2 h-2 rounded-full ${teacher.color}`}></span>
            <span className="text-sm text-gray-500">Online now</span>
          </div>

          <motion.button className="flex items-center text-blue-600 font-medium" whileHover={{ scale: 1.05 }}>
            <FaVideo className="mr-1" /> Schedule Meeting
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default GetInTouch
