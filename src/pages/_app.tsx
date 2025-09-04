import "@/styles/globals.css";
import Layout from "@/layout/layout";
import { initializeTavasAnalytics } from "@/lib/tavas-analytics";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        initializeTavasAnalytics()
    }, []);

    return <Layout> <Component { ...pageProps } /> </Layout>;
}
