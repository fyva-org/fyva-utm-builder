import * as Yup from 'yup';

export const createValidationSchema = () => {
    return Yup.object().shape({
        website_url: Yup.string()
            .trim()
            .min(2, 'Minimum 2 characters')
            .max(100, 'Maximum 100 characters')
            .required('This field is required'),
        utm_campaign: Yup.string()
            .trim()
            .min(2, 'Minimum 2 characters')
            .max(100, 'Maximum 100 characters')
            .transform((value) => {
                if (!value) return value;
                const transformValue = value
                    .toLowerCase()
                    .trim()
                    .replace(/[^a-z0-9]+/g, '_')   // replace spaces, hyphens, symbols with underscore
                    .replace(/^_+|_+$/g, '');      // remove leading/trailing underscores
                console.log(transformValue, 'transformValue')
                return transformValue
            }),

        utm_source: Yup.string()
            .trim()
            .min(2, 'Minimum 2 characters')
            .max(100, 'Maximum 100 characters')
            .required('This field is required'),
        utm_medium: Yup.string()
            .trim()
            .min(2, 'Minimum 2 characters')
            .max(100, 'Maximum 100 characters')
            .required('This field is required'),
    });
};