import React, { useEffect } from 'react'
import { Field, useFormikContext } from 'formik';
import type { FieldProps } from 'formik'
import type { FormFieldConfig } from './types'
import { Input, Typography, Select } from 'antd';
const { Title } = Typography;

const FormFieldInput = ({ field: fieldConfig, }: { field: FormFieldConfig }) => {

    const { values, setFieldValue } = useFormikContext<any>();
    const dependentParent = fieldConfig.dependentOn
        ? values[fieldConfig.dependentOn]
        : null;

    const checkboxItems = fieldConfig.checkboxList || (fieldConfig.checkboxMap && dependentParent
        ? fieldConfig.checkboxMap[dependentParent] || []
        : []);

    if (fieldConfig.checkboxMap && !dependentParent) {
        return null;
    }

    useEffect(() => {
        if (fieldConfig.dependentOn) {
            setFieldValue(fieldConfig.name, '');
        }
    }, [dependentParent]);


    return (
        <React.Fragment>
            {fieldConfig.type === 'text' &&
                <Field name={fieldConfig.name}>
                    {({ field, meta }: FieldProps) => (
                        <div className="form__group">
                            <div className="formInput__wrapper">
                                <Title style={{ fontWeight: '500', color: '#323949' }} level={5} >{fieldConfig.label}{fieldConfig.required && '*'}</Title>
                                <Input
                                    {...field}
                                    id={fieldConfig.name}
                                    type="text"
                                    size='middle'
                                    status={meta.error && "error"}
                                    placeholder={fieldConfig.placeholder}
                                    className={'formInput__field ' + (meta.touched && meta.error ? 'input-error' : '')}
                                />
                                {meta.touched && meta.error && (
                                    <span className="form__error">{meta.error}</span>
                                )}
                            </div>
                        </div>
                    )}
                </Field>
            }

            {fieldConfig.type === 'checkbox' && (
                <Field name={fieldConfig.name}>
                    {({ field, meta }: FieldProps) => (
                        <div className="formCheckbox__wrapper">
                            <Title style={{ fontWeight: '500', color: '#323949' }} level={5} >{fieldConfig.label}{fieldConfig.required && '*'}</Title>
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
                                options={checkboxItems.map((item) => ({
                                    value: item,
                                    label: item.toUpperCase(),
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