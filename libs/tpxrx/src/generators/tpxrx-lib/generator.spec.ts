import {createTreeWithEmptyWorkspace} from '@nrwl/devkit/testing';
import {Tree} from '@nrwl/devkit';
import {generateLib} from './generator';
import {generatorWrapper} from '../common/generator';

const indexPath = 'libs/example/domain/src/index.ts';
const exampleDomainModulePath = 'libs/example/domain/src/lib/example-domain.module.ts';
const exampleDomainFacadePath = 'libs/example/domain/src/lib/+state/example-domain.facade.ts';
const exampleDomainReducerPath = 'libs/example/domain/src/lib/+state/example-domain.reducer.ts';
const exampleDomainSelectorsPath = 'libs/example/domain/src/lib/+state/example-domain.selectors.ts';
const domainTestActionsPath = 'libs/example/domain/src/lib/+state/test/test.actions.ts';
const domainTestActionsResetsPath = 'libs/example/domain/src/lib/+state/test/test.actions.resets.ts';
const domainTestEffectsPath = 'libs/example/domain/src/lib/+state/test/test.effects.ts';
const domainTestFacadePath = 'libs/example/domain/src/lib/+state/test/test.facade.ts';
const domainTestFacadeResetsPath = 'libs/example/domain/src/lib/+state/test/test.facade.resets.ts';
const domainTestReducerPath = 'libs/example/domain/src/lib/+state/test/test.reducer.ts';
const domainTestReducerResetsPath = 'libs/example/domain/src/lib/+state/test/test.reducer.resets.ts';
const domainTestSelectorsPath = 'libs/example/domain/src/lib/+state/test/test.selectors.ts';
const domainYeahActionsPath = 'libs/example/domain/src/lib/+state/yeah/yeah.actions.ts';
const domainYeahActionsResetsPath = 'libs/example/domain/src/lib/+state/yeah/yeah.actions.resets.ts';
const domainYeahEffectsPath = 'libs/example/domain/src/lib/+state/yeah/yeah.effects.ts';
const domainYeahFacadePath = 'libs/example/domain/src/lib/+state/yeah/yeah.facade.ts';
const domainYeahFacadeResetsPath = 'libs/example/domain/src/lib/+state/yeah/yeah.facade.resets.ts';
const domainYeahReducerPath = 'libs/example/domain/src/lib/+state/yeah/yeah.reducer.ts';
const domainYeahReducerResetsPath = 'libs/example/domain/src/lib/+state/yeah/yeah.reducer.resets.ts';
const domainYeahSelectorsPath = 'libs/example/domain/src/lib/+state/yeah/yeah.selectors.ts';

describe('tpxrx lib generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace(2);
    tree.write('.gitignore', '');
  });

  it('create empty lib', async () => {
    await generatorWrapper(tree, {
      name: 'example/domain'
    }, generateLib);

    expect(tree.exists(indexPath)).toBeTruthy();
    expect(tree.exists(exampleDomainModulePath)).toBeTruthy();
    expect(tree.exists(exampleDomainFacadePath)).toBeTruthy();
    expect(tree.exists(exampleDomainReducerPath)).toBeTruthy();
    expect(tree.exists(exampleDomainSelectorsPath)).toBeTruthy();

    const indexContent = tree.read(indexPath).toString();
    const exampleDomainModuleContent = tree.read(exampleDomainModulePath).toString();
    const exampleDomainFacadeContent = tree.read(exampleDomainFacadePath).toString();
    const exampleDomainReducerContent = tree.read(exampleDomainReducerPath).toString();
    const exampleDomainSelectorsContent = tree.read(exampleDomainSelectorsPath).toString();


    expect(indexContent).toBe(INDEX_CONTENT);
    expect(exampleDomainModuleContent).toBe(EXAMPLE_DOMAIN_MODULE_EMPTY);
    expect(exampleDomainFacadeContent).toBe(EXAMPLE_DOMAIN_FACADE_EMPTY);
    expect(exampleDomainReducerContent).toBe(EXAMPLE_DOMAIN_REDUCER_EMPTY);
    expect(exampleDomainSelectorsContent).toBe(EXAMPLE_DOMAIN_SELECTORS);
  });

  it('create lib with empty domains', async () => {
    await generatorWrapper(tree, {
      name: 'example/domain',
      domains: 'test,yeah'
    }, generateLib);

    expect(tree.exists(indexPath)).toBeTruthy();
    expect(tree.exists(exampleDomainModulePath)).toBeTruthy();
    expect(tree.exists(exampleDomainFacadePath)).toBeTruthy();
    expect(tree.exists(exampleDomainReducerPath)).toBeTruthy();
    expect(tree.exists(exampleDomainSelectorsPath)).toBeTruthy();
    expect(tree.exists(domainTestActionsPath)).toBeTruthy();
    expect(tree.exists(domainTestActionsResetsPath)).toBeTruthy();
    expect(tree.exists(domainTestEffectsPath)).toBeTruthy();
    expect(tree.exists(domainTestFacadePath)).toBeTruthy();
    expect(tree.exists(domainTestFacadeResetsPath)).toBeTruthy();
    expect(tree.exists(domainTestReducerPath)).toBeTruthy();
    expect(tree.exists(domainTestReducerResetsPath)).toBeTruthy();
    expect(tree.exists(domainTestSelectorsPath)).toBeTruthy();
    expect(tree.exists(domainYeahActionsPath)).toBeTruthy();
    expect(tree.exists(domainYeahActionsResetsPath)).toBeTruthy();
    expect(tree.exists(domainYeahEffectsPath)).toBeTruthy();
    expect(tree.exists(domainYeahFacadePath)).toBeTruthy();
    expect(tree.exists(domainYeahFacadeResetsPath)).toBeTruthy();
    expect(tree.exists(domainYeahReducerPath)).toBeTruthy();
    expect(tree.exists(domainYeahReducerResetsPath)).toBeTruthy();
    expect(tree.exists(domainYeahSelectorsPath)).toBeTruthy();

    const indexContent = tree.read(indexPath).toString();
    const exampleDomainModuleContent = tree.read(exampleDomainModulePath).toString();
    const exampleDomainFacadeContent = tree.read(exampleDomainFacadePath).toString();
    const exampleDomainReducerContent = tree.read(exampleDomainReducerPath).toString();
    const exampleDomainSelectorsContent = tree.read(exampleDomainSelectorsPath).toString();
    const domainTestActionsContent = tree.read(domainTestActionsPath).toString();
    const domainTestActionsResetsContent = tree.read(domainTestActionsResetsPath).toString();
    const domainTestEffectsContent = tree.read(domainTestEffectsPath).toString();
    const domainTestFacadeContent = tree.read(domainTestFacadePath).toString();
    const domainTestFacadeResetsContent = tree.read(domainTestFacadeResetsPath).toString();
    const domainTestReducerContent = tree.read(domainTestReducerPath).toString();
    const domainTestReducerResetsContent = tree.read(domainTestReducerResetsPath).toString();
    const domainTestSelectorsContent = tree.read(domainTestSelectorsPath).toString();
    const domainYeahActionsContent = tree.read(domainYeahActionsPath).toString();
    const domainYeahActionsResetsContent = tree.read(domainYeahActionsResetsPath).toString();
    const domainYeahEffectsContent = tree.read(domainYeahEffectsPath).toString();
    const domainYeahFacadeContent = tree.read(domainYeahFacadePath).toString();
    const domainYeahFacadeResetsContent = tree.read(domainYeahFacadeResetsPath).toString();
    const domainYeahReducerContent = tree.read(domainYeahReducerPath).toString();
    const domainYeahReducerResetsContent = tree.read(domainYeahReducerResetsPath).toString();
    const domainYeahSelectorsContent = tree.read(domainYeahSelectorsPath).toString();

    expect(indexContent).toBe(INDEX_CONTENT);
    expect(exampleDomainModuleContent).toBe(EXAMPLE_DOMAIN_MODULE);
    expect(exampleDomainFacadeContent).toBe(EXAMPLE_DOMAIN_FACADE);
    expect(exampleDomainReducerContent).toBe(EXAMPLE_DOMAIN_REDUCER);
    expect(exampleDomainSelectorsContent).toBe(EXAMPLE_DOMAIN_SELECTORS);
    expect(domainTestActionsContent).toBe(DOMAIN_TEST_ACTIONS_EMPTY);
    expect(domainTestActionsResetsContent).toBe(DOMAIN_TEST_ACTIONS_RESETS_EMPTY);
    expect(domainTestEffectsContent).toBe(DOMAIN_TEST_EFFECTS_EMPTY);
    expect(domainTestFacadeContent).toBe(DOMAIN_TEST_FACADE_EMPTY);
    expect(domainTestFacadeResetsContent).toBe(DOMAIN_TEST_FACADE_RESETS_EMPTY);
    expect(domainTestReducerContent).toBe(DOMAIN_TEST_REDUCER_EMPTY);
    expect(domainTestReducerResetsContent).toBe(DOMAIN_TEST_REDUCER_RESETS_EMPTY);
    expect(domainTestSelectorsContent).toBe(DOMAIN_TEST_SELECTORS_EMPTY);
    expect(domainYeahActionsContent).toBe(DOMAIN_YEAH_ACTIONS_EMPTY);
    expect(domainYeahActionsResetsContent).toBe(DOMAIN_YEAH_ACTIONS_RESETS_EMPTY);
    expect(domainYeahEffectsContent).toBe(DOMAIN_YEAH_EFFECTS_EMPTY);
    expect(domainYeahFacadeContent).toBe(DOMAIN_YEAH_FACADE_EMPTY);
    expect(domainYeahFacadeResetsContent).toBe(DOMAIN_YEAH_FACADE_RESETS_EMPTY);
    expect(domainYeahReducerContent).toBe(DOMAIN_YEAH_REDUCER_EMPTY);
    expect(domainYeahReducerResetsContent).toBe(DOMAIN_YEAH_REDUCER_RESETS_EMPTY);
    expect(domainYeahSelectorsContent).toBe(DOMAIN_YEAH_SELECTORS_EMPTY);
  });

  it('create lib with crud domains', async () => {
    await generatorWrapper(tree, {
      name: 'example/domain',
      domains: 'test,yeah',
      crud: true,
    }, generateLib);

    expect(tree.exists(indexPath)).toBeTruthy();
    expect(tree.exists(exampleDomainModulePath)).toBeTruthy();
    expect(tree.exists(exampleDomainFacadePath)).toBeTruthy();
    expect(tree.exists(exampleDomainReducerPath)).toBeTruthy();
    expect(tree.exists(exampleDomainSelectorsPath)).toBeTruthy();
    expect(tree.exists(domainTestActionsPath)).toBeTruthy();
    expect(tree.exists(domainTestActionsResetsPath)).toBeTruthy();
    expect(tree.exists(domainTestEffectsPath)).toBeTruthy();
    expect(tree.exists(domainTestFacadePath)).toBeTruthy();
    expect(tree.exists(domainTestFacadeResetsPath)).toBeTruthy();
    expect(tree.exists(domainTestReducerPath)).toBeTruthy();
    expect(tree.exists(domainTestReducerResetsPath)).toBeTruthy();
    expect(tree.exists(domainTestSelectorsPath)).toBeTruthy();
    expect(tree.exists(domainYeahActionsPath)).toBeTruthy();
    expect(tree.exists(domainYeahActionsResetsPath)).toBeTruthy();
    expect(tree.exists(domainYeahEffectsPath)).toBeTruthy();
    expect(tree.exists(domainYeahFacadePath)).toBeTruthy();
    expect(tree.exists(domainYeahFacadeResetsPath)).toBeTruthy();
    expect(tree.exists(domainYeahReducerPath)).toBeTruthy();
    expect(tree.exists(domainYeahReducerResetsPath)).toBeTruthy();
    expect(tree.exists(domainYeahSelectorsPath)).toBeTruthy();

    const indexContent = tree.read(indexPath).toString();
    const exampleDomainModuleContent = tree.read(exampleDomainModulePath).toString();
    const exampleDomainFacadeContent = tree.read(exampleDomainFacadePath).toString();
    const exampleDomainReducerContent = tree.read(exampleDomainReducerPath).toString();
    const exampleDomainSelectorsContent = tree.read(exampleDomainSelectorsPath).toString();
    const domainTestActionsContent = tree.read(domainTestActionsPath).toString();
    const domainTestActionsResetsContent = tree.read(domainTestActionsResetsPath).toString();
    const domainTestEffectsContent = tree.read(domainTestEffectsPath).toString();
    const domainTestFacadeContent = tree.read(domainTestFacadePath).toString();
    const domainTestFacadeResetsContent = tree.read(domainTestFacadeResetsPath).toString();
    const domainTestReducerContent = tree.read(domainTestReducerPath).toString();
    const domainTestReducerResetsContent = tree.read(domainTestReducerResetsPath).toString();
    const domainTestSelectorsContent = tree.read(domainTestSelectorsPath).toString();
    const domainYeahActionsContent = tree.read(domainYeahActionsPath).toString();
    const domainYeahActionsResetsContent = tree.read(domainYeahActionsResetsPath).toString();
    const domainYeahEffectsContent = tree.read(domainYeahEffectsPath).toString();
    const domainYeahFacadeContent = tree.read(domainYeahFacadePath).toString();
    const domainYeahFacadeResetsContent = tree.read(domainYeahFacadeResetsPath).toString();
    const domainYeahReducerContent = tree.read(domainYeahReducerPath).toString();
    const domainYeahReducerResetsContent = tree.read(domainYeahReducerResetsPath).toString();
    const domainYeahSelectorsContent = tree.read(domainYeahSelectorsPath).toString();

    expect(indexContent).toBe(INDEX_CONTENT);
    expect(exampleDomainModuleContent).toBe(EXAMPLE_DOMAIN_MODULE);
    expect(exampleDomainFacadeContent).toBe(EXAMPLE_DOMAIN_FACADE);
    expect(exampleDomainReducerContent).toBe(EXAMPLE_DOMAIN_REDUCER);
    expect(exampleDomainSelectorsContent).toBe(EXAMPLE_DOMAIN_SELECTORS);
    expect(domainTestActionsContent).toBe(DOMAIN_TEST_ACTIONS);
    expect(domainTestActionsResetsContent).toBe(DOMAIN_TEST_ACTIONS_RESETS);
    expect(domainTestEffectsContent).toBe(DOMAIN_TEST_EFFECTS);
    expect(domainTestFacadeContent).toBe(DOMAIN_TEST_FACADE);
    expect(domainTestFacadeResetsContent).toBe(DOMAIN_TEST_FACADE_RESETS);
    expect(domainTestReducerContent).toBe(DOMAIN_TEST_REDUCER);
    expect(domainTestReducerResetsContent).toBe(DOMAIN_TEST_REDUCER_RESETS);
    expect(domainTestSelectorsContent).toBe(DOMAIN_TEST_SELECTORS);
    expect(domainYeahActionsContent).toBe(DOMAIN_YEAH_ACTIONS);
    expect(domainYeahActionsResetsContent).toBe(DOMAIN_YEAH_ACTIONS_RESETS);
    expect(domainYeahEffectsContent).toBe(DOMAIN_YEAH_EFFECTS);
    expect(domainYeahFacadeContent).toBe(DOMAIN_YEAH_FACADE);
    expect(domainYeahFacadeResetsContent).toBe(DOMAIN_YEAH_FACADE_RESETS);
    expect(domainYeahReducerContent).toBe(DOMAIN_YEAH_REDUCER);
    expect(domainYeahReducerResetsContent).toBe(DOMAIN_YEAH_REDUCER_RESETS);
    expect(domainYeahSelectorsContent).toBe(DOMAIN_YEAH_SELECTORS);
  });
});

