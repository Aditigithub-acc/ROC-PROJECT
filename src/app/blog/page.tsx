

import Blog from "@/Components/Global/Blog";
import Footer from '@/Components/Global/Footer'
import Navbar from '@/Components/Global/Navbar'
import CTA from "@/Components/Global/CTA";

export default function page() {
    return (
        <>
            <Navbar />
            <Blog />
            <CTA />
            <Footer />
        </>
    )
}