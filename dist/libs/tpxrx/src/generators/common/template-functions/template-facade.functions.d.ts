import { Tree } from '@nrwl/devkit';
import { Names } from '../names';
export declare function getFacadeFunctionTemplate(tree: Tree, domainNs: Names, actionNs: Names, propertyNs: Names): string;
export declare function getFacadeObservableTemplate(tree: Tree, domainNs: Names, actionNs: Names): string;
export declare function getProjectFacadeAssignmentTemplate(tree: Tree, domainNs: Names): string;
export declare function getProjectFacadeDeclarationTemplate(tree: Tree, domainNs: Names): string;
export declare function getProjectFacadeParamTemplate(tree: Tree, domainNs: Names): string;
