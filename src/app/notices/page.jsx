"use client";

import ArticleList from "@/components/ArticleList";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { theme } from "@/styles/theme";

export default function NoticesPage() {
    return (
        <main
            className="min-h-screen flex flex-col"
            style={{
                background: `linear-gradient(to bottom, ${theme.colors.background.warm} 0%, ${theme.colors.background.nature} 100%)`,
            }}
        >
            <Navbar />
            <ArticleList />
            <Footer />
        </main>
    );
}
