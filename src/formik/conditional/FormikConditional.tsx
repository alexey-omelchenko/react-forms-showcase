import React from 'react';
import { Formik, Form, Field } from 'formik';
import CustomSelect from './FormikSelectField';
import { categoryOptions, typeOptions } from '../../data';

type FormValues = {
  hasCategorisation: boolean;
  category: string;
  type: string;
};
const FormikBasic = () => {
  const initialValues: FormValues = {
    hasCategorisation: false,
    category: '',
    type: '',
  };

  const handleSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <>
            <Form>
              <div>
                <label htmlFor="has-categorisation">Do you want to see categorisation? </label>
                <Field type="checkbox" id="hasCategorisation" name="hasCategorisation" />
              </div>
              {values.hasCategorisation && (
                <>
                  <div>
                    <label htmlFor="category">Category: </label>
                    <Field
                      name="category"
                      id="category"
                      component={CustomSelect}
                      placeholder=" "
                      options={categoryOptions}
                    />
                  </div>
                  <div>
                    <label htmlFor="type">Type: </label>
                    <Field
                      name="type"
                      id="type"
                      component={CustomSelect}
                      placeholder=" "
                      options={typeOptions.filter((t) => t.category === values.category)}
                    />
                  </div>
                </>
              )}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
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

export default FormikBasic;
