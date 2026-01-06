'use client'

import { useState } from 'react'
import { Flame, Wrench, Wind, Shield, Phone, Menu, X, ChevronRight, Mail, MapPin, Award, Check, Users, Thermometer } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Logo from '@/public/tttc.png'
import Image from 'next/image'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const featuresRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })

  const services = [
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Heating Systems",
      description: "Professional installation, repair, and maintenance of heating systems",
      features: ["Boiler Systems", "Furnace Repair", "Radiant Heating", "Heat Pumps"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Geyser Elements",
      description: "Expert replacement and repair services for water heating systems",
      features: ["Element Replacement", "Thermostat Repair", "Pressure Valves", "Anode Rods"]
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Air Conditioning",
      description: "Complete HVAC solutions and regular maintenance services",
      features: ["AC Installation", "Duct Cleaning", "Refrigerant Charge", "System Upgrades"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Preventive Maintenance",
      description: "Regular maintenance plans to prevent breakdowns and extend lifespan",
      features: ["Annual Inspections", "Filter Replacements", "System Cleaning", "Performance Testing"]
    }
  ]

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section - Simplified & Clean */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 pt-16">
        {/* Background Effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Professional Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 mb-8 border border-white/20"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  THERMAL ENGINEERING SPECIALISTS
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
                >
                  <span className="text-white block">PRECISION</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 block">
                    THERMAL
                  </span>
                  <span className="text-white block">ENGINEERING</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
                >
                  Expert heating, cooling, and maintenance solutions engineered for optimal comfort, efficiency, and reliability.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <Phone className="mr-3 h-5 w-5" />
                      Emergency Service
                      <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </Link>

                  <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-md"
                    >
                      View Services
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Minimal Icon Showcase */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative h-[400px] flex items-center justify-center"
              >
                {/* Central Icon with Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <div className="w-48 h-48 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-400/20">
                    <div className="w-36 h-36 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                      <Thermometer className="h-20 w-20 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Floating Service Icons */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/20"
                >
                  <Wind className="h-8 w-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    x: [0, -10, 0]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg border border-orange-500/20"
                >
                  <Flame className="h-8 w-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, -15, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8
                  }}
                  className="absolute top-24 left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg border border-blue-500/20"
                >
                  <Wrench className="h-6 w-6 text-white" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    x: [0, 15, 0]
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                  className="absolute bottom-24 right-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg border border-orange-500/20"
                >
                  <Shield className="h-6 w-6 text-white" />
                </motion.div>

                {/* Subtle Rings */}
                <div className="absolute inset-0 rounded-full border border-white/5"></div>
                <div className="absolute inset-8 rounded-full border border-white/5"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Thermal Engineering Services
            </h2>
            <p className="text-gray-600">
              Comprehensive solutions for all your heating, cooling, and thermal system needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                <div className="p-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${index % 2 === 0
                      ? 'bg-orange-50 text-orange-600'
                      : 'bg-blue-50 text-blue-600'
                      }`}
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    href="/services"
                    className={`inline-flex items-center font-semibold ${index % 2 === 0 ? 'text-orange-600 hover:text-orange-700' : 'text-blue-600 hover:text-blue-700'
                      } group/link`}
                  >
                    Learn more
                    <ChevronRight className="ml-2 h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View All Services
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Clean Vector */}
      <section ref={featuresRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose <span className="text-orange-500">TTTC</span> Thermal Engineering
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: <Award className="h-7 w-7" />,
                    title: "Certified Expertise",
                    description: "All our technicians are certified, licensed, and continuously trained on the latest thermal technologies."
                  },
                  {
                    icon: <Shield className="h-7 w-7" />,
                    title: "Quality Guarantee",
                    description: "All work comes with a comprehensive warranty and satisfaction guarantee."
                  },
                  {
                    icon: <Users className="h-7 w-7" />,
                    title: "Client-Focused Service",
                    description: "Personalized service with transparent pricing and clear communication throughout."
                  },
                  {
                    icon: <Check className="h-7 w-7" />,
                    title: "Reliable Solutions",
                    description: "We provide durable, efficient solutions designed for long-term performance."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-6"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${index % 2 === 0 ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'
                        }`}
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn More About Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Clean Abstract Vector */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] flex items-center justify-center"
            >
              <div className="relative w-full h-full max-w-lg">
                {/* Main SVG Container */}
                <svg
                  viewBox="0 0 600 600"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Gradient Definitions */}
                  <defs>
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                    <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Background Glow */}
                  <circle cx="300" cy="300" r="250" fill="url(#glow)" />

                  {/* Modern Abstract Design */}

                  {/* Central Energy Core */}
                  <motion.circle
                    initial={{ r: 0 }}
                    animate={featuresInView ? { r: 80 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    cx="300"
                    cy="300"
                    fill="url(#orangeGradient)"
                    stroke="#f97316"
                    strokeWidth="4"
                  />

                  {/* Radiating Heat Waves */}
                  <motion.circle
                    initial={{ r: 0 }}
                    animate={featuresInView ? { r: 180 } : {}}
                    transition={{ duration: 1.2, delay: 0.7 }}
                    cx="300"
                    cy="300"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />

                  <motion.circle
                    initial={{ r: 0 }}
                    animate={featuresInView ? { r: 220 } : {}}
                    transition={{ duration: 1.4, delay: 0.9 }}
                    cx="300"
                    cy="300"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />

                  {/* Temperature Control Elements */}

                  {/* Heat Source */}
                  <motion.path
                    initial={{ scale: 0 }}
                    animate={featuresInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    d="M150,300 Q200,250 250,300 Q200,350 150,300 Z"
                    fill="url(#orangeGradient)"
                    stroke="#f97316"
                    strokeWidth="3"
                  />

                  {/* Cool Zone */}
                  <motion.path
                    initial={{ scale: 0 }}
                    animate={featuresInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    d="M350,300 Q400,250 450,300 Q400,350 350,300 Z"
                    fill="url(#blueGradient)"
                    stroke="#3b82f6"
                    strokeWidth="3"
                  />

                  {/* Air Flow */}
                  <motion.path
                    animate={{
                      strokeDashoffset: [0, 20, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    d="M300,120 C350,150 350,200 300,230"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="4"
                    strokeDasharray="10,10"
                  />

                  <motion.path
                    animate={{
                      strokeDashoffset: [0, 20, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.5
                    }}
                    d="M300,370 C350,400 350,450 300,480"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="4"
                    strokeDasharray="10,10"
                  />

                  {/* Energy Efficiency Lines */}
                  <motion.path
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    d="M300,300 L400,300"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    transform="rotate(0 300 300)"
                  />

                  <motion.path
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.25
                    }}
                    d="M300,300 L400,300"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    transform="rotate(90 300 300)"
                  />

                  <motion.path
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.5
                    }}
                    d="M300,300 L400,300"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    transform="rotate(180 300 300)"
                  />

                  <motion.path
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.75
                    }}
                    d="M300,300 L400,300"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    transform="rotate(270 300 300)"
                  />

                  {/* Connection Points */}
                  <circle cx="150" cy="300" r="12" fill="white" stroke="#f97316" strokeWidth="3" />
                  <circle cx="450" cy="300" r="12" fill="white" stroke="#3b82f6" strokeWidth="3" />
                  <circle cx="300" cy="120" r="12" fill="white" stroke="#3b82f6" strokeWidth="3" />
                  <circle cx="300" cy="480" r="12" fill="white" stroke="#f97316" strokeWidth="3" />
                </svg>

                {/* Floating Labels */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-12 left-1/4 transform -translate-x-1/2"
                >
                  <div className="text-sm font-semibold text-blue-600">Cooling</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-12 left-1/4 transform -translate-x-1/2"
                >
                  <div className="text-sm font-semibold text-orange-600">Heating</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute top-1/2 right-8 transform -translate-y-1/2"
                >
                  <div className="text-sm font-semibold text-green-600">Efficiency</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Expert Thermal Solutions?
          </h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
            Contact us today for professional thermal engineering services, emergency repairs, or preventive maintenance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl flex items-center justify-center"
              >
                <Phone className="mr-3 h-5 w-5" />
                Contact Our Team
                <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-md"
              >
                Get Free Consultation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>


    </main>
  )
}