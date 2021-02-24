import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { jsxDecorator } from 'storybook-addon-jsx';

import FormikValidation from './FormikValidation';

export default {
  title: 'React Forms/2.Validation',
  decorators: [jsxDecorator],
  component: FormikValidation,
} as Meta;

const Template: Story<any> = (args) => <FormikValidation {...args} />;

export const Formik = Template.bind({});
