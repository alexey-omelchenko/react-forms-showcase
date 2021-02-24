import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { jsxDecorator } from 'storybook-addon-jsx';

import FinalFormBasic from './FinalFormWizard';

export default {
  title: 'React Forms/6.Wizard',
  decorators: [jsxDecorator],
  component: FinalFormBasic,
} as Meta;

const Template: Story<any> = (args) => <FinalFormBasic {...args} />;

export const FinalForm = Template.bind({});