const INDEX_CONTENT = 'export * from \'./lib/example-domain.module\';export * from \'./lib/+state/example-domain.facade\';';

const EXAMPLE_DOMAIN_MODULE_EMPTY = 'import { NgModule } from \'@angular/core\';\r\n' +
  'import { CommonModule } from \'@angular/common\';\r\n' +
  'import {HttpClientModule} from \'@angular/common/http\';\r\n' +
  'import {StoreModule} from \'@ngrx/store\';\r\n' +
  'import * as fromExampleDomain from \'./+state/example-domain.reducer\';\r\n' +
  'import {EffectsModule} from \'@ngrx/effects\';\r\n' +
  'import {ExampleDomainFacade} from \'./+state/example-domain.facade\';\r\n\r\n' +
  '@NgModule({\r\n' +
  '  imports: [\r\n' +
  '    CommonModule,\r\n' +
  '    HttpClientModule,\r\n' +
  '    StoreModule.forFeature(\r\n' +
  '      fromExampleDomain.EXAMPLE_DOMAIN_FEATURE_KEY,\r\n' +
  '      fromExampleDomain.reducer\r\n' +
  '    ),\r\n' +
  '    EffectsModule.forFeature([]),\r\n' +
  '  ],\r\n' +
  '  providers: [ExampleDomainFacade],\r\n' +
  '})\r\n' +
  'export class ExampleDomainModule {}\r\n';

const EXAMPLE_DOMAIN_MODULE = 'import { NgModule } from \'@angular/core\';\r\n' +
  'import { CommonModule } from \'@angular/common\';\r\n' +
  'import {HttpClientModule} from \'@angular/common/http\';\r\n' +
  'import {StoreModule} from \'@ngrx/store\';\r\n' +
  'import * as fromExampleDomain from \'./+state/example-domain.reducer\';\r\n' +
  'import {EffectsModule} from \'@ngrx/effects\';\r\n' +
  'import {ExampleDomainFacade} from \'./+state/example-domain.facade\';\n' +
  'import { TestFacade } from \'./+state/test/test.facade\';\n' +
  'import { TestEffects } from \'./+state/test/test.effects\';\n' +
  'import { YeahFacade } from \'./+state/yeah/yeah.facade\';\n' +
  'import { YeahEffects } from \'./+state/yeah/yeah.effects\';\r\n\r\n' +
  '@NgModule({\r\n' +
  '  imports: [\r\n' +
  '    CommonModule,\r\n' +
  '    HttpClientModule,\r\n' +
  '    StoreModule.forFeature(\r\n' +
  '      fromExampleDomain.EXAMPLE_DOMAIN_FEATURE_KEY,\r\n' +
  '      fromExampleDomain.reducer\r\n' +
  '    ),\r\n' +
  '    EffectsModule.forFeature([TestEffects,YeahEffects,]),\r\n' +
  '  ],\r\n' +
  '  providers: [ExampleDomainFacade,TestFacade,YeahFacade,],\r\n' +
  '})\r\n' +
  'export class ExampleDomainModule {}\r\n';

const EXAMPLE_DOMAIN_FACADE_EMPTY = 'import { Injectable } from \'@angular/core\';\r\n\r\n' +
  '@Injectable()\r\n' +
  'export class ExampleDomainFacade {\r\n' +
  '  constructor(\r\n' +
  '  ) {\r\n' +
  '  }\r\n' +
  '}\r\n';

const EXAMPLE_DOMAIN_FACADE = 'import { Injectable } from \'@angular/core\';\n' +
  'import { TestFacade } from \'./test/test.facade\';\n' +
  'import { YeahFacade } from \'./yeah/yeah.facade\';\r\n\r\n' +
  '@Injectable()\r\n' +
  'export class ExampleDomainFacade {\r\n' +
  '  testFacade: TestFacade;\n\n' +
  'yeahFacade: YeahFacade;\n\n' +
  'constructor(private testFacadeInternal: TestFacade,private yeahFacadeInternal: YeahFacade,) {this.testFacade = this.testFacadeInternal;this.yeahFacade = this.yeahFacadeInternal;}\r\n' +
  '}\r\n';

