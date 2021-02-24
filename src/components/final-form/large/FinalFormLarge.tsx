import React from 'react';
import { Form, Field } from 'react-final-form';

import RenderCount from '../../RenderCount/RenderCount';

/**
 * TODO
 * in this example show how does subscription works
 *
 */

type FormValues = {
  [key: string]: string;
};

// custom component
const TextFieldWithCount = ({ name }: any) => (
  <Field name={name}>
    {({ input }) => (
      <div style={{ position: 'relative' }}>
        <input {...input} />
        <RenderCount />
      </div>
    )}
  </Field>
);

const generateFields = (num: number) => {
  const fields = [];

  for (let i = 0; i < num; i += 1) {
    fields.push({
      name: `field${i}`,
      element: <TextFieldWithCount name={`field${i}`} />,
    });
  }

  return fields;
};

const FinalFormLarge = () => {
  const fields = generateFields(200);

  const initialValues: FormValues = {};
  fields.forEach((field) => {
    initialValues[field.name] = '';
  });

  const onSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        // subscription={{ submitting: true, pristine: true, values: true }}
        subscription={{ submitting: true, pristine: true }}
        render={({ values, handleSubmit }) => (
          <>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex' }}>{fields.map((field) => field.element)}</div>

              <button type="submit">Submit</button>
            </form>
            <div className="form-state">
              --
              <code>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </code>
              --
            </div>
          </>
        )}
      />
    </div>
  );
};

export default FinalFormLarge;
