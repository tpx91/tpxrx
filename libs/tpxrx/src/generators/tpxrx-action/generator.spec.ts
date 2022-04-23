import {createTreeWithEmptyWorkspace} from '@nrwl/devkit/testing';
import {Tree} from '@nrwl/devkit';
import {generatorWrapper} from '../common/generator';
import {generateLib} from '../tpxrx-lib/generator';
import {generateAction} from './generator';

const domainTestActionsPath = 'libs/example/domain/src/lib/+state/test/test.actions.ts';
const domainTestActionsResetsPath = 'libs/example/domain/src/lib/+state/test/test.actions.resets.ts';
const domainTestEffectsPath = 'libs/example/domain/src/lib/+state/test/test.effects.ts';
const domainTestFacadePath = 'libs/example/domain/src/lib/+state/test/test.facade.ts';
const domainTestFacadeResetsPath = 'libs/example/domain/src/lib/+state/test/test.facade.resets.ts';
const domainTestReducerPath = 'libs/example/domain/src/lib/+state/test/test.reducer.ts';
const domainTestReducerResetsPath = 'libs/example/domain/src/lib/+state/test/test.reducer.resets.ts';
const domainTestSelectorsPath = 'libs/example/domain/src/lib/+state/test/test.selectors.ts';

describe('tpxrx domain generator', () => {
  let tree: Tree;

  const read = (path: string): string => {
    return tree.read(path).toString().replace(/\r/g, '');
  }

  beforeEach(async() => {
    tree = createTreeWithEmptyWorkspace(2);
    tree.write('.gitignore', '');
    await generatorWrapper(tree, {
      name: 'example/domain',
      domains: 'test,yeah',
      crud: true,
    }, generateLib);
  });

  it('create action fail: lib not found', async () => {
    await expect(
      generatorWrapper(tree, {
        name: 'createDooh',
        project: 'example/no-domain',
        domain: 'test',
      }, generateAction)
    ).rejects.toThrowError('project module file example/no-domain not found');
  });

  it('create action fail: domain not found', async () => {
    await expect(
      generatorWrapper(tree, {
        name: 'createDooh',
        project: 'example/domain',
        domain: 'no-test',
      }, generateAction)
    ).rejects.toThrowError('domain no-test not found');
  });

  it('create default action', async () => {
    await generatorWrapper(tree, {
      name: 'createDooh',
      project: 'example/domain',
      domain: 'test'
    }, generateAction);

    expect(tree.exists(domainTestActionsPath)).toBeTruthy();
    expect(tree.exists(domainTestActionsResetsPath)).toBeTruthy();
    expect(tree.exists(domainTestEffectsPath)).toBeTruthy();
    expect(tree.exists(domainTestFacadePath)).toBeTruthy();
    expect(tree.exists(domainTestFacadeResetsPath)).toBeTruthy();
    expect(tree.exists(domainTestReducerPath)).toBeTruthy();
    expect(tree.exists(domainTestReducerResetsPath)).toBeTruthy();
    expect(tree.exists(domainTestSelectorsPath)).toBeTruthy();

    const domainTestActionsContent = read(domainTestActionsPath);
    const domainTestActionsResetsContent = read(domainTestActionsResetsPath);
    const domainTestEffectsContent = read(domainTestEffectsPath);
    const domainTestFacadeContent = read(domainTestFacadePath);
    const domainTestFacadeResetsContent = read(domainTestFacadeResetsPath);
    const domainTestReducerContent = read(domainTestReducerPath);
    const domainTestReducerResetsContent = read(domainTestReducerResetsPath);
    const domainTestSelectorsContent = read(domainTestSelectorsPath);

    expect(domainTestActionsContent).toBe(DOMAIN_TEST_ACTIONS_DEFAULT);
    expect(domainTestActionsResetsContent).toBe(DOMAIN_TEST_ACTIONS_RESETS_DEFAULT);
    expect(domainTestEffectsContent).toBe(DOMAIN_TEST_EFFECTS_DEFAULT);
    expect(domainTestFacadeContent).toBe(DOMAIN_TEST_FACADE_DEFAULT);
    expect(domainTestFacadeResetsContent).toBe(DOMAIN_TEST_FACADE_RESETS_DEFAULT);
    expect(domainTestReducerContent).toBe(DOMAIN_TEST_REDUCER_DEFAULT);
    expect(domainTestReducerResetsContent).toBe(DOMAIN_TEST_REDUCER_RESETS_DEFAULT);
    expect(domainTestSelectorsContent).toBe(DOMAIN_TEST_SELECTORS_DEFAULT);
  });

  it('create crud action', async () => {
    await generatorWrapper(tree, {
      name: 'dooh',
      project: 'example/domain',
      domain: 'test',
      crud: true,
    }, generateAction);

    expect(tree.exists(domainTestActionsPath)).toBeTruthy();
    expect(tree.exists(domainTestActionsResetsPath)).toBeTruthy();
    expect(tree.exists(domainTestEffectsPath)).toBeTruthy();
    expect(tree.exists(domainTestFacadePath)).toBeTruthy();
    expect(tree.exists(domainTestFacadeResetsPath)).toBeTruthy();
    expect(tree.exists(domainTestReducerPath)).toBeTruthy();
    expect(tree.exists(domainTestReducerResetsPath)).toBeTruthy();
    expect(tree.exists(domainTestSelectorsPath)).toBeTruthy();

    const domainTestActionsContent = read(domainTestActionsPath);
    const domainTestActionsResetsContent = read(domainTestActionsResetsPath);
    const domainTestEffectsContent = read(domainTestEffectsPath);
    const domainTestFacadeContent = read(domainTestFacadePath);
    const domainTestFacadeResetsContent = read(domainTestFacadeResetsPath);
    const domainTestReducerContent = read(domainTestReducerPath);
    const domainTestReducerResetsContent = read(domainTestReducerResetsPath);
    const domainTestSelectorsContent = read(domainTestSelectorsPath);

    expect(domainTestActionsContent).toBe(DOMAIN_TEST_ACTIONS);
    expect(domainTestActionsResetsContent).toBe(DOMAIN_TEST_ACTIONS_RESETS);
    expect(domainTestEffectsContent).toBe(DOMAIN_TEST_EFFECTS);
    expect(domainTestFacadeContent).toBe(DOMAIN_TEST_FACADE);
    expect(domainTestFacadeResetsContent).toBe(DOMAIN_TEST_FACADE_RESETS);
    expect(domainTestReducerContent).toBe(DOMAIN_TEST_REDUCER);
    expect(domainTestReducerResetsContent).toBe(DOMAIN_TEST_REDUCER_RESETS);
    expect(domainTestSelectorsContent).toBe(DOMAIN_TEST_SELECTORS);
  });
});

