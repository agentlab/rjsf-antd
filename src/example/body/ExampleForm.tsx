import React from 'react';
import { Form as AntdForm, Button } from 'antd';
import Form, { FormProps, ObjectFieldTemplateProps } from 'react-jsonschema-form';

import RjsfForm, { RjsfFormProps } from '../../lib/Form';

const ExampleForm: React.FC<any> = ({
  schema,
  uiSchema,
  formData,
  onSubmit,
  onCancel,
  onFormChanged,
  liveSettings,
  validate,
}: RjsfFormProps & React.Ref<Form<any>>) => {
  return (
    <RjsfForm
      id='example-form'
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      onSubmit={onSubmit}
      onChange={onFormChanged}
      liveValidate={liveSettings.validate}
      disabled={liveSettings.disabled}
      validate={validate}>
      <Button onClick={onCancel}>Cancel</Button>
      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </RjsfForm>
  );
};

export default AntdForm.create({ name: 'example' })(ExampleForm);
