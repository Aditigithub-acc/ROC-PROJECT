// import Rewards from "@/Components/Rewards/Rewardspage";
import Navbar from "@/Components/Global/Navbar";
import ScrollProgress from "@/Components/Global/ScrollProgress";
import Testimonials from "@/Components/Global/Testimonials";
import CTA from "@/Components/Global/CTA";

export default function RewardsPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Navbar />
            {/* <Rewards /> */}
            <Testimonials />
            <CTA />
        </main>
    );
}