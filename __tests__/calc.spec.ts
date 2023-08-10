import { Validators, RegExps } from '../src/index'

test('The calculation result should be utils.', () => {
  expect(Validators.validatorFun(RegExps.password, 'fgdsfg445')).toBe(true)
  expect(Validators.validatorNull('    ')).toBe(true)
})
