"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAction = void 0;
const tslib_1 = require("tslib");
const names_1 = require("../common/names");
const action_functions_1 = require("../common/file-functions/action.functions");
const effects_functions_1 = require("../common/file-functions/effects.functions");
const facade_functions_1 = require("../common/file-functions/facade.functions");
const reducer_functions_1 = require("../common/file-functions/reducer.functions");
const selectors_functions_1 = require("../common/file-functions/selectors.functions");
const names_functions_1 = require("../common/names.functions");
const path_functions_1 = require("../common/path.functions");
const util_functions_1 = require("../common/util.functions");
const generator_1 = require("../common/generator");
function default_1(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return (0, generator_1.generatorWrapper)(tree, schema, generateAction);
    });
}
exports.default = default_1;
function generateAction(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const crud = schema.crud;
        const actions = crud ?
            (0, util_functions_1.getCrudActions)(schema.name) :
            [{ name: schema.name, type: names_1.ActionType.UNDEFINED }];
        const projectNs = (0, names_functions_1.tpxrxNames)(schema.project);
        const domainNs = (0, names_functions_1.tpxrxNames)(schema.domain);
        const actionsNs = (0, names_functions_1.tpxrxActionNamesArray)(actions);
        const propertyNs = crud ? (0, names_functions_1.tpxrxNames)(schema.name) : null;
        validate(tree, projectNs, domainNs, actionsNs);
        (0, action_functions_1.insertActionsContent)(tree, projectNs, domainNs, actionsNs, propertyNs);
        (0, effects_functions_1.insertEffectsContent)(tree, projectNs, domainNs, actionsNs);
        (0, facade_functions_1.insertFacadeContent)(tree, projectNs, domainNs, actionsNs, propertyNs, crud);
        (0, reducer_functions_1.insertReducerContent)(tree, projectNs, domainNs, actionsNs, propertyNs, crud);
        (0, selectors_functions_1.insertSelectorsContent)(tree, projectNs, domainNs, actionsNs, propertyNs, crud);
    });
}
exports.generateAction = generateAction;
function validate(tree, projectNs, domainNs, actionsNs) {
    var _a;
    if (!tree.exists((0, path_functions_1.getModuleFilePath)(projectNs, 'module.ts'))) {
        throw new Error(`project module file ${projectNs.name} not found`);
    }
    if (!((_a = tree.children((0, path_functions_1.getStateDomainPath)(projectNs, domainNs))) === null || _a === void 0 ? void 0 : _a.length)) {
        throw new Error(`domain ${domainNs.name} not found`);
    }
    const actionsContent = tree.read((0, path_functions_1.getStateDomainFilePath)(projectNs, domainNs, 'actions.ts')).toString();
    const actionsResetsContent = tree.read((0, path_functions_1.getStateDomainFilePath)(projectNs, domainNs, 'actions.resets.ts')).toString();
    const content = actionsContent + actionsResetsContent;
    actionsNs.forEach((actionNs) => {
        const actionName = `export const ${actionNs.propertyName} = createAction(`;
        if (content.includes(actionName)) {
            throw new Error(`action ${actionNs.propertyName} already exists`);
        }
    });
}
//# sourceMappingURL=generator.js.map