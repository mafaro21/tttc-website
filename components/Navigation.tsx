'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">T</span>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-gray-900">TTTC</span>
                            <span className="text-xs text-gray-500 font-medium block -mt-1">Thermal Engineering</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`font-medium transition-colors ${pathname === item.href
                                    ? 'text-orange-600'
                                    : 'text-gray-700 hover:text-orange-600'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                        >
                            <Phone className="h-4 w-4" />
                            Emergency
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="py-4 border-t space-y-2">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`block px-2 py-2 font-medium ${pathname === item.href
                                            ? 'text-orange-600'
                                            : 'text-gray-900 hover:text-orange-600'
                                            }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold mt-4 shadow-md flex items-center justify-center gap-2">
                                    <Phone className="h-4 w-4" />
                                    Emergency Service
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}