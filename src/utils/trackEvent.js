// src/utils/trackEvent.js
export const trackEvent = (eventName, params = {}) => {
    try {
        // Check for the standard Google Tag Manager / GA4 dataLayer approach
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
            window.gtag("event", eventName, params);
            console.log(`📊 [GA4 SUCCESS] Sent event: ${eventName}`, params);
            return;
        }

        // Fallback if dataLayer exists but gtag function isn't globally explicitly bound
        if (typeof window !== "undefined" && window.dataLayer) {
            window.dataLayer.push({
                event: eventName,
                ...params
            });
            console.log(`📊 [DataLayer SUCCESS] Pushed event: ${eventName}`, params);
            return;
        }

        console.warn(`⚠️ [GA4 BLOCKED] Analytics scripts are not loaded on this page. Event skipped: ${eventName}`);
    } catch (error) {
        console.error("❌ Error tracking event:", error);
    }
};