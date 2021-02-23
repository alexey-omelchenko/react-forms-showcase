/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field, FormikErrors, ErrorMessage } from 'formik';

type FormValues = {
  firstName: string;
  lastName: string;
};
const FormikValidationExample = () => {
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
  };

  const handleSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.firstName) {
      errors.firstName = 'Required';
    }

    return errors;
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
        {(values) => (
          <>
            <Form>
              <div>
                <label htmlFor="firstName">First Name: </label>
                <Field type="text" id="firstName" name="firstName" />
                <ErrorMessage name="firstName" />
              </div>
              <div>
                <label htmlFor="lastName">Last Name: </label>
                <Field type="text" id="lastName" name="lastName" />
                <ErrorMessage name="lastName" />
              </div>

              <button type="submit">Submit</button>
            </Form>
            <div className="form-state">
              <code>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </code>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormikValidationExample;
