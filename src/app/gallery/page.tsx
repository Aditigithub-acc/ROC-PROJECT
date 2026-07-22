import GalleryHero from "@/Components/Gallery/GalleryHero";
import Timeline from "@/Components/Gallery/Timeline";
import ScrollProgress from "@/Components/Global/ScrollProgress";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <GalleryHero />
            <Timeline />

        </main>
    );
}