const DOMAIN_TEST_ACTIONS_DEFAULT = 'import { createAction, props } from \'@ngrx/store\';\n\n' +
  '/*\n' +
  ' * loadTestList\n' +
  ' */\n' +
  'export const loadTestList = createAction(\n' +
  '  \'[ExampleDomain] loadTestList\',\n' +
  '  props<{ id: string }>()\n' +
  ');\n' +
  'export const loadTestListSuccess = createAction(\n' +
  '  \'[ExampleDomain] loadTestListSuccess\',\n' +
  '  props<{ testList: Test[] }>()\n' +
  ');\n' +
  'export const loadTestListFailure = createAction(\n' +
  '  \'[ExampleDomain] loadTestListFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * loadTestById\n' +
  ' */\n' +
  'export const loadTestById = createAction(\n' +
  '  \'[ExampleDomain] loadTestById\',\n' +
  '  props<{ testId: string }>()\n' +
  ');\n' +
  'export const loadTestByIdSuccess = createAction(\n' +
  '  \'[ExampleDomain] loadTestByIdSuccess\',\n' +
  '  props<{ test: Test }>()\n' +
  ');\n' +
  'export const loadTestByIdFailure = createAction(\n' +
  '  \'[ExampleDomain] loadTestByIdFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * createTest\n' +
  ' */\n' +
  'export const createTest = createAction(\n' +
  '  \'[ExampleDomain] createTest\',\n' +
  '  props<{ test: Test }>()\n' +
  ');\n' +
  'export const createTestSuccess = createAction(\n' +
  '  \'[ExampleDomain] createTestSuccess\',\n' +
  '  props<{ test: Test }>()\n' +
  ');\n' +
  'export const createTestFailure = createAction(\n' +
  '  \'[ExampleDomain] createTestFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * updateTest\n' +
  ' */\n' +
  'export const updateTest = createAction(\n' +
  '  \'[ExampleDomain] updateTest\',\n' +
  '  props<{ testId: string; test: Test }>()\n' +
  ');\n' +
  'export const updateTestSuccess = createAction(\n' +
  '  \'[ExampleDomain] updateTestSuccess\',\n' +
  '  props<{ test: Test }>()\n' +
  ');\n' +
  'export const updateTestFailure = createAction(\n' +
  '  \'[ExampleDomain] updateTestFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * deleteTest\n' +
  ' */\n' +
  'export const deleteTest = createAction(\n' +
  '  \'[ExampleDomain] deleteTest\',\n' +
  '  props<{ testId: string }>()\n' +
  ');\n' +
  'export const deleteTestSuccess = createAction(\n' +
  '  \'[ExampleDomain] deleteTestSuccess\',\n' +
  '  props<{ testId: string }>()\n' +
  ');\n' +
  'export const deleteTestFailure = createAction(\n' +
  '  \'[ExampleDomain] deleteTestFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * createDooh\n' +
  ' */\n' +
  'export const createDooh = createAction(\n' +
  '  \'[ExampleDomain] createDooh\',\n' +
  ');\n' +
  'export const createDoohSuccess = createAction(\n' +
  '  \'[ExampleDomain] createDoohSuccess\',\n' +
  ');\n' +
  'export const createDoohFailure = createAction(\n' +
  '  \'[ExampleDomain] createDoohFailure\',\n' +
  ');\n\n';

const DOMAIN_TEST_ACTIONS =
  'import { createAction, props } from \'@ngrx/store\';\n\n' +
  '/*\n' +
  ' * loadTestList\n' +
  ' */\n' +
  'export const loadTestList = createAction(\n' +
  '  \'[ExampleDomain] loadTestList\',\n' +
  '  props<{ id: string }>()\n' +
  ');\n' +
  'export const loadTestListSuccess = createAction(\n' +
  '  \'[ExampleDomain] loadTestListSuccess\',\n' +
  '  props<{ testList: Test[] }>()\n' +
  ');\n' +
  'export const loadTestListFailure = createAction(\n' +
  '  \'[ExampleDomain] loadTestListFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * loadTestById\n' +
  ' */\n' +
  'export const loadTestById = createAction(\n' +
  '  \'[ExampleDomain] loadTestById\',\n' +
  '  props<{ testId: string }>()\n' +
  ');\n' +
  'export const loadTestByIdSuccess = createAction(\n' +
  '  \'[ExampleDomain] loadTestByIdSuccess\',\n' +
  '  props<{ test: Test }>()\n' +
  ');\n' +
  'export const loadTestByIdFailure = createAction(\n' +
  '  \'[ExampleDomain] loadTestByIdFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * createTest\n' +
  ' */\n' +
  'export const createTest = createAction(\n' +
  '  \'[ExampleDomain] createTest\',\n' +
  '  props<{ test: Test }>()\n' +
  ');\n' +
  'export const createTestSuccess = createAction(\n' +
  '  \'[ExampleDomain] createTestSuccess\',\n' +
  '  props<{ test: Test }>()\n' +
  ');\n' +
  'export const createTestFailure = createAction(\n' +
  '  \'[ExampleDomain] createTestFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * updateTest\n' +
  ' */\n' +
  'export const updateTest = createAction(\n' +
  '  \'[ExampleDomain] updateTest\',\n' +
  '  props<{ testId: string; test: Test }>()\n' +
  ');\n' +
  'export const updateTestSuccess = createAction(\n' +
  '  \'[ExampleDomain] updateTestSuccess\',\n' +
  '  props<{ test: Test }>()\n' +
  ');\n' +
  'export const updateTestFailure = createAction(\n' +
  '  \'[ExampleDomain] updateTestFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * deleteTest\n' +
  ' */\n' +
  'export const deleteTest = createAction(\n' +
  '  \'[ExampleDomain] deleteTest\',\n' +
  '  props<{ testId: string }>()\n' +
  ');\n' +
  'export const deleteTestSuccess = createAction(\n' +
  '  \'[ExampleDomain] deleteTestSuccess\',\n' +
  '  props<{ testId: string }>()\n' +
  ');\n' +
  'export const deleteTestFailure = createAction(\n' +
  '  \'[ExampleDomain] deleteTestFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * loadDoohList\n' +
  ' */\n' +
  'export const loadDoohList = createAction(\n' +
  '  \'[ExampleDomain] loadDoohList\',\n' +
  '  props<{ id: string }>()\n' +
  ');\n' +
  'export const loadDoohListSuccess = createAction(\n' +
  '  \'[ExampleDomain] loadDoohListSuccess\',\n' +
  '  props<{ doohList: Dooh[] }>()\n' +
  ');\n' +
  'export const loadDoohListFailure = createAction(\n' +
  '  \'[ExampleDomain] loadDoohListFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * loadDoohById\n' +
  ' */\n' +
  'export const loadDoohById = createAction(\n' +
  '  \'[ExampleDomain] loadDoohById\',\n' +
  '  props<{ doohId: string }>()\n' +
  ');\n' +
  'export const loadDoohByIdSuccess = createAction(\n' +
  '  \'[ExampleDomain] loadDoohByIdSuccess\',\n' +
  '  props<{ dooh: Dooh }>()\n' +
  ');\n' +
  'export const loadDoohByIdFailure = createAction(\n' +
  '  \'[ExampleDomain] loadDoohByIdFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * createDooh\n' +
  ' */\n' +
  'export const createDooh = createAction(\n' +
  '  \'[ExampleDomain] createDooh\',\n' +
  '  props<{ dooh: Dooh }>()\n' +
  ');\n' +
  'export const createDoohSuccess = createAction(\n' +
  '  \'[ExampleDomain] createDoohSuccess\',\n' +
  '  props<{ dooh: Dooh }>()\n' +
  ');\n' +
  'export const createDoohFailure = createAction(\n' +
  '  \'[ExampleDomain] createDoohFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * updateDooh\n' +
  ' */\n' +
  'export const updateDooh = createAction(\n' +
  '  \'[ExampleDomain] updateDooh\',\n' +
  '  props<{ doohId: string; dooh: Dooh }>()\n' +
  ');\n' +
  'export const updateDoohSuccess = createAction(\n' +
  '  \'[ExampleDomain] updateDoohSuccess\',\n' +
  '  props<{ dooh: Dooh }>()\n' +
  ');\n' +
  'export const updateDoohFailure = createAction(\n' +
  '  \'[ExampleDomain] updateDoohFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * deleteDooh\n' +
  ' */\n' +
  'export const deleteDooh = createAction(\n' +
  '  \'[ExampleDomain] deleteDooh\',\n' +
  '  props<{ doohId: string }>()\n' +
  ');\n' +
  'export const deleteDoohSuccess = createAction(\n' +
  '  \'[ExampleDomain] deleteDoohSuccess\',\n' +
  '  props<{ doohId: string }>()\n' +
  ');\n' +
  'export const deleteDoohFailure = createAction(\n' +
  '  \'[ExampleDomain] deleteDoohFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n';

