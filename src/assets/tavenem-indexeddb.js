const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });
let clearResolve;
let countResolve;
let deleteDatabaseResolve;
let deleteValueResolve;
let getAllResolve;
let getAllStringsResolve;
let getBatchResolve;
let getBatchStringsResolve;
let getValueResolve;
let getValueStringResolve;
let putValueResolve;
let putValuesResolve;
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
export async function clear(databaseInfo) {
    return new Promise((resolve) => {
        clearResolve = resolve;
        worker.postMessage({ type: 'clear', databaseInfo });
    });
}
export async function count(databaseInfo) {
    return new Promise((resolve) => {
        countResolve = resolve;
        worker.postMessage({ type: 'count', databaseInfo });
    });
}
export async function deleteDatabase(name) {
    return new Promise((resolve) => {
        deleteDatabaseResolve = resolve;
        worker.postMessage({ type: 'deleteDatabase', name });
    });
}
export async function deleteValue(databaseInfo, key) {
    return new Promise((resolve) => {
        deleteValueResolve = resolve;
        worker.postMessage({ type: 'deleteValue', databaseInfo, key });
    });
}
export async function getAll(databaseInfo) {
    return new Promise((resolve) => {
        getAllResolve = resolve;
        worker.postMessage({ type: 'getAll', databaseInfo });
    });
}
export async function getAllStrings(databaseInfo) {
    return new Promise((resolve) => {
        getAllStringsResolve = resolve;
        worker.postMessage({ type: 'getAllStrings', databaseInfo });
    });
}
export async function getBatch(databaseInfo, reset) {
    return new Promise((resolve) => {
        getBatchResolve = resolve;
        worker.postMessage({ type: 'getBatch', databaseInfo, reset });
    });
}
export async function getBatchStrings(databaseInfo, reset) {
    return new Promise((resolve) => {
        getBatchStringsResolve = resolve;
        worker.postMessage({ type: 'getBatchStrings', databaseInfo, reset });
    });
}
export async function getValue(databaseInfo, key) {
    return new Promise((resolve) => {
        getValueResolve = resolve;
        worker.postMessage({ type: 'getValue', databaseInfo, key });
    });
}
export async function getValueString(databaseInfo, key) {
    return new Promise((resolve) => {
        getValueStringResolve = resolve;
        worker.postMessage({ type: 'getValueString', databaseInfo, key });
    });
}
export async function putValue(databaseInfo, value) {
    return new Promise((resolve) => {
        putValueResolve = resolve;
        worker.postMessage({ type: 'putValue', databaseInfo, value });
    });
}
export async function putValues(databaseInfo, values) {
    return new Promise((resolve) => {
        putValuesResolve = resolve;
        worker.postMessage({ type: 'putValues', databaseInfo, values });
    });
}
function resolveClear(success) {
    clearResolve(success);
}
function resolveCount(count) {
    countResolve(count);
}
function resolveDeleteDatabase(success) {
    deleteDatabaseResolve(success);
}
function resolveDeleteValue(success) {
    deleteValueResolve(success);
}
function resolveGetAll(items) {
    getAllResolve(items);
}
function resolveGetAllStrings(items) {
    getAllStringsResolve(items);
}
function resolveGetBatch(items) {
    getBatchResolve(items);
}
function resolveGetBatchStrings(items) {
    getBatchStringsResolve(items);
}
function resolveGetValue(value) {
    getValueResolve(value);
}
function resolveGetValueString(value) {
    getValueStringResolve(value);
}
function resolvePutValue(success) {
    putValueResolve(success);
}
function resolvePutValues(success) {
    putValuesResolve(success);
}
//# sourceMappingURL=tavenem-indexeddb.js.map