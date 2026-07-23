import BlogPage2Hero from "@/Components/blogpage2/BlogPage2Hero";
import BlogPage2Content from "@/Components/blogpage2/BlogPage2Content";
import Navbar from "@/Components/Global/Navbar";
import Footer from "@/Components/Global/Footer";
import ContactHero from "@/Components/Contact/ContactHero";
import CTA from "@/Components/Global/CTA";

export default function BlogPage2() {
    return (
        <>
            <Navbar />
            <BlogPage2Hero />
            <BlogPage2Content />
            <ContactHero />
            <CTA />
            <Footer />
        </>
    )
}
