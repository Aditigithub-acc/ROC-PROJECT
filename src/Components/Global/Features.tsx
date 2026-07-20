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
                title: "Cutting Edge Technology",
                description: "Experience modern infrastructure and advanced technologies that prepare students for real-world challenges and future careers.",
                image: "https://plus.unsplash.com/premium_photo-1661497675847-2075003562fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                title: "Next-Generation Technology",
                description: "Empowering learners with innovative tools, smart classrooms, and industry-focused technology for tomorrow's success.",
                image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                title: "Advanced Technology Solutions",
                description: "Providing state-of-the-art technology solutions that enhance learning, innovation, and practical skill development.",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ]
    },
    {
        number: "02",
        contents: [
            {
                title: "Business Delight",
                description: "Building future-ready professionals with practical business knowledge, leadership skills, and innovative thinking.",
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                title: "Business Excellence",
                description: "Building future-ready professionals with practical business knowledge, leadership skills, and innovative thinking.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
            },
            {
                title: "Business Innovation",
                description: "Encouraging creativity, entrepreneurship, and modern business strategies to shape successful careers.",
                image: "https://images.unsplash.com/photo-1758876203468-39e5493bfe76?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ]
    },
    {
        number: "03",
        contents: [
            {
                title: "Trust and Scale",
                description: "Building trust through quality education while empowering students to achieve greater growth and long-term success.",
                image: "https://images.unsplash.com/photo-1515161318750-781d6122e367?auto=format&fit=crop&w=600&q=80"
            },
            {
                title: "Trusted Growth",
                description: "Fostering confidence, innovation, and academic excellence to help students grow into future-ready professionals.",
                image: "https://images.unsplash.com/photo-1758691737138-7b9b1884b1db?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                title: "Growth with Confidence",
                description: "Empowering students with the skills, knowledge, and confidence to succeed in a rapidly evolving world.",
                image: "https://images.unsplash.com/photo-1661437502046-54db1e6115f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ]
    },
    {
        number: "04",
        contents: [
            {
                title: "Expertise and Results",
                description: "Delivering exceptional knowledge, practical skills, and measurable outcomes to help students achieve academic and career success.",
                image: "https://images.unsplash.com/photo-1758691736433-4078b93abd72?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                title: "Knowledge and Excellence",
                description: "Providing quality education, expert mentorship, and innovative learning experiences that inspire excellence.",
                image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                title: "Skills and Success",
                description: "Equipping students with industry-relevant skills and practical experience to achieve lasting success.",
                image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ]
    },
    {
        number: "05",
        contents: [
            {
                title: "Tech Loyalty and Rewards Partner",
                description: "Recognizing excellence through technology-driven initiatives, rewarding achievements, and fostering long-term student success.",
                image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                title: "Technology and Recognition",
                description: "Leveraging modern technology to recognize achievements, encourage innovation, and inspire continuous growth.",
                image: "https://plus.unsplash.com/premium_photo-1683141471232-fa7f5c416231?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                title: "Digital Rewards Network",
                description: "Connecting students with smart digital solutions, rewarding excellence, and creating engaging learning experiences.",
                image: "https://plus.unsplash.com/premium_photo-1683749805319-2c481ae54bc1?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                                i === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
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
