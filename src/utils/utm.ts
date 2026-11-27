const STORAGE_KEY = 'multtiplus_utm';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

export type UtmParams = Partial<Record<typeof UTM_KEYS[number], string>>;

/**
 * Saves the UTM parameters of the landing URL for this browser session, so they
 * are still available when the visitor submits the form after navigating around.
 * Call once at app start-up.
 */
export const captureUtm = () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const utm: UtmParams = {};
        for (const key of UTM_KEYS) {
            const value = params.get(key);
            if (value) utm[key] = value.slice(0, 200);
        }
        if (Object.keys(utm).length > 0) {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
        }
        if (!sessionStorage.getItem(`${STORAGE_KEY}_referrer`) && document.referrer) {
            sessionStorage.setItem(`${STORAGE_KEY}_referrer`, document.referrer.slice(0, 500));
        }
    } catch {
        // sessionStorage unavailable (private mode, blocked storage): ignore
    }
};

export const getUtm = (): UtmParams => {
    try {
        return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}') as UtmParams;
    } catch {
        return {};
    }
};

export const getLandingReferrer = (): string => {
    try {
        return sessionStorage.getItem(`${STORAGE_KEY}_referrer`) || '';
    } catch {
        return '';
    }
};
