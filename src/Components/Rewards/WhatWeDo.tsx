"use client";

import { motion } from "framer-motion";

const gridItems = [
    {
        num: "01",
        title: "Mission Oriented",
        desc: "Facilitating the right products for your reward and loyalty projects, regardless of segment or industry."
    },
    {
        num: "02",
        title: "Quality Driven",
        desc: "Products worth getting, built to leave a lasting impression on customers and employees."
    },
    {
        num: "03",
        title: "Comprehensive Range",
        desc: "A diverse catalogue, open to fresh gift ideas, to furnish any corporate gifting program."
    },
    {
        num: "04",
        title: "Custom Branding",
        desc: "Tailor-made product designs and gifting strategies that effectively market your brand."
    },
    {
        num: "05",
        title: "Right On Time",
        desc: "Appropriate, affordable, and innovative — backed by years of experience and timely delivery."
    }
];

export default function WhatWeDo() {
    return (
        <section className="bg-white py-24 relative z-10">
            <div className="max-w-[1450px] mx-auto px-4 lg:px-8">

                {/* Header Section */}
                <div className="max-w-2xl mb-20 text-center lg:text-left mx-auto lg:mx-0">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center lg:justify-start gap-4 mb-6"
                    >
                        <span className="w-8 h-[2px] bg-[#da2929]"></span>
                        <span className="text-[#da2929] uppercase tracking-[0.2em] text-[10px] font-black">
                            WHAT WE DO
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl lg:text-5xl text-gray-900 font-bold mb-6 tracking-tight"
                    >
                        Gifting selection,<br className="hidden lg:block" /> made simple.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0"
                    >
                        Since 2015, we&apos;ve facilitated reward and corporate gifting programs across almost every industry — delivering superior quality branded and customized gifts for employees, customers, and channel partners.
                    </motion.p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
                    {gridItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:bg-white transition-all duration-300 group flex flex-col justify-start relative overflow-hidden"
                        >
                            {/* Hover accent line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#da2929] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-[#da2929] font-black text-sm mb-6 group-hover:scale-110 group-hover:bg-[#da2929] group-hover:text-white transition-all duration-300">
                                {item.num}
                            </span>
                            <h3 className="text-gray-900 font-bold text-lg mb-3 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-base font-medium leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
