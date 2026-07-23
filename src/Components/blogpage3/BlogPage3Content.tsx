"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function BlogPage3Content() {
    const textVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 lg:px-8 space-y-12 text-gray-700 text-lg leading-relaxed">
                
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="space-y-6"
                >
                    <p className="text-xl text-gray-800 font-medium leading-loose">
                        Most sales contests begin with the same ambition: drive more sales, create excitement, and get the field team focused on a specific target. A brand launches a contest, announces the prize, shares the rules, and expects energy to build across the market.
                    </p>
                    <p>For a few days, it does.</p>
                    <p>
                        Then the pattern becomes familiar. The same top performers move ahead. Sales executives in stronger territories get an early advantage. Distributor salesmen working in slower markets feel they cannot catch up. Retail counter staff or dealer sales teams lose interest because the contest feels built for someone else.
                    </p>
                    <p className="font-bold text-[#da2929] text-xl">That is where many sales contests fail.</p>
                    <p>
                        For brands, the goal should not be to reward only the highest seller. The real opportunity is to motivate the entire sales ecosystem: sales executives, distributor sales teams, dealer salesmen, retail staff, promoters, and channel partners who influence what gets sold every day.
                    </p>
                    <p>
                        At BigCity, we look at sales contest ideas from this practical field-sales lens. A strong sales incentive contest should push performance, but it should also make more people believe they have a reason to participate.
                    </p>
                </motion.div>

                <hr className="border-gray-200" />

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-gray-900 group flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#da2929] rounded-full group-hover:h-10 transition-all duration-300"></span>
                        Why Traditional Sales Contests Fail in the Field
                    </h2>
                    <p>
                        Many sales contests are built only around total sales value. While sales value is important, it often gives an automatic advantage to people who already have stronger territories, high-demand counters, better distributor support, or faster-moving products.
                    </p>
                    <p>
                        This creates a predictable contest. Top performers stay excited, but the rest of the team quietly checks out.
                    </p>
                    
                    <div className="bg-red-50 p-6 md:p-8 rounded-2xl border-l-4 border-[#da2929] hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-gray-900 mb-4">Common problems include:</h4>
                        <ul className="space-y-3 list-disc list-inside marker:text-[#da2929]">
                            <li>The same participants win every time.</li>
                            <li>Smaller-market sales executives feel ignored.</li>
                            <li>Newer salespeople do not get recognized for progress.</li>
                            <li>Effort at the outlet level goes unnoticed.</li>
                            <li>Reps in difficult territories feel the contest is unfair.</li>
                            <li>Brands get a short-term sales push, but not wider engagement.</li>
                        </ul>
                    </div>

                    <p>
                        In field sales, performance is not shaped by effort alone. Territory size, product availability, retailer relationships, seasonality, local demand, and distributor support all matter. A good contest design should recognize this reality.
                    </p>
                    <p>
                        That is why sales performance incentives need to reward both outcomes and behaviours. Sales matter, but so do invoice generation, outlet activation, product focus, repeat selling, range selling, claim discipline, and improvement over past performance.
                    </p>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-gray-900 group flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#da2929] rounded-full group-hover:h-10 transition-all duration-300"></span>
                        What Makes a Sales Contest Fair and Motivating?
                    </h2>
                    <p>
                        A fair contest does not mean everyone receives the same prize. It means every participant understands how to win and feels the goal is achievable.
                    </p>
                    
                    <div className="bg-gray-50 p-6 md:p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-4">The strongest sales contests usually include:</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "Multiple ways to win", desc: "Reward sales, improvement, consistency, product focus, and team performance." },
                                { title: "Clear rules", desc: "Participants should know which invoices, products, outlets, or milestones qualify." },
                                { title: "Short contest windows", desc: "Weekly or monthly contests create urgency and keep attention high." },
                                { title: "Transparent tracking", desc: "Participants need regular updates on where they stand." },
                                { title: "Simple claiming", desc: "Invoice upload, validation, and reward redemption should be easy." },
                                { title: "Relevant rewards", desc: "The prize should feel useful, exciting, and worth the effort." }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 group/item">
                                    <span className="text-[#da2929] mt-1 group-hover/item:scale-125 transition-transform">✓</span>
                                    <div>
                                        <strong className="text-gray-900 group-hover/item:text-[#da2929] transition-colors">{item.title}:</strong> {item.desc}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p>
                        For field teams, simplicity matters. If the contest needs too much explanation, participation drops. If rewards take too long, excitement fades. If the rules feel unfair, the contest becomes noise.
                    </p>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-gray-900 group flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#da2929] rounded-full group-hover:h-10 transition-all duration-300"></span>
                        Sales Contest Ideas by Objective
                    </h2>
                    <p>
                        The best sales competition ideas start with a clear business objective. A contest to increase outlet coverage should not look like a contest to push premium products. A contest for distributor salesmen should not be designed exactly like one for retail counter staff.
                    </p>
                    <p className="font-semibold text-gray-900">Here are practical formats brands can use.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Sales Volume Contest Ideas",
                            desc: "These contests work when the brand wants to drive higher sales within a fixed period.",
                            points: [
                                "Highest sales value contest",
                                "Target achievement contest",
                                "Product push contest",
                                "Invoice-based contest"
                            ]
                        },
                        {
                            title: "Improvement-Based Ideas",
                            desc: "Improvement-based contests are powerful because they motivate more than just the top few sellers.",
                            points: [
                                "Most improved sales executive",
                                "Best territory growth",
                                "Comeback challenge",
                                "New seller progress challenge"
                            ]
                        },
                        {
                            title: "Activity-Based Contest Ideas",
                            desc: "Activity-based contests are useful when the objective is better market coverage or more disciplined selling.",
                            points: [
                                "Most outlets visited",
                                "Most invoices uploaded",
                                "Most new outlets activated",
                                "Most product demos completed"
                            ]
                        },
                        {
                            title: "Team-Based Contest Ideas",
                            desc: "Team contests can create energy without making the program feel too individualistic.",
                            points: [
                                "Region vs region challenge",
                                "Distributor team challenge",
                                "Dealer sales team contest",
                                "Buddy-up contest"
                            ]
                        }
                    ].map((card, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-[#da2929] mb-3">{card.title}</h3>
                            <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
                            <ul className="space-y-2 text-sm text-gray-800">
                                {card.points.map((pt, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#da2929]"></span>
                                        {pt}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="space-y-6"
                >
                    <p className="italic bg-gray-50 p-6 rounded-xl border-l-4 border-gray-300 text-gray-600">
                        *The Berger Paints sales incentive program is a good example of this approach. The program was designed for sales executives and linked participation to invoice-based sales. Sales executives could upload invoices, qualify against defined achievement slabs, and earn gift vouchers as rewards. This kind of structure works because it connects rewards directly to actual sales movement.
                    </p>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-gray-900 group flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#da2929] rounded-full group-hover:h-10 transition-all duration-300"></span>
                        Reward Ideas That Motivate Field Sales Teams
                    </h2>
                    <p>
                        The reward should match the audience. Sales executives, dealer salesmen, distributor teams, and retail staff are often motivated by rewards that are useful, quick to receive, and easy to redeem.
                    </p>
                    <p className="font-semibold text-gray-900">
                        This is where BigCity helps brands design the right reward mix.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        {[
                            "Digital gift vouchers",
                            "UPI, wallet, or prepaid rewards",
                            "Shopping, food, fuel, and lifestyle vouchers",
                            "Merchandise rewards (electronics, gadgets)",
                            "Experiential rewards (dining, travel)",
                            "Premium gifts for top performers",
                            "Team rewards (meals, celebrations)",
                            "Choice-based rewards catalogue"
                        ].map((reward, idx) => (
                            <li key={idx} className="flex items-center gap-3 bg-red-50/50 p-3 rounded-lg hover:bg-red-50 transition-colors">
                                <span className="text-[#da2929]">✦</span>
                                <span className="text-sm font-medium text-gray-800">{reward}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6">
                        The strongest reward strategy is tiered. Instant rewards keep daily and weekly energy high. Merchandise and experiences make bigger milestones aspirational. Premium rewards add status to the largest achievements.
                    </p>
                </motion.div>

                <hr className="border-gray-200" />

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-gray-900 group flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#da2929] rounded-full group-hover:h-10 transition-all duration-300"></span>
                        The BigCity View
                    </h2>
                    <p>
                        Field sales engagement is not driven by one intervention alone. It requires a single system that helps brands communicate with sales teams, track performance, motivate the right behaviours, recognise achievements, and deliver rewards—all without switching between multiple tools.
                    </p>
                    <p>
                        <strong>BigCity&apos;s Loyalty Platform</strong> brings all of these capabilities together in one place. Brands can onboard participants, track sales and target achievement, launch contests and gamified challenges, push real-time communications and nudges, recognise milestones, issue instant rewards, manage approvals, validate claims, and access live dashboards through a single platform.
                    </p>
                    <div className="p-8 bg-[#0B2149] text-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <h4 className="text-xl font-bold mb-3 text-[#da2929]">The Takeaway</h4>
                        <p className="text-gray-300">
                            The most effective sales contests are not standalone campaigns. They are part of a connected sales engagement platform where brands can track performance, engage participants, motivate behaviour, recognise achievements, and reward success from a single interface. That is how organisations build sustained field sales performance—not just short-term contest participation.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
