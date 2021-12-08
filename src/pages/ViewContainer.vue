<template>
  <pg-container>
    <pg-header>Header</pg-header>
    <pg-main>Main</pg-main>
    <pg-footer>Footer</pg-footer>
  </pg-container>

  <hr>

  <pg-container>
    <pg-header>Header</pg-header>
    <pg-container>
      <pg-aside width="200px">
        Aside
      </pg-aside>
      <pg-main>Main</pg-main>
    </pg-container>
  </pg-container>

  <hr>

  <pg-container>
    <pg-aside width="200px">
      Aside
    </pg-aside>
    <pg-container>
      <pg-header>Header</pg-header>
      <pg-main>Main</pg-main>
      <pg-footer>Footer</pg-footer>
    </pg-container>
  </pg-container>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
hr {
  margin: 16px 0;
}
.pg-header,
.pg-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.pg-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.pg-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.pg-container:nth-child(5) .pg-aside,
.pg-container:nth-child(6) .pg-aside {
  line-height: 260px;
}

.pg-container:nth-child(7) .pg-aside {
  line-height: 320px;
}
</style>
