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

export default function LoyaltyManagementTransfers() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-[1450px] mx-auto px-4 lg:px-8">
                {/* flex-row-reverse puts the image on the left on large screens */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                    
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                            Paytm/UPI Transfers
                        </h2>
                        
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Basiq360&apos;s Loyalty & Rewards Management system takes the redemption process a notch higher by offering diverse options. This system brings:
                        </p>

                        <div className="space-y-6 mb-10">
                            {[
                                {
                                    title: "Choice of Redemption",
                                    desc: "Channel partners can redeem their points in a way that suits them best. The options range from Paytm wallet and UPI transfers to physical gifts."
                                },
                                {
                                    title: "Dynamic Point Values",
                                    desc: "The system&apos;s dynamic nature changes point values based on sales revenues. This feature provides an additional incentive for channel partners to increase sales."
                                },
                                {
                                    title: "Control Over Campaigns",
                                    desc: "You can change your loyalty campaigns, manage rewards, and pause or stop campaigns whenever possible. This level of control allows you to adapt your strategy based on market trends and business needs."
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
                            className="px-8 py-3 rounded-lg border-2 border-gray-200 text-gray-900 font-semibold hover:border-[#da2929] hover:text-[#da2929] transition-all duration-300 shadow-sm hover:shadow-md bg-white"
                        >
                            Start for free
                        </motion.button>
                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
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
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                alt="Paytm and UPI Transfers" 
                                className="w-full h-auto object-cover rounded-3xl"
                            />
                            
                            {/* Decorative floating elements */}
                            <motion.div 
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -left-6 w-24 h-24 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                            />
                            <motion.div 
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
