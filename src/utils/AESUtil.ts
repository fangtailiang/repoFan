import * as CryptoJS from 'crypto-js'

/**
 * 解密 指定key
 * @DateTime 2023-03-09
 */
export const decryption = (strs: any, aesKey: string): any => {
  // 返回的是一个解密后的对象
  const decrypted = CryptoJS.AES.decrypt(
    strs,
    CryptoJS.enc.Utf8.parse(aesKey),
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }
  )
  // 将解密对象转换成 UTF8 的字符串
  let resultDecrypted = decrypted.toString(CryptoJS.enc.Utf8)
  if (
    (resultDecrypted.includes('{') && resultDecrypted.includes('}')) ||
    (resultDecrypted.includes('[') && resultDecrypted.includes(']'))
  ) {
    resultDecrypted = JSON.parse(resultDecrypted)
  }
  return resultDecrypted
}

/**
 * 加密处理
 * @DateTime 2023-03-09
 */
export const encryption = (data: any, aesKey: string): any => {
  const resultData = JSON.stringify(data)
  const result = {
    encData: ''
  }
  const key: string = aesKey
  const key1 = CryptoJS.enc.Utf8.parse(key)

  // 加密
  const encrypted = CryptoJS.AES.encrypt(resultData, key1, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  result.encData = encrypted.toString()
  return result
}
