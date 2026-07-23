"use client";




const ContactMap = () => {
    return (
        <section className="w-full bg-white flex flex-col relative overflow-hidden py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column */}
                    <div className="flex flex-col space-y-8">
                        <div>
                            <span className="text-[#da2929] font-bold text-sm tracking-widest uppercase mb-4 block">
                                Partner With Us
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-6 font-serif">
                                Consult with our<br />dedicated incentive<br />architects
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                                Ready to deploy custom white-labeled portals, secure national
                                catalogs, or GEM-compliant incentives? Get in touch with our
                                leadership and Techno-Sales team today.
                            </p>
                        </div>

                        <div className="space-y-8 pt-8">
                            {/* Email */}
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-red-50 flex items-center justify-center text-[#da2929]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <span className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1.5">Email Inquiries</span>
                                    <a href="mailto:info@Gifts-On-Click.in" className="text-[#da2929] font-bold hover:underline transition-all">
                                        info@giftsonclick.in
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-red-50 flex items-center justify-center text-[#da2929]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <span className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1.5">Call or WhatsApp</span>
                                    <span className="text-gray-900 font-bold">
                                        (+91) 8194824242
                                    </span>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-red-50 flex items-center justify-center text-[#da2929]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <span className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1.5">HQ Address</span>
                                    <span className="text-gray-600 leading-relaxed max-w-[280px]">
                                        A SQUARE TECHNOLOGIES, 1511,<br />
                                        First Floor, JLPL Industrial Park, Sector 82, Mohali <br />
                                        (Punjab) INDIA 160055
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Map */}
                    <div className="w-full h-[500px] lg:h-[650px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-gray-100 border border-gray-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.6210082490085!2d76.71188357551061!3d30.672851574613217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefe0974ed2e7%3A0x6bbaaa34208d1326!2sJLPL%20Industrial%20Area%2C%20Sector%2082%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full object-cover grayscale-[20%] contrast-[1.05]"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactMap;
