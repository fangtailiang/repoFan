import { validatorName, validatorUpperName } from '../src/index'

test('The calculation result should be 996.', () => {
  expect(validatorName('测试')).toBe(true)
  expect(validatorUpperName('xsdsf')).toBe(false)
})
