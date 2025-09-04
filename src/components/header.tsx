"use client";

import { Button } from "@/components/ui/button";
import { CONFIG } from "@/config/config";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ activePath, setActivePath ] = useState("/");
    const router = useRouter();


    useEffect(() => {
        if ( router.asPath.includes("#") ) {
            setActivePath(router.asPath);
        } else {
            setActivePath(router.asPath);
        }
    }, [ router.asPath ])


    useEffect(() => {
        const sections = [ "home", "why-chottulink", "features", "resources" ]

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((e) => e.isIntersecting)
                if ( visible ) {
                    const newPath = `/#${ visible.target.id }`;
                    setActivePath(newPath);
                    console.log(newPath);
                }
            },
            { rootMargin: "5% 0px -50% 0px", threshold: [ 0.2 ] }
        )

        sections.forEach((id) => {
            const el = document.getElementById(id)
            if ( el ) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])


    return (
        <nav className="top-0 z-[110] fixed max-w-[1400px] bg-background bg-opacity-0 w-full">
            <div
                className="flex flex-wrap lg:flex-nowrap items-center mx-auto py-4 justify-between lg:justify-normal lg:gap-x-10 w-full px-4">

                {/* Logo */ }
                <Link href="/#home" id="logo-link" className="flex items-center shrink-0 space-x-3 rtl:space-x-reverse">
                    <Image
                        src="/logo.png"
                        alt="Chottu Link Logo"
                        height={ 32 }
                        width={ 135 }
                        className="h-8 w-auto"
                    />
                </Link>

                {/* Mobile toggle button */ }
                <button
                    type="button"
                    onClick={ () => setIsOpen(!isOpen) }
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden
          hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={ isOpen }
                >
                    <span className="sr-only">Open main menu</span>
                    { isOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/> }
                </button>

                {/* Menu */ }
                <div
                    id="navbar-default"
                    className={ `${ isOpen ? "flex" : "hidden" } w-full flex-col lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-x-10` }
                >
                    <ul
                        id="nav-links"
                        className="font-medium text-center flex flex-col p-4 lg:p-0 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0"
                    >
                        <li>
                            <Link href="/#home"
                                  className={ `${ (activePath === '/' || activePath === '/#home') ? "active-link" : "" } block py-2 px-3 lg:p-0` }>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/#why-chottulink"
                                  className={ `${ (activePath === '/#why-chottulink') ? "active-link" : "" } block py-2 px-3 lg:p-0` }>
                                Why Chottulink
                            </Link>
                        </li>
                        <li>
                            <Link href="/#features"
                                  className={ `${ (activePath === '/#features') ? "active-link" : "" } block py-2 px-3 lg:p-0` }>
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us"
                                  className={ `${ (activePath === '/about-us') ? "active-link" : "" } block py-2 px-3 lg:p-0` }>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href={ CONFIG.links.docs } target="_blank">Developer Guide</Link>
                        </li>
                        <li>
                            <Link href="/pricing"
                                  className={ `${ (activePath === '/pricing') ? "active-link" : "" } block py-2 px-3 lg:p-0` }>
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="block py-2 px-3 lg:p-0">
                                Blogs
                            </Link>
                        </li>
                    </ul>

                    {/* CTA Button */ }
                    <div className="flex items-center z-40 gap-x-4 justify-around btn-container mt-4 lg:mt-0">
                        <Button variant="default" size='lg' aria-label="Get Started">
                            <Link href={ CONFIG.links.dashboard } target={ "_blank" }>
                                Get Started
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
