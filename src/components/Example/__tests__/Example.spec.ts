import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Example from '../Example.vue'

describe('ExampleTest', () => {
  it('renders properly', () => {
    const wrapper = mount(Example, {})
    expect(wrapper).toMatchSnapshot()
  })
})
