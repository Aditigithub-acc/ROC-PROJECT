"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const DealerDistributionHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section
            ref={containerRef}
            className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-white font-[family-name:var(--font-absans)]"
        >
            <motion.div
                style={{ y, opacity, scale }}
                className="text-center z-10 px-4"
            >
                <div className="flex items-center justify-center gap-4 mb-8">
                    <span className="text-[#da2929] font-black text-[10px] uppercase tracking-[0.6em]">
                        Global Reach
                    </span>
                    <div className="w-12 h-[1px] bg-[#da2929]/20" />
                </div>

                <h1 className="text-6xl lg:text-8xl font-black text-gray-900 tracking-[-0.05em] leading-[0.9] mb-8">
                    Dealer <br />
                    <span className="text-[#da2929]">Distribution.</span>
                </h1>

                <p className="max-w-4xl mx-auto text-gray-400 font-medium text-lg leading-relaxed">
                    Streamlining supply chains and expanding networks. Experience seamless distribution powered by robust dealer ecosystems and strategic partnerships.
                </p>
            </motion.div>

            {/* Background Decorative Element */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none overflow-hidden flex items-center justify-center">
                <span className="text-[12rem] md:text-[16rem] font-black text-gray-900 leading-none tracking-tighter whitespace-nowrap">
                    DISTRIBUTION
                </span>
            </div>
        </section>
    );
};

export default DealerDistributionHero;
