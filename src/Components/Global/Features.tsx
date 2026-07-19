"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";

interface CardContent {
    title: string;
    description: string;
    image: string;
}

interface ServiceItem {
    number: string;
    contents: CardContent[];
}

const services: ServiceItem[] = [
    {
        number: "01",
        contents: [
            {
                title: "Career Counseling",
                description: "Personalized 1-on-1 sessions to map your career trajectory with industry experts.",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
            },
            {
                title: "Industry Insights",
                description: "Learn about the latest trends and demands directly from market leaders.",
                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80"
            },
            {
                title: "Future Mapping",
                description: "Create a resilient career plan adaptable to the ever-changing professional landscape.",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        number: "02",
        contents: [
            {
                title: "Skill Assessment",
                description: "Comprehensive testing to identify your core strengths and areas for professional growth.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
            },
            {
                title: "Performance Metrics",
                description: "Data-driven approach to track and enhance your skill development over time.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
            },
            {
                title: "Gap Analysis",
                description: "Identify exactly what skills you need to land your dream job efficiently.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        number: "03",
        contents: [
            {
                title: "Mentorship Program",
                description: "Connect with seasoned mentors who provide guidance, wisdom, and industry networking.",
                image: "https://images.unsplash.com/photo-1515161318750-781d6122e367?auto=format&fit=crop&w=600&q=80"
            },
            {
                title: "Leadership Coaching",
                description: "Develop the soft skills required to lead teams and manage complex projects.",
                image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
            },
            {
                title: "Network Building",
                description: "Expand your professional circle through exclusive events and introductions.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        number: "04",
        contents: [
            {
                title: "Placement Support",
                description: "Direct bridge to top employers with exclusive job opportunities and insider referrals.",
                image: "https://images.unsplash.com/photo-1521737711867-e3cb66cb3bd6?auto=format&fit=crop&w=600&q=80"
            },
            {
                title: "Resume Optimization",
                description: "Craft a compelling narrative that gets past ATS and catches recruiter attention.",
                image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80"
            },
            {
                title: "Offer Negotiation",
                description: "Learn strategies to secure the best possible compensation package.",
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },
    {
        number: "05",
        contents: [
            {
                title: "Interview Prep",
                description: "Mock interviews and psychological coaching to master even the most difficult rounds.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
            },
            {
                title: "Technical Rounds",
                description: "Practice solving complex problems with feedback from senior engineers.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
            },
            {
                title: "Confidence Building",
                description: "Overcome anxiety and present your best self during high-stakes interactions.",
                image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&q=80"
            }
        ]
    }
];

const getInitialOffset = (index: number) => {
    if (index === 2) {
        return { x: 0, y: 40, opacity: 0, scale: 0.96 };
    }
    return index < 2 ? { x: -70, y: 0, opacity: 0, scale: 0.96 } : { x: 70, y: 0, opacity: 0, scale: 0.96 };
};

const ServiceCard = memo(({ service, index }: { service: ServiceItem; index: number }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.2 });

    useEffect(() => {
        if (!isInView) return;

        // Different rotation speed/delay per card so they aren't synced
        const intervalTime = 4000 + (index * 800); // Cards switch at different intervals
        const delayTime = index * 600; // Cards start switching at different times

        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % service.contents.length);
            }, intervalTime);

            return () => clearInterval(interval);
        }, delayTime);

        return () => {
            clearTimeout(timeout);
        };
    }, [isInView, index, service.contents.length]);

    const currentContent = service.contents[currentIndex];

    return (
        <motion.div
            ref={cardRef}
            initial={getInitialOffset(index)}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10, scale: 1.01, transition: { duration: 0.3 } }}
            className="group relative h-[420px] p-8 rounded-[40px] bg-white border border-gray-200/60 hover:border-[#da2929]/20 hover:shadow-[0_20px_40px_-15px_rgba(218,41,41,0.08)] transition-all duration-500 overflow-hidden w-full shadow-sm flex flex-col"
        >
            {/* Background Number */}
            <span className="absolute -bottom-6 -right-4 text-[120px] font-black text-[#da2929]/[0.05] select-none transition-all duration-500 group-hover:text-[#da2929]/10 group-hover:scale-110 z-0">
                {service.number}
            </span>

            {/* Image Container with AnimatePresence */}
            <div className="relative w-full h-48 mb-6 rounded-3xl overflow-hidden shadow-sm z-10 bg-gray-100">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentContent.image}
                        src={currentContent.image}
                        alt={currentContent.title}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Progress Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {service.contents.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Content with AnimatePresence */}
            <div className="relative z-10 flex-1 flex flex-col justify-start">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentContent.title}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#da2929] transition-colors duration-300">
                            {currentContent.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-gray-600 transition-colors duration-300 line-clamp-3">
                            {currentContent.description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Hover Bottom Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#da2929] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
        </motion.div>
    );
});

const Features = memo(() => {
    return (
        <section className="py-12 bg-gray-50 relative overflow-hidden">
            {/* Top Divider Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-50/30 rounded-full blur-[120px] -ml-64 -mb-64" />

            <div className="max-w-[1450px] mx-auto px-4 lg:px-8 relative z-10">
                <div className="mb-20">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[#da2929] font-black uppercase tracking-[0.3em] text-xs mb-4"
                    >
                        Why Choose Us
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tighter"
                    >
                        Why <span className="text-[#da2929]">ROC.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {/* Left Column (1 & 2) */}
                    <div className="flex flex-col gap-8">
                        {[services[0], services[1]].map((service, index) => (
                            <ServiceCard key={index} service={service} index={index} />
                        ))}
                    </div>

                    {/* Middle Column (3) - UTMOST CENTER */}
                    <div className="flex items-center justify-center">
                        <ServiceCard service={services[2]} index={2} />
                    </div>

                    {/* Right Column (4 & 5) */}
                    <div className="flex flex-col gap-8">
                        {[services[3], services[4]].map((service, index) => (
                            <ServiceCard key={index + 3} service={service} index={index + 3} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

ServiceCard.displayName = "ServiceCard";
Features.displayName = "Features";

export default Features;
