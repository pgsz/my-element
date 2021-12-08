<template>
  <aside
    class="pg-aside"
    :style="{ width }"
  >
    <slot />
  </aside>
</template>

<script lang="ts">
export default {
  name: 'PgAside',
}
</script>
<script setup lang="ts">
import { withDefaults } from 'vue'
interface Props {
  width?: string
}

withDefaults(defineProps<Props>(), {
  width: '300px',
})
</script>

<style lang="scss" scoped>
@import '@/style/mixin';
@include b(aside) {
  overflow: auto;
  flex-shrink: 0;
}
</style>
