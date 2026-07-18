"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/Components/Providers/ModalContext";

const Navbar = memo(() => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { openContact } = useModal();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Platforms', href: '/about' },
        { name: 'Our Work', href: '/gallery' },
        { name: 'Rewards', href: '/' },
        { name: "Rewards Program", href: '/students-corner' },
        { name: "Lets's Talk", href: '/contact' },
    ];


    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${scrolled
                ? "py-2 bg-gray-50 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
                : "py-2.5 bg-gray-50"
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-8 flex items-center justify-between">
                <div className="flex items-center gap-2 relative group flex-shrink-0">
                    <div className={`relative overflow-hidden transition-all duration-500 ${scrolled ? 'w-40 h-12' : 'w-56 h-16 lg:w-64 lg:h-18'}`}>
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 justify-center">
                    <ul className="flex flex-wrap items-center justify-center gap-3 lg:gap-8 xl:gap-10">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`text-gray-800 hover:text-[#da2929] font-semibold transition-all duration-300 tracking-wide relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-6px] after:left-0 after:bg-[#da2929] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${scrolled ? "text-[13px] lg:text-[15px]" : "text-sm lg:text-[16px]"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden md:flex flex-shrink-0">
                    <button
                        onClick={openContact}
                        className="bg-white text-[#da2929] border-[1px] border-[#da2929] px-5 py-2 rounded-md font-semibold tracking-wide transition-all duration-300 hover:bg-[#000000] hover:text-white hover:shadow-[0_8px_25px_rgba(218,41,41,0.3)] hover:border-none cursor-pointer active:scale-95"
                    >
                        Contact Us
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-800 p-2 z-[110] relative flex h-11 w-11 items-center justify-center rounded-full bg-white/80 shadow-sm"
                    aria-label="Toggle navigation menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between items-end">
                        <motion.span
                            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0, width: isOpen ? "100%" : "100%" }}
                            className="w-full h-0.5 bg-current rounded-full origin-right transition-all"
                        />
                        <motion.span
                            animate={{ opacity: isOpen ? 0 : 1, width: "70%" }}
                            className="h-0.5 bg-current rounded-full transition-all"
                        />
                        <motion.span
                            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0, width: isOpen ? "100%" : "40%" }}
                            className="h-0.5 bg-current rounded-full origin-right transition-all"
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[105] md:hidden flex flex-col bg-[radial-gradient(circle_at_top_right,_rgba(218,41,41,0.12),_transparent_45%),linear-gradient(135deg,_#ffffff_0%,_#fff7f7_100%)] p-4 pt-20"
                    >
                        <div className="w-full max-w-sm mx-auto flex-1 overflow-y-auto rounded-[2rem] border border-gray-200 bg-white/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur">
                            <div className="mb-6 flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#da2929]">Navigate</p>
                                    <p className="text-sm font-semibold text-gray-700">Choose a section</p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm"
                                    aria-label="Close navigation menu"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="flex flex-col gap-2">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.08 + i * 0.08 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block rounded-2xl border border-transparent bg-gray-50 px-4 py-4 text-lg font-black text-gray-900 transition-all duration-300 hover:border-[#da2929]/20 hover:bg-[#da2929]/5 hover:text-[#da2929]"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-6 border-t border-gray-100 pt-5">
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        openContact();
                                    }}
                                    className="w-full rounded-2xl bg-[#da2929] px-4 py-4 font-black uppercase tracking-[0.25em] text-sm text-white shadow-2xl shadow-red-500/20"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
});

Navbar.displayName = "Navbar";

export default Navbar;