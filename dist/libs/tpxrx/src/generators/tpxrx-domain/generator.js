"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDomain = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const action_functions_1 = require("../common/file-functions/action.functions");
const effects_functions_1 = require("../common/file-functions/effects.functions");
const facade_functions_1 = require("../common/file-functions/facade.functions");
const reducer_functions_1 = require("../common/file-functions/reducer.functions");
const selectors_functions_1 = require("../common/file-functions/selectors.functions");
const module_functions_1 = require("../common/file-functions/module.functions");
const names_functions_1 = require("../common/names.functions");
const insert_functions_1 = require("../common/insert.functions");
const path_functions_1 = require("../common/path.functions");
const util_functions_1 = require("../common/util.functions");
const generator_1 = require("../common/generator");
function default_1(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return (0, generator_1.generatorWrapper)(tree, schema, generateDomain);
    });
}
exports.default = default_1;
function generateDomain(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const crud = schema.crud;
        const actions = crud ? (0, util_functions_1.getCrudActions)(schema.name) : [];
        const projectNs = (0, names_functions_1.tpxrxNames)(schema.project);
        const domainNs = (0, names_functions_1.tpxrxNames)(schema.name);
        const actionsNs = (0, names_functions_1.tpxrxActionNamesArray)(actions);
        const propertyNs = crud ? (0, names_functions_1.tpxrxNames)(schema.name) : null;
        validate(tree, projectNs, domainNs);
        /*
         * generate domain +state files
         */
        yield (0, devkit_1.generateFiles)(tree, (0, path_functions_1.getDomainTemplatePath)(), (0, path_functions_1.getStatePath)(projectNs), Object.assign(Object.assign(Object.assign({}, (0, util_functions_1.toFormattedNames)(projectNs, 'project')), (0, util_functions_1.toFormattedNames)(domainNs, 'domain')), { tmpl: '' }));
        (0, action_functions_1.insertActionsContent)(tree, projectNs, domainNs, actionsNs, propertyNs);
        (0, effects_functions_1.insertEffectsContent)(tree, projectNs, domainNs, actionsNs);
        (0, facade_functions_1.insertFacadeContent)(tree, projectNs, domainNs, actionsNs, propertyNs, crud);
        (0, reducer_functions_1.insertReducerContent)(tree, projectNs, domainNs, actionsNs, propertyNs, crud);
        (0, selectors_functions_1.insertSelectorsContent)(tree, projectNs, domainNs, actionsNs, propertyNs, crud);
        (0, facade_functions_1.insertProjectFacadeContent)(tree, projectNs, domainNs);
        (0, reducer_functions_1.insertProjectReducerContent)(tree, projectNs, domainNs);
        (0, module_functions_1.insertModuleContent)(tree, projectNs, domainNs);
        (0, insert_functions_1.decode)(tree, projectNs);
    });
}
exports.generateDomain = generateDomain;
function validate(tree, projectNs, domainNs) {
    if (!tree.exists((0, path_functions_1.getModuleFilePath)(projectNs, 'module.ts'))) {
        throw new Error(`project module file ${projectNs.name} not found`);
    }
    if (tree.children((0, path_functions_1.getStateDomainPath)(projectNs, domainNs)).length > 0) {
        throw new Error(`domain ${domainNs.name} already exists`);
    }
}
//# sourceMappingURL=generator.js.map