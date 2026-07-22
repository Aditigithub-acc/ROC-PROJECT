"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const brands = [
    "Mahindra & Mahindra", "Janta Land Promoters", "Nectar Biopharma",
    "Glenmark", "Unimarck", "Godfrey Phillips India",
    "Nerolac Paints", "Asian Paints", "ACC Limited", "Lovely Pro Univ",
    "Syngenta", "Synergy", "Videocon"
];

export default function TrustedBy() {
    return (
        <section className="bg-gray-50 py-24 border-t border-gray-200 overflow-hidden relative">
            <div className="max-w-[1450px] mx-auto px-4 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center gap-3 mb-4"
                    >
                        <span className="w-8 h-[2px] bg-[#da2929]"></span>
                        <span className="text-[#da2929] uppercase tracking-[0.2em] text-[10px] font-black">
                            TRUSTED BY
                        </span>
                        <span className="w-8 h-[2px] bg-[#da2929]"></span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-4xl text-gray-900 font-bold tracking-tight"
                    >
                        Startups to industry leaders
                    </motion.h2>
                </div>

                {/* Moving Brands Rows */}
                <div className="flex flex-col gap-6 mb-16 relative overflow-hidden">
                    {/* Fading edges for the marquee effect */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                    {/* Line 1: Right to Left */}
                    <motion.div
                        className="flex gap-4 lg:gap-6 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {[...brands, ...brands].map((brand, i) => (
                            <div
                                key={i}
                                className="group bg-white h-24 w-48 sm:w-56 rounded-2xl flex-shrink-0 flex items-center justify-center border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#da2929]/30 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#da2929]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="text-center px-4 text-gray-500 font-bold text-[11px] uppercase tracking-wider group-hover:text-[#da2929] transition-colors duration-300 z-10">
                                    {brand}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Line 2: Left to Right */}
                    <motion.div
                        className="flex gap-4 lg:gap-6 w-max"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {[...[...brands].reverse(), ...[...brands].reverse()].map((brand, i) => (
                            <div
                                key={`rev-${i}`}
                                className="group bg-white h-24 w-48 sm:w-56 rounded-2xl flex-shrink-0 flex items-center justify-center border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#da2929]/30 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#da2929]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="text-center px-4 text-gray-500 font-bold text-[11px] uppercase tracking-wider group-hover:text-[#da2929] transition-colors duration-300 z-10">
                                    {brand}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center"
                >
                    <Link
                        href="https://giftsonclick.in"
                        target="_blank"
                        className="group inline-flex items-center justify-center bg-white border border-gray-200 shadow-sm px-8 py-4 rounded-xl text-sm font-bold text-gray-700 hover:text-white hover:bg-[#da2929] hover:border-[#da2929] transition-all duration-300"
                    >
                        See more on GiftsOnClick.in
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
