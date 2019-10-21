// remove this once https://github.com/rjsf-team/react-jsonschema-form/issues/1405 is resolved
import React from 'react';
import { ThemeProps } from 'react-jsonschema-form';
import { RjsfFormProps } from '../Form';
import Form from 'react-jsonschema-form';

interface ThemePropsWithChildren<T> extends ThemeProps<T> {
  children?: any;
}

function withTheme(
  themeProps: ThemePropsWithChildren<any>,
): React.ForwardRefExoticComponent<React.PropsWithoutRef<RjsfFormProps> & React.RefAttributes<Form<any>>> {
  const sss = React.forwardRef(({ fields, widgets, ...directProps }: RjsfFormProps, ref: React.Ref<Form<any>>) => (
    <Form
      {...themeProps}
      {...directProps}
      fields={{ ...themeProps.fields, ...fields }}
      widgets={{ ...themeProps.widgets, ...widgets }}
      ref={ref}
    />
  ));
  sss.displayName = 'withTheme_ref';
  return sss;
}

withTheme.displayName = 'withTheme';

export default withTheme;
