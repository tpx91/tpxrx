"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertProjectFacadeImport = exports.insertProjectFacadeContent = exports.insertFacadeContent = void 0;
const util_functions_1 = require("../util.functions");
const regexp_1 = require("../regexp");
const path_functions_1 = require("../path.functions");
const template_facade_functions_1 = require("../template-functions/template-facade.functions");
const insert_functions_1 = require("../insert.functions");
const names_functions_1 = require("../names.functions");
const insert_import_1 = require("@nrwl/workspace/src/generators/utils/insert-import");
function insertFacadeContent(tree, projectNs, domainNs, actionsNs, propertyNs, crud) {
    const facadePath = (0, path_functions_1.getStateDomainFilePath)(projectNs, domainNs, 'facade.ts');
    const facadeResetsPath = (0, path_functions_1.getStateDomainFilePath)(projectNs, domainNs, 'facade.resets.ts');
    let propertyObservables = [];
    if (propertyNs && crud) {
        propertyObservables = [
            (0, template_facade_functions_1.getFacadeObservableTemplate)(tree, domainNs, propertyNs),
            (0, template_facade_functions_1.getFacadeObservableTemplate)(tree, domainNs, (0, names_functions_1.tpxrxNames)((0, util_functions_1.toPural)(propertyNs.name))),
        ];
    }
    else if (propertyNs) {
        propertyObservables = [
            (0, template_facade_functions_1.getFacadeObservableTemplate)(tree, domainNs, propertyNs),
        ];
    }
    const actionObservables = actionsNs
        .filter((a) => !(0, util_functions_1.isActionTypeReset)(a))
        .reduce((result, actionNs) => {
        const pendingActionNs = (0, names_functions_1.tpxrxNames)((0, util_functions_1.getPending)(actionNs.name), actionNs.actionType);
        const successActionNs = (0, names_functions_1.tpxrxNames)((0, util_functions_1.getSuccess)(actionNs.name), actionNs.actionType);
        const failureActionNs = (0, names_functions_1.tpxrxNames)((0, util_functions_1.getFailure)(actionNs.name), actionNs.actionType);
        return [
            ...result,
            (0, template_facade_functions_1.getFacadeObservableTemplate)(tree, domainNs, pendingActionNs),
            (0, template_facade_functions_1.getFacadeObservableTemplate)(tree, domainNs, successActionNs),
            (0, template_facade_functions_1.getFacadeObservableTemplate)(tree, domainNs, failureActionNs),
        ];
    }, []);
    const actionFunctions = actionsNs
        .filter((a) => !(0, util_functions_1.isActionTypeReset)(a))
        .map((actionNs) => (0, template_facade_functions_1.getFacadeFunctionTemplate)(tree, domainNs, actionNs, propertyNs));
    const actionResetFunctions = actionsNs
        .filter((a) => (0, util_functions_1.isActionTypeReset)(a))
        .map((actionNs) => (0, template_facade_functions_1.getFacadeFunctionTemplate)(tree, domainNs, actionNs, propertyNs));
    (0, insert_functions_1.insertItemsBeforeRegex)(tree, facadePath, propertyObservables, regexp_1.FACADE_FUNCTION_REGEX, '');
    (0, insert_functions_1.insertItemsBeforeRegex)(tree, facadePath, actionObservables, regexp_1.FACADE_FUNCTION_REGEX, '');
    (0, insert_functions_1.insertItemsBeforeRegex)(tree, facadePath, actionFunctions, regexp_1.CONSTRUCTOR_REGEX, '\n\n');
    (0, insert_functions_1.insertItemsBeforeRegex)(tree, facadeResetsPath, actionResetFunctions, regexp_1.FACADE_RESET_ASSETS_REGEX, '\n\n');
}
exports.insertFacadeContent = insertFacadeContent;
function insertProjectFacadeContent(tree, projectNs, domainNs) {
    const path = (0, path_functions_1.getStateProjectFilePath)(projectNs, 'facade.ts');
    const domainFacadeDeclarations = [(0, template_facade_functions_1.getProjectFacadeDeclarationTemplate)(tree, domainNs)];
    const domainFacadeInjections = [(0, template_facade_functions_1.getProjectFacadeParamTemplate)(tree, domainNs)];
    const domainFacadeAssignments = [(0, template_facade_functions_1.getProjectFacadeAssignmentTemplate)(tree, domainNs)];
    (0, insert_functions_1.insertItemsBeforeRegex)(tree, path, domainFacadeDeclarations, regexp_1.CONSTRUCTOR_REGEX, '\n\n');
    (0, insert_functions_1.insertItems)(tree, path, domainFacadeInjections, regexp_1.CONSTRUCTOR_INJECTION_REGEX, '(', ')', ',');
    (0, insert_functions_1.insertItems)(tree, path, domainFacadeAssignments, regexp_1.CONSTRUCTOR_CONTENT_REGEX, '{', '}', '');
    insertProjectFacadeImport(tree, projectNs, domainNs);
}
exports.insertProjectFacadeContent = insertProjectFacadeContent;
function insertProjectFacadeImport(tree, projectNs, domainNs) {
    (0, insert_import_1.insertImport)(tree, (0, path_functions_1.getStateProjectFilePath)(projectNs, 'facade.ts'), `${(0, util_functions_1.getFacade)(domainNs.className)}`, `./${domainNs.fileName}/${domainNs.fileName}.facade`);
}
exports.insertProjectFacadeImport = insertProjectFacadeImport;
//# sourceMappingURL=facade.functions.js.map