<template>
  <header
    class="pg-header"
    :style="{ height }"
  >
    <slot />
  </header>
</template>

<script lang="ts">
export default {
  name: 'PgHeader',
}
</script>
<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
  height?: string
}

withDefaults(defineProps<Props>(), {
  height: '60px',
})
</script>

<style lang="scss" scoped>
@import '@/style/mixin';
@include b(header) {
  padding: $--header-padding;
  flex-shrink: 0;
}
</style>
