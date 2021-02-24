/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Field } from 'react-final-form';

// additional helper components
const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) => (error && touched ? <span>{error}</span> : null)}
  </Field>
);

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

// Main component
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
        destroyOnUnregister
        subscription={{ submitting: true, pristine: true }}
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

              <Condition when="firstName" is="bob">
                <div>
                  <label>Where did you study?</label>
                  <Field name="street" component="input" type="text" placeholder="Street Address" />
                  <Error name="street" />
                </div>
              </Condition>

              <Field name={'firstName'} subscription={{ value: true }}>
                {({ input: { value, ...rest1 }, meta }) => {
                  console.log('value', value, rest1, );
                  return (<div>hi</div>);
                }}
              </Field>

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
