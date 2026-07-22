"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LoyaltyManagementVideo() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-4 lg:px-8 text-center">
                
                {/* Optional Top Button (if it belongs to this section) */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-16 px-8 py-3 rounded-lg bg-[#da2929] text-white font-semibold hover:bg-[#b82222] transition-colors duration-300 shadow-lg shadow-red-500/30"
                >
                    Start for free
                </motion.button>

                {/* Video/Image Container */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer aspect-video bg-gray-900"
                >
                    {/* Background Image Placeholder */}
                    <Image 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                        alt="Nurture Relationships" 
                        fill
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105"
                    />

                    {/* Red Theme Overlay (Replacing the purple from the image to match website theme) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#da2929]/40 to-[#da2929]/20 mix-blend-multiply group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <motion.h2 
                            className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-8 drop-shadow-lg"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            nurture <br/> relationships
                        </motion.h2>
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-[0_0_40px_rgba(218,41,41,0.6)] transition-shadow duration-300"
                        >
                            <svg 
                                className="w-10 h-10 md:w-14 md:h-14 text-[#da2929] ml-2 group-hover:scale-110 transition-transform duration-300" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </motion.div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
