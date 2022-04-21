"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEffectsInjectionTemplate = exports.getEffectTemplate = void 0;
const template_functions_1 = require("./template.functions");
function getEffectTemplate(tree, domainNs, actionNs) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('effects', 'effect'), {
        domainPropertyName: domainNs === null || domainNs === void 0 ? void 0 : domainNs.propertyName,
        domainClassName: domainNs === null || domainNs === void 0 ? void 0 : domainNs.className,
        actionPropertyName: actionNs === null || actionNs === void 0 ? void 0 : actionNs.propertyName,
    });
}
exports.getEffectTemplate = getEffectTemplate;
function getEffectsInjectionTemplate(tree, domainNs) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('effects', 'effects-injection'), {
        domainPropertyName: domainNs === null || domainNs === void 0 ? void 0 : domainNs.propertyName,
        domainClassName: domainNs === null || domainNs === void 0 ? void 0 : domainNs.className,
    });
}
exports.getEffectsInjectionTemplate = getEffectsInjectionTemplate;
//# sourceMappingURL=template-effects.functions.js.map