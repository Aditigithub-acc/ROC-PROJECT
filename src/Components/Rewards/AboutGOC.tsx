"use client";

import { motion } from "framer-motion";

export default function AboutGOC() {
    return (
        <section className="bg-gray-50 py-24 relative overflow-hidden border-t border-gray-200">
            <div className="max-w-[1450px] mx-auto px-4 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <span className="w-8 h-[2px] bg-[#da2929]"></span>
                    <span className="text-[#da2929] uppercase tracking-[0.2em] text-[10px] font-black">
                        ABOUT GIFTSONCLICK
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column */}
                    <div className="flex flex-col justify-between">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.2] text-gray-900 font-bold mb-12 tracking-tight"
                        >
                            <span className="font-serif italic text-gray-500 font-normal">&quot;If it is</span><br />
                            <span className="text-[#da2929]">CORPORATE</span> it<br />
                            has to be<br />
                            <span className="text-[#da2929]">PROFESSIONAL.&quot;</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-gray-500 text-base md:text-lg max-w-md font-medium uppercase tracking-widest"
                        >
                            Corporate gifting has a unique purpose — and we understand it.
                        </motion.p>
                    </div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 flex flex-col gap-6 text-lg lg:text-xl leading-relaxed font-medium"
                    >
                        <p>
                            GiftsOnClick is a venture of <strong className="text-gray-900 font-bold">A Square Technologies</strong>, offering a high-quality, extensive range of unique and affordable corporate gifting solutions, with customization and personalization options. Started in 2015, GOC has grown into a leading corporate gifting solutions provider in North India.
                        </p>
                        <p>
                            We help you build emotional belonging with your company&apos;s people — employees, loyal customers, and channel partners — through professional yet practical gifting ideas. Gifts are chosen for long desk life, backed by a comprehensive catalogue that makes selection easy.
                        </p>
                        <p>
                            What started as hands-on execution of large corporate gifting projects convinced us these processes could be standardized — so we built GiftsOnClick as a one-stop platform for corporate gifting.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
