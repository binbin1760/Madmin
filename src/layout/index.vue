<template>
  <div class="common-layout">
    <el-container>
      <side-menu v-model:collapse="isCollapse" />
      <el-container>
        <el-header>
          <div class="header">
            <top-menu />
            <!-- <tag-menu /> -->
            <bread-crumb />
          </div>
        </el-header>
        <el-main>
          <div class="main">2313</div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import { BreadCrumb, TagMenu, TopMenu, SideMenu } from './components'
  import { ref } from 'vue'
  import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'
  const isCollapse = ref<boolean>(true)
  const elSideWidth = ref<string>('180px')
  function collapseMenu() {
    isCollapse.value = !isCollapse.value
  }
</script>

<style scoped lang="scss">
  .common-layout {
    height: 100vh;
    background: #eeeeee;
    position: relative;
    .el-aside {
      height: 100vh;
      background: aqua;
      .collapse-icon {
        position: absolute;
        top: 45%;
        left: v-bind(elSideWidth);
        width: 30px;
        height: 30px;
        border-radius: 9999999px;
        background: red;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .el-header {
      height: auto;
      padding: 0 10px;
      .header {
        height: inherit;
        background: white;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-radius: 8px;
      }
    }
    .el-main {
      padding: 10px;
      .main {
        height: 100%;
        background: white;
        border-radius: 8px;
      }
    }
  }
</style>
