interface option {
    name: string;
    content: any;
    type: string;
}
export declare const setStore: (params?: option) => void;
export declare const getStore: (params?: option) => any;
export declare const removeStore: (params?: option) => void;
export declare const getAllStore: (params?: option) => any;
export declare const clearStore: (params?: option) => void;
export declare const clearAllStore: () => void;
export {};
