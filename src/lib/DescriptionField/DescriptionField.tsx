import React from 'react';
import { FieldProps } from 'react-jsonschema-form';
import { Typography } from 'antd';

const DescriptionField: React.FC<any> = ({ description }: FieldProps) => {
  if (description) {
    return <Typography>{description}</Typography>;
  }

  return null;
};

export default DescriptionField;
