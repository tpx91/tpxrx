import { Tree } from '@nrwl/devkit';
import { Names } from './names';
export declare function insertItems(tree: Tree, path: string, insertItems: string[], matchRegex: RegExp, open: string, close: string, splitter: string, ignoreDuplicates?: boolean): void;
export declare function insertItemsToFileEnd(tree: Tree, path: string, insertItems: string[], splitter: string): void;
export declare function insertItemsBeforeRegex(tree: Tree, path: string, insertItems: string[], regexp: RegExp, splitter: string): void;
export declare function insertItemsAfterRegex(tree: Tree, path: string, insertItems: string[], regexp: RegExp, splitter: string): void;
export declare function getInsertContent(insertItems: string[], splitter: string): string;
export declare function removeDuplicates(insertItems: string[], content: string, splitter: string): string[];
export declare function decode(tree: Tree, projectNs: Names): void;
