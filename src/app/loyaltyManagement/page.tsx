import LoyaltyManagementHero from "@/Components/LoyaltyManagement/LoyaltyManagementHero";
import LoyaltyManagementBlog from "@/Components/LoyaltyManagement/LoyaltyManagementBlog";
import CTA from "@/Components/Global/CTA";
import Testimonials from "@/Components/Global/Testimonials";
import Navbar from "@/Components/Global/Navbar";
import ScrollProgress from "@/Components/Global/ScrollProgress";


export default function LoyaltyManagement() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Navbar />
            <LoyaltyManagementHero />
            <LoyaltyManagementBlog />
            <Testimonials />
            <CTA />
        </main>
    );
}
