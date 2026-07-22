"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "2015", label: "ESTABLISHED" },
    { value: "100+", label: "BRAND PARTNERS" },
    { value: "13+", label: "ENTERPRISE CLIENTS" },
    { value: "₹0", label: "MINIMUM ORDER VALUE" }
];

export default function Stats() {
    return (
        <section className="bg-white py-24 relative overflow-hidden border-t border-gray-200">
            <div className="max-w-[1450px] mx-auto px-4 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-4 mb-4"
                    >
                        <span className="w-8 h-[2px] bg-[#da2929]"></span>
                        <span className="text-[#da2929] uppercase tracking-[0.2em] text-[10px] font-black">
                            THE CATALOG, BY THE NUMBERS
                        </span>
                        <span className="w-8 h-[2px] bg-[#da2929]"></span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl lg:text-5xl text-gray-900 font-bold leading-tight tracking-tight"
                    >
                        One catalog. <span className="text-[#da2929]">Every occasion.</span>
                    </motion.h2>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-[#da2929] rounded-2xl p-10 lg:py-16 flex flex-col items-center justify-center text-center shadow-xl shadow-[#da2929]/20 relative overflow-hidden group"
                        >
                            {/* Abstract bg element */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                            <motion.h3
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", delay: 0.3 + (index * 0.1) }}
                                className="text-white font-black text-5xl lg:text-6xl mb-4 tracking-tighter relative z-10"
                            >
                                {stat.value}
                            </motion.h3>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-bold relative z-10">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
