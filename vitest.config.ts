import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    include: ['**/*.test.ts', '**/*.spec.ts', '**/test.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
    },
  },
})