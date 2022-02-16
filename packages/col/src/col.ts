import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'UCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props, { slots }) {
    return () => h(props.tag, {}, slots.default?.())
  }
})
