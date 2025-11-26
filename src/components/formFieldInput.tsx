import React from 'react'
import { Field, useFormikContext } from 'formik';
import type { FieldProps } from 'formik'
import type { FormFieldConfig } from './types'
import { Input, Typography, Select } from 'antd';
const { Title } = Typography;

const FormFieldInput = ({ field: fieldConfig, }: { field: FormFieldConfig }) => {

    const { setFieldValue } = useFormikContext<any>();
    const checkboxItems = fieldConfig.checkboxList ? fieldConfig.checkboxList : []

    return (
        <React.Fragment>
            {fieldConfig.type === 'text' &&
                <Field name={fieldConfig.name}>
                    {({ field, meta }: FieldProps) => {
                        return (
                            <div className="form__group">
                                <div className="formInput__wrapper">
                                    <Title style={{ fontWeight: '500', color: '#323949' }} level={5} >{fieldConfig.label}</Title>
                                    <Input
                                        {...field}
                                        id={fieldConfig.name}
                                        type="text"
                                        size='middle'
                                        placeholder={fieldConfig.placeholder}
                                        className={'formInput__field ' + (meta.touched && meta.error ? 'input-error' : '')}
                                    />
                                    {meta.touched && meta.error && (
                                        <span className="form__error">{meta.error}</span>
                                    )}
                                </div>
                            </div>
                        )
                    }}
                </Field>
            }

            {fieldConfig.type === 'checkbox' && (
                <Field name={fieldConfig.name}>
                    {({ field, meta }: FieldProps) => (
                        <div className="formCheckbox__wrapper">
                            <Title style={{ fontWeight: '500', color: '#323949' }} level={5} >{fieldConfig.label}</Title>
                            <Select
                                style={{
                                    width: '100%',
                                    cursor: 'pointer'
                                }}
                                showSearch
                                placeholder={fieldConfig.placeholder}
                                optionFilterProp="label"
                                value={field.value || undefined}
                                onChange={(val) => setFieldValue(fieldConfig.name, val)}
                                options={checkboxItems?.map((item) => ({
                                    value: item,
                                    label: item.toLowerCase(),
                                }))}
                                size='large'
                            />
                            {meta.touched && meta.error && (
                                <span className="form__error">{meta.error}</span>
                            )}
                        </div>
                    )}
                </Field>
            )}
        </React.Fragment>

    );
};

export default FormFieldInput;