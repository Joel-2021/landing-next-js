import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import Head from "next/head";
import path from "path";


export const legalTypeMap = {
    "terms-of-use": "TERMS_CONDITIONS",
    "privacy-policy": "PRIVACY_POLICY",
    "refund-policy": "REFUND_POLICY",
} as const;

const legalDisplayNameMap: Record<string, string> = {
    TERMS_CONDITIONS: "Terms of Use",
    PRIVACY_POLICY: "Privacy Policy",
    REFUND_POLICY: "Refund Policy",
};

export type LegalType = keyof typeof legalTypeMap;

interface LegalPageProps {
    content: string;
    name: string;
}

export default function LegalPage({ content, name }: LegalPageProps) {

    const pageTitle = `ChottuLink - ${legalDisplayNameMap[name]}`;
    const descriptionMap: Record<string, string> = {
        "TERMS_CONDITIONS":
            "Terms of Use for ChottuLink deep linking service. Read our terms and conditions for using our Firebase Dynamic Links alternative.",
        "PRIVACY_POLICY":
            "Privacy Policy for ChottuLink deep linking service. Learn how we protect your data and privacy.",
        "REFUND_POLICY":
            "Refund Policy for ChottuLink deep linking service. Learn about our refund terms and conditions.",
    };

    const description = descriptionMap[name] || "Legal document from ChottuLink.";

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={description} />
                <meta name="author" content="ChottuLink" />

                {/* Open Graph */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="ChottuLink" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={description} />
            </Head>
            <div className="client-content">
                    <div dangerouslySetInnerHTML={ { __html: content } }/>
            </div>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: Object.keys(legalTypeMap).map((type) => ({
            params: { type },
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const type = params?.type as LegalType;
    const contentType = legalTypeMap[ type ];

    if ( !contentType ) {
        return { notFound: true } // ✅ show 404 if invalid type
    }
    const apiUrl = `https://api2.chottulink.com/chotuCore/api/v1/clientcontent/enum/cdiOpn?clientContentEnum=${ contentType }`;

    try {
        const response = await fetch(apiUrl)
        if ( !response.ok ) throw new Error(`HTTP error ${ response.status }`)

        const contentData = await response.json()

        return {
            props: {
                content: contentData?.content || "<p>Content not found</p>",
                name: contentData?.name || "Legal Document",
            },
            revalidate: 60 * 60, // re-fetch every hour
        }
    } catch (error) {
        console.error("Error loading legal content:", error)

        const filePath = path.join(process.cwd(), "data", "legal.json");
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const localData = JSON.parse(fileContent);

        // fallback to local JSON
        const fallback = {
            TERMS_CONDITIONS: { name: "Terms of Use", content: localData.TERMS_CONDITIONS },
            PRIVACY_POLICY: { name: "Privacy Policy", content: localData.PRIVACY_POLICY },
            REFUND_POLICY: { name: "Refund Policy", content: localData.REFUND_POLICY },
        }

        return {
            props: {
                content: fallback[ contentType ]?.content || "<p>No content available</p>",
                name: fallback[ contentType ]?.name || "Legal Document",
            },
        }
    }
}
