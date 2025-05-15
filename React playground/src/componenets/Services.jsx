"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  HiCode,
  HiVideoCamera,
  HiLightningBolt,
  HiChip,
  HiCog,
  HiDesktopComputer,
  HiCube,
  HiShieldCheck,
  HiPuzzle,
  HiPlus,
  HiMinus,
} from "react-icons/hi"

const Services = () => {
  // State for expanded service details
  const [expandedService, setExpandedService] = useState(null)

  // Toggle expanded service
  const toggleService = (id) => {
    if (expandedService === id) {
      setExpandedService(null)
    } else {
      setExpandedService(id)
    }
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

  // Service categories
  const serviceCategories = [
    {
      id: "digital",
      title: "Digital Skills",
      icon: <HiCode className="text-blue-600 text-2xl" />,
      description:
        "Master the digital skills that drive today's technology landscape. From coding to digital marketing, our courses prepare you for the digital economy.",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      id: "security",
      title: "Security Systems",
      icon: <HiShieldCheck className="text-green-600 text-2xl" />,
      description:
        "Learn to install and maintain modern security systems. Our hands-on training covers CCTV, surveillance cameras, and integrated security solutions.",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      id: "vocational",
      title: "Vocational Training",
      icon: <HiCog className="text-amber-600 text-2xl" />,
      description:
        "Develop practical skills for in-demand trades. Our vocational programs combine classroom learning with hands-on practice for real-world success.",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200",
    },
  ]

  // Detailed services
  const services = [
    {
      id: 1,
      category: "security",
      title: "CCTV Installation",
      icon: <HiVideoCamera />,
      description:
        "Learn professional CCTV installation techniques from industry experts. This comprehensive course covers system design, camera placement, wiring, configuration, and troubleshooting.",
      features: [
        "Camera placement optimization",
        "DVR/NVR setup and configuration",
        "Wiring and cable management",
        "Remote viewing setup",
        "System maintenance and troubleshooting",
      ],
      duration: "4 weeks",
      level: "Beginner to Intermediate",
    },
    {
      id: 2,
      category: "security",
      title: "Camera Installation",
      icon: <HiDesktopComputer />,
      description:
        "Master the art of professional camera installation for homes and businesses. Learn about different camera types, optimal positioning, and integration with security systems.",
      features: [
        "IP and analog camera installation",
        "Wireless camera setup",
        "Integration with existing systems",
        "Motion detection configuration",
        "Privacy and legal considerations",
      ],
      duration: "3 weeks",
      level: "Beginner",
    },
    {
      id: 3,
      category: "security",
      title: "Access Control Systems",
      icon: <HiShieldCheck />,
      description:
        "Learn to install and configure modern access control systems. This course covers card readers, biometric systems, and integration with building security.",
      features: [
        "Card reader installation",
        "Biometric system setup",
        "Electric lock installation",
        "System programming",
        "Maintenance and troubleshooting",
      ],
      duration: "5 weeks",
      level: "Intermediate",
    },
    {
      id: 4,
      category: "digital",
      title: "Web Development",
      icon: <HiCode />,
      description:
        "Build modern, responsive websites using the latest web technologies. Learn HTML, CSS, JavaScript, and popular frameworks to create professional web applications.",
      features: [
        "HTML5 and CSS3 fundamentals",
        "JavaScript programming",
        "Responsive design principles",
        "Frontend frameworks (React)",
        "Backend development basics",
      ],
      duration: "12 weeks",
      level: "Beginner to Advanced",
    },
    {
      id: 5,
      category: "digital",
      title: "Network Administration",
      icon: <HiChip />,
      description:
        "Gain the skills to manage and maintain computer networks. Learn about network design, configuration, security, and troubleshooting.",
      features: [
        "Network design and topology",
        "Router and switch configuration",
        "Network security implementation",
        "Troubleshooting methodologies",
        "Cloud networking concepts",
      ],
      duration: "8 weeks",
      level: "Intermediate",
    },
    {
      id: 6,
      category: "vocational",
      title: "Electrical Installation",
      icon: <HiLightningBolt />,
      description:
        "Learn residential and commercial electrical installation from certified professionals. This hands-on course covers wiring, safety protocols, and code compliance.",
      features: [
        "Electrical theory fundamentals",
        "Residential wiring techniques",
        "Circuit breaker panel installation",
        "Safety procedures and regulations",
        "Troubleshooting electrical issues",
      ],
      duration: "10 weeks",
      level: "Beginner to Intermediate",
    },
    {
      id: 7,
      category: "vocational",
      title: "Smart Home Installation",
      icon: <HiCube />,
      description:
        "Become an expert in smart home technology installation. Learn to integrate lighting, security, entertainment, and climate control systems.",
      features: [
        "Smart hub configuration",
        "Lighting control systems",
        "Smart thermostat installation",
        "Voice assistant integration",
        "Troubleshooting connectivity issues",
      ],
      duration: "6 weeks",
      level: "Intermediate",
    },
    {
      id: 8,
      category: "digital",
      title: "IT Support Fundamentals",
      icon: <HiPuzzle />,
      description:
        "Develop the essential skills needed for IT support roles. Learn hardware troubleshooting, software configuration, and customer service skills.",
      features: [
        "Computer hardware diagnostics",
        "Operating system configuration",
        "Network troubleshooting",
        "Security best practices",
        "Customer service skills",
      ],
      duration: "8 weeks",
      level: "Beginner",
    },
  ]

  return (
    <section id="services" className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-2" variants={itemVariants}>
            Our Services
          </motion.h2>
          <motion.p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto" variants={itemVariants}>
            We offer comprehensive training in digital skills and vocational trades, with specialized courses in
            security system installation and technology integration.
          </motion.p>

          {/* Service Categories */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" variants={itemVariants}>
            {serviceCategories.map((category) => (
              <motion.div
                key={category.id}
                className={`${category.bgColor} border ${category.borderColor} rounded-xl p-6 shadow-sm hover:shadow-md transition-all`}
                whileHover={{ y: -5 }}
              >
                <div className={`${category.iconBg} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Services */}
          <motion.div className="space-y-6" variants={itemVariants}>
            {services.map((service) => (
              <motion.div
                key={service.id}
                className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all ${
                  expandedService === service.id ? "bg-gray-50" : "bg-white"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-center">
                    <div
                      className={`p-3 rounded-full mr-4 ${
                        service.category === "digital"
                          ? "bg-blue-100 text-blue-600"
                          : service.category === "security"
                            ? "bg-green-100 text-green-600"
                            : "bg-amber-100 text-amber-600"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{service.title}</h3>
                      <p className="text-sm text-gray-500">
                        {service.duration} • {service.level}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedService === service.id ? (
                      <HiMinus className="text-gray-500" />
                    ) : (
                      <HiPlus className="text-gray-500" />
                    )}
                  </motion.div>
                </div>

                {expandedService === service.id && (
                  <motion.div
                    className="px-6 pb-6 border-t pt-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <h4 className="font-semibold mb-2">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-all text-sm font-medium flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <HiLightningBolt className="mr-2" />
                      Enroll Now
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
