import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function NoticesLayout({ children }) {
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
