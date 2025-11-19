
import type { UTMFormValues } from './types'

export const generateUTMUrl = (values: UTMFormValues): string => {
    const { website_url, ...utmParams } = values;

    const baseUrl = website_url.startsWith('http')
        ? website_url
        : `https://${website_url}`;

    const url = new URL(baseUrl);

    Object.entries(utmParams).forEach(([key, value]) => {
        if (value?.trim()) {
            url.searchParams.append(key, value.trim());
        }
    });

    return url.toString();
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (error) {
        console.error('Failed to copy:', error);
        return false;
    }
};