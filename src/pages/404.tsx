import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Custom404() {
    return (
        <div className="h-[calc(100vh-176px)] flex items-center justify-center px-4">
            <div className="max-w-md text-center">
                <Image
                    className="w-1/5 mx-auto"
                    src="/icons/404.svg"
                    height={256}
                    width={256}
                    alt="404"
                />
                <h2 className="text-2xl font-semibold text-gray-100 mb-2">Page Not Found</h2>
                <p className="text-gray-300 mb-6">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link href="/" passHref>
                    <Button variant="outline">Go Back Home</Button>
                </Link>
            </div>
        </div>
    )
}
