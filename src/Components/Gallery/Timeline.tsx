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
        year: "2008",
        date: "September 25th",
        title: "Day We Met Each Other",
        description:
            "Maecenas porta nulla eget eros pharetra ullamcorper. Maecenas tortor erat, egestas id viverra non, volutpat at nunc.",
        details:
            "Donec luctus, nisi vitae semper fermentum, lorem libero elementum justo, ac congue leo augue eget erat.",
    },
    {
        year: "2009",
        date: "January 10th",
        title: "Our First Song",
        description:
            "Praesent porttitor consectetur arcu ut malesuada. Etiam condimentum, lacus vitae lacinia tempus, felis massa interdum enim.",
        details:
            "Quisque accumsan aliquam aliquam, sit amet molestie tellus hendrerit quis.",
    },
    {
        year: "2010",
        date: "June 2nd",
        title: "Our First Trip",
        description:
            "Sed tincidunt, nisl ac tempus luctus, nulla est pulvinar diam, non vehicula orci ipsum ut dolor.",
        details:
            "Maecenas facilisis metus id mauris accumsan vehicula. Nam lacinia consequat justo quis mollis.",
    },
    {
        year: "2013",
        date: "May 1st",
        title: "Our Wedding",
        description:
            "Praesent porttitor consectetur arcu ut malesuada. Etiam condimentum, lacus vitae lacinia tempus, felis massa interdum enim.",
        details:
            "Aliquam libero nisl in sapien. Quisque accumsan aliquam aliquam.",
    },
    {
        year: "2013",
        date: "May 1st",
        title: "Our Wedding",
        description:
            "Praesent porttitor consectetur arcu ut malesuada. Etiam condimentum, lacus vitae lacinia tempus, felis massa interdum enim.",
        details:
            "Aliquam libero nisl in sapien. Quisque accumsan aliquam aliquam.",
    },
    {
        year: "2013",
        date: "May 1st",
        title: "Our Wedding",
        description:
            "Praesent porttitor consectetur arcu ut malesuada. Etiam condimentum, lacus vitae lacinia tempus, felis massa interdum enim.",
        details:
            "Aliquam libero nisl in sapien. Quisque accumsan aliquam aliquam.",
    },
    {
        year: "2013",
        date: "May 1st",
        title: "Our Wedding",
        description:
            "Praesent porttitor consectetur arcu ut malesuada. Etiam condimentum, lacus vitae lacinia tempus, felis massa interdum enim.",
        details:
            "Aliquam libero nisl in sapien. Quisque accumsan aliquam aliquam.",
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
                                    <div className="p-8 lg:p-10">
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
                                            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#da2929] text-white font-black uppercase tracking-[0.28em] shadow-[0_20px_60px_rgba(218,41,41,0.25)]">
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
