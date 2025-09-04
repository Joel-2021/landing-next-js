import PricingTable from "@/components/pricing-table";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import { tableData1, tableData2, tableData3, tableData4, tableData5 } from "../../../public/data/pricing-data";

export default function Pricing() {

    const title = 'ChottuLink - Pricing | Clear, Upfront Pricing';
    const metaDesctiption = 'Clear, upfront pricing for ChottuLink deep linking solutions. No hidden fees, no gimmicks—just transparent pricing and unbeatable value.';

    const pricingData = [
        {
            title: "Under 50k MAU",
            yearlyPrice: "$2,300/year",
            monthlyPrice: "$199 per Month",
            features: [
                "Up to 5,000 tracking links",
                "Up to 5,000 QR codes",
                "Custom branded links",
                "Unlimited click events"
            ]
        },
        {
            title: "Under 100k MAU",
            yearlyPrice: "$4,500/year",
            monthlyPrice: "$399 per Month",
            features: [
                "Up to 10,000 tracking links",
                "Up to 10,000 QR codes",
                "Custom branded links",
                "Unlimited click events"
            ]
        },
        {
            title: "Over 100k MAU",
            yearlyPrice: "Custom Pricing",
            monthlyPrice: "Contact Us",
            features: [
                "Unlimited tracking links",
                "Unlimited QR codes",
                "Custom branded links",
                "Unlimited click events"
            ]
        }
    ];

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
                    <h2 className="text-2xl font-bold text-white md:text-5xl">Clear Upfront Pricing</h2>
                    <p className="max-w-2xl pt-4 text-base text-white font-secondary md:text-lg">
                        No hidden fees, no gimmicks—just transparent pricing and unbeatable value.
                    </p>

                    <div
                        className="mt-12 flex w-full flex-col items-stretch justify-center gap-6 font-secondary md:flex-row md:gap-8">
                        { pricingData.map((data, index) => (
                            <div
                                key={ index }
                                className="bg-[#001D29] flex flex-col items-center gap-5 py-6 px-6 flex-1 min-w-[300px] max-w-[400px] rounded-4xl"
                            >
                                <div className="bg-[#011218] text-sm rounded-full text-center px-4 py-2">
                                    { data.title }
                                </div>
                                <div className="text-center">
                                    <h5 className="text-3xl font-bold md:text-4xl">{ data.yearlyPrice }</h5>
                                    <h6 className="text-lg md:text-xl">{ data.monthlyPrice }</h6>
                                </div>
                                <Button className="h-12 w-3/4">Buy</Button>
                                <div className="flex h-full flex-col items-center gap-2 text-center">
                                    { data.features.map((feature, i) => (
                                        <p key={ i }>{ feature }</p>
                                    )) }
                                </div>
                            </div>
                        )) }
                    </div>
                </section>

                <section className="flex flex-col items-center">
                    <h2 className="text-center text-3xl font-bold text-white md:text-5xl">How We Measure</h2>
                    <div className="w-full space-y-6">
                        <PricingTable data={ tableData1 }/>
                        <PricingTable data={ tableData2 }/>
                        <PricingTable data={ tableData3 }/>
                        <PricingTable data={ tableData4 }/>
                        <PricingTable data={ tableData5 }/>
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
                            Start Free
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
