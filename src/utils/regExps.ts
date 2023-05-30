/**
 * RegExp :Chinese、English、Number、underline
 */
export const chineseUnderline: RegExp = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/

/**
 * RegExp: English、Number、underline
 */
export const englishUnderline: RegExp = /^[A-Z_]+$/

/**
 * RegExp: Number、CapEnglish、LowEnglish、Underlin
 */
export const caporLowEnglish: RegExp = /^[0-9a-zA-Z_]{1,}$/

/**
 * RegExp:number >0
 */
export const positvNumber: RegExp = /^[1-9][0-9]{0,}$/

/**
 * RegExp:phone
 */
export const phone: RegExp = /^1[0-9]{10}$/

/**
 * RegExp:website
 */
export const website: RegExp = /^http[s]?:\/\/.*/

/**
 * RegExp:email
 */
export const email: RegExp =
  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/

/**
 * RegExp:LowEnglish
 */
export const minuscule: RegExp = /^[a-z]+$/

/**
 * RegExp: integer
 */
export const integer: RegExp = /[^\d]/g

/**
 * RegExp :space
 */
export const space: RegExp = /[^\s]+$/

/**
 * RegExp: decimals
 * eg:77.22
 */
export const decimals: RegExp =
  /^0\.([1-9]|\d[1-9])$|^[1-9]\d{0,8}\.\d{0,2}$|^[1-9]\d{0,8}$/

/**
 * RegExp: password
 * eg：
 */
export const password: RegExp = /^[a-zA-Z]\w{5,17}$/

/**
 * RegExp: date
 * eg:XXXX-XX-XX
 */
export const dateString: RegExp = /^\d{4}-\d{1,2}-\d{1,2}/

// /**
//  * RegExp: data+times
//  */
// export const dateAndTime: RegExp =
