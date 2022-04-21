import { Tree } from '@nrwl/devkit';
export declare function generatorWrapper<T>(tree: Tree, schema: T, generatorFct: (tree: Tree, schema: T) => Promise<void>): Promise<() => void>;
