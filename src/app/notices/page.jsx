"use client";

import ArticleList from "@/app/components/ArticleList";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { theme } from "@/styles/theme";

export default function NoticesPage() {
    return (
        <main
            className="flex flex-col"
            style={{
                background: theme.gradients.secondary,
            }}
        >
            <ArticleList />
        </main>
    );
}
