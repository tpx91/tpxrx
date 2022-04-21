"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatorWrapper = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_functions_1 = require("./path.functions");
function generatorWrapper(tree, schema, generatorFct) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        (0, path_functions_1.setLibDirName)(tree);
        yield generatorFct(tree, schema);
        yield (0, devkit_1.formatFiles)(tree);
        addDependencies(tree);
        return () => {
            (0, devkit_1.installPackagesTask)(tree);
        };
    });
}
exports.generatorWrapper = generatorWrapper;
function addDependencies(tree) {
    const dependencies = {
        '@ngrx/effects': '^13.0.2',
        '@ngrx/entity': '^13.0.2',
        '@ngrx/router-store': '^13.0.2',
        '@ngrx/store': '^13.0.2',
        '@ngrx/store-devtools': '^13.0.2'
    };
    const devDependencies = {};
    (0, devkit_1.addDependenciesToPackageJson)(tree, dependencies, devDependencies);
}
//# sourceMappingURL=generator.js.map