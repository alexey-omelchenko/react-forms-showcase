import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { jsxDecorator } from 'storybook-addon-jsx';

import UncontrolledForm from './ReactFormUncontrolled';

export default {
  title: 'React Forms/1.Basic',
  decorators: [jsxDecorator],
  component: UncontrolledForm,
} as Meta;

const Template: Story<any> = (args) => <UncontrolledForm {...args} />;

export const ReactFormUncontrolled = Template.bind({});
