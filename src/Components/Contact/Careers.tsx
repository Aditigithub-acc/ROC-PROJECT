"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const jobs = [
    {
        id: 1,
        title: "Senior Educational Counselor",
        department: "Counseling",
        location: "Mumbai, India (Hybrid)",
        type: "Full-time",
        description: "We are looking for an experienced counselor to guide high school students through their college admissions journey. Must have a deep understanding of international university requirements."
    },
    {
        id: 2,
        title: "Marketing Strategy Lead",
        department: "Marketing",
        location: "Remote",
        type: "Full-time",
        description: "Drive our digital marketing initiatives to reach more students globally. Experience in EdTech marketing is highly preferred."
    },
    {
        id: 3,
        title: "Student Success Coordinator",
        department: "Operations",
        location: "Delhi, India (On-site)",
        type: "Full-time",
        description: "Be the primary point of contact for enrolled students, ensuring they have all the resources and support they need to succeed."
    },
    {
        id: 4,
        title: "Content Creator & Copywriter",
        department: "Content",
        location: "Remote",
        type: "Part-time",
        description: "Create engaging content for our blog, social media, and newsletters. Passion for education and student success is a must."
    }
];

export default function Careers() {
    const router = useRouter();
    return (
        <section className="py-24 bg-gray-50 min-h-screen">
            <div className="max-w-[1200px] mx-auto px-4 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-16 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight"
                    >
                        Join Our Team
                    </motion.h1>

                    {/* Decorative Lines below heading */}
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <div className="h-1 w-12 bg-gray-300 rounded-full"></div>
                        <div className="h-1.5 w-16 bg-[#da2929] rounded-full"></div>
                        <div className="h-1 w-12 bg-gray-300 rounded-full"></div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 leading-relaxed"
                    >
                        We&apos;re on a mission to transform educational counseling. Come build the future with us.
                        Explore our open roles below.
                    </motion.p>
                </div>

                {/* Job Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group relative overflow-hidden"
                        >
                            {/* Accent Hover Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-[#da2929] transition-colors duration-500"></div>

                            <div className="flex-1">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-red-50 text-[#da2929] text-xs font-bold rounded-full tracking-wide uppercase">
                                        {job.department}
                                    </span>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full tracking-wide uppercase">
                                        {job.type}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#da2929] transition-colors">
                                    {job.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4 flex items-center gap-2 font-medium">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    {job.location}
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    {job.description}
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <button
                                    onClick={() => router.push("/contact")}
                                    className="w-full py-3 px-6 bg-gray-900 text-white rounded-xl font-bold hover:bg-[#da2929] transition-colors duration-300 shadow-md"
                                >
                                    Apply Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
