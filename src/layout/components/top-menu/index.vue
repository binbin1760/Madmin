<template>
  <div class="top-menu">
    <div
      class="item"
      v-for="(item, index) in dir"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useMenuList } from '@/store/modules/menu'
  const { dir } = storeToRefs(useMenuList())
</script>

<style scoped lang="scss">
  .top-menu {
    display: flex;
    align-items: center;
    background: var(--el-color-primary);
    padding: 0 var(--main-p);
    .item {
      padding: 4px;

      color: white;
      cursor: default;
    }
    .item:hover {
      background: #2a598a;
    }
  }
</style>
