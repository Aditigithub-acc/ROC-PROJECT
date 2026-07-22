import DealerDistributionHero from "@/Components/DealerDistribution/DealerDistributionHero";

import Testimonials from "@/Components/Global/Testimonials";
import Navbar from "@/Components/Global/Navbar";
import CTA from "@/Components/Global/CTA";

export default function DealerDistribution() {
    return (
        <div>
            <Navbar />
            <DealerDistributionHero />

            <Testimonials />
            <CTA />

        </div>
    );
}