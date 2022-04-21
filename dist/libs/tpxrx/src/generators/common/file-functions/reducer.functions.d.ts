import { Tree } from '@nrwl/devkit';
import { Names } from '../names';
export declare function insertReducerContent(tree: Tree, projectNs: Names, domainNs: Names, actionsNs: Names[], propertyNs: Names, crud: boolean): void;
export declare function insertProjectReducerContent(tree: Tree, projectNs: Names, domainNs: Names): void;
export declare function insertProjectReducerImport(tree: Tree, projectNs: Names, domainNs: Names): void;
