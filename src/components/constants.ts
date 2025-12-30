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
        name: 'utm_source',
        label: 'UTM Source',
        placeholder: 'e.g. newsletter, twitter, google',
        required: true,
        type: 'checkbox',
        checkboxList: ['google', 'bing', 'facebook', 'instagram', 'linkedin', 'pinterest', 'twitter', 'youtube', 'newsletter', 'blog', 'partner', 'affiliate', 'appstore', 'playstore', 'adpl', 'tdmf'],
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