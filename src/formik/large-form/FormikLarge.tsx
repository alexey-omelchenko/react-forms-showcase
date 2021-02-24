import React from 'react';
import { Formik, Form, Field, FastField } from 'formik';

import RenderCount from '../../components/RenderCount/RenderCount';

type FormValues = {
  [key: string]: string;
};

const generateFields = (num: number) => {
  const fields = [];

  for (let i = 0; i < num; i += 1) {
    fields.push({
      name: `field${i}`,
      element: <Field type="text" name={`field${i}`} />,
      // element: <FastField type="text" name={`field${i}`} />,
    });
  }

  return fields;
};

const FormikLarge = () => {
  const fields = generateFields(200);

  const initialValues: FormValues = {};
  fields.forEach((field) => {
    initialValues[field.name] = '';
  });

  const handleSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(values) => (
          <>
            <Form>
              {fields.map((field) => (
                <div style={{ position: 'relative' }}>
                  {field.element}
                  <RenderCount />
                </div>
              ))}

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

export default FormikLarge;
