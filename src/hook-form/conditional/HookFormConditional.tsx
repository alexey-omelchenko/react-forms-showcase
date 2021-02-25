import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Select from 'react-select';
import { categoryOptions, typeOptions } from '../../data';

type FormValues = {
  hasCategorisation: boolean;
  category: string;
  type: string;
};

export function SimpleSelect({ options, value, name, setValue, ...rest }) {
  return (
    <Select
      options={options}
      getOptionValue={(option) => option.value}
      {...rest}
      value={options.find((option) => option.value === value)}
      onChange={(selected) => setValue(name, selected ? selected.value : '')}
    />
  );
}

export default function App() {
  const { watch, register, handleSubmit, control, setValue } = useForm<FormValues>();
  const { hasCategorisation, category } = watch();

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="hasCategorisation">Do you want to see categorisation? </label>
        <input type="checkbox" id="hasCategorisation" name="hasCategorisation" ref={register} />
      </div>

      {hasCategorisation && (
        <>
          <Controller
            as={SimpleSelect}
            name="category"
            options={categoryOptions}
            control={control}
            setValue={setValue}
          />

          <Controller
            as={SimpleSelect}
            name="type"
            options={typeOptions.filter((option) => option.category === category)}
            control={control}
            setValue={setValue}
          />
        </>
      )}

      <input type="submit" />
    </form>
  );
}
