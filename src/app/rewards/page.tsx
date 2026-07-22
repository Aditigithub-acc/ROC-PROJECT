import Rewards from "@/Components/Rewards/Rewardspage";
import AboutGOC from "@/Components/Rewards/AboutGOC";
import WhatWeDo from "@/Components/Rewards/WhatWeDo";
import TrustedBy from "@/Components/Rewards/TrustedBy";
import Stats from "@/Components/Rewards/Stats";
import Navbar from "@/Components/Global/Navbar";
import ScrollProgress from "@/Components/Global/ScrollProgress";
import Testimonials from "@/Components/Global/Testimonials";
import CTA from "@/Components/Global/CTA";

export default function RewardsPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Navbar />
            <Rewards />
            <AboutGOC />
            <WhatWeDo />
            <TrustedBy />
            <Stats />
            <Testimonials />
            <CTA />
        </main>
    );
}