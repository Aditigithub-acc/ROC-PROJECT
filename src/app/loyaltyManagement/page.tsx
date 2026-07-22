import LoyaltyManagementHero from "@/Components/LoyaltyManagement/LoyaltyManagementHero";
import LoyaltyManagementBlog from "@/Components/LoyaltyManagement/LoyaltyManagementBlog";
import CTA from "@/Components/Global/CTA";
import Testimonials from "@/Components/Global/Testimonials";
import Navbar from "@/Components/Global/Navbar";


export default function LoyaltyManagement() {
    return (
        <div>
            <Navbar />
            <LoyaltyManagementHero />
            <LoyaltyManagementBlog />
            <Testimonials />
            <CTA />
        </div>
    );
}