const EXAMPLE_DOMAIN_REDUCER_EMPTY = 'import { Action, createReducer } from \'@ngrx/store\';\r\n\r\n' +
  'export const EXAMPLE_DOMAIN_FEATURE_KEY = \'EXAMPLE_DOMAIN\';\r\n\r\n' +
  'export interface State {}\r\n\r\n' +
  'export interface ExampleDomainPartialState {\r\n' +
  '  readonly [EXAMPLE_DOMAIN_FEATURE_KEY]: State;\r\n' +
  '}\r\n\r\n' +
  'export const initialState: State = {\r\n' +
  '};\r\n\r\n' +
  'const exampleDomainReducer = createReducer(\r\n' +
  '  initialState,\r\n' +
  ');\r\n\r\n' +
  'export function reducer(state: State | undefined, action: Action) {\r\n' +
  '  return exampleDomainReducer(state, action);\r\n' +
  '}\r\n';

const EXAMPLE_DOMAIN_REDUCER = 'import { Action, createReducer } from \'@ngrx/store\';\n' +
  'import { TestState, testInitialState, getTestOns } from \'./test/test.reducer\';\n' +
  'import { YeahState, yeahInitialState, getYeahOns } from \'./yeah/yeah.reducer\';\r\n\r\n' +
  'export const EXAMPLE_DOMAIN_FEATURE_KEY = \'EXAMPLE_DOMAIN\';\r\n\r\n' +
  'export interface State extends TestState,YeahState,{}\r\n\r\n' +
  'export interface ExampleDomainPartialState {\r\n' +
  '  readonly [EXAMPLE_DOMAIN_FEATURE_KEY]: State;\r\n' +
  '}\r\n\r\n' +
  'export const initialState: State = {...testInitialState,...yeahInitialState,};\r\n\r\n' +
  'const exampleDomainReducer = createReducer(initialState,...getTestOns<State>(),...getYeahOns<State>(),);\r\n\r\n' +
  'export function reducer(state: State | undefined, action: Action) {\r\n' +
  '  return exampleDomainReducer(state, action);\r\n' +
  '}\r\n';

const EXAMPLE_DOMAIN_SELECTORS = 'import {\r\n' +
  '  EXAMPLE_DOMAIN_FEATURE_KEY,\r\n' +
  '  State,\r\n' +
  '} from \'./example-domain.reducer\';\r\n' +
  'import { createFeatureSelector } from \'@ngrx/store\';\r\n\r\n' +
  'export const getExampleDomainState = createFeatureSelector<State>(\r\n' +
  '  EXAMPLE_DOMAIN_FEATURE_KEY\r\n' +
  ');\r\n'

const DOMAIN_TEST_ACTIONS_EMPTY = 'import { createAction, props } from \'@ngrx/store\';';

const DOMAIN_TEST_ACTIONS = 'import { createAction, props } from \'@ngrx/store\';\n\n' +
  '/*\r\n' +
  ' * loadTestList\r\n' +
  ' */\r\n' +
  'export const loadTestList = createAction(\r\n' +
  '  \'[ExampleDomain] loadTestList\',\r\n' +
  '  props<{ id: string }>()\r\n' +
  ');\r\n' +
  'export const loadTestListSuccess = createAction(\r\n' +
  '  \'[ExampleDomain] loadTestListSuccess\',\r\n' +
  '  props<{ testList: Test[] }>()\r\n' +
  ');\r\n' +
  'export const loadTestListFailure = createAction(\r\n' +
  '  \'[ExampleDomain] loadTestListFailure\',\r\n' +
  '  props<{ error: Error }>()\r\n' +
  ');\n\n' +
  '/*\r\n' +
  ' * loadTestById\r\n' +
  ' */\r\n' +
  'export const loadTestById = createAction(\r\n' +
  '  \'[ExampleDomain] loadTestById\',\r\n' +
  '  props<{ testId: string }>()\r\n' +
  ');\r\n' +
  'export const loadTestByIdSuccess = createAction(\r\n' +
  '  \'[ExampleDomain] loadTestByIdSuccess\',\r\n' +
  '  props<{ test: Test }>()\r\n' +
  ');\r\n' +
  'export const loadTestByIdFailure = createAction(\r\n' +
  '  \'[ExampleDomain] loadTestByIdFailure\',\r\n' +
  '  props<{ error: Error }>()\r\n' +
  ');\n\n' +
  '/*\r\n' +
  ' * createTest\r\n' +
  ' */\r\n' +
  'export const createTest = createAction(\r\n' +
  '  \'[ExampleDomain] createTest\',\r\n' +
  '  props<{ test: Test }>()\r\n' +
  ');\r\n' +
  'export const createTestSuccess = createAction(\r\n' +
  '  \'[ExampleDomain] createTestSuccess\',\r\n' +
  '  props<{ test: Test }>()\r\n' +
  ');\r\n' +
  'export const createTestFailure = createAction(\r\n' +
  '  \'[ExampleDomain] createTestFailure\',\r\n' +
  '  props<{ error: Error }>()\r\n' +
  ');\n\n' +
  '/*\r\n' +
  ' * updateTest\r\n' +
  ' */\r\n' +
  'export const updateTest = createAction(\r\n' +
  '  \'[ExampleDomain] updateTest\',\r\n' +
  '  props<{ testId: string; test: Test }>()\r\n' +
  ');\r\n' +
  'export const updateTestSuccess = createAction(\r\n' +
  '  \'[ExampleDomain] updateTestSuccess\',\r\n' +
  '  props<{ test: Test }>()\r\n' +
  ');\r\n' +
  'export const updateTestFailure = createAction(\r\n' +
  '  \'[ExampleDomain] updateTestFailure\',\r\n' +
  '  props<{ error: Error }>()\r\n' +
  ');\n\n' +
  '/*\r\n' +
  ' * deleteTest\r\n' +
  ' */\r\n' +
  'export const deleteTest = createAction(\r\n' +
  '  \'[ExampleDomain] deleteTest\',\r\n' +
  '  props<{ testId: string }>()\r\n' +
  ');\r\n' +
  'export const deleteTestSuccess = createAction(\r\n' +
  '  \'[ExampleDomain] deleteTestSuccess\',\r\n' +
  '  props<{ testId: string }>()\r\n' +
  ');\r\n' +
  'export const deleteTestFailure = createAction(\r\n' +
  '  \'[ExampleDomain] deleteTestFailure\',\r\n' +
  '  props<{ error: Error }>()\r\n' +
  ');\n\n';

const DOMAIN_TEST_ACTIONS_RESETS_EMPTY = 'import { createAction } from \'@ngrx/store\';\r\n\r\n' +
  '/*\r\n' +
  ' * resetTestAssets\r\n' +
  ' */\r\n' +
  'export const resetTestAssets = createAction(\r\n' +
  '  \'[ExampleDomain] resetTestAssets\'\r\n' +
  ');\r\n';

const DOMAIN_TEST_ACTIONS_RESETS = 'import { createAction } from \'@ngrx/store\';\r\n\r\n' +
  '/*\r\n' +
  ' * resetTest\r\n' +
  ' */\r\n' +
  'export const resetTest = createAction(\r\n' +
  '  \'[ExampleDomain] resetTest\',\r\n' +
  ');\n\n' +
  '/*\r\n' +
  ' * resetTestList\r\n' +
  ' */\r\n' +
  'export const resetTestList = createAction(\r\n' +
  '  \'[ExampleDomain] resetTestList\',\r\n' +
  ');\n\n' +
  '/*\r\n' +
  ' * resetTestAssets\r\n' +
  ' */\r\n' +
  'export const resetTestAssets = createAction(\r\n' +
  '  \'[ExampleDomain] resetTestAssets\'\r\n' +
  ');\r\n';

const DOMAIN_TEST_EFFECTS_EMPTY = 'import {act, Actions, createEffect, ofType} from \'@ngrx/effects\';\r\n' +
  'import * as TestActions from \'./test.actions\';\r\n' +
  'import {catchError, map, switchMap} from \'rxjs/operators\';\r\n' +
  'import {of} from \'rxjs\';\r\n' +
  'import {Injectable} from \'@angular/core\';\r\n\r\n' +
  '@Injectable()\r\n' +
  'export class TestEffects {\r\n' +
  '  constructor(private actions$: Actions,private testService: TestService,) {\r\n' +
  '  }\r\n' +
  '}\r\n';

