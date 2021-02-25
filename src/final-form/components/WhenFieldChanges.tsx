import React from 'react';
import { Field, FormSpy } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';

const WhenFieldChanges = ({ field, becomes, set, to }: any) => (
  <Field name={set} subscription={{}}>
    {(
      // No subscription. We only use Field to get to the change function
      { input: { onChange } }
    ) => (
      <FormSpy subscription={{}}>
        {() => (
          <OnChange name={field}>
            {(value: any) => {
              if (value === becomes) {
                onChange(to);
              }
            }}
          </OnChange>
        )}
      </FormSpy>
    )}
  </Field>
);

export default WhenFieldChanges;
