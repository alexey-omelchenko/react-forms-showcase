/* eslint-disable jsx-a11y/label-has-associated-control */
import { watch } from 'fs';
import React, { useState } from 'react';

export const NativeForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
  };

  const [formState, setFormState] = useState(initialValues);
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(JSON.stringify(formState, null, 2));
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" id="firstName" name="firstName" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" id="lastName" name="lastName" onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>
      <div className="form-state">
        <code>
          <pre>{JSON.stringify(formState, null, 2)}</pre>
        </code>
      </div>
    </div>
  );
};

export default NativeForm;
