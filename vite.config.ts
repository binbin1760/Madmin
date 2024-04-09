import { defineConfig,loadEnv } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import createVitePlugins from './viteplugins/index'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command } ) => { 
  const env = loadEnv(mode, process.cwd())
  const {
    VITE_APP_ENV,
    VITE_APP_BASE_API,
    VITE_APP_SERVER_PORT,
    VITE_APP_PROXY_TARGET
  } = env
  const pluginList =createVitePlugins(env, command === 'build')

  return {
    base:VITE_APP_ENV === 'production' ? '/' : '/',
    plugins: [
      ...pluginList,
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    ],
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        // 设置别名
        '@': path.resolve(__dirname, './src')
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
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
