import DealerDistributionHero from "@/Components/DealerDistribution/DealerDistributionHero";
import CustomerNetworkManagement from "@/Components/DealerDistribution/CustomerNetworkManagement";
import OrderManagement from "@/Components/DealerDistribution/OrderManagement";
import SalesTargetsManagement from "@/Components/DealerDistribution/SalesTargetsManagement";
import Testimonials from "@/Components/Global/Testimonials";
import Navbar from "@/Components/Global/Navbar";
import CTA from "@/Components/Global/CTA";
import ScrollProgress from "@/Components/Global/ScrollProgress";
import DealerDistributionVideo from "@/Components/DealerDistribution/DealerDistributionVideo";
export default function DealerDistribution() {
    return (
        <div>
            <Navbar />
            <ScrollProgress />
            <DealerDistributionHero />
            <DealerDistributionVideo />
            <CustomerNetworkManagement />
            <OrderManagement />
            <SalesTargetsManagement />
            <Testimonials />
            <CTA />
        </div>
    );
}