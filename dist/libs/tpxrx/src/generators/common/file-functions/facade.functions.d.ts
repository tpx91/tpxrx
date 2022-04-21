import { Tree } from '@nrwl/devkit';
import { Names } from '../names';
export declare function insertFacadeContent(tree: Tree, projectNs: Names, domainNs: Names, actionsNs: Names[], propertyNs: Names, crud: boolean): void;
export declare function insertProjectFacadeContent(tree: Tree, projectNs: Names, domainNs: Names): void;
export declare function insertProjectFacadeImport(tree: Tree, projectNs: Names, domainNs: Names): void;
