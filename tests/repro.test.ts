// @vitest-environment nuxt
import { expect, test } from 'vitest'
import { setup } from '@nuxt/test-utils/e2e'

await setup() // <- test passes if commented out

test('my test', async () => {
  expect(2 + 2).toBe(4)
})
