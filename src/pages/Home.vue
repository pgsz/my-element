<template>
  <div class="home">
    <h3
      v-for="(item, index) in pageList"
      :key="index"
      @click="goToView(item)"
    >
      {{ index + 1 }}：{{ item.name }}
    </h3>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

interface peopleObj {
  name: string
  to: string
}

const pageList: peopleObj[] = [
  { name: 'layout布局', to: 'ViewContainer' },
  { name: 'button按钮', to: 'ViewButton' },
]

const router = useRouter()
function goToView(item: peopleObj) {
  router.push({
    name: item.to,
  })
}
</script>
<style lang="scss" scoped>
.home {
  > h3 {
    margin-bottom: 8px;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
