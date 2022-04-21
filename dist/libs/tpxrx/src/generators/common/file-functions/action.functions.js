"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertActionsContent = void 0;
const template_actions_functions_1 = require("../template-functions/template-actions.functions");
const insert_functions_1 = require("../insert.functions");
const regexp_1 = require("../regexp");
const path_functions_1 = require("../path.functions");
const util_functions_1 = require("../util.functions");
function insertActionsContent(tree, projectNs, domainNs, actionsNs, propertyNs) {
    const actionsPath = (0, path_functions_1.getStateDomainFilePath)(projectNs, domainNs, 'actions.ts');
    const actionsResetsPath = (0, path_functions_1.getStateDomainFilePath)(projectNs, domainNs, 'actions.resets.ts');
    const actionGroups = actionsNs
        .filter(a => !(0, util_functions_1.isActionTypeReset)(a))
        .map((actionNs) => (0, template_actions_functions_1.getActionGroupTemplate)(tree, projectNs, domainNs, actionNs, propertyNs));
    const resetActionGroups = actionsNs
        .filter(a => (0, util_functions_1.isActionTypeReset)(a))
        .map((actionNs) => (0, template_actions_functions_1.getActionGroupTemplate)(tree, projectNs, domainNs, actionNs, propertyNs));
    (0, insert_functions_1.insertItemsToFileEnd)(tree, actionsPath, actionGroups, '\n\n');
    (0, insert_functions_1.insertItemsBeforeRegex)(tree, actionsResetsPath, resetActionGroups, regexp_1.ACTION_RESET_ASSETS_REGEX, '\n\n');
}
exports.insertActionsContent = insertActionsContent;
//# sourceMappingURL=action.functions.js.map