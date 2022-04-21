"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertEffectsContent = void 0;
const regexp_1 = require("../regexp");
const insert_functions_1 = require("../insert.functions");
const template_effects_functions_1 = require("../template-functions/template-effects.functions");
const path_functions_1 = require("../path.functions");
const util_functions_1 = require("../util.functions");
function insertEffectsContent(tree, projectNs, domainNs, actionsNs) {
    const path = (0, path_functions_1.getStateDomainFilePath)(projectNs, domainNs, 'effects.ts');
    const effects = actionsNs
        .filter(a => !(0, util_functions_1.isActionTypeReset)(a))
        .map((actionNs) => (0, template_effects_functions_1.getEffectTemplate)(tree, domainNs, actionNs));
    const injections = [(0, template_effects_functions_1.getEffectsInjectionTemplate)(tree, domainNs)];
    (0, insert_functions_1.insertItemsBeforeRegex)(tree, path, effects, regexp_1.CONSTRUCTOR_REGEX, '\n\n');
    (0, insert_functions_1.insertItems)(tree, path, injections, regexp_1.CONSTRUCTOR_INJECTION_REGEX, '(', ')', ',', true);
}
exports.insertEffectsContent = insertEffectsContent;
//# sourceMappingURL=effects.functions.js.map