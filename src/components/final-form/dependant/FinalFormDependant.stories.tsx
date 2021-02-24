/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { jsxDecorator } from 'storybook-addon-jsx';

import FinalFormBasic from './FinalFormDependant';

export default {
  title: 'React Forms/3.Dependent Field',
  parameters: {
    jsx: { skip: 1 },
  },
  decorators: [jsxDecorator],
  component: FinalFormBasic,
} as Meta;

const Template: Story<any> = (args) => <FinalFormBasic {...args} />;

export const FinalForm = Template.bind({});
