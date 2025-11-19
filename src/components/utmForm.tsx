import { useState } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik'
import type { UTMFormValues } from './types'
import { createValidationSchema } from './validationSchema'
import { generateUTMUrl, copyToClipboard } from './utils'
import { INITIAL_VALUES, FORM_FIELDS } from './constants'
import URLOutput from './urlOutput'
import FormFieldInput from './FormFieldInput'

const UTMBuilder = () => {
    const [generatedURL, setGeneratedURL] = useState<string>('');
    const [copySuccess, setCopySuccess] = useState<boolean>(false);

    const validationSchema = createValidationSchema();

    const handleSubmit = (values: UTMFormValues, { setSubmitting }: FormikHelpers<UTMFormValues>) => {
        try {
            const url = generateUTMUrl(values);
            setGeneratedURL(url);
            setCopySuccess(false);
        } catch (error) {
            console.error('Error generating URL:', error);
            alert('Error generating URL. Please check your inputs.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleCopyUrl = async () => {
        const success = await copyToClipboard(generatedURL);
        if (success) {
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } else {
            alert('Failed to copy URL to clipboard');
        }
    };

    const handleReset = (resetForm: () => void) => {
        resetForm();
        setGeneratedURL('');
        setCopySuccess(false);
    };

    return (
        <section className="form__section">
            <h1>UTM Builder - URL Builder to Generate UTM Codes</h1>

            <Formik
                initialValues={INITIAL_VALUES}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnChange={true}
                validateOnBlur={true}
            >
                {({ isSubmitting, resetForm, submitForm }) => (
                    <div className="form__wrapper">
                        {FORM_FIELDS.map((field) => (
                            <FormFieldInput key={field.name} field={field} />
                        ))}

                        <div className="form__actions">
                            <button
                                type="button"
                                onClick={submitForm}
                                disabled={isSubmitting}
                                className="form__btn form__btn--primary"
                            >
                                {isSubmitting ? 'Generating...' : 'Generate URL'}
                            </button>
                            <button
                                type="button"
                                onClick={() => handleReset(resetForm)}
                                className="form__btn form__btn--secondary"
                            >
                                Reset
                            </button>
                        </div>

                        <URLOutput
                            url={generatedURL}
                            onCopy={handleCopyUrl}
                            copySuccess={copySuccess}
                        />
                    </div>
                )}
            </Formik>
        </section>
    );
};

export default UTMBuilder;