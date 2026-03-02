/// <reference types='vite/client' />
/// <reference types='vitest' />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-app',
  server: {
    host: true,
    port: 8081,
    allowedHosts: [
        'test-a-testf-drjdsjjoyskk-48453970.ap-northeast-1.elb.amazonaws.com',
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})