const DOMAIN_TEST_EFFECTS = '' +
  'import {act, Actions, createEffect, ofType} from \'@ngrx/effects\';\r\n' +
  'import * as TestActions from \'./test.actions\';\r\n' +
  'import {catchError, map, switchMap} from \'rxjs/operators\';\r\n' +
  'import {of} from \'rxjs\';\r\n' +
  'import {Injectable} from \'@angular/core\';\r\n\r\n' +
  '@Injectable()\r\n' +
  'export class TestEffects {\r\n' +
  '  loadTestList$ = createEffect(() => {\r\n' +
  '  return this.actions$.pipe(\r\n' +
  '    ofType(TestActions.loadTestList),\r\n' +
  '    switchMap((act) =>\r\n' +
  '      this.testService.loadTestList().pipe(\r\n' +
  '        map(() =>\r\n' +
  '          TestActions.loadTestListSuccess({\r\n' +
  '          }),\r\n' +
  '        ),\r\n' +
  '        catchError((err) =>\r\n' +
  '          of(\r\n' +
  '            TestActions.loadTestListFailure({\r\n' +
  '              error: err,\r\n' +
  '            })\r\n' +
  '          )\r\n' +
  '        )\r\n' +
  '      )\r\n' +
  '    )\r\n' +
  '  );\r\n' +
  '});\n\n' +
  'loadTestById$ = createEffect(() => {\r\n' +
  '  return this.actions$.pipe(\r\n' +
  '    ofType(TestActions.loadTestById),\r\n' +
  '    switchMap((act) =>\r\n' +
  '      this.testService.loadTestById().pipe(\r\n' +
  '        map(() =>\r\n' +
  '          TestActions.loadTestByIdSuccess({\r\n' +
  '          }),\r\n' +
  '        ),\r\n' +
  '        catchError((err) =>\r\n' +
  '          of(\r\n' +
  '            TestActions.loadTestByIdFailure({\r\n' +
  '              error: err,\r\n' +
  '            })\r\n' +
  '          )\r\n' +
  '        )\r\n' +
  '      )\r\n' +
  '    )\r\n' +
  '  );\r\n' +
  '});\n\n' +
  'createTest$ = createEffect(() => {\r\n' +
  '  return this.actions$.pipe(\r\n' +
  '    ofType(TestActions.createTest),\r\n' +
  '    switchMap((act) =>\r\n' +
  '      this.testService.createTest().pipe(\r\n' +
  '        map(() =>\r\n' +
  '          TestActions.createTestSuccess({\r\n' +
  '          }),\r\n' +
  '        ),\r\n' +
  '        catchError((err) =>\r\n' +
  '          of(\r\n' +
  '            TestActions.createTestFailure({\r\n' +
  '              error: err,\r\n' +
  '            })\r\n' +
  '          )\r\n' +
  '        )\r\n' +
  '      )\r\n' +
  '    )\r\n' +
  '  );\r\n' +
  '});\n\n' +
  'updateTest$ = createEffect(() => {\r\n' +
  '  return this.actions$.pipe(\r\n' +
  '    ofType(TestActions.updateTest),\r\n' +
  '    switchMap((act) =>\r\n' +
  '      this.testService.updateTest().pipe(\r\n' +
  '        map(() =>\r\n' +
  '          TestActions.updateTestSuccess({\r\n' +
  '          }),\r\n' +
  '        ),\r\n' +
  '        catchError((err) =>\r\n' +
  '          of(\r\n' +
  '            TestActions.updateTestFailure({\r\n' +
  '              error: err,\r\n' +
  '            })\r\n' +
  '          )\r\n' +
  '        )\r\n' +
  '      )\r\n' +
  '    )\r\n' +
  '  );\r\n' +
  '});\n\n' +
  'deleteTest$ = createEffect(() => {\r\n' +
  '  return this.actions$.pipe(\r\n' +
  '    ofType(TestActions.deleteTest),\r\n' +
  '    switchMap((act) =>\r\n' +
  '      this.testService.deleteTest().pipe(\r\n' +
  '        map(() =>\r\n' +
  '          TestActions.deleteTestSuccess({\r\n' +
  '          }),\r\n' +
  '        ),\r\n' +
  '        catchError((err) =>\r\n' +
  '          of(\r\n' +
  '            TestActions.deleteTestFailure({\r\n' +
  '              error: err,\r\n' +
  '            })\r\n' +
  '          )\r\n' +
  '        )\r\n' +
  '      )\r\n' +
  '    )\r\n' +
  '  );\r\n' +
  '});\n\n' +
  'constructor(private actions$: Actions,private testService: TestService,) {\r\n' +
  '  }\r\n' +
  '}\r\n';

const DOMAIN_TEST_FACADE_EMPTY = 'import { Injectable } from \'@angular/core\';\r\n' +
  'import { select, Store } from \'@ngrx/store\';\r\n' +
  'import * as TestSelectors from \'./test.selectors\';\r\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\r\n' +
  'import * as TestActions from \'./test.actions\';\r\n' +
  'import {TestResetsFacade} from \'./test.facade.resets\';\r\n\r\n' +
  '@Injectable()\r\n' +
  'export class TestFacade extends TestResetsFacade {\r\n' +
  '  constructor(\r\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\r\n' +
  '  ) {\r\n' +
  '    super(store);\r\n' +
  '  }\r\n' +
  '}\r\n';

const DOMAIN_TEST_FACADE = 'import { Injectable } from \'@angular/core\';\r\n' +
  'import { select, Store } from \'@ngrx/store\';\r\n' +
  'import * as TestSelectors from \'./test.selectors\';\r\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\r\n' +
  'import * as TestActions from \'./test.actions\';\r\n' +
  'import {TestResetsFacade} from \'./test.facade.resets\';\r\n\r\n' +
  '@Injectable()\r\n' +
  'export class TestFacade extends TestResetsFacade {\r\n' +
  '  test$ = this.store.pipe(select(TestSelectors.getTest));testList$ = this.store.pipe(select(TestSelectors.getTestList));loadTestListPending$ = this.store.pipe(select(TestSelectors.getLoadTestListPending));loadTestListSuccess$ = this.store.pipe(select(TestSelectors.getLoadTestListSuccess));loadTestListFailure$ = this.store.pipe(select(TestSelectors.getLoadTestListFailure));loadTestByIdPending$ = this.store.pipe(select(TestSelectors.getLoadTestByIdPending));loadTestByIdSuccess$ = this.store.pipe(select(TestSelectors.getLoadTestByIdSuccess));loadTestByIdFailure$ = this.store.pipe(select(TestSelectors.getLoadTestByIdFailure));createTestPending$ = this.store.pipe(select(TestSelectors.getCreateTestPending));createTestSuccess$ = this.store.pipe(select(TestSelectors.getCreateTestSuccess));createTestFailure$ = this.store.pipe(select(TestSelectors.getCreateTestFailure));updateTestPending$ = this.store.pipe(select(TestSelectors.getUpdateTestPending));updateTestSuccess$ = this.store.pipe(select(TestSelectors.getUpdateTestSuccess));updateTestFailure$ = this.store.pipe(select(TestSelectors.getUpdateTestFailure));deleteTestPending$ = this.store.pipe(select(TestSelectors.getDeleteTestPending));deleteTestSuccess$ = this.store.pipe(select(TestSelectors.getDeleteTestSuccess));deleteTestFailure$ = this.store.pipe(select(TestSelectors.getDeleteTestFailure));loadTestList(id: string) {\r\n' +
  '  this.dispatch(TestActions.loadTestList({ id }));\r\n' +
  '}\n\n' +
  'loadTestById(testId: string) {\r\n' +
  '  this.dispatch(TestActions.loadTestById({ testId }));\r\n' +
  '}\n\n' +
  'createTest(test: Test) {\r\n' +
  '  this.dispatch(TestActions.createTest({ test }));\r\n' +
  '}\n\n' +
  'updateTest(testId: string, test: Test) {\r\n' +
  '  this.dispatch(TestActions.updateTest({ testId, test }));\r\n' +
  '}\n\n' +
  'deleteTest(testId: string) {\r\n' +
  '  this.dispatch(TestActions.deleteTest({ testId }));\r\n' +
  '}\n\n' +
  'constructor(\r\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\r\n' +
  '  ) {\r\n' +
  '    super(store);\r\n' +
  '  }\r\n' +
  '}\r\n';

const DOMAIN_TEST_FACADE_RESETS_EMPTY = 'import { Injectable } from \'@angular/core\';\r\n' +
  'import { Action, Store } from \'@ngrx/store\';\r\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\r\n' +
  'import * as TestResetsActions from \'./test.actions.resets\';\r\n\r\n' +
  '@Injectable()\r\n' +
  'export class TestResetsFacade {\r\n' +
  '  resetTestAssets() {\r\n' +
  '    this.dispatch(TestResetsActions.resetTestAssets());\r\n' +
  '  }\r\n\r\n' +
  '  constructor(\r\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\r\n' +
  '  ) {}\r\n\r\n' +
  '  protected dispatch(action: Action) {\r\n' +
  '    this.store.dispatch(action);\r\n' +
  '  }\r\n' +
  '}\r\n';

const DOMAIN_TEST_FACADE_RESETS = 'import { Injectable } from \'@angular/core\';\r\n' +
  'import { Action, Store } from \'@ngrx/store\';\r\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\r\n' +
  'import * as TestResetsActions from \'./test.actions.resets\';\r\n\r\n' +
  '@Injectable()\r\n' +
  'export class TestResetsFacade {\r\n' +
  '  resetTest() {\r\n' +
  '  this.dispatch(TestResetsActions.resetTest());\r\n' +
  '}\n\n' +
  'resetTestList() {\r\n' +
  '  this.dispatch(TestResetsActions.resetTestList());\r\n' +
  '}\n\n' +
  'resetTestAssets() {\r\n' +
  '    this.dispatch(TestResetsActions.resetTestAssets());\r\n' +
  '  }\r\n\r\n' +
  '  constructor(\r\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\r\n' +
  '  ) {}\r\n\r\n' +
  '  protected dispatch(action: Action) {\r\n' +
  '    this.store.dispatch(action);\r\n' +
  '  }\r\n' +
  '}\r\n';

const DOMAIN_TEST_REDUCER_EMPTY = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\r\n' +
  'import * as TestActions from \'./test.actions\';\r\n' +
  'import {getTestResetsOns} from \'./test.reducer.resets\';\r\n' +
  'import {replaceArrayItem} from \'@tpx1/util\';\r\n\r\n' +
  'export interface TestState {}\r\n\r\n' +
  'export const testInitialState: TestState = {\r\n' +
  '   // Use carefully! testInitialState should be empty.\r\n' +
  '   // Arrays should be initiated with undefined or null to differ between unloaded array and loaded empty array.\r\n' +
  '};\r\n\r\n' +
  'export function getTestOns<T extends TestState>(): ReducerTypes<T, ActionCreator[]>[] {\r\n' +
  '  return [...getTestResetsOns<T>(),];\r\n' +
  '}\r\n';

