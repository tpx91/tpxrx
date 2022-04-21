"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertModuleImports = exports.insertModuleContent = void 0;
const regexp_1 = require("../regexp");
const util_functions_1 = require("../util.functions");
const insert_import_1 = require("@nrwl/workspace/src/generators/utils/insert-import");
const path_functions_1 = require("../path.functions");
const insert_functions_1 = require("../insert.functions");
function insertModuleContent(tree, projectNs, domainNs) {
    const path = (0, path_functions_1.getModuleFilePath)(projectNs, 'module.ts');
    const newEffectsItems = [
        (0, util_functions_1.getEffects)(domainNs.className),
    ];
    const newFacadeItems = [
        (0, util_functions_1.getFacade)(domainNs.className),
    ];
    (0, insert_functions_1.insertItems)(tree, path, newEffectsItems, regexp_1.MODULE_EFFECTS_REGEX, '[', ']', ',');
    (0, insert_functions_1.insertItems)(tree, path, newFacadeItems, regexp_1.MODULE_PROVIDERS_REGEX, '[', ']', ',');
    insertModuleImports(tree, projectNs, domainNs);
}
exports.insertModuleContent = insertModuleContent;
function insertModuleImports(tree, projectNs, domainNs) {
    (0, insert_import_1.insertImport)(tree, (0, path_functions_1.getModuleFilePath)(projectNs, 'module.ts'), (0, util_functions_1.getFacade)(domainNs.className), `./+state/${domainNs.fileName}/${domainNs.fileName}.facade`);
    (0, insert_import_1.insertImport)(tree, (0, path_functions_1.getModuleFilePath)(projectNs, 'module.ts'), (0, util_functions_1.getEffects)(domainNs.className), `./+state/${domainNs.fileName}/${domainNs.fileName}.effects`);
}
exports.insertModuleImports = insertModuleImports;
//# sourceMappingURL=module.functions.js.map