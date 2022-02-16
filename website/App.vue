<template>
  <div class="website">
    <div class="icon-wrapper">
      <u-icon name="test1"></u-icon>
    </div>
    <div class="button-wrapper">
      <u-button type="primary" @click="onClick">primary</u-button>
      <u-button type="info" icon="u-icon-test1">info</u-button>
      <u-button type="warning" round>warning</u-button>
      <u-button type="danger" disabled>danger</u-button>
      <u-button-group>
        <u-button type="primary">上一页</u-button>
        <u-button type="primary">下一页</u-button>
      </u-button-group>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

const useApp = function () {
  function onClick() {
    console.log('outer-click')
  }

  return {
    onClick
  }
}

export default defineComponent({
  setup() {
    return {
      ...useApp()
    }
  }
})
</script>

<style lang="scss" scoped>
.website [class*='wrapper'] {
  margin-top: 20px;
}
</style>
