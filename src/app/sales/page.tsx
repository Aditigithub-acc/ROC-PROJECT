import SalesBlogHero from "@/Components/SalesBlog/SalesBlogHero";
import SalesBlogContent from "@/Components/SalesBlog/SalesBlogContent";
import Navbar from "@/Components/Global/Navbar";
import Footer from "@/Components/Global/Footer";
import ContactHero from "@/Components/Contact/ContactHero";


export default function SalesPage() {
    return (
        <>
            <Navbar />
            <SalesBlogHero />
            <SalesBlogContent />
            <ContactHero />
            <Footer />

        </>
    )
}