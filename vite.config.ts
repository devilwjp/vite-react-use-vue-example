import { defineConfig } from 'vite'
import veauryVitePlugins from 'veaury/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    veauryVitePlugins({
      type: 'react'
    })
  ]
})
