import { FieldProps } from 'formik';
import React from 'react';
// import Select, { OptionsType, ValueType } from 'react-select';
import Select, { ValueType } from 'react-select';
// import { ValuesType } from "react-select/lib/types";

type OptionType = { label: string; value: string };

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends FieldProps {
  options: Option[];
  isMulti?: boolean;
}

const CustomSelect = ({ field, form, options, isMulti = false }: CustomSelectProps) => {
  function onChange(selection: ValueType<OptionType, false>) {
    if (selection && Array.isArray(selection)) {
      form.setFieldValue(
        field.name,
        selection.map((option: Option) => option.value)
      );
    } else {
      form.setFieldValue(field.name, selection.value);
    }
  }

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option: any) => field.value.indexOf(option.value) >= 0)
        : options.find((option: any) => option.value === field.value);
    }
    return isMulti ? [] : ('' as any);
  };

  return (
    <Select
      className="react-select-container"
      classNamePrefix="react-select"
      name={field.name}
      value={getValue()}
      onChange={onChange}
      options={options}
      isMulti={isMulti}
      placeholder=" "
    />
  );
};

export default CustomSelect;
