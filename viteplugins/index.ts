import { visualizer } from 'rollup-plugin-visualizer'
import vue from '@vitejs/plugin-vue'
import createSvgIcon from './svg-icon'
import createCompression from './compression'
import createSetupExtend from './setup-extend'
import createStyleImport from './style-import'

export default function createVitePlugins (viteEnv: any, isBuild = false) {
  const vitePlugins = [vue()]
  vitePlugins.push(createSetupExtend())
  vitePlugins.push(createSvgIcon(isBuild))
  vitePlugins.push(createStyleImport())
  isBuild && vitePlugins.push(...createCompression(viteEnv))
  vitePlugins.push(visualizer())
  return vitePlugins
}