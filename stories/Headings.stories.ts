import type { Meta, StoryObj } from '@storybook/vue3';

import Title from '../components/atoms/typography/Title.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Atoms/Headings',
  component: Title,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingStory: Story = {
  args: {
    tag: 'h1',
  },
  render: (args) => ({
    components: { Title },
    setup() {
      return { args };
    },
    template: '<Title v-bind="args">Hello</Title>',
  }),
};
