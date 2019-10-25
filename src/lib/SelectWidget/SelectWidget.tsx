import React from 'react';
import { Select } from 'antd';
import { WidgetProps } from 'react-jsonschema-form';

const SelectWidget: React.FC<WidgetProps> = ({
  id,
  options,
  //multiple,
  disabled,
  readonly,
  value,
  autofocus,
  onChange,
  onBlur,
  onFocus,
}: WidgetProps) => {
  const { enumOptions, enumDisabled } = options;

  //let mode = multiple ? 'multiple' : 'default';
  //mode = options.mode || mode;

  const mode = options.mode ? 'multiple' : 'default';

  const _onChange = (value: any): void => {
    onChange(value);
  };

  const _onBlur = (value: any): void => {
    onBlur(id, value);
  };

  const _onFocus = () => {
    onFocus(id, value);
  };

  return (
    <Select
      mode={mode}
      value={value}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}>
      {(enumOptions as any[]).map(({ value, label }: any, i: number) => {
        const disabled: any = enumDisabled && (enumDisabled as string[]).indexOf(value) !== -1;

        return (
          <Select.Option key={i} value={value} disabled={disabled}>
            {label}
          </Select.Option>
        );
      })}
    </Select>
  );
};

export default SelectWidget;
