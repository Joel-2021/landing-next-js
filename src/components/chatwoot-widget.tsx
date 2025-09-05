"use client";
import { CONFIG } from "@/config/config";
import { useEffect } from "react";

declare global {
    interface Window {
        chatwootSettings?: {
            hideMessageBubble?: boolean;
            position?: string;
            locale?: string;
            type?: string;
            launcherTitle?: string;
        };
        chatwootSDK?: {
            run: (config: { websiteToken: string; baseUrl: string }) => void;
        };
    }
}

export default function ChatwootWidget() {
    useEffect(() => {
        window.chatwootSettings = {
            position: "right",
            type: "expanded_bubble",
            launcherTitle: "Chat with us"
        };

        (function (d: Document) {
            const BASE_URL = CONFIG.analytics.chatwoot.baseUrl!;
            const g = d.createElement("script") as HTMLScriptElement;
            const s = d.getElementsByTagName("script")[0];

            g.src = BASE_URL + "/packs/js/sdk.js";
            g.async = true;
            g.onload = function () {
                window.chatwootSDK?.run({
                    websiteToken: CONFIG.analytics.chatwoot.websiteToken!,
                    baseUrl: BASE_URL,
                });
            };

            if (s?.parentNode) {
                s.parentNode.insertBefore(g, s);
            }
        })(document);
    }, []);

    return null;
}

