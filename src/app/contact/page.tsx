import ContactHero from "@/Components/Contact/ContactHero";
import ContactMap from "@/Components/Contact/ContactMap";
import ScrollProgress from "@/Components/Global/ScrollProgress";
import Careers from "@/Components/Contact/Careers";


export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Careers />
            <ContactHero />

            <ContactMap />
        </main>
    );
}
