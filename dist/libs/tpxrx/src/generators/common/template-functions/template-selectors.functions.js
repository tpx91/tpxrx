"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectorTemplate = void 0;
const template_functions_1 = require("./template.functions");
function getSelectorTemplate(tree, projectNs, selectorNs) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('selectors', 'selector'), {
        projectClassName: projectNs === null || projectNs === void 0 ? void 0 : projectNs.className,
        selectorClassName: selectorNs === null || selectorNs === void 0 ? void 0 : selectorNs.className,
        selectorPropertyName: selectorNs === null || selectorNs === void 0 ? void 0 : selectorNs.propertyName,
    });
}
exports.getSelectorTemplate = getSelectorTemplate;
//# sourceMappingURL=template-selectors.functions.js.map