import ContactDialog from "@/components/contact-us";
import PricingSlider from "@/components/pricing-slider";
import { Button } from "@/components/ui/button";
import { CONFIG } from "@/config/config";
import { SubscriptionPlan } from "@/models/subscription-plans";
import fs from "fs";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";

export default function Pricing({ subscriptionPackages }: { subscriptionPackages: SubscriptionPlan[] }) {

    const title = 'ChottuLink - Pricing | Clear, Upfront Pricing';
    const metaDesctiption = 'Clear, upfront pricing for ChottuLink deep linking solutions. No hidden fees, no gimmicks—just transparent pricing and unbeatable value.';

    const formatNumber = (num: number) => {

        return new Intl.NumberFormat('en', {
            notation: 'compact',
            maximumFractionDigits: 1
        }).format(num);
    }


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

            <div className="mx-auto min-h-screen max-w-7xl px-0 lg:px-4">

                <section className="mt-10 mb-5 flex flex-col items-center text-center md:mt-20 md:mb-10">
                    <h1 className="text-3xl sm:text-5xl font-bold">Clear, Upfront Pricing</h1>
                    <p className="mt-4 font-light text-lg sm:text-xl mb-10">No hidden fees, no gimmicks—just transparent
                        pricing
                        and unbeatable value.</p>

                    <div id="card-container"
                         className="flex flex-col sm:flex-row flex-wrap gap-6 md:items-stretch items-center justify-center">

                        { subscriptionPackages.map((plan, index) =>
                            <div className="card" key={ plan.id }>
                                <div className="card-border"></div>

                                {/* Header */ }
                                <div className="card-header">
                                    <div className={ `card-icon ${ (index < 2) && 'blue' }` }>

                                        { index === 0 ? <Image src={ "/icons/star.svg" } height={ 30 } width={ 30 }
                                                               alt={ "pattern" }/>
                                            : <Image src={ "/icons/pattern.svg" } height={ 30 } width={ 30 }
                                                     alt={ "pattern" }
                                                     className={ `${ (index === 1) && 'rotate-45' }` }/> }

                                    </div>

                                    <div className="flex flex-col">
                                        <h5 className="card-title">{ plan.title || '---' }</h5>
                                        <p className="card-description">{ plan.description || '---' }</p>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <h3 className="card-price-value">${ plan.listedPrice || 0 }</h3>
                                        <p className="card-price-label"> Under { formatNumber(plan.mau) } Monthly Active
                                            Users</p>
                                    </div>
                                </div>

                                {/* Body */ }
                                <div className="card-body">
                                    <h6>Features</h6>
                                    <hr/>
                                    <ul>
                                        { plan.packBenefits.map((benefit, index) =>
                                            <li className={ "mb-2" } key={ index }>{ benefit }</li>) }
                                    </ul>
                                </div>

                                {/* Footer */ }
                                <div className="card-footer">
                                    <button
                                        className={ "w-full bg-[#abc7ff] p-2 cursor-pointer font-bold text-background rounded-3xl" }>
                                        <Link href={ CONFIG.links.pricing } target={ "_blank" }>
                                            Get Started
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        ) }

                        <div className="card">
                            <div className="card-border"></div>

                            {/* Header */ }
                            <div className="card-header">
                                <div className="card-icon">
                                    <Image src={ "/icons/pattern.svg" } height={ 30 } width={ 30 } alt={ "pattern" }/>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h5 className="card-title">Enterprise</h5>
                                    <p className="card-description">Contact sales for pricing</p>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <h3 className="card-price-value">Custom Pricing</h3>
                                    <p className="card-price-label"></p>
                                </div>
                            </div>

                            {/* Body */ }
                            <div className="card-body">
                                <h6>Features</h6>
                                <hr/>
                                <ul>
                                    <li>✅ Over 500 MAU Support</li>
                                    <li>✅ All Scale Plan Features</li>
                                    <li>✅ Priority support</li>
                                </ul>
                            </div>

                            {/* Footer */ }
                            <div className="card-footer">
                                <ContactDialog/>
                            </div>
                        </div>

                    </div>
                </section>

                <div className="text-center md:mt-30 mt-25">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-10">ChottuLink vs Competitors - Deeplinking cost
                        at &#64;150k MAUs
                    </h1>

                    <div className="bg-[#001D29] p-2 rounded-2xl">
                        <div className="overflow-x-auto bg-background rounded-2xl p-1 sm:p-2">
                            <table className="min-w-full bg-background border-collapse rounded-2xl">
                                <thead>
                                <tr className="bg-[linear-gradient(269.61deg,#3369c5_-8.08%,#f318ff_66.81%,#ff9d00_137.47%)] rounded-t-2xl">
                                    <th className="border-0 md:w-1/3 w-1/2 border-none bg-transparent font-poppins font-bold text-center align-middle whitespace-nowrap h-[60px] px-3 rounded-tl-2xl text-base md:text-xl">
                                        Platform
                                    </th>
                                    <th className="border-0 md:w-1/3 w-1/2 border-none bg-transparent font-poppins font-bold text-center align-middle whitespace-nowrap h-[60px] px-3 text-base md:text-xl">
                                        Monthly Cost (150k MAU)
                                    </th>
                                    <th className="border-0 md:w-1/3 w-1/2 border-none bg-transparent font-poppins font-bold text-center align-middle whitespace-nowrap h-[60px] px-3 text-base md:text-xl rounded-tr-2xl">
                                        Savings With ChottuLink
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="font-poppins bg-[var(--card-bg-primary)] font-bold">
                                    <td className="text-base px-4 bg-[#001D29] sm:text-lg text-center align-middle whitespace-nowrap h-[60px] border-r border-[#003950]">
                                        ChottuLink
                                    </td>
                                    <td className="text-base px-4 bg-[#001D29] sm:text-lg text-center align-middle whitespace-nowrap h-[60px] border-r border-[#003950]">
                                        $39/mo
                                    </td>
                                    <td className="text-base px-4 bg-[#001D29] sm:text-lg text-center align-middle whitespace-nowrap h-[60px]">
                                        — (Baseline)
                                    </td>
                                </tr>

                                <tr className="font-poppins bg-[var(--app-bg-primary)]">
                                    <td className="text-base sm:text-lg px-4 text-center align-middle whitespace-nowrap h-[60px] border-r border-[#003950]">
                                        Airbridge
                                    </td>
                                    <td className="text-base sm:text-lg px-4 text-center align-middle whitespace-nowrap h-[60px] border-r border-[#003950]">
                                        $420
                                    </td>
                                    <td className="text-base sm:text-lg  px-4 text-center align-middle whitespace-nowrap h-[60px] text-green-400">
                                        $381 (91%)
                                    </td>
                                </tr>

                                <tr className="font-poppins bg-[var(--app-bg-primary)]">
                                    <td className="text-base sm:text-lg px-4 text-center align-middle whitespace-nowrap h-[60px] border-r border-[#003950]">
                                        Branch.io
                                    </td>
                                    <td className="text-base sm:text-lg px-4 text-center align-middle whitespace-nowrap h-[60px] border-r border-[#003950]">
                                        $700
                                    </td>
                                    <td className="text-base sm:text-lg px-4 text-center align-middle whitespace-nowrap h-[60px] text-green-400">
                                        $661 (94%)
                                    </td>
                                </tr>

                                <tr className="font-poppins">
                                    <td className="text-base sm:text-lg px-4 text-center align-middle whitespace-nowrap h-[60px] border-r border-[#003950]">
                                        AppsFlyer
                                    </td>
                                    <td className="text-base sm:text-lg  px-4 text-center align-middle whitespace-nowrap h-[60px] border-r border-[#003950]">
                                        ~$9,160
                                    </td>
                                    <td className="text-base sm:text-lg  px-4 text-center align-middle whitespace-nowrap h-[60px] text-green-400">
                                        $9,121 (99.6%)
                                    </td>
                                </tr>

                                <tr className="font-poppins">
                                    <td className="text-base sm:text-lg px-4 text-center align-middle whitespace-nowrap h-[60px] border-r border-[#003950]">
                                        Adjust
                                    </td>
                                    <td className="text-base sm:text-lg  px-4 text-center align-middle whitespace-nowrap h-[60px] border-r border-[#003950]">
                                        ~$2,250 – $4,500
                                    </td>
                                    <td className="text-base sm:text-lg px-4 text-center align-middle whitespace-nowrap h-[60px] text-green-400">
                                        $2,211–$4,461 (98%–99%)
                                    </td>
                                </tr>

                                <tr className="font-poppins bg-[var(--app-bg-primary)]">
                                    <td className="text-base sm:text-lg px-4 text-center align-middle whitespace-nowrap h-[60px] border-r border-[#003950]">
                                        Kochava
                                    </td>
                                    <td className="text-base sm:text-lg  px-4 text-center align-middle whitespace-nowrap h-[60px] border-r border-[#003950]">
                                        $2,500
                                    </td>
                                    <td className="text-base sm:text-lg px-4 text-center align-middle whitespace-nowrap h-[60px] text-green-400">
                                        $2461 (98.44%)
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

                <div className="mt-32 md:mt-40">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-10">
                        Transparent Pricing that doesn&#39;t make you think twice.
                    </h1>
                    <PricingSlider/>
                </div>

                <div className="mt-20 md:mt-32">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">ChottuLink Features</h2>
                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="feature-column">
                                <ul className="space-y-4 text-tertiary">
                                    <li className="flex items-start justify-center">
                                        <span className="text-green-400 mr-2">✓</span>
                                        <span>Seamless Deep Linking for Universal Compatibility</span>
                                    </li>
                                    <li className="flex items-start justify-center">
                                        <span className="text-green-400 mr-2">✓</span>
                                        <span>Effortless Switch from Firebase Dynamic Links</span>
                                    </li>
                                    <li className="flex items-start justify-center">
                                        <span className="text-green-400 mr-2">✓</span>
                                        <span>Hosted on highly scalable & reliable AWS infrastructure</span>
                                    </li>
                                    <li className="flex items-start justify-center">
                                        <span className="text-green-400 mr-2">✓</span>
                                        <span>Self-serve onboarding</span>
                                    </li>

                                </ul>
                            </div>
                            <div className="feature-column">
                                <ul className="space-y-4 text-tertiary">
                                    <li className="flex items-start justify-center">
                                        <span className="text-green-400 mr-2">✓</span>
                                        <span>Deferred Deeplinking fully supported</span>
                                    </li>
                                    <li className="flex items-start justify-center">
                                        <span className="text-green-400 mr-2">✓</span>
                                        <span>Custom domain support</span>
                                    </li>
                                    <li className="flex items-start justify-center">
                                        <span className="text-green-400 mr-2">✓</span>
                                        <span>Unlimited Deep Links</span>
                                    </li>
                                    <li className="flex items-start justify-center">
                                        <span className="text-green-400 mr-2">✓</span>
                                        <span>Unlimited Clicks & QR Codes</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="feature-column">
                                <ul className="space-y-4 text-tertiary">
                                    <li className="flex items-start justify-center">
                                        <span className="text-green-400 mr-2">✓</span>
                                        <span>Rest APIs Support</span>
                                    </li>
                                    <li className="flex items-start justify-center">
                                        <span className="text-green-400 mr-2">✓</span>
                                        <span>Advanced Analytics for Deep Linking</span>
                                    </li>
                                    <li className="flex items-start justify-center">
                                        <span className="text-green-400 mr-2">✓</span>
                                        <span>SDKs for Android, iOS, Flutter, React Native and Unity</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

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
            </div>
        </>
    );
}


export async function getServerSideProps() {
    let subscriptionPackages: SubscriptionPlan[] = []

    try {
        const res = await fetch("https://api2.chottulink.com/chotuCore/api/v1/subscription/subscription/packages/all/cdiOpn")
        if ( !res.ok ) {
            throw new Error(`HTTP error! status: ${ res.status }`)
        }

        const data = await res.json()
        subscriptionPackages = data.subscriptionPackDetailsResponses || []
    } catch (error) {
        console.error("Error loading pricing data:", error)
        const filePath = path.join(process.cwd(), "data", "pricing.json");
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const localData = JSON.parse(fileContent);

        subscriptionPackages = localData.subscriptionPackDetailsResponses;
    }

    return {
        props: { subscriptionPackages },
    }
}
