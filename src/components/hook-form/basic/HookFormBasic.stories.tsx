/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { jsxDecorator } from 'storybook-addon-jsx';

import HookFormBasic from './HookFormBasic';

export default {
  title: 'React Forms/1.Basic',
  parameters: {
    jsx: { skip: 1 },
  },
  decorators: [jsxDecorator],
  component: HookFormBasic,
} as Meta;

const Template: Story<any> = (args) => <HookFormBasic {...args} />;

export const ReactHookForm = Template.bind({});
