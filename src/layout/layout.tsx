import Footer from "@/components/footer";
import Header from "@/components/header";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-[1400px] mx-auto min-h-screen flex flex-col">
            <Header />
            <Suspense fallback={"Loading"}>
                <main className="flex-1 px-4 pt-20">{children}</main>
            </Suspense>
            <Footer />
        </div>
    );
}
