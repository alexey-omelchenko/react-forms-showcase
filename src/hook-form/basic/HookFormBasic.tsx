import React from 'react';
import { useForm, useWatch, Control } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
};

/**
 *
 * Helper component that prints state of the form
 *
 */
export const IsolateReRender = ({ control }: { control: Control }) => {
  const form = useWatch({ control });

  return (
    <div>
      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </div>
  );
};

const HookFormBasic = () => {
  const onSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
  };
  const { register, handleSubmit, control } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" id="firstName" name="firstName" ref={register} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" id="lastName" name="lastName" ref={register} />
        </div>

        <button type="submit">Submit</button>
      </form>
      <IsolateReRender control={control} />
    </div>
  );
};

export default HookFormBasic;
