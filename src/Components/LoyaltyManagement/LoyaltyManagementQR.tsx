"use client";

import React from "react";
import { motion } from "framer-motion";

const CheckIcon = () => (
    <svg 
        className="w-5 h-5 text-[#da2929] mt-1 flex-shrink-0" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);

export default function LoyaltyManagementQR() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1450px] mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                            QR-Based Points
                        </h2>
                        
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Basiq360&apos;s Loyalty & Rewards Management system revolutionizes how you manage your rewards programs with the QR-based points system. This system offers:
                        </p>

                        <div className="space-y-6 mb-10">
                            {[
                                {
                                    title: "Quick and Effortless Setup",
                                    desc: "The system is designed to minimize operational difficulties, ensuring the setup process is quick and effortless. This smooth implementation lets you concentrate on what truly matters - boosting your sales."
                                },
                                {
                                    title: "Flexible Bonus Schemes",
                                    desc: "The system&apos;s flexibility stands out, allowing you to tailor your rewards strategy to align with your business objectives. You can set up time-based, product-based, or area-wise bonus schemes."
                                },
                                {
                                    title: "Diverse Incentives",
                                    desc: "The QR-based points system also extends to the incentives you can offer. Whether it&apos;s one-time referral or transaction-based incentives, you can choose what best suits your business model."
                                }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                                    className="flex gap-4 group"
                                >
                                    <div className="transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                                        <CheckIcon />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-bold text-lg mb-1 group-hover:text-[#da2929] transition-colors duration-300">
                                            {item.title} :
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-lg border-2 border-gray-200 text-gray-900 font-semibold hover:border-[#da2929] hover:text-[#da2929] transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            Start for free
                        </motion.button>
                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            {/* Overlay for hover effect */}
                            <div className="absolute inset-0 bg-[#da2929]/0 group-hover:bg-[#da2929]/10 transition-colors duration-500 z-10" />
                            
                            <motion.img 
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.7 }}
                                src="https://images.unsplash.com/photo-1526045612212-70cb35976638?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                alt="QR Code Scanning" 
                                className="w-full h-auto object-cover rounded-3xl"
                            />
                            
                            {/* Decorative floating elements */}
                            <motion.div 
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                            />
                            <motion.div 
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-8 -left-8 w-32 h-32 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
