import type { Meta, StoryObj } from '@storybook/vue3'
import Example from './Example.vue'

const meta = {
  title: 'Example',
  component: Example,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
