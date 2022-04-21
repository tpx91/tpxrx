"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectFacadeParamTemplate = exports.getProjectFacadeDeclarationTemplate = exports.getProjectFacadeAssignmentTemplate = exports.getFacadeObservableTemplate = exports.getFacadeFunctionTemplate = void 0;
const template_functions_1 = require("./template.functions");
const template_actions_functions_1 = require("./template-actions.functions");
const util_functions_1 = require("../util.functions");
function getFacadeFunctionTemplate(tree, domainNs, actionNs, propertyNs) {
    return (0, util_functions_1.isActionTypeReset)(actionNs) ?
        (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('facade', 'facade-function-resets'), {
            domainClassName: domainNs === null || domainNs === void 0 ? void 0 : domainNs.className,
            actionPropertyName: actionNs === null || actionNs === void 0 ? void 0 : actionNs.propertyName,
        }) :
        (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('facade', 'facade-function'), {
            domainClassName: domainNs === null || domainNs === void 0 ? void 0 : domainNs.className,
            actionPropertyName: actionNs === null || actionNs === void 0 ? void 0 : actionNs.propertyName,
            propertiesAsParams: (0, template_actions_functions_1.getActionPropertiesAsParamsTemplate)(tree, propertyNs, actionNs === null || actionNs === void 0 ? void 0 : actionNs.actionType, 'default'),
            propertiesAsList: (0, template_actions_functions_1.getActionPropertiesAsListTemplate)(tree, propertyNs, actionNs === null || actionNs === void 0 ? void 0 : actionNs.actionType, 'default'),
        });
}
exports.getFacadeFunctionTemplate = getFacadeFunctionTemplate;
function getFacadeObservableTemplate(tree, domainNs, actionNs) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('facade', 'facade-observable'), {
        domainClassName: domainNs === null || domainNs === void 0 ? void 0 : domainNs.className,
        actionClassName: actionNs === null || actionNs === void 0 ? void 0 : actionNs.className,
        actionPropertyName: actionNs === null || actionNs === void 0 ? void 0 : actionNs.propertyName,
    });
}
exports.getFacadeObservableTemplate = getFacadeObservableTemplate;
function getProjectFacadeAssignmentTemplate(tree, domainNs) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('facade', 'project-facade-assignment'), {
        domainPropertyName: domainNs === null || domainNs === void 0 ? void 0 : domainNs.propertyName,
    });
}
exports.getProjectFacadeAssignmentTemplate = getProjectFacadeAssignmentTemplate;
function getProjectFacadeDeclarationTemplate(tree, domainNs) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('facade', 'project-facade-declaration'), {
        domainPropertyName: domainNs === null || domainNs === void 0 ? void 0 : domainNs.propertyName,
        domainClassName: domainNs === null || domainNs === void 0 ? void 0 : domainNs.className,
    });
}
exports.getProjectFacadeDeclarationTemplate = getProjectFacadeDeclarationTemplate;
function getProjectFacadeParamTemplate(tree, domainNs) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('facade', 'project-facade-param'), {
        domainPropertyName: domainNs === null || domainNs === void 0 ? void 0 : domainNs.propertyName,
        domainClassName: domainNs === null || domainNs === void 0 ? void 0 : domainNs.className,
    });
}
exports.getProjectFacadeParamTemplate = getProjectFacadeParamTemplate;
//# sourceMappingURL=template-facade.functions.js.map