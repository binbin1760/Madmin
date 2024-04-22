<template>
  <div class="common-layout">
    <el-container>
      <side-menu />
      <el-container>
        <el-header>
          <div class="header">
            <top-menu />
            <!-- <tag-menu /> -->
            <bread-crumb />
          </div>
        </el-header>
        <el-main>
          <div class="main"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import { BreadCrumb, TopMenu, SideMenu } from './components'
  import { useMenuList } from '@/store/modules/menu'
  const { initMenuList } = useMenuList()
  initMenuList()
</script>

<style scoped lang="scss">
  .common-layout {
    height: 100vh;
    background: var(--main-bg);
    position: relative;

    .el-header {
      --el-header-padding: 0px;
      height: auto;
      .header {
        height: inherit;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-radius: 8px;
      }
    }
    .el-main {
      padding: var(--main-p);
      .main {
        height: 100%;
        background: white;
        border-radius: 8px;
      }
    }
  }
</style>
