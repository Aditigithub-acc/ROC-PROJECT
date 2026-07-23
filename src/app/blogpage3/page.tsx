import BlogPage3Hero from "@/Components/blogpage3/BlogPage3Hero";
import BlogPage3Content from "@/Components/blogpage3/BlogPage3Content";
import Navbar from "@/Components/Global/Navbar";
import Footer from "@/Components/Global/Footer";
import ContactHero from "@/Components/Contact/ContactHero";

export default function BlogPage3() {
    return (
        <>
            <Navbar />
            <BlogPage3Hero />
            <BlogPage3Content />
            <ContactHero />
            <Footer />
        </>
    )
}
