/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import { IsolateReRender } from '../basic/HookFormBasic';

type FormValues = {
  firstName: string;
  lastName: string;
};

const HookFormValidation = () => {
  const onSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  const { register, handleSubmit, errors, control } = useForm({ mode: 'onBlur' });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" id="firstName" name="firstName" ref={register({ required: true })} />
          {errors.firstName && 'Required'}
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" id="lastName" name="lastName" ref={register} />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div>
        <b>Values: </b>
        <IsolateReRender control={control} />
      </div>

      <div>
        <b>Errors</b>
        {!!errors && (
          <div className="form-state">
            {Object.entries(errors).map((e) => (
              <div>
                name: {e[0]}, type: {e[1].type}, message: {e[1].message}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HookFormValidation;
