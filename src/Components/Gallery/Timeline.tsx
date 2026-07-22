"use client";

import { motion } from "framer-motion";

interface TimelineEvent {
    year: string;
    date: string;
    title: string;
    description: string;
    details: string;
}

const timelineEvents: TimelineEvent[] = [
    {
        year: "Retail",
        date: "Customer Loyalty Program",
        title: "Omnichannel Loyalty & Rewards Platform",
        description:
            "A growing retail brand wanted to strengthen customer retention by introducing a unified loyalty programme across its online and offline stores.",
        details:
            "We developed a digital loyalty platform that enabled customers to earn and redeem reward points, access exclusive offers, and receive personalised promotions. The solution created a seamless shopping experience across multiple channels while increasing repeat purchases and long-term customer engagement.",
    },
    {
        year: "Manufacturing",
        date: "Channel Partner Rewards",
        title: "Dealer Performance Incentive Portal",
        description:
            "A leading manufacturing company needed a transparent incentive programme to motivate dealers and distributors while improving sales visibility across its partner network.",
        details:
            "We built a secure dealer rewards portal featuring performance tracking, milestone-based incentives, digital reward redemption, and comprehensive reporting. The platform simplified programme management, enhanced partner engagement, and provided real-time insights into channel performance.",
    },
    {
        year: "Gov",
        date: "GeM Rewards Programme",
        title: "Public Sector Incentive Platform",
        description:
            "A government organisation required a fully compliant rewards solution that could be procured and managed entirely through the GeM ecosystem.",
        details:
            "We implemented a GeM-compliant digital rewards platform with audit-ready reporting, transparent programme management, and streamlined procurement, ensuring compliance while simplifying administration.",
    },
    {
        year: "Bank",
        date: "Employee Recognition",
        title: "Recognition & Rewards Portal",
        description:
            "A private banking institution wanted to create a continuous recognition culture that extended beyond annual performance reviews.",
        details:
            "Our secure recognition platform enabled peer-to-peer appreciation, long-service awards, and points-based rewards, providing employees with real-time recognition while giving management complete programme visibility.",
    },
    {
        year: "Telec",
        date: "Dealer & Channel Incentives",
        title: "Distribution Rewards Platform",
        description:
            "A national telecom operator required a transparent rewards programme to keep regional distributors engaged and motivated in a highly competitive market.",
        details:
            "We built a dealer rewards portal with tiered incentive structures, real-time performance tracking, and instant redemption for electronics and gift cards, creating a seamless and engaging incentive experience for channel partners.",
    },
    {
        year: "FMCG",
        date: "Sales Incentive Program",
        title: "National Distributor Incentive Platform",
        description:
            "A leading FMCG brand needed to modernise its incentive programme for a geographically distributed sales network, replacing manual spreadsheet tracking with a faster and more transparent solution.",
        details:
            "We developed a branded digital incentive portal featuring real-time milestone tracking, automated reward calculations, and instant e-voucher payouts. The platform significantly reduced payout turnaround times while improving sales engagement and programme visibility across the distributor network.",
    },
    {
        year: "Healthcare",
        date: "Healthcare Rewards Program",
        title: "Healthcare Professional Engagement Platform",
        description:
            "A healthcare organisation sought a secure and transparent rewards programme to engage healthcare professionals, encourage participation in educational initiatives, and recognise ongoing contributions.",
        details:
            "We developed a digital engagement platform with milestone-based rewards, secure user management, instant digital voucher redemption, and comprehensive reporting. The solution streamlined programme administration, improved participant engagement, and provided complete visibility into campaign performance while maintaining compliance standards.",
    },
];

export default function Timeline() {
    return (
        <section className="relative py-24 bg-[#fafafa] font-[family-name:var(--font-absans)]">
            <div className="absolute inset-x-0 top-24 h-px bg-slate-200/60" />
            <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-black uppercase tracking-[0.35em] text-[#da2929] mb-4">
                        Our Story
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                        Milestones from first day to big moments.
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-base text-slate-500 leading-8">
                        A refined timeline with alternating event cards, central year markers, and subtle motion.
                    </p>
                </div>

                <div className="relative">
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#da2929]/20" />
                    <div className="space-y-20">
                        {timelineEvents.map((item, index) => {
                            const isRight = index % 2 === 1;

                            const card = (
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    className="group rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#da2929]/30 hover:shadow-[0_35px_120px_rgba(218,41,41,0.16)]"
                                >
                                    <div className="p-8 lg:p-10 text-left">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                            <p className="text-sm uppercase tracking-[0.35em] text-[#da2929] font-black">
                                                {item.title}
                                            </p>
                                            <span className="text-[11px] uppercase tracking-[0.35em] bg-red-50 text-[#da2929] px-3 py-1 rounded-full border border-red-100">
                                                {item.date}
                                            </span>
                                        </div>
                                        <p className="text-slate-600 leading-8 mb-4">{item.description}</p>
                                        <p className="text-sm text-slate-500 leading-8">{item.details}</p>
                                    </div>
                                </motion.div>
                            );

                            return (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                                    className="lg:grid lg:grid-cols-[1fr_120px_1fr] lg:gap-8 items-start"
                                >
                                    <div className={`lg:col-start-1 lg:col-span-1 lg:pr-10 lg:text-right ${isRight ? "lg:hidden" : ""}`}>
                                        {!isRight && card}
                                    </div>

                                    <div className="relative lg:col-start-2 lg:col-span-1 flex justify-center">
                                        <div className="hidden lg:block absolute inset-x-0 h-full">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-[#da2929]/20" />
                                        </div>
                                        <div className="relative z-10 flex items-center justify-center">
                                            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#da2929] text-white font-black uppercase tracking-[0.11em] shadow-[0_20px_60px_rgba(218,41,41,0.25)]">
                                                {item.year}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`lg:col-start-3 lg:col-span-1 lg:pl-10 lg:text-left ${isRight ? "" : "lg:hidden"}`}>
                                        {isRight && card}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
