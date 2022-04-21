import { Tree } from '@nrwl/devkit';
import { GeneratorOptions } from './schema';
export default function (tree: Tree, schema: GeneratorOptions): Promise<() => void>;
export declare function generateDomain(tree: Tree, schema: GeneratorOptions): Promise<void>;