const DOMAIN_TEST_REDUCER = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\r\n' +
  'import * as TestActions from \'./test.actions\';\r\n' +
  'import {getTestResetsOns} from \'./test.reducer.resets\';\r\n' +
  'import {replaceArrayItem} from \'@tpx1/util\';\r\n\r\n' +
  'export interface TestState {test?: Test;testList?: Test[];loadTestListPending?: boolean;\r\n' +
  'loadTestListSuccess?: boolean;\r\n' +
  'loadTestListFailure?: Error;loadTestByIdPending?: boolean;\r\n' +
  'loadTestByIdSuccess?: boolean;\r\n' +
  'loadTestByIdFailure?: Error;createTestPending?: boolean;\r\n' +
  'createTestSuccess?: boolean;\r\n' +
  'createTestFailure?: Error;updateTestPending?: boolean;\r\n' +
  'updateTestSuccess?: boolean;\r\n' +
  'updateTestFailure?: Error;deleteTestPending?: boolean;\r\n' +
  'deleteTestSuccess?: boolean;\r\n' +
  'deleteTestFailure?: Error;}\r\n\r\n' +
  'export const testInitialState: TestState = {\r\n' +
  '   // Use carefully! testInitialState should be empty.\r\n' +
  '   // Arrays should be initiated with undefined or null to differ between unloaded array and loaded empty array.\r\n' +
  '};\r\n\r\n' +
  'export function getTestOns<T extends TestState>(): ReducerTypes<T, ActionCreator[]>[] {\r\n' +
  '  return [...getTestResetsOns<T>(),\n\n' +
  '/*\r\n' +
  ' * loadTestList\r\n' +
  ' */\r\n' +
  'on(TestActions.loadTestList, (state) => ({\r\n' +
  '  ...state,\r\n' +
  '  testList: null,\r\n' +
  '  loadTestListPending: true,\r\n' +
  '  loadTestListSuccess: false,\r\n' +
  '  loadTestListFailure: null,\r\n' +
  '})),\r\n' +
  'on(TestActions.loadTestListSuccess, (state, {testList}) => ({\r\n' +
  '  ...state,\r\n' +
  '  testList: testList,\r\n' +
  '  loadTestListPending: false,\r\n' +
  '  loadTestListSuccess: true,\r\n' +
  '})),\r\n' +
  'on(TestActions.loadTestListFailure, (state, {error}) => ({\r\n' +
  '  ...state,\r\n' +
  '  loadTestListPending: false,\r\n' +
  '  loadTestListFailure: error,\r\n' +
  '})),\n\n' +
  '/*\r\n' +
  ' * loadTestById\r\n' +
  ' */\r\n' +
  'on(TestActions.loadTestById, (state) => ({\r\n' +
  '  ...state,\r\n' +
  '  test: null,\r\n' +
  '  loadTestByIdPending: true,\r\n' +
  '  loadTestByIdSuccess: false,\r\n' +
  '  loadTestByIdFailure: null,\r\n' +
  '})),\r\n' +
  'on(TestActions.loadTestByIdSuccess, (state, {test}) => ({\r\n' +
  '  ...state,\r\n' +
  '  test: test,\r\n' +
  '  loadTestByIdPending: false,\r\n' +
  '  loadTestByIdSuccess: true,\r\n' +
  '})),\r\n' +
  'on(TestActions.loadTestByIdFailure, (state, {error}) => ({\r\n' +
  '  ...state,\r\n' +
  '  loadTestByIdPending: false,\r\n' +
  '  loadTestByIdFailure: error,\r\n' +
  '})),\n\n' +
  '/*\r\n' +
  ' * createTest\r\n' +
  ' */\r\n' +
  'on(TestActions.createTest, (state) => ({\r\n' +
  '  ...state,\r\n' +
  '  createTestPending: true,\r\n' +
  '  createTestSuccess: false,\r\n' +
  '  createTestFailure: null,\r\n' +
  '})),\r\n' +
  'on(TestActions.createTestSuccess, (state, {test}) => ({\r\n' +
  '  ...state,\r\n' +
  '  test: test,\r\n' +
  '  testList: [...(state.testList || []), test],\r\n' +
  '  createTestPending: false,\r\n' +
  '  createTestSuccess: true,\r\n' +
  '})),\r\n' +
  'on(TestActions.createTestFailure, (state, {error}) => ({\r\n' +
  '  ...state,\r\n' +
  '  createTestPending: false,\r\n' +
  '  createTestFailure: error,\r\n' +
  '})),\n\n' +
  '/*\r\n' +
  ' * updateTest\r\n' +
  ' */\r\n' +
  'on(TestActions.updateTest, (state) => ({\r\n' +
  '  ...state,\r\n' +
  '  updateTestPending: true,\r\n' +
  '  updateTestSuccess: false,\r\n' +
  '  updateTestFailure: null,\r\n' +
  '})),\r\n' +
  'on(TestActions.updateTestSuccess, (state, {test}) => ({\r\n' +
  '  ...state,\r\n' +
  '  test: test,\r\n' +
  '  testList: replaceArrayItem(state.testList, test, \'id\'),\r\n' +
  '  updateTestPending: false,\r\n' +
  '  updateTestSuccess: true,\r\n' +
  '})),\r\n' +
  'on(TestActions.updateTestFailure, (state, {error}) => ({\r\n' +
  '  ...state,\r\n' +
  '  updateTestPending: false,\r\n' +
  '  updateTestFailure: error,\r\n' +
  '})),\n\n' +
  '/*\r\n' +
  ' * deleteTest\r\n' +
  ' */\r\n' +
  'on(TestActions.deleteTest, (state) => ({\r\n' +
  '  ...state,\r\n' +
  '  deleteTestPending: true,\r\n' +
  '  deleteTestSuccess: false,\r\n' +
  '  deleteTestFailure: null,\r\n' +
  '})),\r\n' +
  'on(TestActions.deleteTestSuccess, (state, {testId}) => ({\r\n' +
  '  ...state,\r\n' +
  '  testList: [...state.testList?.filter(v => v.id !== testId) || []],\r\n' +
  '  deleteTestPending: false,\r\n' +
  '  deleteTestSuccess: true,\r\n' +
  '})),\r\n' +
  'on(TestActions.deleteTestFailure, (state, {error}) => ({\r\n' +
  '  ...state,\r\n' +
  '  deleteTestPending: false,\r\n' +
  '  deleteTestFailure: error,\r\n' +
  '})),\n\n' +
  '];\r\n' +
  '}\r\n';

const DOMAIN_TEST_REDUCER_RESETS_EMPTY = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\r\n' +
  'import * as TestResetsActions from \'./test.actions.resets\';\r\n' +
  'import {TestState} from \'./test.reducer\';\r\n\r\n' +
  'export function getTestResetsOns<T extends TestState>(): ReducerTypes<T, ActionCreator[]>[] {\r\n' +
  '  return [\r\n' +
  '    /*\r\n' +
  '     * resetTestAssets\r\n' +
  '     */\r\n' +
  '    on(TestResetsActions.resetTestAssets, (state) => ({...state,})),\r\n' +
  '  ];\r\n' +
  '}\r\n';

const DOMAIN_TEST_REDUCER_RESETS = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\r\n' +
  'import * as TestResetsActions from \'./test.actions.resets\';\r\n' +
  'import {TestState} from \'./test.reducer\';\r\n\r\n' +
  'export function getTestResetsOns<T extends TestState>(): ReducerTypes<T, ActionCreator[]>[] {\r\n' +
  '  return [\r\n' +
  '    /*\r\n' +
  ' * resetTest\r\n' +
  ' */\r\n' +
  'on(TestResetsActions.resetTest, (state) => ({\r\n' +
  '  ...state,\r\n' +
  '  test: null,\r\n' +
  '})),\n\n' +
  '/*\r\n' +
  ' * resetTestList\r\n' +
  ' */\r\n' +
  'on(TestResetsActions.resetTestList, (state) => ({\r\n' +
  '  ...state,\r\n' +
  '  testList: null,\r\n' +
  '})),\n\n' +
  '/*\r\n' +
  '     * resetTestAssets\r\n' +
  '     */\r\n' +
  '    on(TestResetsActions.resetTestAssets, (state) => ({...state,loadTestListPending: false,\r\n' +
  'loadTestListSuccess: false,\r\n' +
  'loadTestListFailure: null,loadTestByIdPending: false,\r\n' +
  'loadTestByIdSuccess: false,\r\n' +
  'loadTestByIdFailure: null,createTestPending: false,\r\n' +
  'createTestSuccess: false,\r\n' +
  'createTestFailure: null,updateTestPending: false,\r\n' +
  'updateTestSuccess: false,\r\n' +
  'updateTestFailure: null,deleteTestPending: false,\r\n' +
  'deleteTestSuccess: false,\r\n' +
  'deleteTestFailure: null,})),\r\n' +
  '  ];\r\n' +
  '}\r\n';

const DOMAIN_TEST_SELECTORS_EMPTY = 'import { getExampleDomainState } from \'../example-domain.selectors\';\r\n' +
  'import { State } from \'../example-domain.reducer\';\r\n' +
  'import { createSelector } from \'@ngrx/store\';';

const DOMAIN_TEST_SELECTORS = 'import { getExampleDomainState } from \'../example-domain.selectors\';\r\n' +
  'import { State } from \'../example-domain.reducer\';\r\n' +
  'import { createSelector } from \'@ngrx/store\';\n\n' +
  'export const getTest = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.test\r\n' +
  ');\n\n' +
  'export const getTestList = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.testList\r\n' +
  ');\n\n' +
  'export const getLoadTestListPending = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.loadTestListPending\r\n' +
  ');\n\n' +
  'export const getLoadTestListSuccess = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.loadTestListSuccess\r\n' +
  ');\n\n' +
  'export const getLoadTestListFailure = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.loadTestListFailure\r\n' +
  ');\n\n' +
  'export const getLoadTestByIdPending = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.loadTestByIdPending\r\n' +
  ');\n\n' +
  'export const getLoadTestByIdSuccess = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.loadTestByIdSuccess\r\n' +
  ');\n\n' +
  'export const getLoadTestByIdFailure = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.loadTestByIdFailure\r\n' +
  ');\n\n' +
  'export const getCreateTestPending = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.createTestPending\r\n' +
  ');\n\n' +
  'export const getCreateTestSuccess = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.createTestSuccess\r\n' +
  ');\n\n' +
  'export const getCreateTestFailure = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.createTestFailure\r\n' +
  ');\n\n' +
  'export const getUpdateTestPending = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.updateTestPending\r\n' +
  ');\n\n' +
  'export const getUpdateTestSuccess = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.updateTestSuccess\r\n' +
  ');\n\n' +
  'export const getUpdateTestFailure = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.updateTestFailure\r\n' +
  ');\n\n' +
  'export const getDeleteTestPending = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.deleteTestPending\r\n' +
  ');\n\n' +
  'export const getDeleteTestSuccess = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.deleteTestSuccess\r\n' +
  ');\n\n' +
  'export const getDeleteTestFailure = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.deleteTestFailure\r\n' +
  ');\n\n';

