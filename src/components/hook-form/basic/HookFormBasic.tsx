/* eslint-disable jsx-a11y/label-has-associated-control */
import { watch } from 'fs';
import React from 'react';
import { useForm, useWatch } from 'react-hook-form';

const IsolateReRender = ({ control }) => {

  const form = useWatch({ control });

  console.log('form', form);
  return (
    <div>
      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </div>
  );
};

const HookFormBasic = () => {
  const onSubmit = (values) => {
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
