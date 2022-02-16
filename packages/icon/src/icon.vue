<template>
  <i :class="`u-icon-${name}`"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
