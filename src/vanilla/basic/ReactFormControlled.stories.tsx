import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { jsxDecorator } from 'storybook-addon-jsx';

import ReactForm from './ReactFormControlled';

export default {
  title: 'React Forms/1.Basic',
  decorators: [jsxDecorator],
  component: ReactForm,
} as Meta;

const Template: Story<any> = (args) => <ReactForm {...args} />;

export const ReactFormControlled = Template.bind({});
