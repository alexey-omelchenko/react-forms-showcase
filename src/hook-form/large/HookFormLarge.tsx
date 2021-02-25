import React from 'react';
import { useForm, useController, Control, useWatch } from 'react-hook-form';
import RenderCount from '../../components/RenderCount/RenderCount';

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

  return <input type="text" {...inputProps} ref={ref} defaultValue="" />;
};

/**
 * Helper function to generate multiple fields
 */
const generateFields = (num: number, register: any, control: Control) => {
  const fields = [];

  for (let i = 0; i < num; i += 1) {
    fields.push({
      name: `field${i}`,
      element: <input key={i} type="text" name={`field${i}`} ref={register} />,
      // element: <Input key={i} name={`field${i}`} control={control} />,
    });
  }

  return fields;
};

export const IsolateReRender = ({ control }: { control: Control }) => {
  const form = useWatch({ control });

  return (
    <div>
      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
      <RenderCount />
    </div>
  );
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
        <div>
          {fields.map((field) => (
            <div key={field.name} style={{ position: 'relative' }}>
              {field.element}
              <RenderCount />
            </div>
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
      <IsolateReRender control={control} />
    </div >
  );
};

export default HookFormLarge;
