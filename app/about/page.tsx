'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target, Shield, Heart, Zap } from 'lucide-react'

export default function AboutPage() {
    const values = [
        {
            icon: <Award className="h-8 w-8" />,
            title: "Professionalism",
            description: "We conduct our business with integrity, accountability, and respect, ensuring high standards in all our engagements."
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Quality & Reliability",
            description: "We deliver dependable thermal solutions that perform efficiently and consistently over time."
        },
        {
            icon: <Heart className="h-8 w-8" />,
            title: "Safety First",
            description: "Safety is central to our operations. We adhere strictly to engineering standards and best practices."
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: "Customer Focus",
            description: "Our clients are at the heart of everything we do. We listen and deliver tailored solutions."
        },
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Technical Excellence",
            description: "We value continuous learning, innovation, and application of sound engineering principles."
        },
        {
            icon: <Target className="h-8 w-8" />,
            title: "Teamwork & Accountability",
            description: "We believe in collaboration, shared responsibility, and ownership of results."
        }
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
                            About TTTC Thermal Engineering
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-blue-100"
                        >
                            Engineering excellence in thermal and HVAC solutions since our inception
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our Engineering Excellence
                            </h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    TTTC Thermal Engineering is a specialized engineering company providing expert thermal and HVAC solutions for residential, commercial, and industrial clients across Zimbabwe.
                                </p>
                                <p>
                                    Established by experienced directors with a shared commitment to quality engineering and customer satisfaction, we are driven by professionalism, technical excellence, and reliability.
                                </p>
                                <p>
                                    Our approach combines engineering precision, modern technology, and practical experience to support clients across various sectors including manufacturing, hospitality, mining, aviation support services, commercial buildings, and residential developments.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8"
                        >
                            <div className="space-y-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">Mission</div>
                                    <p className="text-gray-700 italic">
                                        "To provide reliable, efficient, and professionally engineered thermal solutions that meet our clients' operational needs while maintaining the highest standards of safety, quality, and service excellence."
                                    </p>
                                </div>
                                <div className="border-t pt-6 text-center">
                                    <div className="text-4xl font-bold text-orange-600 mb-2">Vision</div>
                                    <p className="text-gray-700 italic">
                                        "To become a leading thermal engineering company in Zimbabwe and the region, recognized for engineering excellence, innovation, reliability, and long-term client partnerships."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Company Values */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-gray-600">
                            The principles that guide our engineering solutions and client relationships
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                            >
                                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${index % 2 === 0 ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'
                                    }`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sectors Served */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Sectors We Serve
                        </h2>
                        <p className="text-gray-600">
                            Providing thermal engineering solutions across diverse industries
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Manufacturing", description: "Industrial heating and process cooling systems" },
                            { name: "Hospitality", description: "Hotel HVAC and water heating solutions" },
                            { name: "Mining", description: "Specialized thermal equipment for mining operations" },
                            { name: "Aviation Support", description: "Ground support thermal systems" },
                            { name: "Commercial Buildings", description: "Office HVAC and maintenance" },
                            { name: "Residential Developments", description: "Home heating and cooling solutions" }
                        ].map((sector, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors"
                            >
                                <div className="text-lg font-bold text-gray-900 mb-2">{sector.name}</div>
                                <p className="text-gray-600 text-sm">{sector.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}