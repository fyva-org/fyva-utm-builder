import type { FieldProps } from 'formik'
import { Field } from 'formik';
import type { FormFieldConfig } from './types'

const FormFieldInput = ({ field: fieldConfig, }: { field: FormFieldConfig }) => {
    return (
        <Field name={fieldConfig.name}>
            {({ field, meta }: FieldProps) => (
                <div className="form__group">
                    <label htmlFor={fieldConfig.name}>
                        {fieldConfig.label} {fieldConfig.required && '*'}
                    </label>
                    <div className="formInput__wrapper">
                        <input
                            {...field}
                            id={fieldConfig.name}
                            type="text"
                            placeholder={fieldConfig.placeholder}
                            className={meta.touched && meta.error ? 'input-error' : ''}
                        />
                        {meta.touched && meta.error && (
                            <span className="form__error">{meta.error}</span>
                        )}
                    </div>
                </div>
            )}
        </Field>
    );
};

export default FormFieldInput;