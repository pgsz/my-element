<template>
  <section :class="['pg-container', { 'is-vertical': isVertical }]">
    <slot />
  </section>
</template>

<!-- 两个 script 标签：确保每个组件有自己的名字， script setup 中没发返回组件的名称 -->
<script lang="ts">
export default {
  name: 'PgContainer',
}
</script>
<script setup lang="ts">
import { useSlots, computed, VNode, Component } from 'vue'

interface Props {
  direction?: string
}

const props = defineProps<Props>()

const slots = useSlots()

// 手动指定 direction 和 子元素中有 pg-header 或 pg-footer 的时候是垂直布局
const isVertical = computed(() => {
  if (slots && slots.default) {
    return slots.default().some((vn: VNode) => {
      const tag = (vn.type as Component).name
      return tag === 'PgHeader' || tag === "PgFooter"
    })
  } else {
    if (props.direction === 'vertical') {
      return true
    } else {
      return false
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/style/mixin';
@include b(container) {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  @include when(vertical) {
    flex-direction: column;
  }
}
</style>
