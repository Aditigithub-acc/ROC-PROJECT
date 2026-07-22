"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const customersRow1 = [
    { name: "Idemitsu", logo: "https://placehold.co/200x100?text=Idemitsu" },
    { name: "Plaza Cables", logo: "https://placehold.co/200x100?text=Plaza+Cables" },
    { name: "BCH Electric", logo: "https://placehold.co/200x100?text=BCH+Electric" },
    { name: "Okaya", logo: "https://placehold.co/200x100?text=Okaya" },
    { name: "KEI Wires", logo: "https://placehold.co/200x100?text=KEI+Wires" },
];

const customersRow2 = [
    { name: "Neva", logo: "https://placehold.co/200x100?text=Neva" },
    { name: "Elixir", logo: "https://placehold.co/200x100?text=Elixir" },
    { name: "Sirca", logo: "https://placehold.co/200x100?text=Sirca" },
    { name: "Sylvan", logo: "https://placehold.co/200x100?text=Sylvan" },
    { name: "TMT", logo: "https://placehold.co/200x100?text=TMT" },
];

// Combine into continuous arrays for seamless looping animation
const doubledRow1 = [...customersRow1, ...customersRow1, ...customersRow1];
const doubledRow2 = [...customersRow2, ...customersRow2, ...customersRow2];

export default function LoyaltyManagementcontent() {
    return (
        <section className="py-20 bg-[#faf9f6]">
            <div className="max-w-[1450px] mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-[44px] font-bold text-gray-900 mb-4 tracking-tight"
                    >
                        Our Valued <span className="text-[#da2929]">Customers</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-500 font-medium"
                    >
                        Empowering leading enterprises across diverse industries
                    </motion.p>
                </div>

                {/* Marquee Container */}
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden relative">
                    
                    <div className="flex flex-col gap-6 md:gap-8">
                        {/* Row 1 */}
                        <div className="relative flex items-center">
                            <motion.div
                                animate={{ x: ["0%", "-33.33%"] }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="flex items-center gap-6 md:gap-8 whitespace-nowrap min-w-max"
                            >
                                {doubledRow1.map((customer, index) => (
                                    <div 
                                        key={index}
                                        className="w-40 h-24 md:w-56 md:h-32 rounded-2xl bg-white border border-gray-100 flex items-center justify-center p-6 hover:border-[#da2929]/30 hover:shadow-lg transition-all duration-300 group relative"
                                    >
                                        <Image 
                                            src={customer.logo} 
                                            alt={customer.name}
                                            fill
                                            className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Row 2 (moves opposite direction) */}
                        <div className="relative flex items-center ml-[-100px]">
                            <motion.div
                                animate={{ x: ["-33.33%", "0%"] }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="flex items-center gap-6 md:gap-8 whitespace-nowrap min-w-max"
                            >
                                {doubledRow2.map((customer, index) => (
                                    <div 
                                        key={index}
                                        className="w-40 h-24 md:w-56 md:h-32 rounded-2xl bg-white border border-gray-100 flex items-center justify-center p-6 hover:border-[#da2929]/30 hover:shadow-lg transition-all duration-300 group relative"
                                    >
                                        <Image 
                                            src={customer.logo} 
                                            alt={customer.name}
                                            fill
                                            className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Gradient Fades for depth */}
                    <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
