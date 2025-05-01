import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutLayout({ children }) {
    return (
        <div className="min-h-[100dvh] bg-white">
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <div className="fixed w-full bottom-0">
                <Footer />
            </div>
        </div>
    );
}
