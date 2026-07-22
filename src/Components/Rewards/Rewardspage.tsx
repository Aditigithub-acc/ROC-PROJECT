"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function RewardsPage() {
    return (
        <section className="relative min-h-[90vh] bg-white flex items-center pt-24 pb-12 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 bg-center [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))] mix-blend-overlay"></div>

            <div className="max-w-[1450px] mx-auto w-full px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">

                {/* Left Content Area */}
                <div className="flex flex-col items-start pt-8 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-6 lg:mb-8"
                    >
                        <span className="w-8 h-[2px] bg-[#da2929]"></span>
                        <span className="text-[#da2929] uppercase tracking-[0.2em] text-xs font-bold">
                            Powered by GiftsOnClick
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight"
                    >
                        If it is corporate, <br className="hidden sm:block" />
                        it has to be <br className="hidden sm:block" />
                        <span className="italic font-serif text-[#da2929]">professional.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 text-base lg:text-lg xl:text-xl max-w-xl leading-relaxed mb-10 font-medium"
                    >
                        RewardsOnClick is built by the team behind GiftsOnClick.in — North India&apos;s leading corporate gifting solutions provider since 2015. Same catalog, same fulfilment network, now built for rewards and incentive programs.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link href="#" className="group relative overflow-hidden bg-[#da2929] text-white px-8 py-4 rounded-xl font-bold text-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#da2929]/30">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Visit GiftsOnClick.in <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </span>
                            <div className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-12 group-hover:animate-[shine_1s_ease-in-out]"></div>
                        </Link>

                        <Link href="#" className="group bg-white border-2 border-gray-200 text-gray-700 hover:text-[#da2929] hover:border-[#da2929] px-8 py-4 rounded-xl font-bold text-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                            Explore Our Programs
                        </Link>
                    </motion.div>

                    {/* Bottom Info line */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-16 lg:mt-24 pt-6 border-t border-gray-100 w-full flex flex-col sm:flex-row gap-8 sm:gap-16"
                    >
                        <div>
                            <p className="text-gray-900 font-bold mb-1">RewardsOnClick</p>
                            <p className="text-[10px] text-gray-500 tracking-[0.1em] uppercase">B2B Rewards Platform</p>
                        </div>
                        <div className="hidden sm:flex text-gray-300 font-light mt-1 items-center">
                            <div className="w-[1px] h-8 bg-gray-200"></div>
                        </div>
                        <div>
                            <p className="text-gray-900 font-bold mb-1">GiftsOnClick</p>
                            <p className="text-[10px] text-gray-500 tracking-[0.1em] uppercase">Corporate Gifting, Est. 2015</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Content Area - Rotating Badge */}
                <div className="flex justify-center lg:justify-end items-center h-full pb-16 lg:pb-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                        className="relative w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center bg-gray-50 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.03)] border border-gray-100"
                    >
                        {/* Outer Rotating Text Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full"
                        >
                            <svg viewBox="0 0 100 100" className="w-full h-full text-gray-600 overflow-visible">
                                <path
                                    id="circlePathHero"
                                    d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                                    fill="transparent"
                                />
                                <text width="100%">
                                    <textPath href="#circlePathHero" startOffset="0%" className="text-[8.5px] uppercase tracking-[0.15em] font-bold" fill="currentColor">
                                        • GIFTS ON CLICK • EST 2015 • A SQUARE TECHNOLOGIES
                                    </textPath>
                                    <textPath href="#circlePathHero" startOffset="33%" className="text-[8.5px] uppercase tracking-[0.15em] font-bold" fill="currentColor">
                                        • GIFTS ON CLICK • EST 2015 • A SQUARE TECHNOLOGIES
                                    </textPath>
                                </text>
                            </svg>
                        </motion.div>

                        {/* Inner Static Text */}
                        <div className="absolute flex flex-col items-center justify-center text-center px-4 z-10 w-3/4 h-3/4 bg-white rounded-full shadow-lg border border-gray-100">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-gray-400 text-[10px] tracking-widest uppercase mb-1 font-bold"
                            >
                                Verified
                            </motion.span>
                            <motion.h3
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
                                className="text-gray-900 text-2xl lg:text-3xl font-black tracking-tight mb-1"
                            >
                                PARTNER
                            </motion.h3>
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                                className="text-[#da2929] text-[9px] tracking-[0.2em] uppercase font-black"
                            >
                                North India
                            </motion.span>
                        </div>
                    </motion.div>
                </div>

            </div>

            <style jsx>{`
                @keyframes shine {
                    100% {
                        left: 125%;
                    }
                }
            `}</style>
        </section>
    );
}
