import { useState } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik'
import type { UTMFormValues } from './types'
import { createValidationSchema } from './validationSchema'
import { generateUTMUrl, copyToClipboard } from './utils'
import { INITIAL_VALUES, FORM_FIELDS } from './constants'
import URLOutput from './urlOutput'
import FormFieldInput from './formFieldInput'
import { Button } from 'antd';

const UTMBuilder = () => {
    const [generatedURL, setGeneratedURL] = useState<string>('');
    const [copySuccess, setCopySuccess] = useState<boolean>(false);

    const validationSchema = createValidationSchema();

    const handleSubmit = (values: UTMFormValues, { setSubmitting }: FormikHelpers<UTMFormValues>) => {
        try {
            const cleanedValues = validationSchema.cast(values);
            const url = generateUTMUrl(cleanedValues);
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
            <h1 className='form__heading'>UTM Builder</h1>

            <div className='form__grid'>
                <Formik
                    initialValues={INITIAL_VALUES}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    validateOnChange={true}
                    validateOnBlur={true}
                >
                    {({ isSubmitting, resetForm, submitForm }) => (
                        <div className="form__wrapper">

                            {FORM_FIELDS.map((field) => {
                                return field.type === 'text' &&  <FormFieldInput key={field.name} field={field} />
                            })}

                            <div className='form__group--select'>
                                {FORM_FIELDS.map((field) => {
                                    return field.type === 'checkbox' && <FormFieldInput key={field.name} field={field} />
                                })}
                            </div>


                            <div className="form__actions">
                                <Button
                                    type="primary"
                                    size={'large'}
                                    color='default'
                                    variant="solid"
                                    onClick={submitForm}
                                    disabled={isSubmitting}
                                    className="form__btn form__btn--primary"
                                >
                                    {isSubmitting ? 'Generating...' : 'Generate URL'}
                                </Button>
                                <Button
                                    type="primary"
                                    danger
                                    size={'large'}
                                    onClick={() => handleReset(resetForm)}
                                    className="form__btn form__btn--secondary"
                                >
                                    Reset
                                </Button>
                            </div>
                        </div>
                    )}
                </Formik>

                <URLOutput
                    url={generatedURL}
                    onCopy={handleCopyUrl}
                    copySuccess={copySuccess}
                />
            </div>
        </section>
    );
};

export default UTMBuilder;