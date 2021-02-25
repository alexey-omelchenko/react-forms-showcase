/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Form, Field } from 'react-final-form';
import Condition from '../components/Condition';
import ReactSelectAdapter from '../components/ReactSelectorAdapter';
import { categoryOptions, typeOptions } from '../../data';
// import { OnChange } from 'react-final-form-listeners';
// import WhenFieldChanges from '../components/WhenFieldChanges';

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

  const onSubmit = (values: FormValues) => {
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
                <label htmlFor="has-categorisation">Do you want to see categorisation? </label>
                <Field
                  type="checkbox"
                  id="hasCategorisation"
                  name="hasCategorisation"
                  component="input"
                />
              </div>
              <Condition when="hasCategorisation" is={true}>
                <>
                  <div style={{ position: 'relative' }}>
                    <label htmlFor="category">Category: </label>
                    <Field
                      id="category"
                      name="category"
                      component={ReactSelectAdapter}
                      options={categoryOptions}
                    />
                  </div>
                  <div>
                    <label htmlFor="type">Type: </label>
                    <Field
                      id="type"
                      name="type"
                      component={ReactSelectAdapter}
                      options={typeOptions.filter((option) => option.category === values.category)}
                    />
                  </div>
                </>
              </Condition>

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

export default FormikBasic;
