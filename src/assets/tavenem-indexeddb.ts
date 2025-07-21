const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });

interface DatabaseInfo {
    databaseName: string;
    storeName: string | undefined | null;
    version: number | undefined | null;
    keyPath: string | undefined | null;
    storeNames: string[] | undefined | null;
}

let clearResolve: (success: boolean) => void;
let countResolve: (count: number) => void;
let deleteDatabaseResolve: (success: boolean) => void;
let deleteValueResolve: (success: boolean) => void;
let getAllResolve: (items: any[]) => void;
let getAllStringsResolve: (items: string[]) => void;
let getBatchResolve: (items: any[]) => void;
let getBatchStringsResolve: (items: string[]) => void;
let getValueResolve: (value: any) => void;
let getValueStringResolve: (value: string) => void;
let putValueResolve: (success: boolean) => void;
let putValuesResolve: (success: boolean) => void;

worker.onmessage = (event) => {
    switch (event.data.type) {
        case 'clearResult':
            resolveClear(event.data.success);
            break;
        case 'countResult':
            resolveCount(event.data.count);
            break;
        case 'deleteDatabaseResult':
            resolveDeleteDatabase(event.data.success);
            break;
        case 'deleteValueResult':
            resolveDeleteValue(event.data.success);
            break;
        case 'getAllResult':
            resolveGetAll(event.data.items);
            break;
        case 'getAllStringsResult':
            resolveGetAllStrings(event.data.items);
            break;
        case 'getBatchResult':
            resolveGetBatch(event.data.items);
            break;
        case 'getBatchStringsResult':
            resolveGetBatchStrings(event.data.items);
            break;
        case 'getValueResult':
            resolveGetValue(event.data.value);
            break;
        case 'getValueStringResult':
            resolveGetValueString(event.data.value);
            break;
        case 'putValueResult':
            resolvePutValue(event.data.success);
            break;
        case 'putValuesResult':
            resolvePutValues(event.data.success);
            break;
        default:
            console.error('Unknown message type:', event.data.type);
    }
};

export async function clear(databaseInfo: DatabaseInfo) {
    return new Promise((resolve) => {
        clearResolve = resolve;
        worker.postMessage({ type: 'clear', databaseInfo });
    });
}

export async function count(databaseInfo: DatabaseInfo) {
    return new Promise((resolve) => {
        countResolve = resolve;
        worker.postMessage({ type: 'count', databaseInfo });
    });
}

export async function deleteDatabase(name: string) {
    return new Promise((resolve) => {
        deleteDatabaseResolve = resolve;
        worker.postMessage({ type: 'deleteDatabase', name });
    });
}

export async function deleteValue(databaseInfo: DatabaseInfo, key: IDBValidKey) {
    return new Promise((resolve) => {
        deleteValueResolve = resolve;
        worker.postMessage({ type: 'deleteValue', databaseInfo, key });
    });
}

export async function getAll(databaseInfo: DatabaseInfo) {
    return new Promise((resolve) => {
        getAllResolve = resolve;
        worker.postMessage({ type: 'getAll', databaseInfo });
    });
}

export async function getAllStrings(databaseInfo: DatabaseInfo) {
    return new Promise((resolve) => {
        getAllStringsResolve = resolve;
        worker.postMessage({ type: 'getAllStrings', databaseInfo });
    });
}

export async function getBatch(databaseInfo: DatabaseInfo, reset: boolean) {
    return new Promise((resolve) => {
        getBatchResolve = resolve;
        worker.postMessage({ type: 'getBatch', databaseInfo, reset });
    });
}

export async function getBatchStrings(databaseInfo: DatabaseInfo, reset: boolean) {
    return new Promise((resolve) => {
        getBatchStringsResolve = resolve;
        worker.postMessage({ type: 'getBatchStrings', databaseInfo, reset });
    });
}

export async function getValue(databaseInfo: DatabaseInfo, key: IDBValidKey) {
    return new Promise((resolve) => {
        getValueResolve = resolve;
        worker.postMessage({ type: 'getValue', databaseInfo, key });
    });
}

export async function getValueString(databaseInfo: DatabaseInfo, key: IDBValidKey) {
    return new Promise((resolve) => {
        getValueStringResolve = resolve;
        worker.postMessage({ type: 'getValueString', databaseInfo, key });
    });
}

export async function putValue(databaseInfo: DatabaseInfo, value: string) {
    return new Promise((resolve) => {
        putValueResolve = resolve;
        worker.postMessage({ type: 'putValue', databaseInfo, value });
    });
}

export async function putValues(databaseInfo: DatabaseInfo, values: string[]) {
    return new Promise((resolve) => {
        putValuesResolve = resolve;
        worker.postMessage({ type: 'putValues', databaseInfo, values });
    });
}

function resolveClear(success: boolean) {
    clearResolve(success);
}

function resolveCount(count: number) {
    countResolve(count);
}

function resolveDeleteDatabase(success: boolean) {
    deleteDatabaseResolve(success);
}

function resolveDeleteValue(success: boolean) {
    deleteValueResolve(success);
}

function resolveGetAll(items: any[]) {
    getAllResolve(items);
}

function resolveGetAllStrings(items: string[]) {
    getAllStringsResolve(items);
}

function resolveGetBatch(items: any[]) {
    getBatchResolve(items);
}

function resolveGetBatchStrings(items: string[]) {
    getBatchStringsResolve(items);
}

function resolveGetValue(value: any) {
    getValueResolve(value);
}

function resolveGetValueString(value: string) {
    getValueStringResolve(value);
}

function resolvePutValue(success: boolean) {
    putValueResolve(success);
}

function resolvePutValues(success: boolean) {
    putValuesResolve(success);
}