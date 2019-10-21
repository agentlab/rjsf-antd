import React from 'react';

import { FieldProps } from 'react-jsonschema-form';

import { Divider, Typography } from 'antd';

const TitleField: React.FC<FieldProps> = ({ title }: FieldProps) => (
  <>
    <Typography>{title}</Typography>
    <Divider />
  </>
);

export default TitleField;
