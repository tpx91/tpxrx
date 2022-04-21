"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplatePath = exports.getTemplate = void 0;
const devkit_1 = require("@nrwl/devkit");
const fs = require("fs");
const TEMPLATE_VAR_REGEX = '<%=\\s*{key}\\s*%>';
const TEMPLATE_VAR_REGEX_2 = '<%=\\s*\\w+\\s*%>';
function getTemplate(tree, templatePath, substitutions) {
    const template = fs.readFileSync(templatePath).toString().trim();
    const result = Object.keys(substitutions || {}).reduce((r, k) => {
        const regexpString = TEMPLATE_VAR_REGEX.replace('{key}', k);
        const regexp = new RegExp(regexpString, 'g');
        return r.replace(regexp, substitutions[k]);
    }, template);
    const errorMatches = result.match(TEMPLATE_VAR_REGEX_2);
    if (errorMatches) {
        throw new Error(`tempate vars ${errorMatches.join(', ')} not defined`);
    }
    return result;
}
exports.getTemplate = getTemplate;
function getTemplatePath(dir, filename) {
    return (0, devkit_1.joinPathFragments)(__dirname, '..', '..', 'templates', 'content-templates', dir, `${filename}.template.txt`);
}
exports.getTemplatePath = getTemplatePath;
//# sourceMappingURL=template.functions.js.map