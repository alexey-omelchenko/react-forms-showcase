import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { jsxDecorator } from 'storybook-addon-jsx';

import FinalFormLarge from './FinalFormLarge';

export default {
  title: 'React Forms/4.Large Form',
  decorators: [jsxDecorator],
  component: FinalFormLarge,
} as Meta;

const Template: Story<any> = (args) => <FinalFormLarge {...args} />;

export const FinalForm = Template.bind({});
