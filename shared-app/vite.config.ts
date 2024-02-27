import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import path from 'node:path'
import { name } from "./package.json";

const formattedName = name.match(/[^/]+$/)?.[0] ?? name

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: formattedName,
      formats: ['es', 'umd'],
      fileName: (format) => `${formattedName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-dom': 'ReactDOM'
        },
      },
    }
  },
})
