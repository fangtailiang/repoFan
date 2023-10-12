import { useBrowser } from './util';
export const downLoadByUrl = (url, filename) => {
    if (!url)
        throw new Error('当前没有下载链接');
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    a.rel = 'noopener noreferrer';
    if (useBrowser().browser === 'firefox') {
        a.target = '_blank';
    }
    document.body.append(a);
    a.click();
    setTimeout(() => {
        a.remove();
    }, 1000);
};
const downLoadByBlob = (blob, name) => {
    const url = URL.createObjectURL(blob);
    downLoadByUrl(url, name);
    URL.revokeObjectURL(url);
};
export const downLoadByBase64 = (blob, name) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(blob);
    fileReader.onload = function () {
        downLoadByUrl(fileReader.result, name);
    };
};
//# sourceMappingURL=download.js.map