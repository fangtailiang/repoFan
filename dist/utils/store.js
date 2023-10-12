import { validatorNull } from './validators';
import { systemParams } from '../config/envi';
export const setStore = (params = { name: '', type: 'session', content: '' }) => {
    let { name, content, type } = params;
    name = systemParams.key + name;
    const obj = {
        dataType: typeof content,
        content,
        type
    };
    if (type === 'session')
        window.sessionStorage.setItem(name, JSON.stringify(obj));
    else
        window.localStorage.setItem(name, JSON.stringify(obj));
};
export const getStore = (params = { name: '', type: 'session', content: '' }) => {
    let { name, type } = params;
    name = systemParams.key + name;
    let content;
    let obj = type === 'session'
        ? window.sessionStorage.getItem(name)
        : window.localStorage.getItem(name);
    if (validatorNull(obj))
        return;
    try {
        obj = JSON.parse(obj);
    }
    catch (e) {
        return obj;
    }
    if (obj.dataType === 'string') {
        content = obj.content;
    }
    else if (obj.dataType === 'number') {
        content = Number(obj.content);
    }
    else if (obj.dataType === 'boolean') {
        content = JSON.parse(obj.content);
    }
    else if (obj.dataType === 'object') {
        content = obj.content;
    }
    return content;
};
export const removeStore = (params = { name: '', type: 'session', content: '' }) => {
    let { name, type } = params;
    name = systemParams.key + name;
    if (type === 'session') {
        window.sessionStorage.removeItem(name);
    }
    else {
        window.localStorage.removeItem(name);
    }
};
export const getAllStore = (params = { name: '', type: 'session', content: '' }) => {
    const list = [];
    const { type } = params;
    if (type === 'session') {
        for (const i in window.sessionStorage) {
            list.push({
                name: i,
                content: getStore({
                    name: i,
                    type: 'session',
                    content: ''
                })
            });
        }
    }
    else {
        for (const i in window.localStorage) {
            list.push({
                name: i,
                content: getStore({
                    name: i,
                    type: '',
                    content: ''
                })
            });
        }
    }
    return list;
};
export const clearStore = (params = { name: '', type: 'session', content: '' }) => {
    const { type } = params;
    if (type === 'session') {
        window.sessionStorage.clear();
    }
    else {
        window.localStorage.clear();
    }
};
export const clearAllStore = () => {
    window.sessionStorage.clear();
    window.localStorage.clear();
};
//# sourceMappingURL=store.js.map