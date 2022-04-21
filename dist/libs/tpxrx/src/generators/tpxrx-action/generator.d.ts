import { GeneratorOptions } from './schema';
import { Tree } from '@nrwl/devkit';
export default function (tree: Tree, schema: GeneratorOptions): Promise<() => void>;
export declare function generateAction(tree: Tree, schema: GeneratorOptions): Promise<void>;
