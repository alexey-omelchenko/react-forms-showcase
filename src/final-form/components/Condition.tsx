import React from 'react';
import { Field } from 'react-final-form';

export const Condition = ({ when, is, children }: any) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

export default Condition;
