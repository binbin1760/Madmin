<template>
  <div class="menu">
    <div @click="collapse = !collapse">开关</div>
    <el-menu
      class="el-menu"
      mode="vertical"
      :collapse="collapse"
    >
      <el-menu-item index="0">菜单1</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const collapse = ref<boolean>(false)
</script>

<style scoped lang="scss">
  .menu {
    background: #ffffff;
    height: 100vh;
  }
  .el-menu:not(.el-menu--collapse) {
    width: 200px;
  }
</style>
