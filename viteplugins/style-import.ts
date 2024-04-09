import { createStyleImportPlugin, VxeTableResolve } from 'vite-plugin-style-import'

export default function createStyleImport () {
  return createStyleImportPlugin({
    resolves: [
      VxeTableResolve()
    ]
  })
}