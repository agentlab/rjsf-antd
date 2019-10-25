// remove this once https://github.com/rjsf-team/react-jsonschema-form/issues/1405 is resolved
import React from 'react';
import { ThemeProps } from 'react-jsonschema-form';
import { RjsfFormProps } from '../Form';
import Form from 'react-jsonschema-form';

interface ThemePropsWithChildren<T> extends ThemeProps<T> {
  children?: T;
}

function withTheme<T>(
  themeProps: ThemePropsWithChildren<T>,
): React.ForwardRefExoticComponent<React.PropsWithoutRef<RjsfFormProps<T>> & React.RefAttributes<Form<T>>> {
  const sss = React.forwardRef(({ fields, widgets, ...directProps }: RjsfFormProps<T>, ref: React.Ref<Form<T>>) => (
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
