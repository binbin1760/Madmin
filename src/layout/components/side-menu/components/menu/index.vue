<template>
  <template
    v-for="item in routes"
    :key="item.path"
  >
    <el-sub-menu
      :index="item.path"
      v-if="item.children"
    >
      <template #title>
        {{ item.meta.name }}
      </template>
      <recursion-menu :routes="item.children" />
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="item.path"
    >
      <template #title>
        {{ item.meta.name }}
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
  import { PropType } from 'vue'
  import { RouterType } from '@/store/modules/menu'
  export default defineComponent({
    name: 'recursion-menu',
    props: {
      routes: {
        type: Array as PropType<Array<RouterType>>
      }
    },
    setup(props) {
      const { routes } = toRefs(props)
      return {
        routes
      }
    }
  })
</script>

<style scoped lang="scss"></style>
