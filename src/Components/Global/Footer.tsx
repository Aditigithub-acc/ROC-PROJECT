'use client'

import Link from "next/link";
import Image from "next/image";
import { memo } from "react";


const Footer = memo(() => {
    const textGlow = "transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] inline-block w-fit";

    return (
        <footer className="fixed bottom-0 left-0 w-full min-h-[500px] md:min-h-[500px] py-16 md:py-20 -z-10 bg-[#da2929] text-white flex flex-col items-center justify-center px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full flex flex-col relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-16 w-full">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <div className={`relative w-48 md:w-56 h-16 flex items-center ${textGlow}`}>
                                <Image
                                    src="/_74E5DE6D-C488-4AA3-9488-4AD9629F9A79_-removebg-preview.png"
                                    alt="ROC Logo"
                                    fill
                                    className="object-contain object-left brightness-0 invert"
                                />
                            </div>
                            <p className={`text-sm text-white mt-1 ${textGlow}`}>Digitize. Automate. Grow.</p>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-white">
                            <svg className={`w-5 h-5 mt-0.5 shrink-0 ${textGlow}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <p className={`leading-relaxed ${textGlow}`}>
                                A SQUARE TECHNOLOGIES, 1511,First <br />
                                Floor, JLPL Industrial Park, Sector 82, Mohali <br />
                                (Punjab) INDIA 160055
                            </p>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="flex flex-col gap-6">
                        <h3 className={`text-lg font-semibold text-white ${textGlow}`}>About</h3>
                        <div className="flex flex-col gap-4 text-sm text-white items-start">
                            <Link href="/" className={textGlow}>Home</Link>
                            <Link href="/about" className={textGlow}>About us</Link>
                            <Link href="/contact" className={textGlow}>Contact</Link>
                        </div>
                    </div>

                    {/* Products Section */}
                    <div className="flex flex-col gap-6">
                        <h3 className={`text-lg font-semibold text-white ${textGlow}`}>Products</h3>
                        <div className="flex flex-col gap-4 text-sm text-white items-start">
                            <Link href="#" className={textGlow}>Loyalty Management</Link>
                            <Link href="#" className={textGlow}>Sales Force Automation</Link>
                            <Link href="#" className={textGlow}>Dealer/Distributor Management System</Link>
                            <Link href="#" className={textGlow}>Dispatch Management</Link>
                            <Link href="#" className={textGlow}>Warranty Management</Link>
                            <Link href="#" className={textGlow}>Product Authentication</Link>
                        </div>
                    </div>

                    {/* Social Section */}
                    <div className="flex flex-col gap-6">
                        <h3 className={`text-lg font-semibold text-white ${textGlow}`}>Social</h3>
                        <div className="flex flex-col gap-4 text-sm text-white items-start">
                            <Link href="#" className={textGlow}>Facebook</Link>
                            <Link href="#" className={textGlow}>Instagram</Link>
                            <Link href="#" className={textGlow}>Twitter</Link>
                            <Link href="#" className={textGlow}>Linkedin</Link>
                            <Link href="#" className={textGlow}>YouTube</Link>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white w-full">
                    <p className={textGlow}>Copyright @Basiq360. All Rights Reserved</p>
                    <div className="flex items-center gap-8">
                        <Link href="/terms" className={textGlow}>Terms & conditions</Link>
                        <Link href="/privacy" className={textGlow}>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
});

Footer.displayName = "Footer";

export default Footer;
