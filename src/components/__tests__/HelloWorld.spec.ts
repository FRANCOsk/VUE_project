import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MetricCard from '../MetricCard.vue'

describe('MetricCard', () => {
  it('renders the metric value and supporting detail', () => {
    const wrapper = mount(MetricCard, {
      props: {
        label: 'Active projects',
        value: '4',
        detail: 'across multiple enterprise domains',
        tone: 'green'
      }
    })

    expect(wrapper.text()).toContain('Active projects')
    expect(wrapper.text()).toContain('4')
    expect(wrapper.text()).toContain('enterprise domains')
    expect(wrapper.attributes('data-tone')).toBe('green')
  })
})
