"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLibDirName = exports.getDomainTemplatePath = exports.getProjectTemplatePath = exports.getModuleTemplatePath = exports.getLibFilePath = exports.getStateDomainPath = exports.getStatePath = exports.getLibPath = exports.getLibIndexPath = exports.getModuleFilePath = exports.getStateProjectFilePath = exports.getStateDomainFilePath = void 0;
const globals_1 = require("./globals");
const util_functions_1 = require("./util.functions");
function getStateDomainFilePath(projectNs, domainNs, fileSuffix) {
    return (0, util_functions_1.joinPathFragments)(globals_1.__libDirName, projectNs.name, 'src', 'lib', '+state', domainNs.fileName, `${domainNs.fileName}.${fileSuffix}`);
}
exports.getStateDomainFilePath = getStateDomainFilePath;
function getStateProjectFilePath(projectNs, fileSuffix) {
    return (0, util_functions_1.joinPathFragments)(globals_1.__libDirName, projectNs.name, 'src', 'lib', '+state', `${projectNs.fileName}.${fileSuffix}`);
}
exports.getStateProjectFilePath = getStateProjectFilePath;
function getModuleFilePath(projectNs, fileSuffix) {
    return (0, util_functions_1.joinPathFragments)(globals_1.__libDirName, projectNs.name, 'src', 'lib', `${projectNs.fileName}.${fileSuffix}`);
}
exports.getModuleFilePath = getModuleFilePath;
function getLibIndexPath(projectNs) {
    return (0, util_functions_1.joinPathFragments)(globals_1.__libDirName, projectNs.name, 'src', 'index.ts');
}
exports.getLibIndexPath = getLibIndexPath;
function getLibPath(projectNs) {
    return (0, util_functions_1.joinPathFragments)(globals_1.__libDirName, projectNs.name, 'src', 'lib');
}
exports.getLibPath = getLibPath;
function getStatePath(projectNs) {
    return (0, util_functions_1.joinPathFragments)(globals_1.__libDirName, projectNs.name, 'src', 'lib', '+state');
}
exports.getStatePath = getStatePath;
function getStateDomainPath(projectNs, domainNs) {
    return (0, util_functions_1.joinPathFragments)(globals_1.__libDirName, projectNs.name, 'src', 'lib', '+state', domainNs.fileName);
}
exports.getStateDomainPath = getStateDomainPath;
function getLibFilePath(projectNs, filename) {
    return (0, util_functions_1.joinPathFragments)(globals_1.__libDirName, projectNs.name, 'src', 'lib', filename);
}
exports.getLibFilePath = getLibFilePath;
function getModuleTemplatePath() {
    return (0, util_functions_1.joinPathFragments)(__dirname, '..', 'templates', 'file-templates', 'module-files');
}
exports.getModuleTemplatePath = getModuleTemplatePath;
function getProjectTemplatePath() {
    return (0, util_functions_1.joinPathFragments)(__dirname, '..', 'templates', 'file-templates', 'project-files');
}
exports.getProjectTemplatePath = getProjectTemplatePath;
function getDomainTemplatePath() {
    return (0, util_functions_1.joinPathFragments)(__dirname, '..', 'templates', 'file-templates', 'domain-files');
}
exports.getDomainTemplatePath = getDomainTemplatePath;
function setLibDirName(tree) {
    var _a;
    const nxJson = tree.read('nx.json').toString();
    const nxObject = JSON.parse(nxJson);
    const libDirName = ((_a = nxObject === null || nxObject === void 0 ? void 0 : nxObject.workspaceLayout) === null || _a === void 0 ? void 0 : _a.libsDir) || 'libs';
    (0, globals_1.set__LibDirName)(libDirName);
}
exports.setLibDirName = setLibDirName;
//# sourceMappingURL=path.functions.js.map