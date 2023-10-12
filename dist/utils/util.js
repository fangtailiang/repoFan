export const serialize = (data) => {
    const list = [];
    Object.keys(data).forEach((ele) => {
        list.push(`${String(ele)}=${String(data[ele])}`);
    });
    return list.join('&');
};
export const getObjType = (obj) => {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    if (obj instanceof Element) {
        return 'element';
    }
    return map[toString.call(obj)];
};
export const deepClone = (data) => {
    const type = getObjType(data);
    let obj;
    if (type === 'array') {
        obj = [];
    }
    else if (type === 'object') {
        obj = {};
    }
    else {
        return data;
    }
    if (type === 'array') {
        for (let i = 0, len = data.length; i < len; i++) {
            obj.push(deepClone(data[i]));
        }
    }
    else if (type === 'object') {
        for (const key in data) {
            obj[key] = deepClone(data[key]);
        }
    }
    return obj;
};
export const diff = (obj1, obj2) => {
    delete obj1.close;
    const o1 = obj1 instanceof Object;
    const o2 = obj2 instanceof Object;
    if (!o1 || !o2) {
        return obj1 === obj2;
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const attr in obj1) {
        const t1 = obj1[attr] instanceof Object;
        const t2 = obj2[attr] instanceof Object;
        if (t1 && t2) {
            return diff(obj1[attr], obj2[attr]);
        }
        else if (obj1[attr] !== obj2[attr]) {
            return false;
        }
    }
    return true;
};
export const setTheme = (name) => {
    document.body.className = name;
};
export const findParent = (menu, id) => {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].children.length !== 0) {
            for (let j = 0; j < menu[i].children.length; j++) {
                if (menu[i].children[j].id === id) {
                    return menu[i];
                }
                else {
                    if (menu[i].children[j].children.length !== 0) {
                        return findParent(menu[i].children[j].children, id);
                    }
                }
            }
        }
    }
};
export const loadStyle = (url) => {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
};
export const isObjectValueEqual = (a, b) => {
    let result = true;
    Object.keys(a).forEach((ele) => {
        const type = typeof a[ele];
        if (type === 'string' && a[ele] !== b[ele])
            result = false;
        else if (type === 'object' &&
            JSON.stringify(a[ele]) !== JSON.stringify(b[ele]))
            result = false;
    });
    return result;
};
export const randomLenNum = (len = 4, date) => {
    let random = '';
    random = Math.ceil(Math.random() * 100000000000000)
        .toString()
        .substr(0, len);
    if (date)
        random = random + String(Date.now());
    return random;
};
export const getQueryString = (url, paraName) => {
    const arrObj = url.split('?');
    if (arrObj.length > 1) {
        const arrPara = arrObj[1].split('&');
        let arr;
        for (let i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split('=');
            if (arr != null && arr[0] === paraName) {
                return arr[1];
            }
        }
        return '';
    }
    else {
        return '';
    }
};
export function toThousands(s, n) {
    n = n > 0 && n <= 20 ? n : 2;
    let prefix = '';
    if ((s + '').includes('-')) {
        prefix = '-';
        s = s.replace('-', '');
    }
    if (parseFloat(s + '') === 0) {
        return '0';
    }
    s = parseFloat((s + '').replace(/[^\d.-]/g, '')).toFixed(n) + '';
    const l = s.split('.')[0].split('').reverse();
    const r = s.split('.')[1];
    let t = '';
    for (let i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 === 0 && i + 1 !== l.length ? ',' : '');
    }
    return prefix + t.split('').reverse().join('') + '.' + r;
}
export const getSearchString = (name) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    const r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
};
export const useBrowser = () => {
    const ua = navigator.userAgent.toLowerCase();
    const re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/;
    const m = ua.match(re);
    const Sys = {
        browser: m[1].replace(/version/, "'safari"),
        version: m[2]
    };
    return Sys;
};
export const getCookies = () => document.cookie
    .split(';')
    .map(item => item.split('='))
    .reduce((acc, [k, v]) => (acc[k.trim().replace('"', '')] = v) && acc, {});
export const clearCookies = () => document.cookie
    .split(';')
    .forEach(c => document.cookie = c.splace(/^+/, '')
    .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`));
export const getUrlParams = (query) => Array.from(new URLSearchParams(query)).reduce((p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v }), {});
//# sourceMappingURL=util.js.map