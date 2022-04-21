"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectReducerOnsTemplate = exports.getProjectReducerInitialStateTemplate = exports.getReducerResetAssetsGroupTemplate = exports.getReducerActionDeclarationGroupTemplate = exports.getReducerDeclarationTemplate = exports.getReducerOnsTemplate = exports.getReducerOnsGroupTemplate = void 0;
const template_functions_1 = require("./template.functions");
const util_functions_1 = require("../util.functions");
function getReducerOnsGroupTemplate(tree, projectNs, domainNs, actionNs, propertyNs) {
    return (0, util_functions_1.isActionTypeReset)(actionNs) ?
        (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('reducer', 'ons-group-one'), {
            actionPropertyName: actionNs === null || actionNs === void 0 ? void 0 : actionNs.propertyName,
            ons1: getReducerOnsTemplate(tree, projectNs, domainNs, actionNs, propertyNs, 'default')
        }) :
        (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('reducer', 'ons-group-three'), {
            actionPropertyName: actionNs === null || actionNs === void 0 ? void 0 : actionNs.propertyName,
            ons1: getReducerOnsTemplate(tree, projectNs, domainNs, actionNs, propertyNs, 'default'),
            ons2: getReducerOnsTemplate(tree, projectNs, domainNs, actionNs, propertyNs, 'success'),
            ons3: getReducerOnsTemplate(tree, projectNs, domainNs, actionNs, propertyNs, 'failure'),
        });
}
exports.getReducerOnsGroupTemplate = getReducerOnsGroupTemplate;
function getReducerOnsTemplate(tree, projectNs, domainNs, actionNs, propertyNs, actionSuffix) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('reducer/ons', `ons-${actionNs.actionType.toLowerCase()}-${actionSuffix}`), {
        domainClassName: domainNs === null || domainNs === void 0 ? void 0 : domainNs.className,
        actionPropertyName: actionNs === null || actionNs === void 0 ? void 0 : actionNs.propertyName,
        propertyPropertyName: propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.propertyName,
        pluralPropertyPropertyName: (0, util_functions_1.toPural)(propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.propertyName),
    });
}
exports.getReducerOnsTemplate = getReducerOnsTemplate;
function getReducerDeclarationTemplate(tree, propertyNs) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('reducer', 'declaration'), {
        propertyPropertyName: propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.propertyName,
        propertyClassName: propertyNs === null || propertyNs === void 0 ? void 0 : propertyNs.className,
    });
}
exports.getReducerDeclarationTemplate = getReducerDeclarationTemplate;
function getReducerActionDeclarationGroupTemplate(tree, actionNs) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('reducer', 'action-declaration-group'), {
        actionPropertyName: actionNs === null || actionNs === void 0 ? void 0 : actionNs.propertyName,
    });
}
exports.getReducerActionDeclarationGroupTemplate = getReducerActionDeclarationGroupTemplate;
function getReducerResetAssetsGroupTemplate(tree, actionNs) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('reducer', 'reset-assets-group'), {
        actionPropertyName: actionNs === null || actionNs === void 0 ? void 0 : actionNs.propertyName,
    });
}
exports.getReducerResetAssetsGroupTemplate = getReducerResetAssetsGroupTemplate;
function getProjectReducerInitialStateTemplate(tree, domainNs) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('reducer', 'project-reducer-initial-state'), {
        domainPropertyName: domainNs === null || domainNs === void 0 ? void 0 : domainNs.propertyName,
    });
}
exports.getProjectReducerInitialStateTemplate = getProjectReducerInitialStateTemplate;
function getProjectReducerOnsTemplate(tree, domainNs) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('reducer', 'project-reducer-ons'), {
        domainClassName: domainNs === null || domainNs === void 0 ? void 0 : domainNs.className,
    });
}
exports.getProjectReducerOnsTemplate = getProjectReducerOnsTemplate;
//# sourceMappingURL=template-reducer.functions.js.map