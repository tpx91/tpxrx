import { Tree } from '@nrwl/devkit';
export declare function getTemplate(tree: Tree, templatePath: string, substitutions: {
    [key: string]: string;
}): string;
export declare function getTemplatePath(dir: string, filename: string): string;
