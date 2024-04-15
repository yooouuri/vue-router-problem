import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

// preserve this to test loading __filename & __dirname in ESM as Vite polyfills them.
// if Vite incorrectly load this file, node.js would error out.
globalThis.__vite_test_filename = __filename
globalThis.__vite_test_dirname = __dirname

export default defineConfig(({ command, ssrBuild, isSsrBuild }) => ({
  plugins: [
    vuePlugin(),
  ],
  build: {
    minify: false,
  },
}))
