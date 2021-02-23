/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Field } from 'react-final-form';

const FinalFormValidationExample = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validate = values => {
    const errors = {}

    if (!values.firstName) {
      errors.firstName = 'Required';
    }

    return errors;
  }

  return (
    <div>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
        render={({ values, handleSubmit, ...rest }) => (
          <>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name: </label>
                <Field name="firstName">
                  {({ input, meta }) => (
                    <>
                      <input {...input} type="text" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
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
            <div className="form-state">
              <code>
                <pre>{JSON.stringify(rest, null, 2)}</pre>
              </code>
            </div>
          </>

        )}
      />
          </div>
        );
};

export default FinalFormValidationExample;
