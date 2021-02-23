/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field } from 'formik';

const FormikBasicExample = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
  };


  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(values) => (
          <>
            <Form>
              <div>
                <label htmlFor="firstName">First Name: </label>
                <Field type="text" id="firstName" name="firstName" />
              </div>
              <div>
                <label htmlFor="lastName">Last Name: </label>
                <Field type="text" id="lastName" name="lastName" />
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

export default FormikBasicExample;
