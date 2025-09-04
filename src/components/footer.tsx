import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();
    const version = "1.0.0"; // <-- replace with your app version

    return (
        <footer className="mt-10 flex items-center flex-col-reverse lg:flex-row justify-between text-center gap-y-6 sm:pb-8">
            <p className="text-sm font-light lg:w-1/3 md:text-start text-center">
                ©{year} ChottuLink <sub>v{version}</sub> | Tavas Analytics Inc. Delaware, USA
            </p>

            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-10 font-light">
                <li>
                    <Link href="/legal/terms-of-use" className="text-sm hover:text-gray-500">
                        Terms of Use
                    </Link>
                </li>

                <li className="hidden sm:block">|</li>

                <li>
                    <Link href="/legal/privacy-policy" className="text-sm hover:text-gray-500">
                        Privacy Policy
                    </Link>
                </li>

                <li className="hidden sm:block">|</li>

                <li>
                    <a
                        href="https://docs.chottulink.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-gray-500"
                    >
                        Docs
                    </a>
                </li>
            </ul>
        </footer>
    );
}