const DOMAIN_TEST_ACTIONS_RESETS_DEFAULT = 'import { createAction } from \'@ngrx/store\';\n\n' +
  '/*\n' +
  ' * resetTest\n' +
  ' */\n' +
  'export const resetTest = createAction(\n' +
  '  \'[ExampleDomain] resetTest\',\n' +
  ');\n\n' +
  '/*\n' +
  ' * resetTestList\n' +
  ' */\n' +
  'export const resetTestList = createAction(\n' +
  '  \'[ExampleDomain] resetTestList\',\n' +
  ');\n\n' +
  '/*\n' +
  ' * resetTestAssets\n' +
  ' */\n' +
  'export const resetTestAssets = createAction(\n' +
  '  \'[ExampleDomain] resetTestAssets\'\n' +
  ');\n';

const DOMAIN_TEST_ACTIONS_RESETS = 'import { createAction } from \'@ngrx/store\';\n\n' +
  '/*\n' +
  ' * resetTest\n' +
  ' */\n' +
  'export const resetTest = createAction(\n' +
  '  \'[ExampleDomain] resetTest\',\n' +
  ');\n\n' +
  '/*\n' +
  ' * resetTestList\n' +
  ' */\n' +
  'export const resetTestList = createAction(\n' +
  '  \'[ExampleDomain] resetTestList\',\n' +
  ');\n\n' +
  '/*\n' +
  ' * resetDooh\n' +
  ' */\n' +
  'export const resetDooh = createAction(\n' +
  '  \'[ExampleDomain] resetDooh\',\n' +
  ');\n\n' +
  '/*\n' +
  ' * resetDoohList\n' +
  ' */\n' +
  'export const resetDoohList = createAction(\n' +
  '  \'[ExampleDomain] resetDoohList\',\n' +
  ');\n\n' +
  '/*\n' +
  ' * resetTestAssets\n' +
  ' */\n' +
  'export const resetTestAssets = createAction(\n' +
  '  \'[ExampleDomain] resetTestAssets\'\n' +
  ');\n';

const DOMAIN_TEST_EFFECTS_DEFAULT = 'import {act, Actions, createEffect, ofType} from \'@ngrx/effects\';\n' +
  'import * as TestActions from \'./test.actions\';\n' +
  'import {catchError, map, switchMap} from \'rxjs/operators\';\n' +
  'import {of} from \'rxjs\';\n' +
  'import {Injectable} from \'@angular/core\';\n\n' +
  '@Injectable()\n' +
  'export class TestEffects {\n' +
  '  loadTestList$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.loadTestList),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.loadTestList().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.loadTestListSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.loadTestListFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'loadTestById$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.loadTestById),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.loadTestById().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.loadTestByIdSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.loadTestByIdFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'createTest$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.createTest),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.createTest().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.createTestSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.createTestFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'updateTest$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.updateTest),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.updateTest().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.updateTestSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.updateTestFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'deleteTest$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.deleteTest),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.deleteTest().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.deleteTestSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.deleteTestFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'createDooh$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.createDooh),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.createDooh().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.createDoohSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.createDoohFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'constructor(private actions$: Actions,private testService: TestService,) {\n' +
  '  }\n' +
  '}\n';

