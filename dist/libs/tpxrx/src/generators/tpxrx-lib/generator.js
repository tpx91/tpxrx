"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLib = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const generators_1 = require("@nrwl/angular/generators");
const generator_1 = require("../tpxrx-domain/generator");
const names_functions_1 = require("../common/names.functions");
const insert_functions_1 = require("../common/insert.functions");
const util_functions_1 = require("../common/util.functions");
const path_functions_1 = require("../common/path.functions");
const template_index_functions_1 = require("../common/template-functions/template-index.functions");
const generator_2 = require("../common/generator");
function default_1(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return (0, generator_2.generatorWrapper)(tree, schema, generateLib);
    });
}
exports.default = default_1;
function generateLib(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const crud = schema.crud;
        const projectNs = (0, names_functions_1.tpxrxNames)(schema.name);
        const domainsNs = (0, names_functions_1.tpxrxNamesArray)(schema.domains);
        /*
         * generate library files
         */
        yield (0, generators_1.libraryGenerator)(tree, {
            name: `${projectNs.name}`,
        });
        (0, insert_functions_1.insertItemsToFileEnd)(tree, (0, path_functions_1.getLibIndexPath)(projectNs), [(0, template_index_functions_1.getIndexTemplate)(tree, projectNs)], '');
        /*
         * generate module file
         */
        yield (0, devkit_1.generateFiles)(tree, (0, path_functions_1.getModuleTemplatePath)(), (0, path_functions_1.getLibPath)(projectNs), Object.assign(Object.assign({}, (0, util_functions_1.toFormattedNames)(projectNs, 'project')), { tmpl: '' }));
        /*
         * generate project +state files
         */
        yield (0, devkit_1.generateFiles)(tree, (0, path_functions_1.getProjectTemplatePath)(), (0, path_functions_1.getStatePath)(projectNs), Object.assign(Object.assign({}, (0, util_functions_1.toFormattedNames)(projectNs, 'project')), { tmpl: '' }));
        yield (domainsNs === null || domainsNs === void 0 ? void 0 : domainsNs.forEach((domainNs) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield (0, generator_1.generateDomain)(tree, {
                project: projectNs.name,
                name: domainNs.fileName,
                crud,
            });
        })));
        /*
         * format files
         */
        (0, insert_functions_1.decode)(tree, projectNs);
    });
}
exports.generateLib = generateLib;
//# sourceMappingURL=generator.js.map