"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndexTemplate = void 0;
const template_functions_1 = require("./template.functions");
function getIndexTemplate(tree, projectNs) {
    return (0, template_functions_1.getTemplate)(tree, (0, template_functions_1.getTemplatePath)('index', 'index'), {
        projectFileName: projectNs === null || projectNs === void 0 ? void 0 : projectNs.fileName,
    });
}
exports.getIndexTemplate = getIndexTemplate;
//# sourceMappingURL=template-index.functions.js.map