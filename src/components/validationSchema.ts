import * as Yup from 'yup';

export const createValidationSchema = () => {
    return Yup.object().shape({
        website_url: Yup.string()
            .trim()
            .matches(
                /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
                'Enter a valid domain (e.g., example.com)'
            )
            .min(2, 'Minimum 2 characters')
            .max(100, 'Maximum 100 characters')
            .required('This field is required'),
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
        utm_campaign: Yup.string()
            .trim()
            .min(2, 'Minimum 2 characters')
            .max(100, 'Maximum 100 characters')
            .required('This field is required'),
        utm_term: Yup.string()
            .trim()
            .min(2, 'Minimum 2 characters')
            .max(100, 'Maximum 100 characters'),
        utm_content: Yup.string()
            .trim()
            .min(2, 'Minimum 2 characters')
            .max(100, 'Maximum 100 characters'),
    });
};