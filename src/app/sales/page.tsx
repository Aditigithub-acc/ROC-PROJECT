import SalesBlogHero from "@/Components/SalesBlog/SalesBlogHero";
import Navbar from "@/Components/Global/Navbar";
import Footer from "@/Components/Global/Footer";
import ContactHero from "@/Components/Contact/ContactHero";


export default function SalesPage() {
    return (
        <>
            <Navbar />
            <SalesBlogHero />
            <ContactHero />
            <Footer />

        </>
    )
}