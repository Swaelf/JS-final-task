import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      'src' : path.resolve(__dirname, './src'),
      'components' : path.resolve(__dirname, './src/components')
    },
  },
  base: "/JS-final-task",
  plugins: [react()],
})
