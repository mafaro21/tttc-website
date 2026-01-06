'use client'

import { motion } from 'framer-motion'
import { Flame, Wrench, Wind, Shield, Zap, Thermometer, Settings, Droplets, Building, Home, Factory } from 'lucide-react'

export default function ServicesPage() {
    const services = [
        {
            icon: <Droplets className="h-8 w-8" />,
            title: "Geyser Elements & Water Heating Systems",
            description: "Supply, installation, and maintenance of geyser elements and complete water heating systems",
            features: ["Element replacement", "System installation", "Pressure valve services", "Temperature control systems"],
            sectors: ["Residential", "Commercial", "Industrial"]
        },
        {
            icon: <Flame className="h-8 w-8" />,
            title: "Industrial Stoves & Heating Equipment",
            description: "Professional installation and maintenance of industrial-grade stoves and heating equipment",
            features: ["Commercial stoves", "Industrial heaters", "Process heating", "Temperature control"],
            sectors: ["Manufacturing", "Hospitality", "Mining"]
        },
        {
            icon: <Wind className="h-8 w-8" />,
            title: "Air-Conditioning & HVAC Systems",
            description: "Complete HVAC solutions for optimal indoor climate control",
            features: ["AC installation", "Ventilation systems", "Ductwork design", "Energy recovery"],
            sectors: ["Commercial", "Residential", "Industrial"]
        },
        {
            icon: <Thermometer className="h-8 w-8" />,
            title: "Thermal System Diagnostics & Repairs",
            description: "Expert diagnostics and repair services for all thermal systems",
            features: ["Fault diagnosis", "Emergency repairs", "System troubleshooting", "Performance testing"],
            sectors: ["All Sectors"]
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Preventive Maintenance & System Upgrades",
            description: "Regular maintenance and system upgrades for optimal performance",
            features: ["Scheduled maintenance", "System optimization", "Component upgrades", "Efficiency improvements"],
            sectors: ["All Sectors"]
        },
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Energy-Efficient Thermal Solutions",
            description: "Sustainable and energy-efficient thermal engineering solutions",
            features: ["Energy audits", "Efficiency upgrades", "Sustainable systems", "Cost optimization"],
            sectors: ["Commercial", "Industrial", "Residential"]
        },
        {
            icon: <Settings className="h-8 w-8" />,
            title: "Technical Consultancy & Project Support",
            description: "Expert engineering consultancy for thermal system projects",
            features: ["Project design", "Technical specifications", "Installation supervision", "Commissioning"],
            sectors: ["All Sectors"]
        }
    ]

    const sectors = [
        { icon: <Home className="h-6 w-6" />, name: "Residential", count: "500+" },
        { icon: <Building className="h-6 w-6" />, name: "Commercial", count: "200+" },
        { icon: <Factory className="h-6 w-6" />, name: "Industrial", count: "100+" }
    ]

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-30 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                        >
                            Our Engineering Services
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-blue-100"
                        >
                            Comprehensive thermal and HVAC solutions for every sector
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Specialized Thermal Engineering Services
                        </h2>
                        <p className="text-gray-600">
                            From residential heating to industrial thermal systems, we provide complete engineering solutions
                        </p>
                    </div>

                    <div className="space-y-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
                            >
                                <div className="p-8">
                                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                                        <div className="lg:w-1/4">
                                            <div className={`w-20 h-20 rounded-xl flex items-center justify-center mb-4 ${index % 2 === 0 ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'
                                                }`}>
                                                {service.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>

                                            <div className="mb-4">
                                                <div className="text-sm font-semibold text-gray-500 mb-2">SERVES:</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.sectors.map((sector, i) => (
                                                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                                            {sector}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:w-3/4">
                                            <p className="text-gray-700 text-lg mb-6">{service.description}</p>

                                            <div>
                                                <div className="text-sm font-semibold text-gray-500 mb-3">KEY FEATURES:</div>
                                                <div className="grid md:grid-cols-2 gap-3">
                                                    {service.features.map((feature, i) => (
                                                        <div key={i} className="flex items-center">
                                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                                            <span className="text-gray-600">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}