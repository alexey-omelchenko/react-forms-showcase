import React from 'react';
import { useForm, useController, Control } from 'react-hook-form';
import { IsolateReRender } from '../basic/HookFormBasic';

type FormValues = {
  [key: string]: string;
};

/**
 * Helper component - Controlled Input
 */
const Input = ({ control, name }: { control: Control; name: string }) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
  });

  return <input type="text" {...inputProps} ref={ref} />;
};

/**
 * Helper function to generate multiple fields
 */
const generateFields = (num: number, register: any, control: Control) => {
  const fields = [];

  for (let i = 0; i < num; i += 1) {
    fields.push({
      name: `field${i}`,
      // element: <input type="text" name={`field${i}`} ref={register} />,
      element: <Input name={`field${i}`} control={control} />,
    });
  }

  return fields;
};

const HookFormLarge = () => {
  const onSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  const { register, handleSubmit, control } = useForm();

  const fields = generateFields(200, register, control);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex' }}>{fields.map((field) => field.element)}</div>

        <button type="submit">Submit</button>
      </form>
      <IsolateReRender control={control} />
    </div>
  );
};

export default HookFormLarge;
