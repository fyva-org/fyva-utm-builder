import type { FormFieldConfig, UTMFormValues } from './types'

export const FORM_FIELDS: FormFieldConfig[] = [
    {
        name: 'website_url',
        label: 'Website URL',
        placeholder: 'e.g. fyva.in',
        required: true,
        type: 'text',
    },
    {
        name: 'utm_medium',
        label: 'UTM Medium',
        placeholder: 'e.g. email, social, cpc',
        required: true,
        type: 'checkbox',
        checkboxList: ['organic', 'cpc', 'email', 'social', 'referral', 'display', 'affiliate', 'video', 'audio', 'paidsearch', 'sms', 'push', 'banner', 'influencer']
    },
    {
        name: 'utm_source',
        label: 'UTM Source',
        placeholder: 'e.g. newsletter, twitter, google',
        required: true,
        type: 'checkbox',
        dependentOn: 'utm_medium',
        checkboxMap: {
            organic: ['google', 'bing'],
            cpc: ['google', 'bing', 'facebook', 'instagram', 'linkedin', 'twitter', 'youtube'],
            email: ['newsletter'],
            social: ['facebook', 'instagram', 'linkedin', 'twitter', 'youtube'],
            referral: ['blog', 'partner'],
            display: ['facebook', 'instagram', 'google'],
            affiliate: ['affiliate', 'partner'],
            video: ['youtube'],
            audio: ['audio'],    
            paidsearch: ['google', 'bing'],
            sms: ['sms'],
            push: ['push'],
            banner: ['google', 'facebook'],
            influencer: ['instagram', 'youtube', 'twitter']
        }
    },
    {
        name: 'utm_campaign',
        label: 'UTM Campaign',
        placeholder: 'e.g. product, black friday, april sale',
        required: false,
        type: 'text',
    },
];

export const INITIAL_VALUES: UTMFormValues = {
    website_url: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
};