const DOMAIN_YEAH_ACTIONS_EMPTY = 'import { createAction, props } from \'@ngrx/store\';';

const DOMAIN_YEAH_ACTIONS = 'import { createAction, props } from \'@ngrx/store\';\n\n' +
  '/*\r\n' +
  ' * loadYeahList\r\n' +
  ' */\r\n' +
  'export const loadYeahList = createAction(\r\n' +
  '  \'[ExampleDomain] loadYeahList\',\r\n' +
  '  props<{ id: string }>()\r\n' +
  ');\r\n' +
  'export const loadYeahListSuccess = createAction(\r\n' +
  '  \'[ExampleDomain] loadYeahListSuccess\',\r\n' +
  '  props<{ yeahList: Yeah[] }>()\r\n' +
  ');\r\n' +
  'export const loadYeahListFailure = createAction(\r\n' +
  '  \'[ExampleDomain] loadYeahListFailure\',\r\n' +
  '  props<{ error: Error }>()\r\n' +
  ');\n\n' +
  '/*\r\n' +
  ' * loadYeahById\r\n' +
  ' */\r\n' +
  'export const loadYeahById = createAction(\r\n' +
  '  \'[ExampleDomain] loadYeahById\',\r\n' +
  '  props<{ yeahId: string }>()\r\n' +
  ');\r\n' +
  'export const loadYeahByIdSuccess = createAction(\r\n' +
  '  \'[ExampleDomain] loadYeahByIdSuccess\',\r\n' +
  '  props<{ yeah: Yeah }>()\r\n' +
  ');\r\n' +
  'export const loadYeahByIdFailure = createAction(\r\n' +
  '  \'[ExampleDomain] loadYeahByIdFailure\',\r\n' +
  '  props<{ error: Error }>()\r\n' +
  ');\n\n' +
  '/*\r\n' +
  ' * createYeah\r\n' +
  ' */\r\n' +
  'export const createYeah = createAction(\r\n' +
  '  \'[ExampleDomain] createYeah\',\r\n' +
  '  props<{ yeah: Yeah }>()\r\n' +
  ');\r\n' +
  'export const createYeahSuccess = createAction(\r\n' +
  '  \'[ExampleDomain] createYeahSuccess\',\r\n' +
  '  props<{ yeah: Yeah }>()\r\n' +
  ');\r\n' +
  'export const createYeahFailure = createAction(\r\n' +
  '  \'[ExampleDomain] createYeahFailure\',\r\n' +
  '  props<{ error: Error }>()\r\n' +
  ');\n\n' +
  '/*\r\n' +
  ' * updateYeah\r\n' +
  ' */\r\n' +
  'export const updateYeah = createAction(\r\n' +
  '  \'[ExampleDomain] updateYeah\',\r\n' +
  '  props<{ yeahId: string; yeah: Yeah }>()\r\n' +
  ');\r\n' +
  'export const updateYeahSuccess = createAction(\r\n' +
  '  \'[ExampleDomain] updateYeahSuccess\',\r\n' +
  '  props<{ yeah: Yeah }>()\r\n' +
  ');\r\n' +
  'export const updateYeahFailure = createAction(\r\n' +
  '  \'[ExampleDomain] updateYeahFailure\',\r\n' +
  '  props<{ error: Error }>()\r\n' +
  ');\n\n' +
  '/*\r\n' +
  ' * deleteYeah\r\n' +
  ' */\r\n' +
  'export const deleteYeah = createAction(\r\n' +
  '  \'[ExampleDomain] deleteYeah\',\r\n' +
  '  props<{ yeahId: string }>()\r\n' +
  ');\r\n' +
  'export const deleteYeahSuccess = createAction(\r\n' +
  '  \'[ExampleDomain] deleteYeahSuccess\',\r\n' +
  '  props<{ yeahId: string }>()\r\n' +
  ');\r\n' +
  'export const deleteYeahFailure = createAction(\r\n' +
  '  \'[ExampleDomain] deleteYeahFailure\',\r\n' +
  '  props<{ error: Error }>()\r\n' +
  ');\n\n';

const DOMAIN_YEAH_ACTIONS_RESETS_EMPTY = 'import { createAction } from \'@ngrx/store\';\r\n\r\n' +
  '/*\r\n' +
  ' * resetYeahAssets\r\n' +
  ' */\r\n' +
  'export const resetYeahAssets = createAction(\r\n' +
  '  \'[ExampleDomain] resetYeahAssets\'\r\n' +
  ');\r\n';

const DOMAIN_YEAH_ACTIONS_RESETS = 'import { createAction } from \'@ngrx/store\';\r\n\r\n' +
  '/*\r\n' +
  ' * resetYeah\r\n' +
  ' */\r\n' +
  'export const resetYeah = createAction(\r\n' +
  '  \'[ExampleDomain] resetYeah\',\r\n' +
  ');\n\n' +
  '/*\r\n' +
  ' * resetYeahList\r\n' +
  ' */\r\n' +
  'export const resetYeahList = createAction(\r\n' +
  '  \'[ExampleDomain] resetYeahList\',\r\n' +
  ');\n\n' +
  '/*\r\n' +
  ' * resetYeahAssets\r\n' +
  ' */\r\n' +
  'export const resetYeahAssets = createAction(\r\n' +
  '  \'[ExampleDomain] resetYeahAssets\'\r\n' +
  ');\r\n';

const DOMAIN_YEAH_EFFECTS_EMPTY = 'import {act, Actions, createEffect, ofType} from \'@ngrx/effects\';\r\n' +
  'import * as YeahActions from \'./yeah.actions\';\r\n' +
  'import {catchError, map, switchMap} from \'rxjs/operators\';\r\n' +
  'import {of} from \'rxjs\';\r\n' +
  'import {Injectable} from \'@angular/core\';\r\n\r\n' +
  '@Injectable()\r\n' +
  'export class YeahEffects {\r\n' +
  '  constructor(private actions$: Actions,private yeahService: YeahService,) {\r\n' +
  '  }\r\n' +
  '}\r\n';

const DOMAIN_YEAH_EFFECTS = '' +
  'import {act, Actions, createEffect, ofType} from \'@ngrx/effects\';\r\n' +
  'import * as YeahActions from \'./yeah.actions\';\r\n' +
  'import {catchError, map, switchMap} from \'rxjs/operators\';\r\n' +
  'import {of} from \'rxjs\';\r\n' +
  'import {Injectable} from \'@angular/core\';\r\n\r\n' +
  '@Injectable()\r\n' +
  'export class YeahEffects {\r\n' +
  '  loadYeahList$ = createEffect(() => {\r\n' +
  '  return this.actions$.pipe(\r\n' +
  '    ofType(YeahActions.loadYeahList),\r\n' +
  '    switchMap((act) =>\r\n' +
  '      this.yeahService.loadYeahList().pipe(\r\n' +
  '        map(() =>\r\n' +
  '          YeahActions.loadYeahListSuccess({\r\n' +
  '          }),\r\n' +
  '        ),\r\n' +
  '        catchError((err) =>\r\n' +
  '          of(\r\n' +
  '            YeahActions.loadYeahListFailure({\r\n' +
  '              error: err,\r\n' +
  '            })\r\n' +
  '          )\r\n' +
  '        )\r\n' +
  '      )\r\n' +
  '    )\r\n' +
  '  );\r\n' +
  '});\n\n' +
  'loadYeahById$ = createEffect(() => {\r\n' +
  '  return this.actions$.pipe(\r\n' +
  '    ofType(YeahActions.loadYeahById),\r\n' +
  '    switchMap((act) =>\r\n' +
  '      this.yeahService.loadYeahById().pipe(\r\n' +
  '        map(() =>\r\n' +
  '          YeahActions.loadYeahByIdSuccess({\r\n' +
  '          }),\r\n' +
  '        ),\r\n' +
  '        catchError((err) =>\r\n' +
  '          of(\r\n' +
  '            YeahActions.loadYeahByIdFailure({\r\n' +
  '              error: err,\r\n' +
  '            })\r\n' +
  '          )\r\n' +
  '        )\r\n' +
  '      )\r\n' +
  '    )\r\n' +
  '  );\r\n' +
  '});\n\n' +
  'createYeah$ = createEffect(() => {\r\n' +
  '  return this.actions$.pipe(\r\n' +
  '    ofType(YeahActions.createYeah),\r\n' +
  '    switchMap((act) =>\r\n' +
  '      this.yeahService.createYeah().pipe(\r\n' +
  '        map(() =>\r\n' +
  '          YeahActions.createYeahSuccess({\r\n' +
  '          }),\r\n' +
  '        ),\r\n' +
  '        catchError((err) =>\r\n' +
  '          of(\r\n' +
  '            YeahActions.createYeahFailure({\r\n' +
  '              error: err,\r\n' +
  '            })\r\n' +
  '          )\r\n' +
  '        )\r\n' +
  '      )\r\n' +
  '    )\r\n' +
  '  );\r\n' +
  '});\n\n' +
  'updateYeah$ = createEffect(() => {\r\n' +
  '  return this.actions$.pipe(\r\n' +
  '    ofType(YeahActions.updateYeah),\r\n' +
  '    switchMap((act) =>\r\n' +
  '      this.yeahService.updateYeah().pipe(\r\n' +
  '        map(() =>\r\n' +
  '          YeahActions.updateYeahSuccess({\r\n' +
  '          }),\r\n' +
  '        ),\r\n' +
  '        catchError((err) =>\r\n' +
  '          of(\r\n' +
  '            YeahActions.updateYeahFailure({\r\n' +
  '              error: err,\r\n' +
  '            })\r\n' +
  '          )\r\n' +
  '        )\r\n' +
  '      )\r\n' +
  '    )\r\n' +
  '  );\r\n' +
  '});\n\n' +
  'deleteYeah$ = createEffect(() => {\r\n' +
  '  return this.actions$.pipe(\r\n' +
  '    ofType(YeahActions.deleteYeah),\r\n' +
  '    switchMap((act) =>\r\n' +
  '      this.yeahService.deleteYeah().pipe(\r\n' +
  '        map(() =>\r\n' +
  '          YeahActions.deleteYeahSuccess({\r\n' +
  '          }),\r\n' +
  '        ),\r\n' +
  '        catchError((err) =>\r\n' +
  '          of(\r\n' +
  '            YeahActions.deleteYeahFailure({\r\n' +
  '              error: err,\r\n' +
  '            })\r\n' +
  '          )\r\n' +
  '        )\r\n' +
  '      )\r\n' +
  '    )\r\n' +
  '  );\r\n' +
  '});\n\n' +
  'constructor(private actions$: Actions,private yeahService: YeahService,) {\r\n' +
  '  }\r\n' +
  '}\r\n';

