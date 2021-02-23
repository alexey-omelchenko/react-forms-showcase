/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { jsxDecorator } from 'storybook-addon-jsx';

import FinalFormValidation from './FinalFormValidation';

export default {
  title: 'React Forms/2. Validation',
  parameters: {
    jsx: { skip: 1 },
  },
  decorators: [jsxDecorator],
  component: FinalFormValidation,
} as Meta;

const Template: Story<any> = (args) => <FinalFormValidation {...args} />;

export const FinalForm = Template.bind({});
