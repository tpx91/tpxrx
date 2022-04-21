"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertSelectorsContent = void 0;
const util_functions_1 = require("../util.functions");
const path_functions_1 = require("../path.functions");
const template_selectors_functions_1 = require("../template-functions/template-selectors.functions");
const names_functions_1 = require("../names.functions");
const insert_functions_1 = require("../insert.functions");
function insertSelectorsContent(tree, projectNs, domainNs, actionsNs, propertyNs, crud) {
    const path = (0, path_functions_1.getStateDomainFilePath)(projectNs, domainNs, 'selectors.ts');
    let propertySelectors = [];
    if (propertyNs && crud) {
        propertySelectors = [
            (0, template_selectors_functions_1.getSelectorTemplate)(tree, projectNs, propertyNs),
            (0, template_selectors_functions_1.getSelectorTemplate)(tree, projectNs, (0, names_functions_1.tpxrxNames)((0, util_functions_1.toPural)(propertyNs.name))),
        ];
    }
    else if (propertyNs) {
        propertySelectors = [
            (0, template_selectors_functions_1.getSelectorTemplate)(tree, projectNs, propertyNs),
        ];
    }
    const actionSelectors = actionsNs
        .filter(a => !(0, util_functions_1.isActionTypeReset)(a))
        .reduce((result, actionNs) => {
        const pendingActionNs = (0, names_functions_1.tpxrxNames)((0, util_functions_1.getPending)(actionNs.name), actionNs.actionType);
        const successActionNs = (0, names_functions_1.tpxrxNames)((0, util_functions_1.getSuccess)(actionNs.name), actionNs.actionType);
        const failureActionNs = (0, names_functions_1.tpxrxNames)((0, util_functions_1.getFailure)(actionNs.name), actionNs.actionType);
        return [
            ...result,
            (0, template_selectors_functions_1.getSelectorTemplate)(tree, projectNs, pendingActionNs),
            (0, template_selectors_functions_1.getSelectorTemplate)(tree, projectNs, successActionNs),
            (0, template_selectors_functions_1.getSelectorTemplate)(tree, projectNs, failureActionNs),
        ];
    }, []);
    (0, insert_functions_1.insertItemsToFileEnd)(tree, path, propertySelectors, '\n\n');
    (0, insert_functions_1.insertItemsToFileEnd)(tree, path, actionSelectors, '\n\n');
}
exports.insertSelectorsContent = insertSelectorsContent;
//# sourceMappingURL=selectors.functions.js.map