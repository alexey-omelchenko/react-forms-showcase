import React, { useState } from 'react';

const ReactForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
  };

  const [formState, setFormState] = useState(initialValues);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(JSON.stringify(formState, null, 2));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

export default ReactForm;
