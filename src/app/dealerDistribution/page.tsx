import DealerDistributionHero from "@/Components/DealerDistribution/DealerDistributionHero";
import DealerDistributionBlog from "@/Components/DealerDistribution/DealerDistributionBlog";
import Testimonials from "@/Components/Global/Testimonials";
import Navbar from "@/Components/Global/Navbar";
import CTA from "@/Components/Global/CTA";

export default function DealerDistribution() {
    return (
        <div>
            <Navbar />
            <DealerDistributionHero />
            <DealerDistributionBlog />
            <Testimonials />
            <CTA />

        </div>
    );
}