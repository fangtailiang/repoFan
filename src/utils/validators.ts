/**
 * @desc [自定义校验规则]
 */
/**
 * @param value
 * @param regExp
 */
export const validatorFun = (regExp: RegExp, value: string): boolean => {
  return regExp.test(value)
}

/**
 * 判断是否为空
 */

export const validatorNull = (val: any): boolean => {
  if (typeof val === 'boolean') {
    return false
  }
  if (typeof val === 'number') {
    return false
  }
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    if (
      val === 'null' ||
      val === null ||
      val === 'undefined' ||
      val === undefined ||
      val === ''
    )
      return true
    return false
  }
  return false
}
