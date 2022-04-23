"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateProperty = void 0;
const tslib_1 = require("tslib");
const names_1 = require("../common/names");
const action_functions_1 = require("../common/file-functions/action.functions");
const util_functions_1 = require("../common/util.functions");
const regexp_1 = require("../common/regexp");
const names_functions_1 = require("../common/names.functions");
const facade_functions_1 = require("../common/file-functions/facade.functions");
const reducer_functions_1 = require("../common/file-functions/reducer.functions");
const selectors_functions_1 = require("../common/file-functions/selectors.functions");
const path_functions_1 = require("../common/path.functions");
const generator_1 = require("../common/generator");
function default_1(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return (0, generator_1.generatorWrapper)(tree, schema, generateProperty);
    });
}
exports.default = default_1;
function generateProperty(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const array = schema.array;
        const action = {
            name: `reset-${schema.name}`,
            type: names_1.ActionType.RESET
        };
        const projectNs = (0, names_functions_1.tpxrxNames)(schema.project);
        const domainNs = (0, names_functions_1.tpxrxNames)(schema.domain);
        const propertyNs = (0, names_functions_1.tpxrxNames)(schema.name);
        const propertyBaseNs = (0, names_functions_1.tpxrxNames)((0, util_functions_1.toSingular)(schema.name));
        const propertyArrayNs = array ? (0, names_functions_1.tpxrxPluralNames)(propertyBaseNs.name) : propertyNs;
        const actionsNs = (0, names_functions_1.tpxrxActionNamesArray)([action]);
        validate(tree, projectNs, domainNs, propertyNs, array);
        (0, action_functions_1.insertActionsContent)(tree, projectNs, domainNs, actionsNs, propertyArrayNs);
        (0, facade_functions_1.insertFacadeContent)(tree, projectNs, domainNs, actionsNs, propertyNs, false);
        (0, reducer_functions_1.insertReducerContent)(tree, projectNs, domainNs, actionsNs, propertyArrayNs, false);
        (0, selectors_functions_1.insertSelectorsContent)(tree, projectNs, domainNs, actionsNs, propertyNs, false);
    });
}
exports.generateProperty = generateProperty;
function validate(tree, projectNs, domainNs, propertyNs, array) {
    var _a;
    if (!tree.exists((0, path_functions_1.getModuleFilePath)(projectNs, 'module.ts'))) {
        throw new Error(`project module file ${projectNs.name} not found`);
    }
    if (!((_a = tree.children((0, path_functions_1.getStateDomainPath)(projectNs, domainNs))) === null || _a === void 0 ? void 0 : _a.length)) {
        throw new Error(`domain ${domainNs.name} not found`);
    }
    if (array && !propertyNs.name.endsWith('List')) {
        throw new Error(`array property name has to end with List, e.g. ${propertyNs.propertyName}List`);
    }
    const path = (0, path_functions_1.getStateDomainFilePath)(projectNs, domainNs, 'reducer.ts');
    const content = tree.read(path).toString();
    const stateDeclaration = (0, util_functions_1.getRegexMatch)(path, content, regexp_1.REDUCER_STATE_CONTENT_REGEX, true);
    const propertyNameRegex = new RegExp(`${propertyNs.propertyName}\\??:\\s*\\w+(\\[\\])?\\s*;`, 'g');
    if (stateDeclaration.match(propertyNameRegex)) {
        throw new Error(`property ${propertyNs.propertyName} already exists`);
    }
}
//# sourceMappingURL=generator.js.map