const DOMAIN_YEAH_FACADE_EMPTY = 'import { Injectable } from \'@angular/core\';\r\n' +
  'import { select, Store } from \'@ngrx/store\';\r\n' +
  'import * as YeahSelectors from \'./yeah.selectors\';\r\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\r\n' +
  'import * as YeahActions from \'./yeah.actions\';\r\n' +
  'import {YeahResetsFacade} from \'./yeah.facade.resets\';\r\n\r\n' +
  '@Injectable()\r\n' +
  'export class YeahFacade extends YeahResetsFacade {\r\n' +
  '  constructor(\r\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\r\n' +
  '  ) {\r\n' +
  '    super(store);\r\n' +
  '  }\r\n' +
  '}\r\n';

const DOMAIN_YEAH_FACADE = 'import { Injectable } from \'@angular/core\';\r\n' +
  'import { select, Store } from \'@ngrx/store\';\r\n' +
  'import * as YeahSelectors from \'./yeah.selectors\';\r\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\r\n' +
  'import * as YeahActions from \'./yeah.actions\';\r\n' +
  'import {YeahResetsFacade} from \'./yeah.facade.resets\';\r\n\r\n' +
  '@Injectable()\r\n' +
  'export class YeahFacade extends YeahResetsFacade {\r\n' +
  '  yeah$ = this.store.pipe(select(YeahSelectors.getYeah));yeahList$ = this.store.pipe(select(YeahSelectors.getYeahList));loadYeahListPending$ = this.store.pipe(select(YeahSelectors.getLoadYeahListPending));loadYeahListSuccess$ = this.store.pipe(select(YeahSelectors.getLoadYeahListSuccess));loadYeahListFailure$ = this.store.pipe(select(YeahSelectors.getLoadYeahListFailure));loadYeahByIdPending$ = this.store.pipe(select(YeahSelectors.getLoadYeahByIdPending));loadYeahByIdSuccess$ = this.store.pipe(select(YeahSelectors.getLoadYeahByIdSuccess));loadYeahByIdFailure$ = this.store.pipe(select(YeahSelectors.getLoadYeahByIdFailure));createYeahPending$ = this.store.pipe(select(YeahSelectors.getCreateYeahPending));createYeahSuccess$ = this.store.pipe(select(YeahSelectors.getCreateYeahSuccess));createYeahFailure$ = this.store.pipe(select(YeahSelectors.getCreateYeahFailure));updateYeahPending$ = this.store.pipe(select(YeahSelectors.getUpdateYeahPending));updateYeahSuccess$ = this.store.pipe(select(YeahSelectors.getUpdateYeahSuccess));updateYeahFailure$ = this.store.pipe(select(YeahSelectors.getUpdateYeahFailure));deleteYeahPending$ = this.store.pipe(select(YeahSelectors.getDeleteYeahPending));deleteYeahSuccess$ = this.store.pipe(select(YeahSelectors.getDeleteYeahSuccess));deleteYeahFailure$ = this.store.pipe(select(YeahSelectors.getDeleteYeahFailure));loadYeahList(id: string) {\r\n' +
  '  this.dispatch(YeahActions.loadYeahList({ id }));\r\n' +
  '}\n\n' +
  'loadYeahById(yeahId: string) {\r\n' +
  '  this.dispatch(YeahActions.loadYeahById({ yeahId }));\r\n' +
  '}\n\n' +
  'createYeah(yeah: Yeah) {\r\n' +
  '  this.dispatch(YeahActions.createYeah({ yeah }));\r\n' +
  '}\n\n' +
  'updateYeah(yeahId: string, yeah: Yeah) {\r\n' +
  '  this.dispatch(YeahActions.updateYeah({ yeahId, yeah }));\r\n' +
  '}\n\n' +
  'deleteYeah(yeahId: string) {\r\n' +
  '  this.dispatch(YeahActions.deleteYeah({ yeahId }));\r\n' +
  '}\n\n' +
  'constructor(\r\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\r\n' +
  '  ) {\r\n' +
  '    super(store);\r\n' +
  '  }\r\n' +
  '}\r\n';

const DOMAIN_YEAH_FACADE_RESETS_EMPTY = 'import { Injectable } from \'@angular/core\';\r\n' +
  'import { Action, Store } from \'@ngrx/store\';\r\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\r\n' +
  'import * as YeahResetsActions from \'./yeah.actions.resets\';\r\n\r\n' +
  '@Injectable()\r\n' +
  'export class YeahResetsFacade {\r\n' +
  '  resetYeahAssets() {\r\n' +
  '    this.dispatch(YeahResetsActions.resetYeahAssets());\r\n' +
  '  }\r\n\r\n' +
  '  constructor(\r\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\r\n' +
  '  ) {}\r\n\r\n' +
  '  protected dispatch(action: Action) {\r\n' +
  '    this.store.dispatch(action);\r\n' +
  '  }\r\n' +
  '}\r\n';

const DOMAIN_YEAH_FACADE_RESETS = 'import { Injectable } from \'@angular/core\';\r\n' +
  'import { Action, Store } from \'@ngrx/store\';\r\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\r\n' +
  'import * as YeahResetsActions from \'./yeah.actions.resets\';\r\n\r\n' +
  '@Injectable()\r\n' +
  'export class YeahResetsFacade {\r\n' +
  '  resetYeah() {\r\n' +
  '  this.dispatch(YeahResetsActions.resetYeah());\r\n' +
  '}\n\n' +
  'resetYeahList() {\r\n' +
  '  this.dispatch(YeahResetsActions.resetYeahList());\r\n' +
  '}\n\n' +
  'resetYeahAssets() {\r\n' +
  '    this.dispatch(YeahResetsActions.resetYeahAssets());\r\n' +
  '  }\r\n\r\n' +
  '  constructor(\r\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\r\n' +
  '  ) {}\r\n\r\n' +
  '  protected dispatch(action: Action) {\r\n' +
  '    this.store.dispatch(action);\r\n' +
  '  }\r\n' +
  '}\r\n';

const DOMAIN_YEAH_REDUCER_EMPTY = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\r\n' +
  'import * as YeahActions from \'./yeah.actions\';\r\n' +
  'import {getYeahResetsOns} from \'./yeah.reducer.resets\';\r\n' +
  'import {replaceArrayItem} from \'@tpx1/util\';\r\n\r\n' +
  'export interface YeahState {}\r\n\r\n' +
  'export const yeahInitialState: YeahState = {\r\n' +
  '   // Use carefully! yeahInitialState should be empty.\r\n' +
  '   // Arrays should be initiated with undefined or null to differ between unloaded array and loaded empty array.\r\n' +
  '};\r\n\r\n' +
  'export function getYeahOns<T extends YeahState>(): ReducerTypes<T, ActionCreator[]>[] {\r\n' +
  '  return [...getYeahResetsOns<T>(),];\r\n' +
  '}\r\n';

