/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

const blogPosts = [
    {
        id: 1,
        title: "Optimizing Your Distribution Network",
        excerpt: "Learn how data analytics and smart logistics are transforming dealer networks globally. Improve your supply chain visibility.",
        image: "https://placehold.co/600x400/111827/ffffff?text=Network+Optimization",
        date: "August 10, 2026",
    },
    {
        id: 2,
        title: "Dealer Empowerment Strategies",
        excerpt: "Empower your dealers with the right tools, training, and incentives to boost sales and strengthen brand presence in local markets.",
        image: "https://placehold.co/600x400/da2929/ffffff?text=Dealer+Empowerment",
        date: "July 22, 2026",
    },
    {
        id: 3,
        title: "Future of Global Supply Chains",
        excerpt: "Insights into upcoming trends in global distribution, risk management, and building resilient networks in volatile markets.",
        image: "https://placehold.co/600x400/4b5563/ffffff?text=Global+Supply+Chain",
        date: "June 05, 2026",
    },
    {
        id: 1,
        title: "Optimizing Your Distribution Network",
        excerpt: "Learn how data analytics and smart logistics are transforming dealer networks globally. Improve your supply chain visibility.",
        image: "https://placehold.co/600x400/111827/ffffff?text=Network+Optimization",
        date: "August 10, 2026",
    },
    {
        id: 2,
        title: "Dealer Empowerment Strategies",
        excerpt: "Empower your dealers with the right tools, training, and incentives to boost sales and strengthen brand presence in local markets.",
        image: "https://placehold.co/600x400/da2929/ffffff?text=Dealer+Empowerment",
        date: "July 22, 2026",
    },
    {
        id: 3,
        title: "Future of Global Supply Chains",
        excerpt: "Insights into upcoming trends in global distribution, risk management, and building resilient networks in volatile markets.",
        image: "https://placehold.co/600x400/4b5563/ffffff?text=Global+Supply+Chain",
        date: "June 05, 2026",
    }
];

export default function DealerDistributionBlog() {
    return (
        <section className="py-24 bg-gray-50" id="blog">
            <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#da2929] font-black uppercase tracking-[0.3em] text-[10px] mb-4"
                    >
                        Distribution Blog
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-5xl font-bold text-gray-900 tracking-tight"
                    >
                        Dealer <span className="text-[#da2929]">Insights</span> & News
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                        >
                            {/* Image Section */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="text-xs font-bold text-white bg-[#da2929] px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm tracking-wider">
                                        {post.date}
                                    </span>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-4 group-hover:text-[#da2929] transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-6 opacity-90 group-hover:opacity-100 transition-opacity">
                                    {post.excerpt}
                                </p>
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="text-[#da2929] font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-2 mt-auto w-fit"
                                >
                                    Read Article
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
