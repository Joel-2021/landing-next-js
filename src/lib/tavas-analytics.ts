import { CONFIG } from "@/config/config";

declare global {
    interface Window {
        posthog?: any
        tavas?: any
    }
}

export function initializeTavasAnalytics() {
    if ( typeof window === "undefined" || typeof document === "undefined" ) {
        return // ensure runs only on client
    }

    if ( CONFIG.analytics.tavas.enabled ) {
        try {
            const script = document.createElement("script")
            script.src = `${ CONFIG.analytics.tavas.host }/static/array.js`

            script.onload = () => {
                if ( window.posthog ) {
                    window.posthog.init(CONFIG.analytics.tavas.apiKey, {
                        api_host: CONFIG.analytics.tavas.host,
                        autocapture: false,
                        loaded: (posthogInstance: any) => {
                            console.log("Tavas Analytics initialized")
                            window.tavas = posthogInstance
                        },
                    })
                } else {
                    console.warn("PostHog not found after loading.")
                }
            }

            script.onerror = () => {
                console.warn("Failed to load Tavas Analytics script.")
            }

            document.head.appendChild(script)
        } catch (e) {
            console.error("Error initializing Tavas Analytics:", e)
        }
    }
}

export function trackEvent(eventName: string, properties: Record<string, any> = {}) {
    if ( typeof window === 'undefined' ) return; // Ensure client-side

    // Track with Tavas Analytics
    if ( window.tavas ) {
        window.tavas.capture(eventName, {
            page: 'pricing',
            ...properties
        });
        console.log(`Tavas event tracked: ${ eventName }`, properties);
    }
}
