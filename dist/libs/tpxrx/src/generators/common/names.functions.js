"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tpxrxActionNamesArray = exports.tpxrxNamesArray = exports.tpxrxExendedNames = exports.tpxrxPluralNames = exports.tpxrxNames = void 0;
const devkit_1 = require("@nrwl/devkit");
const util_functions_1 = require("./util.functions");
function tpxrxNames(name, actionType) {
    const n = (0, devkit_1.names)(name);
    return Object.assign(Object.assign({}, n), { fileName: n.fileName.replace('/', '-'), actionType });
}
exports.tpxrxNames = tpxrxNames;
function tpxrxPluralNames(name) {
    const names = tpxrxNames(name);
    return Object.assign(Object.assign({}, names), { propertyName: (0, util_functions_1.toPural)(names.propertyName), className: (0, util_functions_1.toArray)(names.className) });
}
exports.tpxrxPluralNames = tpxrxPluralNames;
function tpxrxExendedNames(names, extension) {
    return tpxrxNames(`${names.fileName}-${extension}`);
}
exports.tpxrxExendedNames = tpxrxExendedNames;
function tpxrxNamesArray(names) {
    var _a;
    return ((_a = names === null || names === void 0 ? void 0 : names.split(',')) === null || _a === void 0 ? void 0 : _a.map((name) => tpxrxNames(name.trim()))) || [];
}
exports.tpxrxNamesArray = tpxrxNamesArray;
function tpxrxActionNamesArray(names) {
    return (names === null || names === void 0 ? void 0 : names.map((name) => tpxrxNames(name.name, name.type))) || [];
}
exports.tpxrxActionNamesArray = tpxrxActionNamesArray;
//# sourceMappingURL=names.functions.js.map