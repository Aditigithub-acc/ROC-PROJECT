/* eslint-disable @next/next/no-img-element */
"use client";

import { memo } from "react";
import { motion } from "framer-motion";

const brands = [
    { name: "Apple", logo: "https://placehold.co/100x100?text=Apple" },
    { name: "Google", logo: "https://placehold.co/100x100?text=Google" },
    { name: "Microsoft", logo: "https://placehold.co/100x100?text=MSFT" },
    { name: "Netflix", logo: "https://placehold.co/100x100?text=NFLX" },
    { name: "Meta", logo: "https://placehold.co/100x100?text=Meta" },
    { name: "Tesla", logo: "https://placehold.co/100x100?text=Tesla" },
    { name: "SpaceX", logo: "https://placehold.co/100x100?text=SPCX" },
    { name: "Airbnb", logo: "https://placehold.co/100x100?text=ABNB" },
    { name: "Uber", logo: "https://placehold.co/100x100?text=Uber" },
    { name: "Lyft", logo: "https://placehold.co/100x100?text=Lyft" },
    { name: "Stripe", logo: "https://placehold.co/100x100?text=Stripe" },
    { name: "Spotify", logo: "https://placehold.co/100x100?text=SPOT" },
    { name: "Sony", logo: "https://placehold.co/100x100?text=Sony" },
    { name: "Nvidia", logo: "https://placehold.co/100x100?text=NVDA" },
    { name: "Intel", logo: "https://placehold.co/100x100?text=Intel" },
    { name: "AMD", logo: "https://placehold.co/100x100?text=AMD" },
    { name: "Dell", logo: "https://placehold.co/100x100?text=Dell" },
    { name: "HP", logo: "https://placehold.co/100x100?text=HP" },
    { name: "Lenovo", logo: "https://placehold.co/100x100?text=Lenovo" },
    { name: "Asus", logo: "https://placehold.co/100x100?text=Asus" }
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
                    Trusted by <span className="text-[#da2929]">Leading</span>  Brands
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
                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300 shadow-sm relative">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="w-full h-full object-contain p-2"
                                    onError={(e) => {
                                        // Fallback to initials if image fails to load
                                        e.currentTarget.style.display = 'none';
                                        if (e.currentTarget.nextElementSibling) {
                                            (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                                        }
                                    }}
                                />
                                <div className="absolute inset-0 hidden items-center justify-center font-black text-xs text-gray-600 bg-gray-200">
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
