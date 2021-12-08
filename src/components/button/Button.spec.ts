import Button from './Button.vue'
// 模拟 Vue 的组件渲染
import { mount } from '@vue/test-utils'

describe('按钮测试', () => {
  it('按钮能够显示文本', () => {
    const content = '测试文本'
    const wrapper = mount(Button, {
      slots: {
        default: content,
      },
    })
    expect(wrapper.text()).toBe(content)
  })

  it('通过size属性控制大小', () => {
    const size = 'small'
    const wrapper = mount(Button, {
      props: {
        size,
      },
    })
    // size内部通过class控制
    expect(wrapper.classes()).toContain(`pg-button--${size}`)
  })

  it('全局设置按钮默认大小', () => {
    const size = 'small'
    const wrapper = mount(Button, {
      global: {
        config: {
          globalProperties: {
            $PGELEMENT: {
              size
            }
          }
        }
      }
    })
    expect(wrapper.classes()).toContain(`pg-button--${size}`)
  })

  it('按钮主题', () => {
    const type = 'success'
    const wrapper = mount(Button, {
      props: {
        type  
      }
    })
    expect(wrapper.classes()).toContain(`pg-button--${type}`)
  })
})
