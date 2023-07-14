/**
 * localStorage、sessionStorage
 */

import { validatorNull } from './validators'
import { systemParams } from '../config/envi'
/**
 * 存储类型 默认type ==session
 */

interface option {
  name: string
  content: any
  type: string
}

/**
 * saveStorage
 */
export const setStore = (
  params: option = { name: '', type: 'session', content: '' }
): void => {
  let { name, content, type } = params
  name = systemParams.key + name
  const obj = {
    dataType: typeof content,
    content,
    type
  }
  if (type === 'session')
    window.sessionStorage.setItem(name, JSON.stringify(obj))
  else window.localStorage.setItem(name, JSON.stringify(obj))
}
/**
 * getStorage
 */
export const getStore = (
  params: option = { name: '', type: 'session', content: '' }
): any => {
  let { name, type } = params
  name = systemParams.key + name

  let content
  let obj: any =
    type === 'session'
      ? window.sessionStorage.getItem(name)
      : window.localStorage.getItem(name)
  if (validatorNull(obj)) return
  try {
    obj = JSON.parse(obj)
  } catch (e) {
    return obj
  }
  if (obj.dataType === 'string') {
    content = obj.content
  } else if (obj.dataType === 'number') {
    content = Number(obj.content)
  } else if (obj.dataType === 'boolean') {
    content = JSON.parse(obj.content)
  } else if (obj.dataType === 'object') {
    content = obj.content
  }
  return content
}

/**
 *removeStorage
 */
export const removeStore = (
  params: option = { name: '', type: 'session', content: '' }
): void => {
  let { name, type } = params
  name = systemParams.key + name
  if (type === 'session') {
    window.sessionStorage.removeItem(name)
  } else {
    window.localStorage.removeItem(name)
  }
}

/**
 * getAllStorage
 */
export const getAllStore = (
  params: option = { name: '', type: 'session', content: '' }
): any => {
  const list = []
  const { type } = params
  if (type === 'session') {
    for (const i in window.sessionStorage) {
      list.push({
        name: i,
        content: getStore({
          name: i,
          type: 'session',
          content: ''
        })
      })
    }
  } else {
    for (const i in window.localStorage) {
      list.push({
        name: i,
        content: getStore({
          name: i,
          type: '',
          content: ''
        })
      })
    }
  }
  return list
}

/**
 * clearStorage
 */
export const clearStore = (
  params: option = { name: '', type: 'session', content: '' }
): void => {
  const { type } = params
  if (type === 'session') {
    window.sessionStorage.clear()
  } else {
    window.localStorage.clear()
  }
}

/**
 * clearAllStorage
 */
export const clearAllStore = (): void => {
  window.sessionStorage.clear()
  window.localStorage.clear()
}
