import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function EventsPage() {
    return (
        <div className="min-h-[100dvh]">
            <header>
                <Navbar />
            </header>
            <div className="fixed w-full bottom-0">
                <Footer />
            </div>
        </div>
    );
}
