<template>
  <button :class="buttonClass" @click="onClick">
    <i :class="icon"></i>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import useButton from './use-button'

type IButtonType = 'primary' | 'warning' | 'danger' | 'info' | 'success' | 'default'

export default defineComponent({
  name: 'UButton',
  props: {
    type: {
      type: String as PropType<IButtonType>,
      default: 'primary',
      validator: (type: string) => {
        return ['primary', 'warning', 'danger', 'info', 'success', 'default'].includes(
          type
        )
      }
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    round: Boolean
  },
  emits: ['click'],
  setup(props, ctx) {
    return {
      ...useButton(props, ctx)
    }
  }
})
</script>
