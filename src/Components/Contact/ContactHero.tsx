"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const countries = [
    "United States", "United Kingdom", "Canada", "Australia",
    "India", "Germany", "France", "UAE", "Singapore", "Other"
];

type SubmitStatus = "idle" | "loading" | "success" | "error";

const ContactHero = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        message: "",
    });

    const [status, setStatus] = useState<SubmitStatus>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            setStatus("success");
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                country: "",
                message: "",
            });
        } catch (err) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
        }
    };

    return (
        <section className="relative min-h-[90vh] bg-gray-50 font-[family-name:var(--font-absans)] pt-16 pb-20">
            <div className="max-w-[1450px] mx-auto px-6 lg:px-20 mb-20 flex flex-col items-center">
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-[#da2929] font-black text-[10px] uppercase tracking-[0.5em]">
                        Connect With Us
                    </span>
                    <div className="w-12 h-[1px] bg-[#da2929]/20" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-[-0.05em] leading-[0.9] text-center mb-6">
                    Let&apos;s Shape Your <span className="text-[#da2929]">Future.</span>
                </h1>
                <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-2xl text-center">
                    Have questions about your global education journey? Our experts are here to provide tailored strategic guidance.
                </p>
            </div>

            <div className="max-w-[1450px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                {/* Left side: SVG Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center lg:items-start"
                >
                    <div className="relative aspect-square w-full max-w-[550px]">
                        <Image
                            src="/svg/Mention-cuate.svg"
                            alt="Contact Illustration"
                            fill
                            className="object-contain"
                        />
                    </div>
                </motion.div>

                {/* Right side: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="bg-white p-8 lg:p-12 rounded-[2rem] border border-gray-200 shadow-[0_40px_100px_rgba(0,0,0,0.04)]"
                >
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 outline-none focus:border-[#da2929]/30 focus:bg-white transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 outline-none focus:border-[#da2929]/30 focus:bg-white transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 outline-none focus:border-[#da2929]/30 focus:bg-white transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">Country</label>
                                <div className="relative">
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 outline-none focus:border-[#da2929]/30 focus:bg-white transition-all font-medium text-gray-900 appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Select your country</option>
                                        {countries.map((c) => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M1 1l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">Your Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your academic goals..."
                                className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 outline-none focus:border-[#da2929]/30 focus:bg-white transition-all font-medium text-gray-900 placeholder:text-gray-400 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full group relative overflow-hidden bg-gray-900 text-white rounded-lg py-5 transition-transform active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            <div className="absolute inset-0 bg-[#da2929] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                            <span className="relative z-10 text-xs font-black uppercase tracking-[0.3em]">
                                {status === "loading" ? "Sending..." : "Send Message"}
                            </span>
                        </button>

                        {status === "success" && (
                            <p className="text-center text-sm font-medium text-green-600">
                                Thanks! Your message has been sent — we&apos;ll be in touch soon.
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-center text-sm font-medium text-red-600">
                                {errorMsg}
                            </p>
                        )}

                        <p className="text-center text-[10px] text-gray-300 font-medium">
                            By submitting, you agree to our <span className="underline cursor-pointer hover:text-gray-400 transition-colors">Privacy Policy</span> and <span className="underline cursor-pointer hover:text-gray-400 transition-colors">Terms of Service</span>.
                        </p>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactHero;
