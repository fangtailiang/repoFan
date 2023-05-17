import { calc, add } from '../src'

test('The calculation result should be 996.', () => {
  expect(calc(1024, 28)).toBe(996)
  expect(add(12, 5)).toBe(17)
})
