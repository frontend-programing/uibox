import { defineComponent, h, ResolveProps } from 'vue'
import useCol from './use-col'

const Col = defineComponent({
  name: 'UCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  setup(props, { slots }) {
    const { colClass } = useCol(props)
    return () =>
      h(
        props.tag,
        {
          class: colClass.value
        },
        slots.default?.()
      )
  }
})

export type ColProps = ResolveProps<typeof Col>

export default Col
