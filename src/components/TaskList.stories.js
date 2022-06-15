import React from 'react';

import { TaskList } from './TaskList';

import TaskStories from './Task.stories';

export default {
  component: TaskList,
  title: 'Components/TaskList',
  argTypes: {
    ...TaskStories.argTypes,
  }
};

const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { id: '1', state: 'TASK_INBOX', title: 'Build a date picker' },
    { id: '2', state: 'TASK_INBOX', title: 'QA dropdown' },
    { id: '3', state: 'TASK_INBOX', title: 'Publish storybook' },
    { id: '4', state: 'TASK_INBOX', title: 'Export logo' },
    { id: '5', state: 'TASK_INBOX', title: 'Fix bug in input error state' },
    { id: '6', state: 'TASK_INBOX', title: 'Draft monthly blog to customers' },
  ]
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', state: 'TASK_PINNED', title: 'Draft monthly blog to customers' },
  ]
};

export const Empty = Template.bind({});
Empty.args = {
  tasks: []
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};