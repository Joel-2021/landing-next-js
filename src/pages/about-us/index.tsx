import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";

export default function Pricing() {
    const title = 'ChottuLink - About Us | Why We Built Chottulink';
    const metaDesctiption = 'Learn why we built ChottuLink and meet the founders behind the Firebase Dynamic Links alternative. Discover our mission and vision.';

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
            <section className="h-full w-full mx-auto md:mt-40 mt-25 px-2">
                <div className="text-center max-w-[960px] mx-auto">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-6 fadeInUp">Why We Built Chottulink?</h1>
                    <p className="text-lg font-normal fadeInUp animate-delay-300ms">Chottulink.com was born out of
                        necessity
                        when Firebase Dynamic Links announced its
                        sunset. As developers and digital creators who relied on Firebase&#39;s powerful deep linking
                        capabilities, we felt the urgent need for a
                        seamless, reliable, and customizable alternative. What began as a solution for our own needs
                        quickly
                        grew into a
                        full-fledged platform designed to serve others facing the same transition. Chottulink is built
                        with
                        simplicity,
                        speed, and flexibility in mind—empowering creators, businesses, and developers to build smart
                        links
                        without
                        compromise.</p>
                </div>

                <div className="text-center mt-15 sm:mt-20">
                    <h2 className="font-bold text-3xl sm:text-5xl mb-6">Founders</h2>

                    <div className="flex justify-center items-center flex-col sm:flex-row gap-5 ">
                        <div
                            className="flex justify-center items-center flex-col rounded-xl border border-gray-800 p-8 text-center max-w-[400px] bg-background">

                            <div
                                className="rounded-full border border-[#001d29] border-[14px] h-[200px] w-[200px] bg-[#003951] flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/images/mayank-nakrani-linkedin-profile.png" height={ 500 } width={ 500 }
                                    alt="Mayank Nakrani" className="object-cover h-full w-full"
                                />
                            </div>

                            <div className="rounded-2xl mt-4 p-2 w-full">
                                <h6 className="font-light text-2xl">Mayank Nakrani</h6>
                            </div>
                            <p className="text-lg mt-3">With 15+ Years of IT experience, Mayank is still eager to take
                                up
                                tech challenges. He is an entrepreneur at heart and believes in Founder-led sales.</p>

                            <a className="rounded-full border border-gray-800 py-2 px-4 p w-fit mt-3"
                               href="https://www.linkedin.com/in/mayank-nakrani/">
                                <Image src="/icons/linkedin.svg" height={ 24 } width={ 24 } alt='linkedin'/>
                            </a>
                        </div>

                        <div
                            className="flex justify-center items-center flex-col rounded-xl border border-gray-800 p-8 text-center max-w-[400px] bg-background">

                            <div
                                className="rounded-full border border-[#001d29] border-[14px] h-[200px] w-[200px] bg-[#003951] flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/images/narendra-thadani-linkedin-profile.png" height={ 500 } width={ 500 }
                                    alt="Narendra Thadani" className="object-cover h-full w-full"
                                />

                            </div>

                            <div className="rounded-2xl mt-4 p-2 w-full">
                                <h6 className="font-light text-2xl">Narendra Thadani</h6>
                            </div>
                            <p className="text-lg mt-3">20+ years of experience in the IT industry, Narendra is a techie
                                at
                                heart and loves to build products that help businesses grow.</p>

                            <a className="rounded-full border border-gray-800 py-2 px-4 p w-fit mt-3"
                               href="https://www.linkedin.com/in/narendra-thadani/">
                                <Image src="/icons/linkedin.svg" height={ 24 } width={ 24 } alt='linkedin'/>
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className="rounded-xl bg-[#001d29] w-full p-8 flex mt-15 gap-6 items-center justify-center sm:flex-row flex-col">
                    <div className="flex flex-col gap-3 sm:w-[70%] w-full">
                        <h3 className="text-3xl sm:text-5xl font-bold">Tavas Analytics</h3>
                        <p className="text-lg">Chottulink is a product of Tavas Analytics, which was founded with a
                            clear
                            mission: to revolutionize how businesses understand and engage with their customers.
                            Launched in
                            2022 by a team of seasoned technologists and industry experts, Tavas emerged at the
                            intersection
                            of data, AI, and customer experience. Recognizing the limitations of traditional analytics
                            tools, the founders envisioned a platform that could deliver real-time, AI-powered insights
                            across every customer touchpoint—from digital to physical.</p>
                        <Button variant="default">Visit Tavas</Button>
                    </div>
                    <div className="my-auto">
                        <div className="flex gap-2"><Image src="/icons/star.svg" height={ 24 } width={ 24 } alt='star'/>Multiple
                            apps with 5M MAU
                        </div>
                        <div className="flex gap-2"><Image src="/icons/star.svg" height={ 24 } width={ 24 } alt='star'/>20M+
                            Events daily
                        </div>
                        <div className="flex gap-2"><Image src="/icons/star.svg" height={ 24 } width={ 24 } alt='star'/>Ultra
                            Light weight Android, ios and Web SDK
                        </div>
                        <div className="flex gap-2"><Image src="/icons/star.svg" height={ 24 } width={ 24 } alt='star'/>GDPR
                            Compliant
                        </div>
                    </div>
                </div>
                {/*<div className="mt-20 text-center mb-20">*/ }
                {/*<h2 className="font-bold text-3xl sm:text-5xl mb-6">Our Team</h2>*/ }
                {/*<div className="flex justify-between items-stretch sm:flex-row flex-col mt-10 gap-6">*/ }

                {/*    <div className="rounded-2xl border border-gray-800 flex flex-col p-10 items-center justify-center">*/ }
                {/*        <div className="rounded-full bg-[#001d29] h-35 w-35"></div>*/ }
                {/*        <h6 className="font-bold mt-2 text-xl">Amit Sharma</h6>*/ }
                {/*        <p className="text-lg mt-3">SaaS Product Lead</p>*/ }
                {/*    </div>*/ }

                {/*    <div className="rounded-2xl border border-gray-800 flex flex-col p-10 items-center justify-center">*/ }
                {/*        <div className="rounded-full bg-[#001d29] h-35 w-35"></div>*/ }
                {/*        <h6 className="font-bold mt-2 text-xl">Mutlib Khan</h6>*/ }
                {/*        <p className="text-lg mt-3">Web & IOS SDK Lead </p>*/ }
                {/*    </div>*/ }

                {/*    <div className="rounded-2xl border border-gray-800 flex flex-col p-10 items-center justify-center">*/ }
                {/*        <div className="rounded-full bg-[#001d29] h-35 w-35"></div>*/ }
                {/*        <h6 className="font-bold mt-2 text-xl">Swagat Nayak</h6>*/ }
                {/*        <p className="text-lg mt-3">Android SDK Lead</p>*/ }
                {/*    </div>*/ }

                {/*    <div className="rounded-2xl border border-gray-800 flex flex-col p-10 items-center justify-center">*/ }
                {/*        <div className="rounded-full bg-[#001d29] h-35 w-35"></div>*/ }
                {/*        <h6 className="font-bold mt-2 text-xl">Balaji Boli</h6>*/ }
                {/*        <p className="text-lg mt-3">Product Manager</p>*/ }
                {/*    </div>*/ }

                {/*    <div className="rounded-2xl border border-gray-800 flex flex-col p-10 items-center justify-center">*/ }
                {/*        <div className="rounded-full bg-[#001d29] h-35 w-35"></div>*/ }
                {/*        <h6 className="font-bold mt-2 text-xl">Ankit Aloni</h6>*/ }
                {/*        <p className="text-lg mt-3">He just hangs around</p>*/ }
                {/*    </div>*/ }
                {/*</div></div>*/ }
            </section>
        </>
    );
}
