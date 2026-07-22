import LoyaltyManagementHero from "@/Components/LoyaltyManagement/LoyaltyManagementHero";
import LoyaltyManagementcontent from "@/Components/LoyaltyManagement/LoyaltyManagementcontent";
import LoyaltyManagementQR from "@/Components/LoyaltyManagement/LoyaltyManagementQR";
import LoyaltyManagementTransfers from "@/Components/LoyaltyManagement/LoyaltyManagementTransfers";
import LoyaltyManagementVideo from "@/Components/LoyaltyManagement/LoyaltyManagementVideo";
import LoyaltyManagementPointsRedemption from "@/Components/LoyaltyManagement/LoyaltyManagementPointsRedemption";
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
            <LoyaltyManagementVideo />
            <LoyaltyManagementcontent />
            <LoyaltyManagementQR />
            <LoyaltyManagementTransfers />
            <LoyaltyManagementPointsRedemption />
            <Testimonials />
            <CTA />
        </main>
    );
}
