import React from 'react';

import { Task } from './Task';

export default {
  component: Task,
  title: 'Components/Task',
  argTypes: {
    onArchiveTask: { action: 'onArchiveTask' },
    onTogglePinTask: { action: 'onTogglePinTask' },
    onEditTitle: { action: 'onEditTitle' },
  }
};

const Template = (args) => <ul><Task {...args} /></ul>;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Buy oat milk',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id: '1',
    title: 'QA dropdown',
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    id: '1',
    title: 'Write schema for account menu',
    state: 'TASK_ARCHIVED',
  },
};

const title = `
This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!
`

export const WithLongTitle = Template.bind({});
WithLongTitle.args = {
  task: {
    id: '4',
    title,
    state: 'TASK_INBOX',
  }
}