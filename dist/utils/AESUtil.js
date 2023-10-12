import * as CryptoJS from 'crypto-js';
export const decryption = (strs, aesKey) => {
    const decrypted = CryptoJS.AES.decrypt(strs, CryptoJS.enc.Utf8.parse(aesKey), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    let resultDecrypted = decrypted.toString(CryptoJS.enc.Utf8);
    if ((resultDecrypted.includes('{') && resultDecrypted.includes('}')) ||
        (resultDecrypted.includes('[') && resultDecrypted.includes(']'))) {
        resultDecrypted = JSON.parse(resultDecrypted);
    }
    return resultDecrypted;
};
export const encryption = (data, aesKey) => {
    const resultData = JSON.stringify(data);
    const result = {
        encData: ''
    };
    const key = aesKey;
    const key1 = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.AES.encrypt(resultData, key1, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    result.encData = encrypted.toString();
    return result;
};
//# sourceMappingURL=AESUtil.js.map