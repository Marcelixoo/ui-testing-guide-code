import { rest } from 'msw';
import React from 'react';

import { Default as TaskListDefault } from './components/TaskList.stories';

import { InboxScreen } from './InboxScreen';

export default {
  component: InboxScreen,
  title: 'Screens/InboxScreen',
};

const Template = (args) => <InboxScreen {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get('/tasks', (_, res, ctx) => {
        return res(ctx.json(TaskListDefault.args));
      }),
    ],
  }
}

export const Error = Template.bind({});
Error.args = {
  error: 'Ops... something went wrong!'
};
Error.parameters = {
  msw: {
    handlers: [
      rest.get('/tasks', (_, res, ctx) => res(
        ctx.status(500),
        ctx.json({ message: 'Internal server error' })
      )),
    ]
  }
}
