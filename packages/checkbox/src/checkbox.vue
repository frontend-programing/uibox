<template>
  <div class="u-checkbox">
    <span class="u-checkbox__input">
      <input type="checkbox" v-model="model" />
    </span>
    <span class="u-checkbox__label">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useCheckbox from './use-checkbox'

const Checkbox = defineComponent({
  name: 'UCheckbox',
  props: {
    name: String,
    indeterminate: Boolean,
    checked: Boolean,
    disabled: Boolean,
    label: [Boolean, Number, String],
    modelValue: [Boolean, Number, String]
  },
  emits: ['update:modelValue'],
  setup(props) {
    return {
      ...useCheckbox(props)
    }
  }
})

export default Checkbox
</script>
