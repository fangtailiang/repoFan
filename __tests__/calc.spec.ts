import { Validators, RegExps } from '../src/index'

test('The calculation result should be 996.', () => {
  expect(Validators.validatorFun(RegExps.password, 'fgdsfg445')).toBe(false)
  expect(Validators.validatorNull('    ')).toBe(true)
})
