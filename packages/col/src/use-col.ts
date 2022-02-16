import { computed } from 'vue'
import { ColProps } from './col'

export default function useCol(props: ColProps) {
  const colClass = computed(() => {
    const ret = []
    const _props = ['span', 'offset'] as const
    _props.forEach((prop) => {
      const size = props[prop]
      if (typeof size === 'number' && size > 0) {
        ret.push(`u-col-${prop}-${size}`)
      }
    })
    return ['u-col', ...ret]
  })

  return {
    colClass
  }
}
