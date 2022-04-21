"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertProjectReducerImport = exports.insertProjectReducerContent = exports.insertReducerContent = void 0;
const util_functions_1 = require("../util.functions");
const names_1 = require("../names");
const insert_import_1 = require("@nrwl/workspace/src/generators/utils/insert-import");
const path_functions_1 = require("../path.functions");
const template_reducer_functions_1 = require("../template-functions/template-reducer.functions");
const insert_functions_1 = require("../insert.functions");
const regexp_1 = require("../regexp");
const names_functions_1 = require("../names.functions");
function insertReducerContent(tree, projectNs, domainNs, actionsNs, propertyNs, crud) {
    const reducerPath = (0, path_functions_1.getStateDomainFilePath)(projectNs, domainNs, 'reducer.ts');
    const reducerResetsPath = (0, path_functions_1.getStateDomainFilePath)(projectNs, domainNs, 'reducer.resets.ts');
    let propertyDeclarations = [];
    if (propertyNs && crud) {
        propertyDeclarations = [
            (0, template_reducer_functions_1.getReducerDeclarationTemplate)(tree, propertyNs),
            (0, template_reducer_functions_1.getReducerDeclarationTemplate)(tree, (0, names_functions_1.tpxrxPluralNames)(propertyNs.name)),
        ];
    }
    else if (propertyNs) {
        propertyDeclarations = [
            (0, template_reducer_functions_1.getReducerDeclarationTemplate)(tree, propertyNs),
        ];
    }
    const actionDeclarations = actionsNs
        .filter(a => !(0, util_functions_1.isActionTypeReset)(a))
        .reduce((result, actionNs) => {
        return [
            ...result,
            (0, template_reducer_functions_1.getReducerActionDeclarationGroupTemplate)(tree, actionNs),
        ];
    }, []);
    const ons = actionsNs
        .filter(a => !(0, util_functions_1.isActionTypeReset)(a))
        .map((actionNs) => (0, template_reducer_functions_1.getReducerOnsGroupTemplate)(tree, projectNs, domainNs, actionNs, propertyNs));
    const resetOns = actionsNs
        .filter(a => (0, util_functions_1.isActionTypeReset)(a))
        .map((actionNs) => actionNs.actionType === names_1.ActionType.RESET ?
        (0, template_reducer_functions_1.getReducerOnsGroupTemplate)(tree, projectNs, domainNs, actionNs, propertyNs) :
        (0, template_reducer_functions_1.getReducerOnsGroupTemplate)(tree, projectNs, domainNs, actionNs, (0, names_functions_1.tpxrxPluralNames)(propertyNs.name)));
    const resetAssetsProperties = actionsNs
        .filter(a => !(0, util_functions_1.isActionTypeReset)(a))
        .map((actionNs) => (0, template_reducer_functions_1.getReducerResetAssetsGroupTemplate)(tree, actionNs));
    (0, insert_functions_1.insertItems)(tree, reducerPath, propertyDeclarations, regexp_1.REDUCER_STATE_REGEX, '{', '}', '');
    (0, insert_functions_1.insertItems)(tree, reducerPath, actionDeclarations, regexp_1.REDUCER_STATE_REGEX, '{', '}', '');
    (0, insert_functions_1.insertItems)(tree, reducerPath, ons, regexp_1.REDUCER_ONS_REGEX, '[', ']', '\n\n');
    (0, insert_functions_1.insertItemsBeforeRegex)(tree, reducerResetsPath, resetOns, regexp_1.REDUCER_RESET_ASSETS_REGEX, '\n\n');
    (0, insert_functions_1.insertItems)(tree, reducerResetsPath, resetAssetsProperties, regexp_1.REDUCER_RESET_ASSETS_REGEX, '{', '}', ',');
}
exports.insertReducerContent = insertReducerContent;
function insertProjectReducerContent(tree, projectNs, domainNs) {
    const projectReducerPath = (0, path_functions_1.getStateProjectFilePath)(projectNs, 'reducer.ts');
    const stateInterfaces = [(0, util_functions_1.getState)(domainNs.className)];
    const initialStates = [(0, template_reducer_functions_1.getProjectReducerInitialStateTemplate)(tree, domainNs)];
    const ons = [(0, template_reducer_functions_1.getProjectReducerOnsTemplate)(tree, domainNs)];
    const hasExtends = (0, util_functions_1.getRegexMatch)(projectReducerPath, tree.read(projectReducerPath).toString(), regexp_1.PROJECT_REDUCER_STATE_WITH_EXTENDS_REGEX, true);
    if (!hasExtends) {
        (0, insert_functions_1.insertItemsAfterRegex)(tree, projectReducerPath, ['extends'], regexp_1.PROJECT_REDUCER_STATE_WITHOUT_EXTENDS_REGEX, ' ');
    }
    (0, insert_functions_1.insertItems)(tree, projectReducerPath, stateInterfaces, regexp_1.PROJECT_REDUCER_STATE_WITH_EXTENDS_REGEX, '}', '{', ',');
    (0, insert_functions_1.insertItems)(tree, projectReducerPath, initialStates, regexp_1.PROJECT_REDUCER_INITIAL_STATE_REGEX, '{', '}', ',');
    (0, insert_functions_1.insertItems)(tree, projectReducerPath, ons, regexp_1.PROJECT_REDUCER_CREATE_REGEX, '(', ')', ',');
    insertProjectReducerImport(tree, projectNs, domainNs);
}
exports.insertProjectReducerContent = insertProjectReducerContent;
function insertProjectReducerImport(tree, projectNs, domainNs) {
    (0, insert_import_1.insertImport)(tree, (0, path_functions_1.getStateProjectFilePath)(projectNs, 'reducer.ts'), `${(0, util_functions_1.getState)(domainNs.className)}, ${(0, util_functions_1.getInitialState)(domainNs.propertyName)}, ${(0, util_functions_1.getOns)(domainNs.className)}`, `./${domainNs.fileName}/${domainNs.fileName}.reducer`);
}
exports.insertProjectReducerImport = insertProjectReducerImport;
//# sourceMappingURL=reducer.functions.js.map