import { Tree } from '@nrwl/devkit';
import { ActionSuffix, Names } from '../names';
export declare function getReducerOnsGroupTemplate(tree: Tree, projectNs: Names, domainNs: Names, actionNs: Names, propertyNs: Names): string;
export declare function getReducerOnsTemplate(tree: Tree, projectNs: Names, domainNs: Names, actionNs: Names, propertyNs: Names, actionSuffix: ActionSuffix): string;
export declare function getReducerDeclarationTemplate(tree: Tree, propertyNs: Names): string;
export declare function getReducerActionDeclarationGroupTemplate(tree: Tree, actionNs: Names): string;
export declare function getReducerResetAssetsGroupTemplate(tree: Tree, actionNs: Names): string;
export declare function getProjectReducerInitialStateTemplate(tree: Tree, domainNs: Names): string;
export declare function getProjectReducerOnsTemplate(tree: Tree, domainNs: Names): string;
