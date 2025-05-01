import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function DownloadsPage() {
    return (
        <div className="min-h-[100dvh]">
            <header>
                <Navbar />
            </header>
            <main>
                <h1>檔案下載</h1>
            </main>
            <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
        </div>
    );
}
