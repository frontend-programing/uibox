import { computed } from 'vue'

export default function (props, ctx) {
  const buttonClass = computed(() => [
    'u-button',
    `u-button--${props.type}`,
    {
      'is-disabled': props.disabled,
      'is-round': props.round
    }
  ])

  function onClick(e) {
    ctx.emit('click', e)
  }

  return {
    buttonClass,
    onClick
  }
}
