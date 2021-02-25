import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { jsxDecorator } from 'storybook-addon-jsx';

import FormikLarge from './FormikLarge';

export default {
  title: 'React Forms/3.Large Form',
  decorators: [jsxDecorator],
  component: FormikLarge,
} as Meta;

const Template: Story<any> = (args) => <FormikLarge {...args} />;

export const Formik = Template.bind({});
