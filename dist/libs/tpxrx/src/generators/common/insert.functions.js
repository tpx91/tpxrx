"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.removeDuplicates = exports.getInsertContent = exports.insertItemsAfterRegex = exports.insertItemsBeforeRegex = exports.insertItemsToFileEnd = exports.insertItems = void 0;
const devkit_1 = require("@nrwl/devkit");
const util_functions_1 = require("./util.functions");
const path_functions_1 = require("./path.functions");
function insertItems(tree, path, insertItems, matchRegex, open, close, splitter, ignoreDuplicates) {
    let content = tree.read(path).toString();
    const startIndex = (0, util_functions_1.findStartIndex)(content, matchRegex);
    const endIndex = (0, util_functions_1.findEndIndex)(content, startIndex, open, close);
    let subContent = content.substring(startIndex, endIndex).trim();
    const finalInsertItems = ignoreDuplicates ? removeDuplicates(insertItems, subContent, splitter) : insertItems;
    const insertContent = getInsertContent(finalInsertItems, splitter);
    subContent = subContent.endsWith(splitter) || !insertContent || !subContent ? subContent : (subContent + splitter);
    content = content.substring(0, startIndex) + subContent + insertContent + content.substring(endIndex);
    tree.write(path, content);
}
exports.insertItems = insertItems;
function insertItemsToFileEnd(tree, path, insertItems, splitter) {
    let content = tree.read(path).toString();
    const insertContent = getInsertContent(insertItems, splitter);
    content = content.trim();
    content = content.endsWith(splitter) || !insertContent || !content ? content : (content + splitter);
    content = content + insertContent;
    tree.write(path, content);
}
exports.insertItemsToFileEnd = insertItemsToFileEnd;
function insertItemsBeforeRegex(tree, path, insertItems, regexp, splitter) {
    let content = tree.read(path).toString();
    const regexpMatch = (0, util_functions_1.getRegexMatch)(path, content, regexp);
    let insertContent = getInsertContent(insertItems, splitter);
    insertContent = insertContent + regexpMatch;
    content = content.replace(regexpMatch, insertContent);
    tree.write(path, content);
}
exports.insertItemsBeforeRegex = insertItemsBeforeRegex;
function insertItemsAfterRegex(tree, path, insertItems, regexp, splitter) {
    let content = tree.read(path).toString();
    const regexpMatch = (0, util_functions_1.getRegexMatch)(path, content, regexp);
    let insertContent = getInsertContent(insertItems, splitter);
    insertContent = regexpMatch + insertContent;
    content = content.replace(regexpMatch, insertContent);
    tree.write(path, content);
}
exports.insertItemsAfterRegex = insertItemsAfterRegex;
function getInsertContent(insertItems, splitter) {
    if (!(insertItems === null || insertItems === void 0 ? void 0 : insertItems.length)) {
        return '';
    }
    const insertContent = insertItems
        .map(i => {
        const i2 = i.trim();
        return splitter && i2.endsWith(splitter) ? i2.substring(0, i2.length - 1) : i2;
    })
        .join(splitter);
    return insertContent + splitter;
}
exports.getInsertContent = getInsertContent;
function removeDuplicates(insertItems, content, splitter) {
    const items = content.trim().split(splitter)
        .map((i) => i.trim())
        .filter((i) => !!i);
    return insertItems.filter((i) => {
        let i2 = i.trim();
        i2 = i2.endsWith(splitter) && splitter ? i2.substring(0, i2.length - 1) : i2;
        return !items.includes(i2);
    });
}
exports.removeDuplicates = removeDuplicates;
function decode(tree, projectNs) {
    (0, devkit_1.visitNotIgnoredFiles)(tree, (0, path_functions_1.getStatePath)(projectNs), (path) => {
        const content = tree.read(path).toString();
        const newContent = content
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>');
        if (content !== newContent) {
            tree.write(path, newContent);
        }
    });
}
exports.decode = decode;
//# sourceMappingURL=insert.functions.js.map