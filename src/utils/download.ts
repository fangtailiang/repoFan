import { useBrowser } from './util'
/**
 * downLoadByBlob
 */

export const downLoadByUrl = (url: any, filename: string): void => {
  if (!url) throw new Error('当前没有下载链接')
  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = url
  a.download = filename

  a.rel = 'noopener noreferrer'

  if (useBrowser().browser === 'firefox') {
    a.target = '_blank'
  }

  document.body.append(a)
  a.click()

  setTimeout(() => {
    a.remove()
  }, 1000)
}

export const downLoadByBlob = (blob: any, name: string): void => {
  // 生成访问 blob 的 URL
  const url = URL.createObjectURL(blob)

  // 调用刚刚封装的 a 标签下载方法
  downLoadByUrl(url, name)

  // 删除映射，释放内存
  URL.revokeObjectURL(url)
}

export const downLoadByBase64 = (blob: any, name: string): void => {
  // 声明一个 fileReader
  const fileReader = new FileReader()

  // 将 blob 读取成 base64
  fileReader.readAsDataURL(blob)

  // 读取成功后 下载资源
  fileReader.onload = function () {
    downLoadByUrl(fileReader.result, name)
  }
}
