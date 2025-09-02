import type { Meta, StoryObj } from '@storybook/web-components';
import * as HeaderStories from './Header.stories';
import { Page, PageProps } from './Page';

const meta: Meta<PageProps> = {
  title: 'Example/Page',
  render: (args) => Page(args),
};

export default meta;
type Story = StoryObj<PageProps>;

export const LoggedIn: Story = {
  args: {
    // More on composing args: https://storybook.js.org/docs/writing-stories/args#args-composition
    ...HeaderStories.LoggedIn.args,
  },
};

export const LoggedOut: Story = {
  args: {
    ...HeaderStories.LoggedOut.args,
  },
};
