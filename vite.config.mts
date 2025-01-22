import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    globals: true,
    coverage: {
      all: false,
    },
    workspace: [
      {
        extends: true,
        test: {
          include: ['use-cases/**/*.{test,spec}.ts'],
          name: 'unit',
          environment: 'node',
        },
      },
      {
        extends: true,
        test: {
          include: ['http/**/*.{test,spec}.ts'],
          name: 'e2e',
          environment: 'prisma',
        },
      },
    ],
    dir: 'src',
  },
})
