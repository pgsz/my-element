<template>
  <footer
    class="pg-footer"
    :style="{ height }"
  >
    <slot />
  </footer>
</template>

<script lang="ts">
export default {
  name: 'PgFooter',
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
@include b(footer) {
  padding: $--footer-padding;
  flex-shrink: 0;
}
</style>
