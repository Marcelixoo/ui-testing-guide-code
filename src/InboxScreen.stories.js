import React from 'react';

import { rest } from 'msw';

import { findByRole, within } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { expect } from '@storybook/jest';

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

export const PinTask = Template.bind({});
PinTask.parameters = Default.parameters;
PinTask.play = async ({ canvasElement }) => {
  const getTask = (name) => within(canvasElement).findByRole('listitem', { name });

  const itemToPin = await getTask('Export logo');
  const pinButton = await findByRole(itemToPin, 'button', { name: 'pin' });

  userEvent.click(pinButton);

  const unpinButton = within(itemToPin).getByRole('button', { name: 'unpin' });
  expect(unpinButton).toBeInTheDocument();
}

export const ArchiveTask = Template.bind({});
ArchiveTask.parameters = Default.parameters;
ArchiveTask.play = async ({ canvasElement }) => {
  const getTask = (name) => within(canvasElement).findByRole('listitem', { name });

  const itemToArchive = await getTask('QA dropdown');
  const archiveCheckbox = await findByRole(itemToArchive, 'checkbox');

  userEvent.click(archiveCheckbox);

  expect(archiveCheckbox.checked).toBeTruthy();
}

export const EditTask = Template.bind({});
EditTask.parameters = Default.parameters;
EditTask.play = async ({ canvasElement }) => {
  const getTask = (name) => within(canvasElement).findByRole('listitem', { name });

  const itemToEdit = await getTask('Fix bug in input error state');
  const taskInputField = await findByRole(itemToEdit, 'textbox');

  userEvent.type(taskInputField, ' and disabled state');

  expect(taskInputField.value)
    .toBe('Fix bug in input error state and disabled state');
}
