/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const blogPosts = [
    {
        id: 1,
        title: "Sales Contests That Motivate Everyone",
        excerpt: "Sales contests should inspire every field sales executive—not just the highest achievers. By rewarding effort, consistency, and improvement, businesses can boost motivation, engagement, and overall team performance.",
        image: "/images/Sales-contest.png",
        date: "July 12, 2026",
        link: "/sales", // Updated to point to your new SalesBlog page
    },
    {
        id: 2,
        title: "The Rise of Instant Rewards",
        excerpt: "Instant rewards are reshaping loyalty programs by delivering faster recognition, higher engagement, and seamless redemption experiences. Discover why speed has become the key to building lasting customer relationships.",
        image: "/images/instant-rewards.png",
        date: "June 28, 2026",
        link: "/blogpage2", // Placeholder distinct link
    },
    {
        id: 3,
        title: "Turning Stories Into Customer Experiences",
        excerpt: "The future of marketing isn't just about telling stories—it's about creating experiences people want to join. Reward-led storytelling encourages participation, builds emotional connections, and makes every interaction more rewarding.",
        image: "/images/customer-experience.png",
        date: "May 15, 2026",
        link: "/blogpage3", // Placeholder distinct link
    }
];

export default function Blog() {
    const router = useRouter();
    return (
        <section className="py-24 bg-white" id="blog">
            <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#da2929] font-black uppercase tracking-[0.3em] text-[10px] mb-4"
                    >
                        Our Blog
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight"
                    >
                        Latest <span className="text-[#da2929]">Insights</span> & News
                    </motion.h2>
                </div>

                <div className="space-y-16 lg:space-y-24">
                    {blogPosts.map((post, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Image Side */}
                                <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        />
                                    </div>
                                </div>

                                {/* Text Side */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <span className="text-sm font-semibold text-[#da2929] bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider">{post.date}</span>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight group-hover:text-[#da2929] transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {post.excerpt}
                                    </p>
                                    <button className="text-[#da2929] font-bold text-sm uppercase tracking-wider hover:text-red-700 transition-colors flex items-center gap-2 mt-4"
                                        onClick={() => router.push(post.link)}>
                                        Read More
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