const DOMAIN_TEST_EFFECTS =
  'import {act, Actions, createEffect, ofType} from \'@ngrx/effects\';\n' +
  'import * as TestActions from \'./test.actions\';\n' +
  'import {catchError, map, switchMap} from \'rxjs/operators\';\n' +
  'import {of} from \'rxjs\';\n' +
  'import {Injectable} from \'@angular/core\';\n\n' +
  '@Injectable()\n' +
  'export class TestEffects {\n' +
  '  loadTestList$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.loadTestList),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.loadTestList().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.loadTestListSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.loadTestListFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'loadTestById$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.loadTestById),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.loadTestById().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.loadTestByIdSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.loadTestByIdFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'createTest$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.createTest),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.createTest().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.createTestSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.createTestFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'updateTest$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.updateTest),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.updateTest().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.updateTestSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.updateTestFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'deleteTest$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.deleteTest),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.deleteTest().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.deleteTestSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.deleteTestFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'loadDoohList$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.loadDoohList),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.loadDoohList().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.loadDoohListSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.loadDoohListFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'loadDoohById$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.loadDoohById),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.loadDoohById().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.loadDoohByIdSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.loadDoohByIdFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'createDooh$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.createDooh),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.createDooh().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.createDoohSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.createDoohFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'updateDooh$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.updateDooh),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.updateDooh().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.updateDoohSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.updateDoohFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'deleteDooh$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(TestActions.deleteDooh),\n' +
  '    switchMap((act) =>\n' +
  '      this.testService.deleteDooh().pipe(\n' +
  '        map(() =>\n' +
  '          TestActions.deleteDoohSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            TestActions.deleteDoohFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'constructor(private actions$: Actions,private testService: TestService,) {\n' +
  '  }\n' +
  '}\n';

const DOMAIN_TEST_FACADE_DEFAULT = 'import { Injectable } from \'@angular/core\';\n' +
  'import { select, Store } from \'@ngrx/store\';\n' +
  'import * as TestSelectors from \'./test.selectors\';\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\n' +
  'import * as TestActions from \'./test.actions\';\n' +
  'import {TestResetsFacade} from \'./test.facade.resets\';\n\n' +
  '@Injectable()\n' +
  'export class TestFacade extends TestResetsFacade {\n' +
  '  test$ = this.store.pipe(select(TestSelectors.getTest));testList$ = this.store.pipe(select(TestSelectors.getTestList));loadTestListPending$ = this.store.pipe(select(TestSelectors.getLoadTestListPending));loadTestListSuccess$ = this.store.pipe(select(TestSelectors.getLoadTestListSuccess));loadTestListFailure$ = this.store.pipe(select(TestSelectors.getLoadTestListFailure));loadTestByIdPending$ = this.store.pipe(select(TestSelectors.getLoadTestByIdPending));loadTestByIdSuccess$ = this.store.pipe(select(TestSelectors.getLoadTestByIdSuccess));loadTestByIdFailure$ = this.store.pipe(select(TestSelectors.getLoadTestByIdFailure));createTestPending$ = this.store.pipe(select(TestSelectors.getCreateTestPending));createTestSuccess$ = this.store.pipe(select(TestSelectors.getCreateTestSuccess));createTestFailure$ = this.store.pipe(select(TestSelectors.getCreateTestFailure));updateTestPending$ = this.store.pipe(select(TestSelectors.getUpdateTestPending));updateTestSuccess$ = this.store.pipe(select(TestSelectors.getUpdateTestSuccess));updateTestFailure$ = this.store.pipe(select(TestSelectors.getUpdateTestFailure));deleteTestPending$ = this.store.pipe(select(TestSelectors.getDeleteTestPending));deleteTestSuccess$ = this.store.pipe(select(TestSelectors.getDeleteTestSuccess));deleteTestFailure$ = this.store.pipe(select(TestSelectors.getDeleteTestFailure));createDoohPending$ = this.store.pipe(select(TestSelectors.getCreateDoohPending));createDoohSuccess$ = this.store.pipe(select(TestSelectors.getCreateDoohSuccess));createDoohFailure$ = this.store.pipe(select(TestSelectors.getCreateDoohFailure));loadTestList(id: string) {\n' +
  '  this.dispatch(TestActions.loadTestList({ id }));\n' +
  '}\n\n' +
  'loadTestById(testId: string) {\n' +
  '  this.dispatch(TestActions.loadTestById({ testId }));\n' +
  '}\n\n' +
  'createTest(test: Test) {\n' +
  '  this.dispatch(TestActions.createTest({ test }));\n' +
  '}\n\n' +
  'updateTest(testId: string, test: Test) {\n' +
  '  this.dispatch(TestActions.updateTest({ testId, test }));\n' +
  '}\n\n' +
  'deleteTest(testId: string) {\n' +
  '  this.dispatch(TestActions.deleteTest({ testId }));\n' +
  '}\n\n' +
  'createDooh() {\n' +
  '  this.dispatch(TestActions.createDooh({  }));\n' +
  '}\n\n' +
  'constructor(\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\n' +
  '  ) {\n' +
  '    super(store);\n' +
  '  }\n' +
  '}\n';

const DOMAIN_TEST_FACADE = 'import { Injectable } from \'@angular/core\';\n' +
  'import { select, Store } from \'@ngrx/store\';\n' +
  'import * as TestSelectors from \'./test.selectors\';\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\n' +
  'import * as TestActions from \'./test.actions\';\n' +
  'import {TestResetsFacade} from \'./test.facade.resets\';\n\n' +
  '@Injectable()\n' +
  'export class TestFacade extends TestResetsFacade {\n' +
  '  test$ = this.store.pipe(select(TestSelectors.getTest));testList$ = this.store.pipe(select(TestSelectors.getTestList));loadTestListPending$ = this.store.pipe(select(TestSelectors.getLoadTestListPending));loadTestListSuccess$ = this.store.pipe(select(TestSelectors.getLoadTestListSuccess));loadTestListFailure$ = this.store.pipe(select(TestSelectors.getLoadTestListFailure));loadTestByIdPending$ = this.store.pipe(select(TestSelectors.getLoadTestByIdPending));loadTestByIdSuccess$ = this.store.pipe(select(TestSelectors.getLoadTestByIdSuccess));loadTestByIdFailure$ = this.store.pipe(select(TestSelectors.getLoadTestByIdFailure));createTestPending$ = this.store.pipe(select(TestSelectors.getCreateTestPending));createTestSuccess$ = this.store.pipe(select(TestSelectors.getCreateTestSuccess));createTestFailure$ = this.store.pipe(select(TestSelectors.getCreateTestFailure));updateTestPending$ = this.store.pipe(select(TestSelectors.getUpdateTestPending));updateTestSuccess$ = this.store.pipe(select(TestSelectors.getUpdateTestSuccess));updateTestFailure$ = this.store.pipe(select(TestSelectors.getUpdateTestFailure));deleteTestPending$ = this.store.pipe(select(TestSelectors.getDeleteTestPending));deleteTestSuccess$ = this.store.pipe(select(TestSelectors.getDeleteTestSuccess));deleteTestFailure$ = this.store.pipe(select(TestSelectors.getDeleteTestFailure));dooh$ = this.store.pipe(select(TestSelectors.getDooh));doohList$ = this.store.pipe(select(TestSelectors.getDoohList));loadDoohListPending$ = this.store.pipe(select(TestSelectors.getLoadDoohListPending));loadDoohListSuccess$ = this.store.pipe(select(TestSelectors.getLoadDoohListSuccess));loadDoohListFailure$ = this.store.pipe(select(TestSelectors.getLoadDoohListFailure));loadDoohByIdPending$ = this.store.pipe(select(TestSelectors.getLoadDoohByIdPending));loadDoohByIdSuccess$ = this.store.pipe(select(TestSelectors.getLoadDoohByIdSuccess));loadDoohByIdFailure$ = this.store.pipe(select(TestSelectors.getLoadDoohByIdFailure));createDoohPending$ = this.store.pipe(select(TestSelectors.getCreateDoohPending));createDoohSuccess$ = this.store.pipe(select(TestSelectors.getCreateDoohSuccess));createDoohFailure$ = this.store.pipe(select(TestSelectors.getCreateDoohFailure));updateDoohPending$ = this.store.pipe(select(TestSelectors.getUpdateDoohPending));updateDoohSuccess$ = this.store.pipe(select(TestSelectors.getUpdateDoohSuccess));updateDoohFailure$ = this.store.pipe(select(TestSelectors.getUpdateDoohFailure));deleteDoohPending$ = this.store.pipe(select(TestSelectors.getDeleteDoohPending));deleteDoohSuccess$ = this.store.pipe(select(TestSelectors.getDeleteDoohSuccess));deleteDoohFailure$ = this.store.pipe(select(TestSelectors.getDeleteDoohFailure));loadTestList(id: string) {\n' +
  '  this.dispatch(TestActions.loadTestList({ id }));\n' +
  '}\n\n' +
  'loadTestById(testId: string) {\n' +
  '  this.dispatch(TestActions.loadTestById({ testId }));\n' +
  '}\n\n' +
  'createTest(test: Test) {\n' +
  '  this.dispatch(TestActions.createTest({ test }));\n' +
  '}\n\n' +
  'updateTest(testId: string, test: Test) {\n' +
  '  this.dispatch(TestActions.updateTest({ testId, test }));\n' +
  '}\n\n' +
  'deleteTest(testId: string) {\n' +
  '  this.dispatch(TestActions.deleteTest({ testId }));\n' +
  '}\n\n' +
  'loadDoohList(id: string) {\n' +
  '  this.dispatch(TestActions.loadDoohList({ id }));\n' +
  '}\n\n' +
  'loadDoohById(doohId: string) {\n' +
  '  this.dispatch(TestActions.loadDoohById({ doohId }));\n' +
  '}\n\n' +
  'createDooh(dooh: Dooh) {\n' +
  '  this.dispatch(TestActions.createDooh({ dooh }));\n' +
  '}\n\n' +
  'updateDooh(doohId: string, dooh: Dooh) {\n' +
  '  this.dispatch(TestActions.updateDooh({ doohId, dooh }));\n' +
  '}\n\n' +
  'deleteDooh(doohId: string) {\n' +
  '  this.dispatch(TestActions.deleteDooh({ doohId }));\n' +
  '}\n\n' +
  'constructor(\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\n' +
  '  ) {\n' +
  '    super(store);\n' +
  '  }\n' +
  '}\n';

const DOMAIN_TEST_FACADE_RESETS_DEFAULT = 'import { Injectable } from \'@angular/core\';\n' +
  'import { Action, Store } from \'@ngrx/store\';\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\n' +
  'import * as TestResetsActions from \'./test.actions.resets\';\n\n' +
  '@Injectable()\n' +
  'export class TestResetsFacade {\n' +
  '  resetTest() {\n' +
  '  this.dispatch(TestResetsActions.resetTest());\n' +
  '}\n\n' +
  'resetTestList() {\n' +
  '  this.dispatch(TestResetsActions.resetTestList());\n' +
  '}\n\n' +
  'resetTestAssets() {\n' +
  '    this.dispatch(TestResetsActions.resetTestAssets());\n' +
  '  }\n\n' +
  '  constructor(\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\n' +
  '  ) {}\n\n' +
  '  protected dispatch(action: Action) {\n' +
  '    this.store.dispatch(action);\n' +
  '  }\n' +
  '}\n';

const DOMAIN_TEST_FACADE_RESETS = 'import { Injectable } from \'@angular/core\';\n' +
  'import { Action, Store } from \'@ngrx/store\';\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\n' +
  'import * as TestResetsActions from \'./test.actions.resets\';\n\n' +
  '@Injectable()\n' +
  'export class TestResetsFacade {\n' +
  '  resetTest() {\n' +
  '  this.dispatch(TestResetsActions.resetTest());\n' +
  '}\n\n' +
  'resetTestList() {\n' +
  '  this.dispatch(TestResetsActions.resetTestList());\n' +
  '}\n\n' +
  'resetDooh() {\n' +
  '  this.dispatch(TestResetsActions.resetDooh());\n' +
  '}\n\n' +
  'resetDoohList() {\n' +
  '  this.dispatch(TestResetsActions.resetDoohList());\n' +
  '}\n\n' +
  'resetTestAssets() {\n' +
  '    this.dispatch(TestResetsActions.resetTestAssets());\n' +
  '  }\n\n' +
  '  constructor(\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\n' +
  '  ) {}\n\n' +
  '  protected dispatch(action: Action) {\n' +
  '    this.store.dispatch(action);\n' +
  '  }\n' +
  '}\n';

const DOMAIN_TEST_REDUCER_DEFAULT = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\n' +
  'import * as TestActions from \'./test.actions\';\n' +
  'import {getTestResetsOns} from \'./test.reducer.resets\';\n' +
  'import {replaceArrayItem} from \'@tpx1/util\';\n\n' +
  'export interface TestState {test?: Test;testList?: Test[];loadTestListPending?: boolean;\n' +
  'loadTestListSuccess?: boolean;\n' +
  'loadTestListFailure?: Error;loadTestByIdPending?: boolean;\n' +
  'loadTestByIdSuccess?: boolean;\n' +
  'loadTestByIdFailure?: Error;createTestPending?: boolean;\n' +
  'createTestSuccess?: boolean;\n' +
  'createTestFailure?: Error;updateTestPending?: boolean;\n' +
  'updateTestSuccess?: boolean;\n' +
  'updateTestFailure?: Error;deleteTestPending?: boolean;\n' +
  'deleteTestSuccess?: boolean;\n' +
  'deleteTestFailure?: Error;createDoohPending?: boolean;\n' +
  'createDoohSuccess?: boolean;\n' +
  'createDoohFailure?: Error;}\n\n' +
  'export const testInitialState: TestState = {\n' +
  '   // Use carefully! testInitialState should be empty.\n' +
  '   // Arrays should be initiated with undefined or null to differ between unloaded array and loaded empty array.\n' +
  '};\n\n' +
  'export function getTestOns<T extends TestState>(): ReducerTypes<T, ActionCreator[]>[] {\n' +
  '  return [...getTestResetsOns<T>(),\n\n' +
  '/*\n' +
  ' * loadTestList\n' +
  ' */\n' +
  'on(TestActions.loadTestList, (state) => ({\n' +
  '  ...state,\n' +
  '  testList: null,\n' +
  '  loadTestListPending: true,\n' +
  '  loadTestListSuccess: false,\n' +
  '  loadTestListFailure: null,\n' +
  '})),\n' +
  'on(TestActions.loadTestListSuccess, (state, {testList}) => ({\n' +
  '  ...state,\n' +
  '  testList: testList,\n' +
  '  loadTestListPending: false,\n' +
  '  loadTestListSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.loadTestListFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  loadTestListPending: false,\n' +
  '  loadTestListFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * loadTestById\n' +
  ' */\n' +
  'on(TestActions.loadTestById, (state) => ({\n' +
  '  ...state,\n' +
  '  test: null,\n' +
  '  loadTestByIdPending: true,\n' +
  '  loadTestByIdSuccess: false,\n' +
  '  loadTestByIdFailure: null,\n' +
  '})),\n' +
  'on(TestActions.loadTestByIdSuccess, (state, {test}) => ({\n' +
  '  ...state,\n' +
  '  test: test,\n' +
  '  loadTestByIdPending: false,\n' +
  '  loadTestByIdSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.loadTestByIdFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  loadTestByIdPending: false,\n' +
  '  loadTestByIdFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * createTest\n' +
  ' */\n' +
  'on(TestActions.createTest, (state) => ({\n' +
  '  ...state,\n' +
  '  createTestPending: true,\n' +
  '  createTestSuccess: false,\n' +
  '  createTestFailure: null,\n' +
  '})),\n' +
  'on(TestActions.createTestSuccess, (state, {test}) => ({\n' +
  '  ...state,\n' +
  '  test: test,\n' +
  '  testList: [...(state.testList || []), test],\n' +
  '  createTestPending: false,\n' +
  '  createTestSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.createTestFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  createTestPending: false,\n' +
  '  createTestFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * updateTest\n' +
  ' */\n' +
  'on(TestActions.updateTest, (state) => ({\n' +
  '  ...state,\n' +
  '  updateTestPending: true,\n' +
  '  updateTestSuccess: false,\n' +
  '  updateTestFailure: null,\n' +
  '})),\n' +
  'on(TestActions.updateTestSuccess, (state, {test}) => ({\n' +
  '  ...state,\n' +
  '  test: test,\n' +
  '  testList: replaceArrayItem(state.testList, test, \'id\'),\n' +
  '  updateTestPending: false,\n' +
  '  updateTestSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.updateTestFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  updateTestPending: false,\n' +
  '  updateTestFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * deleteTest\n' +
  ' */\n' +
  'on(TestActions.deleteTest, (state) => ({\n' +
  '  ...state,\n' +
  '  deleteTestPending: true,\n' +
  '  deleteTestSuccess: false,\n' +
  '  deleteTestFailure: null,\n' +
  '})),\n' +
  'on(TestActions.deleteTestSuccess, (state, {testId}) => ({\n' +
  '  ...state,\n' +
  '  testList: [...state.testList?.filter(v => v.id !== testId) || []],\n' +
  '  deleteTestPending: false,\n' +
  '  deleteTestSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.deleteTestFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  deleteTestPending: false,\n' +
  '  deleteTestFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * createDooh\n' +
  ' */\n' +
  'on(TestActions.createDooh, (state) => ({\n' +
  '  ...state,\n' +
  '  createDoohPending: true,\n' +
  '  createDoohSuccess: false,\n' +
  '  createDoohFailure: null,\n' +
  '})),\n' +
  'on(TestActions.createDoohSuccess, (state) => ({\n' +
  '  ...state,\n' +
  '  createDoohPending: false,\n' +
  '  createDoohSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.createDoohFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  createDoohPending: false,\n' +
  '  createDoohFailure: error,\n' +
  '})),\n\n' +
  '];\n' +
  '}\n';

const DOMAIN_TEST_REDUCER = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\n' +
  'import * as TestActions from \'./test.actions\';\n' +
  'import {getTestResetsOns} from \'./test.reducer.resets\';\n' +
  'import {replaceArrayItem} from \'@tpx1/util\';\n\n' +
  'export interface TestState {test?: Test;testList?: Test[];loadTestListPending?: boolean;\n' +
  'loadTestListSuccess?: boolean;\n' +
  'loadTestListFailure?: Error;loadTestByIdPending?: boolean;\n' +
  'loadTestByIdSuccess?: boolean;\n' +
  'loadTestByIdFailure?: Error;createTestPending?: boolean;\n' +
  'createTestSuccess?: boolean;\n' +
  'createTestFailure?: Error;updateTestPending?: boolean;\n' +
  'updateTestSuccess?: boolean;\n' +
  'updateTestFailure?: Error;deleteTestPending?: boolean;\n' +
  'deleteTestSuccess?: boolean;\n' +
  'deleteTestFailure?: Error;dooh?: Dooh;doohList?: Dooh[];loadDoohListPending?: boolean;\n' +
'loadDoohListSuccess?: boolean;\n' +
'loadDoohListFailure?: Error;loadDoohByIdPending?: boolean;\n' +
'loadDoohByIdSuccess?: boolean;\n' +
'loadDoohByIdFailure?: Error;createDoohPending?: boolean;\n' +
'createDoohSuccess?: boolean;\n' +
'createDoohFailure?: Error;updateDoohPending?: boolean;\n' +
'updateDoohSuccess?: boolean;\n' +
'updateDoohFailure?: Error;deleteDoohPending?: boolean;\n' +
'deleteDoohSuccess?: boolean;\n' +
'deleteDoohFailure?: Error;}\n\n' +
  'export const testInitialState: TestState = {\n' +
  '   // Use carefully! testInitialState should be empty.\n' +
  '   // Arrays should be initiated with undefined or null to differ between unloaded array and loaded empty array.\n' +
  '};\n\n' +
  'export function getTestOns<T extends TestState>(): ReducerTypes<T, ActionCreator[]>[] {\n' +
  '  return [...getTestResetsOns<T>(),\n\n' +
  '/*\n' +
  ' * loadTestList\n' +
  ' */\n' +
  'on(TestActions.loadTestList, (state) => ({\n' +
  '  ...state,\n' +
  '  testList: null,\n' +
  '  loadTestListPending: true,\n' +
  '  loadTestListSuccess: false,\n' +
  '  loadTestListFailure: null,\n' +
  '})),\n' +
  'on(TestActions.loadTestListSuccess, (state, {testList}) => ({\n' +
  '  ...state,\n' +
  '  testList: testList,\n' +
  '  loadTestListPending: false,\n' +
  '  loadTestListSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.loadTestListFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  loadTestListPending: false,\n' +
  '  loadTestListFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * loadTestById\n' +
  ' */\n' +
  'on(TestActions.loadTestById, (state) => ({\n' +
  '  ...state,\n' +
  '  test: null,\n' +
  '  loadTestByIdPending: true,\n' +
  '  loadTestByIdSuccess: false,\n' +
  '  loadTestByIdFailure: null,\n' +
  '})),\n' +
  'on(TestActions.loadTestByIdSuccess, (state, {test}) => ({\n' +
  '  ...state,\n' +
  '  test: test,\n' +
  '  loadTestByIdPending: false,\n' +
  '  loadTestByIdSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.loadTestByIdFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  loadTestByIdPending: false,\n' +
  '  loadTestByIdFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * createTest\n' +
  ' */\n' +
  'on(TestActions.createTest, (state) => ({\n' +
  '  ...state,\n' +
  '  createTestPending: true,\n' +
  '  createTestSuccess: false,\n' +
  '  createTestFailure: null,\n' +
  '})),\n' +
  'on(TestActions.createTestSuccess, (state, {test}) => ({\n' +
  '  ...state,\n' +
  '  test: test,\n' +
  '  testList: [...(state.testList || []), test],\n' +
  '  createTestPending: false,\n' +
  '  createTestSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.createTestFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  createTestPending: false,\n' +
  '  createTestFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * updateTest\n' +
  ' */\n' +
  'on(TestActions.updateTest, (state) => ({\n' +
  '  ...state,\n' +
  '  updateTestPending: true,\n' +
  '  updateTestSuccess: false,\n' +
  '  updateTestFailure: null,\n' +
  '})),\n' +
  'on(TestActions.updateTestSuccess, (state, {test}) => ({\n' +
  '  ...state,\n' +
  '  test: test,\n' +
  '  testList: replaceArrayItem(state.testList, test, \'id\'),\n' +
  '  updateTestPending: false,\n' +
  '  updateTestSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.updateTestFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  updateTestPending: false,\n' +
  '  updateTestFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * deleteTest\n' +
  ' */\n' +
  'on(TestActions.deleteTest, (state) => ({\n' +
  '  ...state,\n' +
  '  deleteTestPending: true,\n' +
  '  deleteTestSuccess: false,\n' +
  '  deleteTestFailure: null,\n' +
  '})),\n' +
  'on(TestActions.deleteTestSuccess, (state, {testId}) => ({\n' +
  '  ...state,\n' +
  '  testList: [...state.testList?.filter(v => v.id !== testId) || []],\n' +
  '  deleteTestPending: false,\n' +
  '  deleteTestSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.deleteTestFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  deleteTestPending: false,\n' +
  '  deleteTestFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * loadDoohList\n' +
  ' */\n' +
  'on(TestActions.loadDoohList, (state) => ({\n' +
  '  ...state,\n' +
  '  doohList: null,\n' +
  '  loadDoohListPending: true,\n' +
  '  loadDoohListSuccess: false,\n' +
  '  loadDoohListFailure: null,\n' +
  '})),\n' +
  'on(TestActions.loadDoohListSuccess, (state, {doohList}) => ({\n' +
  '  ...state,\n' +
  '  doohList: doohList,\n' +
  '  loadDoohListPending: false,\n' +
  '  loadDoohListSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.loadDoohListFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  loadDoohListPending: false,\n' +
  '  loadDoohListFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * loadDoohById\n' +
  ' */\n' +
  'on(TestActions.loadDoohById, (state) => ({\n' +
  '  ...state,\n' +
  '  dooh: null,\n' +
  '  loadDoohByIdPending: true,\n' +
  '  loadDoohByIdSuccess: false,\n' +
  '  loadDoohByIdFailure: null,\n' +
  '})),\n' +
  'on(TestActions.loadDoohByIdSuccess, (state, {dooh}) => ({\n' +
  '  ...state,\n' +
  '  dooh: dooh,\n' +
  '  loadDoohByIdPending: false,\n' +
  '  loadDoohByIdSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.loadDoohByIdFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  loadDoohByIdPending: false,\n' +
  '  loadDoohByIdFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * createDooh\n' +
  ' */\n' +
  'on(TestActions.createDooh, (state) => ({\n' +
  '  ...state,\n' +
  '  createDoohPending: true,\n' +
  '  createDoohSuccess: false,\n' +
  '  createDoohFailure: null,\n' +
  '})),\n' +
  'on(TestActions.createDoohSuccess, (state, {dooh}) => ({\n' +
  '  ...state,\n' +
  '  dooh: dooh,\n' +
  '  doohList: [...(state.doohList || []), dooh],\n' +
  '  createDoohPending: false,\n' +
  '  createDoohSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.createDoohFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  createDoohPending: false,\n' +
  '  createDoohFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * updateDooh\n' +
  ' */\n' +
  'on(TestActions.updateDooh, (state) => ({\n' +
  '  ...state,\n' +
  '  updateDoohPending: true,\n' +
  '  updateDoohSuccess: false,\n' +
  '  updateDoohFailure: null,\n' +
  '})),\n' +
  'on(TestActions.updateDoohSuccess, (state, {dooh}) => ({\n' +
  '  ...state,\n' +
  '  dooh: dooh,\n' +
  '  doohList: replaceArrayItem(state.doohList, dooh, \'id\'),\n' +
  '  updateDoohPending: false,\n' +
  '  updateDoohSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.updateDoohFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  updateDoohPending: false,\n' +
  '  updateDoohFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * deleteDooh\n' +
  ' */\n' +
  'on(TestActions.deleteDooh, (state) => ({\n' +
  '  ...state,\n' +
  '  deleteDoohPending: true,\n' +
  '  deleteDoohSuccess: false,\n' +
  '  deleteDoohFailure: null,\n' +
  '})),\n' +
  'on(TestActions.deleteDoohSuccess, (state, {doohId}) => ({\n' +
  '  ...state,\n' +
  '  doohList: [...state.doohList?.filter(v => v.id !== doohId) || []],\n' +
  '  deleteDoohPending: false,\n' +
  '  deleteDoohSuccess: true,\n' +
  '})),\n' +
  'on(TestActions.deleteDoohFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  deleteDoohPending: false,\n' +
  '  deleteDoohFailure: error,\n' +
  '})),\n\n' +
  '];\n' +
  '}\n';

const DOMAIN_TEST_REDUCER_RESETS_DEFAULT = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\n' +
  'import * as TestResetsActions from \'./test.actions.resets\';\n' +
  'import {TestState} from \'./test.reducer\';\n\n' +
  'export function getTestResetsOns<T extends TestState>(): ReducerTypes<T, ActionCreator[]>[] {\n' +
  '  return [\n' +
  '    /*\n' +
  ' * resetTest\n' +
  ' */\n' +
  'on(TestResetsActions.resetTest, (state) => ({\n' +
  '  ...state,\n' +
  '  test: null,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * resetTestList\n' +
  ' */\n' +
  'on(TestResetsActions.resetTestList, (state) => ({\n' +
  '  ...state,\n' +
  '  testList: null,\n' +
  '})),\n\n' +
  '/*\n' +
  '     * resetTestAssets\n' +
  '     */\n' +
  '    on(TestResetsActions.resetTestAssets, (state) => ({...state,loadTestListPending: false,\n' +
  'loadTestListSuccess: false,\n' +
  'loadTestListFailure: null,loadTestByIdPending: false,\n' +
  'loadTestByIdSuccess: false,\n' +
  'loadTestByIdFailure: null,createTestPending: false,\n' +
  'createTestSuccess: false,\n' +
  'createTestFailure: null,updateTestPending: false,\n' +
  'updateTestSuccess: false,\n' +
  'updateTestFailure: null,deleteTestPending: false,\n' +
  'deleteTestSuccess: false,\n' +
  'deleteTestFailure: null,createDoohPending: false,\n' +
  'createDoohSuccess: false,\n' +
  'createDoohFailure: null,})),\n' +
  '  ];\n' +
  '}\n';

const DOMAIN_TEST_REDUCER_RESETS = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\n' +
  'import * as TestResetsActions from \'./test.actions.resets\';\n' +
  'import {TestState} from \'./test.reducer\';\n\n' +
  'export function getTestResetsOns<T extends TestState>(): ReducerTypes<T, ActionCreator[]>[] {\n' +
  '  return [\n' +
  '    /*\n' +
  ' * resetTest\n' +
  ' */\n' +
  'on(TestResetsActions.resetTest, (state) => ({\n' +
  '  ...state,\n' +
  '  test: null,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * resetTestList\n' +
  ' */\n' +
  'on(TestResetsActions.resetTestList, (state) => ({\n' +
  '  ...state,\n' +
  '  testList: null,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * resetDooh\n' +
  ' */\n' +
  'on(TestResetsActions.resetDooh, (state) => ({\n' +
  '  ...state,\n' +
  '  dooh: null,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * resetDoohList\n' +
  ' */\n' +
  'on(TestResetsActions.resetDoohList, (state) => ({\n' +
  '  ...state,\n' +
  '  doohList: null,\n' +
  '})),\n\n' +
  '/*\n' +
  '     * resetTestAssets\n' +
  '     */\n' +
  '    on(TestResetsActions.resetTestAssets, (state) => ({...state,loadTestListPending: false,\n' +
  'loadTestListSuccess: false,\n' +
  'loadTestListFailure: null,loadTestByIdPending: false,\n' +
  'loadTestByIdSuccess: false,\n' +
  'loadTestByIdFailure: null,createTestPending: false,\n' +
  'createTestSuccess: false,\n' +
  'createTestFailure: null,updateTestPending: false,\n' +
  'updateTestSuccess: false,\n' +
  'updateTestFailure: null,deleteTestPending: false,\n' +
  'deleteTestSuccess: false,\n' +
  'deleteTestFailure: null,loadDoohListPending: false,\n' +
  'loadDoohListSuccess: false,\n' +
  'loadDoohListFailure: null,loadDoohByIdPending: false,\n' +
  'loadDoohByIdSuccess: false,\n' +
  'loadDoohByIdFailure: null,createDoohPending: false,\n' +
  'createDoohSuccess: false,\n' +
  'createDoohFailure: null,updateDoohPending: false,\n' +
  'updateDoohSuccess: false,\n' +
  'updateDoohFailure: null,deleteDoohPending: false,\n' +
  'deleteDoohSuccess: false,\n' +
  'deleteDoohFailure: null,})),\n' +
  '  ];\n' +
  '}\n';

const DOMAIN_TEST_SELECTORS_DEFAULT = 'import { getExampleDomainState } from \'../example-domain.selectors\';\n' +
  'import { State } from \'../example-domain.reducer\';\n' +
  'import { createSelector } from \'@ngrx/store\';\n\n' +
  'export const getTest = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.test\n' +
  ');\n\n' +
  'export const getTestList = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.testList\n' +
  ');\n\n' +
  'export const getLoadTestListPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadTestListPending\n' +
  ');\n\n' +
  'export const getLoadTestListSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadTestListSuccess\n' +
  ');\n\n' +
  'export const getLoadTestListFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadTestListFailure\n' +
  ');\n\n' +
  'export const getLoadTestByIdPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadTestByIdPending\n' +
  ');\n\n' +
  'export const getLoadTestByIdSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadTestByIdSuccess\n' +
  ');\n\n' +
  'export const getLoadTestByIdFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadTestByIdFailure\n' +
  ');\n\n' +
  'export const getCreateTestPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.createTestPending\n' +
  ');\n\n' +
  'export const getCreateTestSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.createTestSuccess\n' +
  ');\n\n' +
  'export const getCreateTestFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.createTestFailure\n' +
  ');\n\n' +
  'export const getUpdateTestPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.updateTestPending\n' +
  ');\n\n' +
  'export const getUpdateTestSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.updateTestSuccess\n' +
  ');\n\n' +
  'export const getUpdateTestFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.updateTestFailure\n' +
  ');\n\n' +
  'export const getDeleteTestPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.deleteTestPending\n' +
  ');\n\n' +
  'export const getDeleteTestSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.deleteTestSuccess\n' +
  ');\n\n' +
  'export const getDeleteTestFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.deleteTestFailure\n' +
  ');\n\n' +
  'export const getCreateDoohPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.createDoohPending\n' +
  ');\n\n' +
  'export const getCreateDoohSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.createDoohSuccess\n' +
  ');\n\n' +
  'export const getCreateDoohFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.createDoohFailure\n' +
  ');\n\n';

const DOMAIN_TEST_SELECTORS = 'import { getExampleDomainState } from \'../example-domain.selectors\';\n' +
  'import { State } from \'../example-domain.reducer\';\n' +
  'import { createSelector } from \'@ngrx/store\';\n\n' +
  'export const getTest = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.test\n' +
  ');\n\n' +
  'export const getTestList = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.testList\n' +
  ');\n\n' +
  'export const getLoadTestListPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadTestListPending\n' +
  ');\n\n' +
  'export const getLoadTestListSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadTestListSuccess\n' +
  ');\n\n' +
  'export const getLoadTestListFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadTestListFailure\n' +
  ');\n\n' +
  'export const getLoadTestByIdPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadTestByIdPending\n' +
  ');\n\n' +
  'export const getLoadTestByIdSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadTestByIdSuccess\n' +
  ');\n\n' +
  'export const getLoadTestByIdFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadTestByIdFailure\n' +
  ');\n\n' +
  'export const getCreateTestPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.createTestPending\n' +
  ');\n\n' +
  'export const getCreateTestSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.createTestSuccess\n' +
  ');\n\n' +
  'export const getCreateTestFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.createTestFailure\n' +
  ');\n\n' +
  'export const getUpdateTestPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.updateTestPending\n' +
  ');\n\n' +
  'export const getUpdateTestSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.updateTestSuccess\n' +
  ');\n\n' +
  'export const getUpdateTestFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.updateTestFailure\n' +
  ');\n\n' +
  'export const getDeleteTestPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.deleteTestPending\n' +
  ');\n\n' +
  'export const getDeleteTestSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.deleteTestSuccess\n' +
  ');\n\n' +
  'export const getDeleteTestFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.deleteTestFailure\n' +
  ');\n\n' +
  'export const getDooh = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.dooh\n' +
  ');\n\n' +
  'export const getDoohList = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.doohList\n' +
  ');\n\n' +
  'export const getLoadDoohListPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadDoohListPending\n' +
  ');\n\n' +
  'export const getLoadDoohListSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadDoohListSuccess\n' +
  ');\n\n' +
  'export const getLoadDoohListFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadDoohListFailure\n' +
  ');\n\n' +
  'export const getLoadDoohByIdPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadDoohByIdPending\n' +
  ');\n\n' +
  'export const getLoadDoohByIdSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadDoohByIdSuccess\n' +
  ');\n\n' +
  'export const getLoadDoohByIdFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadDoohByIdFailure\n' +
  ');\n\n' +
  'export const getCreateDoohPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.createDoohPending\n' +
  ');\n\n' +
  'export const getCreateDoohSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.createDoohSuccess\n' +
  ');\n\n' +
  'export const getCreateDoohFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.createDoohFailure\n' +
  ');\n\n' +
  'export const getUpdateDoohPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.updateDoohPending\n' +
  ');\n\n' +
  'export const getUpdateDoohSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.updateDoohSuccess\n' +
  ');\n\n' +
  'export const getUpdateDoohFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.updateDoohFailure\n' +
  ');\n\n' +
  'export const getDeleteDoohPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.deleteDoohPending\n' +
  ');\n\n' +
  'export const getDeleteDoohSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.deleteDoohSuccess\n' +
  ');\n\n' +
  'export const getDeleteDoohFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.deleteDoohFailure\n' +
  ');\n\n';
