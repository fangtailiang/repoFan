/**
 * @desc [自定义校验规则]
 */
/**
 * 校验中文、英文、数字包括下划线
 * @param value
 * @param callback
 */
export function validatorName(value: string): boolean {
  const str = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/
  return str.test(value)
}

/**
 * 校验 请输入英文、数字包括下划线
 * 名称校验
 */
export function validatorUpperName(value: string): boolean {
  const str = /^[A-Z_]+$/
  return str.test(value)
}
