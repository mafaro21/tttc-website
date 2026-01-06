'use client'
import { Flame, Wrench, Wind, Shield, Phone, Menu, X, ChevronRight, Mail, MapPin, Award, Check, Users, Thermometer } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from '@/public/tttc.png'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <Link href="/">
                                <Image src={Logo} alt='Logo' height={100} />
                            </Link>


                        </div>
                        <p className="text-gray-400 text-sm mb-6">
                            Professional thermal engineering solutions for residential and commercial clients.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="tel:0771234567">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center cursor-pointer"
                                >
                                    <Phone className="h-5 w-5 text-orange-400" />
                                </motion.div>
                            </Link>
                            <Link href="mailto:info@tttc-thermal.com">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center cursor-pointer"
                                >
                                    <Mail className="h-5 w-5 text-orange-400" />
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-bold mb-6 text-orange-400">Our Services</h3>
                        <ul className="space-y-3">
                            {["Heating Systems", "Air Conditioning", "Geyser Elements", "Preventive Maintenance", "Emergency Repairs"].map((service, i) => (
                                <Link key={i} href="/services">
                                    <motion.li
                                        whileHover={{ x: 5 }}
                                        className="text-gray-400 hover:text-orange-300 transition-colors cursor-pointer"
                                    >
                                        {service}
                                    </motion.li>
                                </Link>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-bold mb-6 text-orange-400">Contact Info</h3>
                        <ul className="space-y-4">
                            <Link href="tel:0771234567">
                                <motion.li
                                    whileHover={{ x: 5 }}
                                    className="flex items-center cursor-pointer"
                                >
                                    <Phone className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                                    <span className="text-gray-400 hover:text-white transition-colors">0771234567</span>
                                </motion.li>
                            </Link>

                            <Link href="mailto:info@tttc-thermal.com">
                                <motion.li
                                    whileHover={{ x: 5 }}
                                    className="flex items-center cursor-pointer"
                                >
                                    <Mail className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                                    <span className="text-gray-400 hover:text-white transition-colors">info@tttc-thermal.com</span>
                                </motion.li>
                            </Link>

                            <motion.li
                                whileHover={{ x: 5 }}
                                className="flex items-center"
                            >
                                <MapPin className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-400">123 Engineering Drive, Harare</span>
                            </motion.li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800 mt-12 pt-8 text-center"
                >
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} TTTC Thermal Engineering. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
