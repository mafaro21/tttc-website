'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Building, User, Mail as MailIcon, PhoneCall } from 'lucide-react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    })

    const services = [
        "Geyser Elements & Water Heating",
        "Industrial Stoves & Heating",
        "Air-Conditioning & HVAC",
        "Thermal System Diagnostics",
        "Preventive Maintenance",
        "Energy-Efficient Solutions",
        "Technical Consultancy",
        "Other"
    ]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

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
                            Contact Our Engineering Team
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-blue-100"
                        >
                            Get expert thermal engineering solutions tailored to your needs
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Contact Information & Form */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                Get in Touch
                            </h2>

                            <div className="space-y-8 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Emergency Service</h3>
                                        <p className="text-gray-600">Available 24/7 for urgent thermal issues</p>
                                        <a href="tel:+5551234567" className="text-blue-600 font-semibold text-lg hover:text-blue-800">
                                            (555) 123-4567
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                                        <p className="text-gray-600">For inquiries and consultations</p>
                                        <a href="mailto:info@tttc-thermal.com" className="text-blue-600 font-semibold text-lg hover:text-blue-800">
                                            info@tttc-thermal.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Our Location</h3>
                                        <p className="text-gray-600">Serving Zimbabwe and the region</p>
                                        <p className="text-gray-700 font-medium">
                                            123 Engineering Drive<br />
                                            Technical District<br />
                                            Harare, Zimbabwe
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Service Hours</h3>
                                        <div className="space-y-1 text-gray-700">
                                            <div className="flex justify-between">
                                                <span>Monday - Friday:</span>
                                                <span className="font-medium">8:00 AM - 6:00 PM</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Saturday:</span>
                                                <span className="font-medium">9:00 AM - 4:00 PM</span>
                                            </div>
                                            <div className="flex justify-between text-orange-600 font-bold">
                                                <span>Emergency Service:</span>
                                                <span>24/7 Available</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Contact Buttons */}
                            <div className="space-y-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3"
                                >
                                    <PhoneCall className="h-5 w-5" />
                                    Emergency Call: (555) 123-4567
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3"
                                >
                                    <MailIcon className="h-5 w-5" />
                                    Email for Quote
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                    <MessageSquare className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Send us a message</h3>
                                    <p className="text-gray-600">We'll respond within 24 hours</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <div className="flex items-center gap-2">
                                                <User className="h-4 w-4" />
                                                Full Name *
                                            </div>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                                            placeholder="John Smith"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <div className="flex items-center gap-2">
                                                <Building className="h-4 w-4" />
                                                Company
                                            </div>
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                                            placeholder="Your company name"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <div className="flex items-center gap-2">
                                                <Mail className="h-4 w-4" />
                                                Email Address *
                                            </div>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <div className="flex items-center gap-2">
                                                <Phone className="h-4 w-4" />
                                                Phone Number
                                            </div>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Service Required *
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Project Details / Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-none"
                                        placeholder="Describe your thermal engineering needs..."
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:from-blue-700 hover:to-blue-900 transition-all"
                                >
                                    <Send className="h-5 w-5" />
                                    Send Message
                                </motion.button>

                                <p className="text-sm text-gray-500 text-center">
                                    By submitting this form, you agree to our privacy policy and consent to be contacted by our engineering team.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map & Service Area */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Service Area
                        </h2>
                        <p className="text-gray-600">
                            We serve clients across Zimbabwe with our thermal engineering expertise
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">Nationwide</div>
                                <div className="text-gray-700">Service Coverage</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                                <div className="text-gray-700">Emergency Response</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                                <div className="text-gray-700">Client Satisfaction</div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
                            <p className="text-gray-700 mb-6">
                                Contact us today for a free thermal engineering consultation and quote
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg"
                            >
                                Request Free Consultation
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}