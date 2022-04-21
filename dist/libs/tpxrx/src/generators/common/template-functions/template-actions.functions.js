"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActionPropertiesAsDeclarationsTemplate = exports.getActionPropertiesAsParamsTemplate = exports.getActionPropertiesAsListTemplate = exports.getActionTemplate = exports.getActionGroupTemplate = void 0;
const names_1 = require("../names");
const template_functions_1 = require("./template.functions");
const util_functions_1 = require("../util.functions");
function getActionGroupTemplate(tree, projectNs, domainNs, actionNs, propertyNs) {
    return (0, util_functions_1.isActionTypeReset)(actionNs) ?
        (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('actions', 'action-group-one'), {
            actionPropertyName: actionNs === null || actionNs === void 0 ? void 0 : actionNs.propertyName,
            action1: getActionTemplate(tree, projectNs, domainNs, actionNs, propertyNs, 'default'),
        }) :
        (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('actions', 'action-group-three'), {
            actionPropertyName: actionNs === null || actionNs === void 0 ? void 0 : actionNs.propertyName,
            action1: getActionTemplate(tree, projectNs, domainNs, actionNs, propertyNs, 'default'),
            action2: getActionTemplate(tree, projectNs, domainNs, actionNs, propertyNs, 'success'),
            action3: getActionTemplate(tree, projectNs, domainNs, actionNs, propertyNs, 'failure'),
        });
}
exports.getActionGroupTemplate = getActionGroupTemplate;
function getActionTemplate(tree, projectNs, domainNs, actionNs, propertyNs, actionSuffix) {
    switch (actionNs === null || actionNs === void 0 ? void 0 : actionNs.actionType) {
        case names_1.ActionType.RESET:
        case names_1.ActionType.RESET_ALL:
            return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('actions', 'action-reset'), {
                projectClassName: projectNs === null || projectNs === void 0 ? void 0 : projectNs.className,
                actionPropertyName: actionNs === null || actionNs === void 0 ? void 0 : actionNs.propertyName,
            });
        case names_1.ActionType.UNDEFINED:
            return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('actions', `action-undefined-${actionSuffix}`), {
                projectClassName: projectNs === null || projectNs === void 0 ? void 0 : projectNs.className,
                actionPropertyName: actionNs === null || actionNs === void 0 ? void 0 : actionNs.propertyName,
            });
        default:
            return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('actions', `action-${actionSuffix}`), {
                projectClassName: projectNs === null || projectNs === void 0 ? void 0 : projectNs.className,
                actionPropertyName: actionNs === null || actionNs === void 0 ? void 0 : actionNs.propertyName,
                properties: getActionPropertiesAsDeclarationsTemplate(tree, propertyNs, actionNs === null || actionNs === void 0 ? void 0 : actionNs.actionType, actionSuffix)
            });
    }
}
exports.getActionTemplate = getActionTemplate;
function getActionPropertiesAsListTemplate(tree, propertyNs, actionType, actionSuffix) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('actions/list', `${actionType === null || actionType === void 0 ? void 0 : actionType.toLowerCase()}-${actionSuffix}`), {
        propertyPropertyName: propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.propertyName,
        propertyClassName: propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.className,
        pluralPropertyPropertyName: (0, util_functions_1.toPural)(propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.propertyName),
        pluralPropertyClassName: (0, util_functions_1.toArray)(propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.className),
    });
}
exports.getActionPropertiesAsListTemplate = getActionPropertiesAsListTemplate;
function getActionPropertiesAsParamsTemplate(tree, propertyNs, actionType, actionSuffix) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('actions/params', `${actionType.toLowerCase()}-${actionSuffix}`), {
        propertyPropertyName: propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.propertyName,
        propertyClassName: propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.className,
        pluralPropertyPropertyName: (0, util_functions_1.toPural)(propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.propertyName),
        pluralPropertyClassName: (0, util_functions_1.toArray)(propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.className),
    });
}
exports.getActionPropertiesAsParamsTemplate = getActionPropertiesAsParamsTemplate;
function getActionPropertiesAsDeclarationsTemplate(tree, propertyNs, actionType, actionSuffix) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('actions/declarations', `${actionType.toLowerCase()}-${actionSuffix}`), {
        propertyPropertyName: propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.propertyName,
        propertyClassName: propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.className,
        pluralPropertyPropertyName: (0, util_functions_1.toPural)(propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.propertyName),
        pluralPropertyClassName: (0, util_functions_1.toArray)(propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.className),
    });
}
exports.getActionPropertiesAsDeclarationsTemplate = getActionPropertiesAsDeclarationsTemplate;
//# sourceMappingURL=template-actions.functions.js.map