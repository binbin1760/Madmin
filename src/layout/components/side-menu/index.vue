<template>
  <div class="menu">
    <div
      class="collspe-menu"
      @click="collapse = !collapse"
    >
      开关
    </div>
    <el-menu
      class="el-menu"
      mode="vertical"
      :collapse="collapse"
    >
      <Menu :routes="sideMenu" />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
  import { useMenuList } from '@/store/modules/menu'
  import { Menu } from './components'
  const collapse = ref<boolean>(false)
  const { sideMenu } = storeToRefs(useMenuList())
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
