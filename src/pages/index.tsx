import { Button } from "@/components/ui/button";
import { CONFIG } from "@/config/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
    const title = 'Deep Linking Done Right | Firebase Dynamic Links Alternative';
    const metaDesctiption = 'Create seamless deep links with Chottulink, a Firebase Dynamic Links alternative for Android, iOS, and Flutter apps';

    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content={ metaDesctiption }/>
                <meta name="author" content="ChottuLink"/>

                {/* Open Graph */ }
                <meta property="og:title" content={ title }/>
                <meta property="og:description" content={ metaDesctiption }/>
                <meta property="og:type" content="article"/>
                <meta property="og:site_name" content="ChottuLink"/>

                {/* Twitter */ }
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content={ title }/>
                <meta name="twitter:description" content={ metaDesctiption }/>
            </Head>

            <section id="home" className="sm:columns-2 mt-8 flex items-center flex-col sm:flex-row scroll-mt-30">
                <div>
                    <h1 className="text-2xl sm:text-5xl font-semibold">
                        A Seamless Drop-in <br/> Replacement for Firebase <br/> Dynamic Links
                    </h1>

                    <p className="mt-4 mb-6 text-lg">
                        Enjoy a powerful, scalable, and fully-featured deep linking experience with zero downtime and
                        minimal
                        integration effort.
                    </p>

                    <div className="btn-container">
                        <Button variant="outline">
                            <Link href={ CONFIG.links.dashboard } target={ "_blank" }>
                                Start Free
                            </Link>
                        </Button>
                    </div>
                </div>
                <div>
                    <Image src="/images/mobile-watch.webp" priority height="634" width="819"
                           alt="mobile watch illustration"/>
                </div>
            </section>

            <section id="why-chottulink"
                     className="scroll-mt-24 text-center sm:mt-[1.5rem] mb-[3rem] sm:mb-[4rem]">
                <h2 className="text-2xl sm:text-4xl font-semibold">
                    Why ChottuLink?
                </h2>

                <p className="mt-4">
                    ChottuLink offers a powerful, scalable deep linking solution, seamlessly replacing Firebase.<br/>Integrate
                    effortlessly with your marketing stack to optimize performance and gain insights,<br/> all with
                    minimal
                    disruption.
                </p>
            </section>

            <section id="features" className="scroll-mt-24">
                <h2 className="scroll-mt-24 flex justify-center text-2xl sm:text-4xl font-semibold">Power Features</h2>
                <div className="mt-1 sm:mt-0 sm:mb-6">
                    <div className="sm:columns-2 flex items-center flex-col sm:flex-row justify-between gap-y-2">
                        <div className="mt-4 space-y-2">
                            <h2 className="text-xl text-center sm:text-start sm:text-2xl font-medium sm:mb-4">
                                Seamless Deep Linking for Universal Compatibility
                            </h2>

                            <div className="flex gap-x-2 sm:mb-4">
                                <Image className="size-4 mt-2" src="/images/pointer.webp" height="24" width="24"
                                       alt="star icon"/>
                                <div>
                                    <h3 className="text-lg font-semibold"> Smart Redirection</h3>

                                    <p>
                                        Automatically routes users to the right destination, whether it&#39;s an app, a
                                        web
                                        page, or
                                        an app store.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-x-2 sm:mb-4">
                                <Image className="size-4 mt-2" src="/images/pointer.webp" height="24" width="24"
                                       alt="star icon"/>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Cross-Platform Consistency
                                    </h3>

                                    <p>
                                        A single link that adapts to any device and operating system.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-x-2 sm:mb-4">
                                <Image className="size-4 mt-2" src="/images/pointer.webp" alt="star icon" height="24"
                                       width="24"/>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Improved User Engagement
                                    </h3>

                                    <p>
                                        Keep users connected with a smooth transition between mobile and web
                                        experiences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Image src="/images/image-1.webp" height="434" width="485" alt="features illustration"/>
                        </div>
                    </div>

                    <div
                        className="sm:columns-2 flex items-center flex-col-reverse sm:flex-row justify-between gap-y-4 mt-10">
                        <div>
                            <Image src="/images/image-2.webp" height="309" width="733" alt="link illustration"/>
                        </div>

                        <div className="sm:w-[53%]">
                            <h2 className="text-xl text-center sm:text-start sm:text-2xl font-medium">
                                Effortless Switch from Firebase Dynamic Links to Our Solution
                            </h2>

                            <p className="mt-4 text-center sm:text-start">
                                Switching from Firebase Dynamic Links to our solution is quick, seamless, and
                                hassle-free. No
                                complex setup,
                                no disruptions—just a better, more flexible deep linking experience.
                            </p>
                        </div>
                    </div>

                    <div className="sm:columns-2 flex items-center flex-col sm:flex-row justify-between gap-y-4 mt-10">
                        <div className="sm:w-[53%]">
                            <h2 className="text-xl text-center sm:text-start sm:text-2xl font-medium">
                                Deferred Deeplinking fully supported
                            </h2>

                            <p className="mt-4 text-center sm:text-start">
                                With deferred deep linking, users can land exactly where they need to—even if they don’t
                                have
                                the app
                                installed yet. Our solution ensures a smooth journey from link click to in-app
                                experience.
                            </p>

                            <div className="mt-4 space-y-2">
                                <div className="flex gap-x-2">
                                    <Image className="size-4 mt-1" src="/images/pointer.webp" alt="star icon"
                                           height="24" width="24"/>
                                    <div>
                                        <h3 className="font-medium">
                                            User clicks on a deep link but doesn’t have the app installed.
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex gap-x-2">
                                    <Image className="size-4 mt-1" src="/images/pointer.webp" height="24"
                                           width="24"
                                           alt="star icon"/>
                                    <div>
                                        <h3 className="font-medium">
                                            They are redirected to the App Store (iOS) or Play Store (Android) to
                                            install the
                                            app.
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex gap-x-2">
                                    <Image className="size-4 mt-1" src="/images/pointer.webp" alt="star icon"
                                           height="24" width="24"/>
                                    <div>
                                        <h3 className="font-medium">
                                            After installation, they are automatically taken to the intended in-app
                                            page,
                                            without losing context.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src="/images/image-3.webp" height="468" width="720" alt="mobile illustration"/>
                        </div>
                    </div>

                    <div
                        className="sm:columns-2 flex items-center flex-col-reverse sm:flex-row justify-between gap-y-4 mt-10 sm:gap-x-10">
                        <div>
                            <Image src="/images/image-5.webp" height="358" width="648"
                                   alt="custom domain illustration"/>
                        </div>
                        <div className="sm:w-[53%]">
                            <h2 className="text-xl text-center sm:text-2xl font-medium sm:text-start">
                                Custom domain support
                            </h2>

                            <p className="mt-4 text-center sm:text-start">
                                Custom domain support allows you to use your own branded domain (e.g.,
                                links.yourbrand.com)
                                instead of a
                                generic third-party URL for deep linking. This enhances brand recognition, trust, and
                                user
                                engagement while
                                ensuring a seamless linking experience.
                            </p>
                        </div>
                    </div>

                    <div
                        className="sm:columns-2 flex items-center flex-col sm:flex-row justify-between gap-y-4 mt-10 sm:gap-x-4">
                        <div className="sm:w-[53%]">
                            <h2 className="text-xl text-center sm:text-2xl font-medium sm:text-start">
                                Rest APIs Support
                            </h2>

                            <p className="mt-4 text-center sm:text-start">
                                Easily integrate and automate deep linking with REST API support for a seamless,
                                scalable
                                experience. Our APIs
                                allow you to create, manage, and track deep links programmatically with full
                                flexibility.
                            </p>
                        </div>
                        <div>
                            <Image src="/images/image-4.webp" alt="api illustration" height="278" width="731"/>
                        </div>
                    </div>

                    <div
                        className="sm:columns-2 flex items-center flex-col-reverse sm:flex-row justify-between gap-y-4 mt-10 sm:gap-x-4">
                        <div>
                            <Image src="/images/image-6.webp" height="672" width="1313"
                                   alt="deep linking illustration"/>
                        </div>
                        <div className="sm:w-[100%]">
                            <h2 className="text-xl text-center sm:text-2xl font-medium sm:text-start">
                                Advanced Analytics for Deep Linking
                            </h2>
                            <p className="mt-4 text-center sm:text-start">
                                Gain deep insights into user behavior and optimize your marketing strategies with
                                Advanced
                                Analytics. Track,
                                measure, and improve your deep linking performance in real-time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="resources" className="scroll-mt-24">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-4xl font-semibold">
                        Convert, Retain, and Grow <br/> with ChottuLink
                    </h2>
                    <p className="mt-4 sm:w-[70%] sm:mx-auto">
                        Combat user drop-off with ChottuLink&apos;s smart engagement. Our tailored messaging and
                        intelligent
                        retargeting boost
                        retention, maximize conversions, and drive sustainable growth for higher marketing ROI.
                    </p>
                </div>

                <div className="mt-6 sm:mt-12 flex justify-center">
                    <Image src="/images/image-7.webp" height="515" width="1055" alt="mobile illustration"/>
                </div>
            </section>

            <section className="mt-15 sm:mt-20">
                <div
                    className="bg-[#000D12] p-6 md:p-10 rounded-lg md:columns-2 flex items-center flex-col md:flex-row justify-between text-center md:text-start gap-y-6">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Get Started with ChottuLink Today</h2>
                        <p className="mt-4">Unlock the full potential of user engagement and retention. Create an
                            account and get
                            started</p>
                    </div>

                    <Button variant="outline">
                        <Link href={ CONFIG.links.dashboard } target={ "_blank" }>
                            Start Free
                        </Link>
                    </Button>
                </div>
            </section>

        </>
    );
}
