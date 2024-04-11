import { defineConfig, loadEnv } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import createVitePlugins from './viteplugins/index'
import { fileURLToPath } from 'url'
// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const {
    VITE_APP_ENV,
    VITE_APP_BASE_API,
    VITE_APP_SERVER_PORT,
    VITE_APP_PROXY_TARGET
  } = env
  const pluginList = createVitePlugins(env, command === 'build')

  return {
    base: VITE_APP_ENV === 'production' ? '/' : '/',
    plugins: [
      ...pluginList,
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue', 'vue-router'],
        dts: 'src/dts/auto-import.d.ts',
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        eslintrc: {
          enabled: true
        }
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        deep: true,
        dirs: ['src/components'],
        dts: 'src/dts/components.d.ts'
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    // vite 相关配置
    server: {
      port: VITE_APP_SERVER_PORT as unknown as any,
      host: true,
      open: false,
      proxy: {
        '/api': {
          target: VITE_APP_PROXY_TARGET,
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api/, '')
        }
      }
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    }
  }
})
