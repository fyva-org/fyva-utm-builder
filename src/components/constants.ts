import type { FormFieldConfig, UTMFormValues } from './types'

export const FORM_FIELDS: FormFieldConfig[] = [
    {
        name: 'website_url',
        label: 'Website URL',
        placeholder: 'e.g. fyva.in',
        required: true,
    },
    {
        name: 'utm_source',
        label: 'UTM Source',
        placeholder: 'e.g. newsletter, twitter, google',
        required: true,
    },
    {
        name: 'utm_medium',
        label: 'UTM Medium',
        placeholder: 'e.g. email, social, cpc',
        required: true,
    },
    {
        name: 'utm_campaign',
        label: 'UTM Campaign',
        placeholder: 'e.g. promotion, sale',
        required: true,
    }
];

export const INITIAL_VALUES: UTMFormValues = {
    website_url: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
};