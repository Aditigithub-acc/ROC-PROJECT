"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function BlogPage3Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="w-full bg-white flex flex-col">

            <div className="w-full relative pt-32 pb-16 px-4 flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-red-50/40 via-white to-gray-50">

                <div className="absolute top-0 left-0 w-96 h-96 bg-red-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '2s' }}></div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 max-w-5xl mx-auto space-y-6"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight"
                    >
                        Sales Contest Ideas That Motivate <span className="text-[#da2929]">Every</span> Field Sales Executive, Not Just <span className="text-[#da2929]">Top Performers</span>
                    </motion.h1>

                    <motion.div
                        variants={itemVariants}
                        className="text-gray-500 font-bold tracking-wider text-sm md:text-base uppercase"
                    >
                        Rahul Poral <span className="text-[#da2929] mx-2">|</span> July 21, 2026
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="text-gray-600 text-xs md:text-sm mt-4 font-medium"
                    >
                        <Link href="/" className="hover:text-[#da2929] transition-colors">Home</Link>
                        <span className="mx-2 text-gray-300">/</span>
                        <Link href="/blog" className="hover:text-[#da2929] transition-colors">Blog</Link>
                        <span className="mx-2 text-gray-300">/</span>
                        <span className="text-gray-400">Sales Contest Ideas That Motivate...</span>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="w-full relative h-[60vh] md:h-[75vh] lg:h-[85vh] bg-gray-100 overflow-hidden"
            >
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full relative cursor-pointer group"
                >
                    <Image
                        src="/image copy.png"
                        alt="Sales Contest Ideas"
                        fill
                        priority
                        className="object-contain w-full h-full transition-transform duration-700"
                    />
                </motion.div>

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </motion.div>

        </section>
    );
}
