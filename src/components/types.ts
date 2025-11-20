export interface UTMFormValues {
    website_url: string;
    utm_campaign: string;
    utm_source: string;
    utm_medium: string;
}

export interface FormFieldConfig {
    name: keyof UTMFormValues;
    label: string;
    placeholder: string;
    required: boolean;
    type?: 'text' | 'checkbox';
    checkboxList?: string[];
    checkboxMap?: Record<string, string[]>;
    dependentOn?: keyof UTMFormValues;
}
