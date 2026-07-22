/* eslint-disable @next/next/no-img-element */
"use client";

import { memo } from "react";
import { motion } from "framer-motion";

const brands = [
    { name: "ACC Cement", logo: "/Logo/acc-cement.jpeg" },
    { name: "Asian Paints", logo: "/Logo/asian-paints.png" },
    { name: "Chandigarh University", logo: "/Logo/chandigarh-university.png" },
    { name: "Hindustan Unilever Limited", logo: "/Logo/hindustan-unilever.jpeg" },
    { name: "Greystar", logo: "/Logo/greystar.jpeg" },
    { name: "Netsmartz", logo: "/Logo/netsmartz.jpeg" },
    { name: "Videocon Connect", logo: "/Logo/videocon.avif" },
    { name: "Fortis Hospital", logo: "/Logo/fortis-hospitals.png" },
    { name: "Glenmark", logo: "/Logo/glenmark.png" },
    { name: "Vodafone Idea", logo: "/Logo/vodafone.png" },
    { name: "JLPL", logo: "/Logo/jlpl.png" },
    { name: "Mahindra & Mahindra", logo: "/Logo/mahindra.png" },
    { name: "Orient Electric", logo: "/Logo/orient-electric.jpeg" },
    { name: "Rallis India Limited", logo: "/Logo/rallis-india-limited.png" },
    { name: "SBI", logo: "/Logo/sbi.jpeg" },
    { name: "SML", logo: "/Logo/sml_ISUZU.jpeg" },
    { name: "ISUZU", logo: "/Logo/" },
    { name: "Syngenta India Limited", logo: "/Logo/syngenta.jpeg" },
    { name: "Venus", logo: "/Logo/venus.png" },
    { name: "Remedies", logo: "/Logo/" }
];

const Brand = memo(() => {
    // Duplicate the brands array to create a seamless loop
    const doubledBrands = [...brands, ...brands];

    return (
        <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
            <div className="max-w-[1450px] mx-auto px-4 lg:px-8 mb-12 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#da2929] font-black uppercase tracking-[0.3em] text-[10px] mb-4"
                >
                    Our Brands
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight"
                >
                    Trusted by <span className="text-[#da2929]">Leading</span>  Clients
                </motion.h2>
            </div>

            <div className="relative flex items-center group">
                {/* Horizontal Marquee */}
                <motion.div
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex items-center gap-12 lg:gap-24 whitespace-nowrap min-w-max px-12"
                >
                    {doubledBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
                        >
                            {/* Brand Logo */}
                            <div className="h-14 lg:h-16 min-w-[3.5rem] lg:min-w-[4rem] rounded-xl bg-white flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm relative shrink-0 px-2">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="max-h-full w-auto object-contain py-1.5 mix-blend-multiply"
                                    onError={(e) => {
                                        // Fallback to initials if image fails to load
                                        e.currentTarget.style.display = 'none';
                                        if (e.currentTarget.nextElementSibling) {
                                            (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                                        }
                                    }}
                                />
                                <div className="absolute inset-0 hidden items-center justify-center font-black text-xs text-gray-600 bg-gray-100">
                                    {brand.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                                </div>
                            </div>
                            <span className="text-xl lg:text-2xl font-black text-gray-800 tracking-tighter">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fades for depth */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
});

Brand.displayName = "Brand";

export default Brand;
