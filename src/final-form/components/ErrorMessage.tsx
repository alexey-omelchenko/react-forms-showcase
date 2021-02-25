import React from 'react';
import { Field } from 'react-final-form';

export const ErrorMessage = ({ name }: any) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) => (error && touched ? <span>{error}</span> : null)}
  </Field>
);

export default ErrorMessage;