const DOMAIN_YEAH_REDUCER = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\r\n' +
  'import * as YeahActions from \'./yeah.actions\';\r\n' +
  'import {getYeahResetsOns} from \'./yeah.reducer.resets\';\r\n' +
  'import {replaceArrayItem} from \'@tpx1/util\';\r\n\r\n' +
  'export interface YeahState {yeah?: Yeah;yeahList?: Yeah[];loadYeahListPending?: boolean;\r\n' +
  'loadYeahListSuccess?: boolean;\r\n' +
  'loadYeahListFailure?: Error;loadYeahByIdPending?: boolean;\r\n' +
  'loadYeahByIdSuccess?: boolean;\r\n' +
  'loadYeahByIdFailure?: Error;createYeahPending?: boolean;\r\n' +
  'createYeahSuccess?: boolean;\r\n' +
  'createYeahFailure?: Error;updateYeahPending?: boolean;\r\n' +
  'updateYeahSuccess?: boolean;\r\n' +
  'updateYeahFailure?: Error;deleteYeahPending?: boolean;\r\n' +
  'deleteYeahSuccess?: boolean;\r\n' +
  'deleteYeahFailure?: Error;}\r\n\r\n' +
  'export const yeahInitialState: YeahState = {\r\n' +
  '   // Use carefully! yeahInitialState should be empty.\r\n' +
  '   // Arrays should be initiated with undefined or null to differ between unloaded array and loaded empty array.\r\n' +
  '};\r\n\r\n' +
  'export function getYeahOns<T extends YeahState>(): ReducerTypes<T, ActionCreator[]>[] {\r\n' +
  '  return [...getYeahResetsOns<T>(),\n\n' +
  '/*\r\n' +
  ' * loadYeahList\r\n' +
  ' */\r\n' +
  'on(YeahActions.loadYeahList, (state) => ({\r\n' +
  '  ...state,\r\n' +
  '  yeahList: null,\r\n' +
  '  loadYeahListPending: true,\r\n' +
  '  loadYeahListSuccess: false,\r\n' +
  '  loadYeahListFailure: null,\r\n' +
  '})),\r\n' +
  'on(YeahActions.loadYeahListSuccess, (state, {yeahList}) => ({\r\n' +
  '  ...state,\r\n' +
  '  yeahList: yeahList,\r\n' +
  '  loadYeahListPending: false,\r\n' +
  '  loadYeahListSuccess: true,\r\n' +
  '})),\r\n' +
  'on(YeahActions.loadYeahListFailure, (state, {error}) => ({\r\n' +
  '  ...state,\r\n' +
  '  loadYeahListPending: false,\r\n' +
  '  loadYeahListFailure: error,\r\n' +
  '})),\n\n' +
  '/*\r\n' +
  ' * loadYeahById\r\n' +
  ' */\r\n' +
  'on(YeahActions.loadYeahById, (state) => ({\r\n' +
  '  ...state,\r\n' +
  '  yeah: null,\r\n' +
  '  loadYeahByIdPending: true,\r\n' +
  '  loadYeahByIdSuccess: false,\r\n' +
  '  loadYeahByIdFailure: null,\r\n' +
  '})),\r\n' +
  'on(YeahActions.loadYeahByIdSuccess, (state, {yeah}) => ({\r\n' +
  '  ...state,\r\n' +
  '  yeah: yeah,\r\n' +
  '  loadYeahByIdPending: false,\r\n' +
  '  loadYeahByIdSuccess: true,\r\n' +
  '})),\r\n' +
  'on(YeahActions.loadYeahByIdFailure, (state, {error}) => ({\r\n' +
  '  ...state,\r\n' +
  '  loadYeahByIdPending: false,\r\n' +
  '  loadYeahByIdFailure: error,\r\n' +
  '})),\n\n' +
  '/*\r\n' +
  ' * createYeah\r\n' +
  ' */\r\n' +
  'on(YeahActions.createYeah, (state) => ({\r\n' +
  '  ...state,\r\n' +
  '  createYeahPending: true,\r\n' +
  '  createYeahSuccess: false,\r\n' +
  '  createYeahFailure: null,\r\n' +
  '})),\r\n' +
  'on(YeahActions.createYeahSuccess, (state, {yeah}) => ({\r\n' +
  '  ...state,\r\n' +
  '  yeah: yeah,\r\n' +
  '  yeahList: [...(state.yeahList || []), yeah],\r\n' +
  '  createYeahPending: false,\r\n' +
  '  createYeahSuccess: true,\r\n' +
  '})),\r\n' +
  'on(YeahActions.createYeahFailure, (state, {error}) => ({\r\n' +
  '  ...state,\r\n' +
  '  createYeahPending: false,\r\n' +
  '  createYeahFailure: error,\r\n' +
  '})),\n\n' +
  '/*\r\n' +
  ' * updateYeah\r\n' +
  ' */\r\n' +
  'on(YeahActions.updateYeah, (state) => ({\r\n' +
  '  ...state,\r\n' +
  '  updateYeahPending: true,\r\n' +
  '  updateYeahSuccess: false,\r\n' +
  '  updateYeahFailure: null,\r\n' +
  '})),\r\n' +
  'on(YeahActions.updateYeahSuccess, (state, {yeah}) => ({\r\n' +
  '  ...state,\r\n' +
  '  yeah: yeah,\r\n' +
  '  yeahList: replaceArrayItem(state.yeahList, yeah, \'id\'),\r\n' +
  '  updateYeahPending: false,\r\n' +
  '  updateYeahSuccess: true,\r\n' +
  '})),\r\n' +
  'on(YeahActions.updateYeahFailure, (state, {error}) => ({\r\n' +
  '  ...state,\r\n' +
  '  updateYeahPending: false,\r\n' +
  '  updateYeahFailure: error,\r\n' +
  '})),\n\n' +
  '/*\r\n' +
  ' * deleteYeah\r\n' +
  ' */\r\n' +
  'on(YeahActions.deleteYeah, (state) => ({\r\n' +
  '  ...state,\r\n' +
  '  deleteYeahPending: true,\r\n' +
  '  deleteYeahSuccess: false,\r\n' +
  '  deleteYeahFailure: null,\r\n' +
  '})),\r\n' +
  'on(YeahActions.deleteYeahSuccess, (state, {yeahId}) => ({\r\n' +
  '  ...state,\r\n' +
  '  yeahList: [...state.yeahList?.filter(v => v.id !== yeahId) || []],\r\n' +
  '  deleteYeahPending: false,\r\n' +
  '  deleteYeahSuccess: true,\r\n' +
  '})),\r\n' +
  'on(YeahActions.deleteYeahFailure, (state, {error}) => ({\r\n' +
  '  ...state,\r\n' +
  '  deleteYeahPending: false,\r\n' +
  '  deleteYeahFailure: error,\r\n' +
  '})),\n\n' +
  '];\r\n' +
  '}\r\n';

const DOMAIN_YEAH_REDUCER_RESETS_EMPTY = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\r\n' +
  'import * as YeahResetsActions from \'./yeah.actions.resets\';\r\n' +
  'import {YeahState} from \'./yeah.reducer\';\r\n\r\n' +
  'export function getYeahResetsOns<T extends YeahState>(): ReducerTypes<T, ActionCreator[]>[] {\r\n' +
  '  return [\r\n' +
  '    /*\r\n' +
  '     * resetYeahAssets\r\n' +
  '     */\r\n' +
  '    on(YeahResetsActions.resetYeahAssets, (state) => ({...state,})),\r\n' +
  '  ];\r\n' +
  '}\r\n';

const DOMAIN_YEAH_REDUCER_RESETS = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\r\n' +
  'import * as YeahResetsActions from \'./yeah.actions.resets\';\r\n' +
  'import {YeahState} from \'./yeah.reducer\';\r\n\r\n' +
  'export function getYeahResetsOns<T extends YeahState>(): ReducerTypes<T, ActionCreator[]>[] {\r\n' +
  '  return [\r\n' +
  '    /*\r\n' +
  ' * resetYeah\r\n' +
  ' */\r\n' +
  'on(YeahResetsActions.resetYeah, (state) => ({\r\n' +
  '  ...state,\r\n' +
  '  yeah: null,\r\n' +
  '})),\n\n' +
  '/*\r\n' +
  ' * resetYeahList\r\n' +
  ' */\r\n' +
  'on(YeahResetsActions.resetYeahList, (state) => ({\r\n' +
  '  ...state,\r\n' +
  '  yeahList: null,\r\n' +
  '})),\n\n' +
  '/*\r\n' +
  '     * resetYeahAssets\r\n' +
  '     */\r\n' +
  '    on(YeahResetsActions.resetYeahAssets, (state) => ({...state,loadYeahListPending: false,\r\n' +
  'loadYeahListSuccess: false,\r\n' +
  'loadYeahListFailure: null,loadYeahByIdPending: false,\r\n' +
  'loadYeahByIdSuccess: false,\r\n' +
  'loadYeahByIdFailure: null,createYeahPending: false,\r\n' +
  'createYeahSuccess: false,\r\n' +
  'createYeahFailure: null,updateYeahPending: false,\r\n' +
  'updateYeahSuccess: false,\r\n' +
  'updateYeahFailure: null,deleteYeahPending: false,\r\n' +
  'deleteYeahSuccess: false,\r\n' +
  'deleteYeahFailure: null,})),\r\n' +
  '  ];\r\n' +
  '}\r\n';

const DOMAIN_YEAH_SELECTORS_EMPTY = 'import { getExampleDomainState } from \'../example-domain.selectors\';\r\n' +
  'import { State } from \'../example-domain.reducer\';\r\n' +
  'import { createSelector } from \'@ngrx/store\';';

const DOMAIN_YEAH_SELECTORS = 'import { getExampleDomainState } from \'../example-domain.selectors\';\r\n' +
  'import { State } from \'../example-domain.reducer\';\r\n' +
  'import { createSelector } from \'@ngrx/store\';\n\n' +
  'export const getYeah = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.yeah\r\n' +
  ');\n\n' +
  'export const getYeahList = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.yeahList\r\n' +
  ');\n\n' +
  'export const getLoadYeahListPending = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.loadYeahListPending\r\n' +
  ');\n\n' +
  'export const getLoadYeahListSuccess = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.loadYeahListSuccess\r\n' +
  ');\n\n' +
  'export const getLoadYeahListFailure = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.loadYeahListFailure\r\n' +
  ');\n\n' +
  'export const getLoadYeahByIdPending = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.loadYeahByIdPending\r\n' +
  ');\n\n' +
  'export const getLoadYeahByIdSuccess = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.loadYeahByIdSuccess\r\n' +
  ');\n\n' +
  'export const getLoadYeahByIdFailure = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.loadYeahByIdFailure\r\n' +
  ');\n\n' +
  'export const getCreateYeahPending = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.createYeahPending\r\n' +
  ');\n\n' +
  'export const getCreateYeahSuccess = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.createYeahSuccess\r\n' +
  ');\n\n' +
  'export const getCreateYeahFailure = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.createYeahFailure\r\n' +
  ');\n\n' +
  'export const getUpdateYeahPending = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.updateYeahPending\r\n' +
  ');\n\n' +
  'export const getUpdateYeahSuccess = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.updateYeahSuccess\r\n' +
  ');\n\n' +
  'export const getUpdateYeahFailure = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.updateYeahFailure\r\n' +
  ');\n\n' +
  'export const getDeleteYeahPending = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.deleteYeahPending\r\n' +
  ');\n\n' +
  'export const getDeleteYeahSuccess = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.deleteYeahSuccess\r\n' +
  ');\n\n' +
  'export const getDeleteYeahFailure = createSelector(\r\n' +
  '  getExampleDomainState,\r\n' +
  '  (state: State) => state.deleteYeahFailure\r\n' +
  ');\n\n';
