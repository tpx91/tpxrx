import { Tree } from '@nrwl/devkit';
import { ActionSuffix, ActionType, Names } from '../names';
export declare function getActionGroupTemplate(tree: Tree, projectNs: Names, domainNs: Names, actionNs: Names, propertyNs: Names): string;
export declare function getActionTemplate(tree: Tree, projectNs: Names, domainNs: Names, actionNs: Names, propertyNs: Names, actionSuffix: ActionSuffix): string;
export declare function getActionPropertiesAsListTemplate(tree: Tree, propertyNs: Names, actionType: ActionType, actionSuffix: ActionSuffix): string;
export declare function getActionPropertiesAsParamsTemplate(tree: Tree, propertyNs: Names, actionType: ActionType, actionSuffix: ActionSuffix): string;
export declare function getActionPropertiesAsDeclarationsTemplate(tree: Tree, propertyNs: Names, actionType: ActionType, actionSuffix: ActionSuffix): string;
