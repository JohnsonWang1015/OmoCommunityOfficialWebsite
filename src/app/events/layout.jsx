import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { theme } from "@/styles/theme";

export default function EventsLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Navbar />
            </header>
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}
