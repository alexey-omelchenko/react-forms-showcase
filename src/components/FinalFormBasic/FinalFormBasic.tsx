/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Field } from 'react-final-form';

const FormikBasicExample = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
  };


  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ values, handleSubmit }) => (
          <>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name: </label>
                <Field type="text" id="firstName" name="firstName" component="input" />
              </div>
              <div>
                <label htmlFor="lastName">Last Name: </label>
                <Field type="text" id="lastName" name="lastName" component="input" />
              </div>

              <button type="submit">Submit</button>
            </form>
            <div className="form-state">
              <code>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </code>
            </div>
          </>

        )}
      />
    </div>
  );
};

export default FormikBasicExample;
