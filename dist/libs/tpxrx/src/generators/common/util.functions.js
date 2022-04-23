"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinPathFragments = exports.isActionTypeReset = exports.getCrudActions = exports.firstLetterUppercase = exports.toFormattedNames = exports.toArray = exports.toSingular = exports.toPuralFileName = exports.toPural = exports.findEndIndex = exports.findStartIndex = exports.getRegexMatch = exports.getOns = exports.getInitialState = exports.getState = exports.getInjection = exports.getFailure = exports.getSuccess = exports.getPending = exports.getService = exports.getSelectors = exports.getEffects = exports.getFacade = exports.getActions = void 0;
const names_1 = require("./names");
function getActions(name) {
    return `${name}Actions`;
}
exports.getActions = getActions;
function getFacade(name) {
    return `${name}Facade`;
}
exports.getFacade = getFacade;
function getEffects(name) {
    return `${name}Effects`;
}
exports.getEffects = getEffects;
function getSelectors(name) {
    return `${name}Selectors`;
}
exports.getSelectors = getSelectors;
function getService(name) {
    return `${name}Service`;
}
exports.getService = getService;
function getPending(name) {
    return `${name}Pending`;
}
exports.getPending = getPending;
function getSuccess(name) {
    return `${name}Success`;
}
exports.getSuccess = getSuccess;
function getFailure(name) {
    return `${name}Failure`;
}
exports.getFailure = getFailure;
function getInjection(propertyName, className) {
    return `private ${getFacade(propertyName)}: ${getFacade(className)}`;
}
exports.getInjection = getInjection;
function getState(className) {
    return `${className}State`;
}
exports.getState = getState;
function getInitialState(propertyName) {
    return `${propertyName}InitialState`;
}
exports.getInitialState = getInitialState;
function getOns(className) {
    return `get${className}Ons`;
}
exports.getOns = getOns;
function getRegexMatch(path, content, regexp, ignoreError) {
    var _a;
    const regexpMatch = (_a = content.match(regexp)) === null || _a === void 0 ? void 0 : _a[0];
    if (!regexpMatch && !ignoreError) {
        throw new Error(`no regexp match found: ${regexp}, ${path}`);
    }
    return regexpMatch;
}
exports.getRegexMatch = getRegexMatch;
function findStartIndex(content, regex) {
    var _a;
    const search = content.search(regex);
    const match = ((_a = content.match(regex)) === null || _a === void 0 ? void 0 : _a[0]) || '';
    return search + match.length;
}
exports.findStartIndex = findStartIndex;
function findEndIndex(content, startIndex, openChar, closeChar) {
    let count = 1;
    const contentSubstr = content.substring(startIndex);
    for (let i = 0; i < contentSubstr.length; i++) {
        const c = contentSubstr.charAt(i);
        if (c === openChar) {
            count++;
        }
        if (c === closeChar) {
            count--;
        }
        if (count === 0) {
            return i + startIndex;
        }
    }
    return -1;
}
exports.findEndIndex = findEndIndex;
function toPural(name) {
    return `${name}List`;
}
exports.toPural = toPural;
function toPuralFileName(name) {
    return `${name}-list`;
}
exports.toPuralFileName = toPuralFileName;
function toSingular(name) {
    return name.endsWith('List') ? name.substring(0, name.length - 4) : name;
}
exports.toSingular = toSingular;
function toArray(name) {
    return `${name}[]`;
}
exports.toArray = toArray;
function toFormattedNames(names, format) {
    return Object.keys(names).reduce((r, k) => (Object.assign(Object.assign({}, r), { [`${format}${firstLetterUppercase(k)}`]: names[k] })), {});
}
exports.toFormattedNames = toFormattedNames;
function firstLetterUppercase(value) {
    return `${value.charAt(0).toUpperCase()}${value.substring(1)}`;
}
exports.firstLetterUppercase = firstLetterUppercase;
function getCrudActions(actionName) {
    return [
        {
            name: toPuralFileName(`load-${actionName}`),
            type: names_1.ActionType.LOAD_ALL
        },
        {
            name: `load-${actionName}ById`,
            type: names_1.ActionType.LOAD_BY_ID
        },
        {
            name: `create-${actionName}`,
            type: names_1.ActionType.CREATE
        },
        {
            name: `update-${actionName}`,
            type: names_1.ActionType.UPDATE
        },
        {
            name: `delete-${actionName}`,
            type: names_1.ActionType.DELETE
        },
        {
            name: `reset-${actionName}`,
            type: names_1.ActionType.RESET
        },
        {
            name: toPuralFileName(`reset-${actionName}`),
            type: names_1.ActionType.RESET_ALL
        },
    ];
}
exports.getCrudActions = getCrudActions;
function isActionTypeReset(actionNs) {
    return actionNs.actionType === names_1.ActionType.RESET || actionNs.actionType === names_1.ActionType.RESET_ALL;
}
exports.isActionTypeReset = isActionTypeReset;
function joinPathFragments(...fragments) {
    return fragments.join('/');
}
exports.joinPathFragments = joinPathFragments;
//# sourceMappingURL=util.functions.js.map