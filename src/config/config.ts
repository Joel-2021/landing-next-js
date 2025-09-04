export const CONFIG = {
    links: {
        dashboard: 'https://app.chottulink.com/register',
        docs: 'https://docs.chottulink.com',
        pricing: 'https://app.chottulink.com/pricing',
        tavas: 'https://tavas.ai',
    },
    analytics: {
        googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
        tavas: {
            apiKey: process.env.NEXT_PUBLIC_TAVAS_API_KEY,
            host: process.env.NEXT_PUBLIC_TAVAS_HOST,
            enabled: process.env.NEXT_PUBLIC_TAVAS_ENABLED,
        },
        chatwoot: {
            websiteToken: process.env.NEXT_PUBLIC_CHATWOOT_TOKEN,
            baseUrl: process.env.NEXT_PUBLIC_CHATWOOT_URL,
        },
    },
};
