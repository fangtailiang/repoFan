import { Validators, RegExps, AesUtil } from '../src/index'

test('The calculation result should be utils.', () => {
  expect(Validators.validatorFun(RegExps.password, 'fgdsfg445')).toBe(true)
  expect(Validators.validatorNull('    ')).toBe(true)
  expect(
    AesUtil.decryption({
      data: {
        name: 'test',
        age: 20,
        phone: '13700000014'
      },
      key: 'pigxpigxpigxpigx',
      param: ['password']
    })
  )
})
