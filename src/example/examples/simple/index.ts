//import { FormProps } from 'react-jsonschema-form';
import schema from './schema.json';
import uiSchema from './ui-schema.json';
import formData from './form-data.json';

const simple /*: FormProps<any> & { title: string }*/ = {
  title: 'Simple',
  schema /*: {
    title: 'A registration form',
    description: 'A simple form example.',
    type: 'object',
    required: ['firstName', 'lastName'],
    properties: {
      firstName: {
        type: 'string',
        title: 'First name',
      },
      lastName: {
        type: 'string',
        title: 'Last name',
      },
      age: {
        type: 'integer',
        title: 'Age',
      },
      bio: {
        type: 'string',
        title: 'Bio',
      },
      password: {
        type: 'string',
        title: 'Password',
        minLength: 3,
      },
      telephone: {
        type: 'string',
        title: 'Telephone',
        minLength: 10,
      },
    },
  }*/,
  uiSchema,
  formData,
};

export default simple;
