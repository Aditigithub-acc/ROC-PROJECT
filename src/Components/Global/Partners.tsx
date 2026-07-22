/* eslint-disable @next/next/no-img-element */
"use client";

import { memo } from "react";
import { motion } from "framer-motion";

const partners = [
    { name: "Amazon", logo: "/Logo/amazon.webp" },
    { name: "Bajaj", logo: "/Logo/Bajaj.webp" },
    { name: "BoAt", logo: "/Logo/Boat.jpeg" },
    { name: "Cello", logo: "/Logo/cello.jpeg" },
    { name: "Cross", logo: "/Logo/" },
    { name: "Faber", logo: "/Logo/Faber.png" },
    { name: "Havells", logo: "/Logo/Havells" },
    { name: "Jack & Jones", logo: "https://placehold.co/100x100?text=J%26J" },
    { name: "JBL", logo: "/Logo/JBL-Logo.webp" },
    { name: "LG", logo: "https://placehold.co/100x100?text=LG" },
    { name: "Luxor", logo: "/Logo/Luxor-Logo.jpeg" },
    { name: "Nasher Miles", logo: "/Logo/nasher-miles.jpeg" },
    { name: "Pepe Jeans", logo: "/Logo/pepe-jeans.png" },
    { name: "Portronics", logo: "/Logo/Portronics.jpeg" },
    { name: "Safari", logo: "/Logo/Safari.png" },
    { name: "Samsung", logo: "/Logo/Samsung.avif" },
    { name: "Titan", logo: "/Logo/Titan.jpeg" },
    { name: "Timex", logo: "/Logo/Timex.png" },
    { name: "Toreto", logo:"/Logo/Toreto.png" },
    { name: "Welspun", logo: "/Logo/Welspun.jpeg" },
    { name: "Whirlpool", logo: "/Logo/Whirlpool.png" },
    { name: "Wildcraft", logo: "/Logo/the-wildcraft.png" }
];

const Partners = memo(() => {
    // Duplicate the partners array to create a seamless loop
    const doubledPartners = [...partners, ...partners];

    return (
        <section className="py-20 bg-gray-50 border-y border-gray-100 overflow-hidden">
            <div className="max-w-[1450px] mx-auto px-4 lg:px-8 mb-12 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#da2929] font-black uppercase tracking-[0.3em] text-[10px] mb-4"
                >
                    Our Partners
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight"
                >
                    Trusted by <span className="text-[#da2929]">Leading</span>  Brands and Partners
                </motion.h2>
            </div>

            <div className="relative flex items-center group">
                {/* Horizontal Marquee */}
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex items-center gap-12 lg:gap-24 whitespace-nowrap min-w-max px-12"
                >
                    {doubledPartners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
                        >
                            {/* Partner Logo */}
                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300 shadow-sm relative">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
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
                                    {partner.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                                </div>
                            </div>
                            <span className="text-xl lg:text-2xl font-black text-gray-800 tracking-tighter">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fades for depth */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
});

Partners.displayName = "Partners";

export default Partners;
