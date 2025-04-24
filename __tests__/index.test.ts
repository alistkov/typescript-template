import { test, expect } from 'vitest'
import { sum } from '../src/index'

test('sum fumcntion', () => {
  expect(sum(4, 5)).toBe(9)
})