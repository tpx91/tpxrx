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

const EXAMPLE_DOMAIN_MODULE_EMPTY = 'import { NgModule } from \'@angular/core\';\n' +
  'import { CommonModule } from \'@angular/common\';\n' +
  'import {HttpClientModule} from \'@angular/common/http\';\n' +
  'import {StoreModule} from \'@ngrx/store\';\n' +
  'import * as fromExampleDomain from \'./+state/example-domain.reducer\';\n' +
  'import {EffectsModule} from \'@ngrx/effects\';\n' +
  'import {ExampleDomainFacade} from \'./+state/example-domain.facade\';\n\n' +
  '@NgModule({\n' +
  '  imports: [\n' +
  '    CommonModule,\n' +
  '    HttpClientModule,\n' +
  '    StoreModule.forFeature(\n' +
  '      fromExampleDomain.EXAMPLE_DOMAIN_FEATURE_KEY,\n' +
  '      fromExampleDomain.reducer\n' +
  '    ),\n' +
  '    EffectsModule.forFeature([]),\n' +
  '  ],\n' +
  '  providers: [ExampleDomainFacade],\n' +
  '})\n' +
  'export class ExampleDomainModule {}\n';

const EXAMPLE_DOMAIN_MODULE = 'import { NgModule } from \'@angular/core\';\n' +
  'import { CommonModule } from \'@angular/common\';\n' +
  'import {HttpClientModule} from \'@angular/common/http\';\n' +
  'import {StoreModule} from \'@ngrx/store\';\n' +
  'import * as fromExampleDomain from \'./+state/example-domain.reducer\';\n' +
  'import {EffectsModule} from \'@ngrx/effects\';\n' +
  'import {ExampleDomainFacade} from \'./+state/example-domain.facade\';\n' +
  'import { TestFacade } from \'./+state/test/test.facade\';\n' +
  'import { TestEffects } from \'./+state/test/test.effects\';\n' +
  'import { YeahFacade } from \'./+state/yeah/yeah.facade\';\n' +
  'import { YeahEffects } from \'./+state/yeah/yeah.effects\';\n\n' +
  '@NgModule({\n' +
  '  imports: [\n' +
  '    CommonModule,\n' +
  '    HttpClientModule,\n' +
  '    StoreModule.forFeature(\n' +
  '      fromExampleDomain.EXAMPLE_DOMAIN_FEATURE_KEY,\n' +
  '      fromExampleDomain.reducer\n' +
  '    ),\n' +
  '    EffectsModule.forFeature([TestEffects,YeahEffects,]),\n' +
  '  ],\n' +
  '  providers: [ExampleDomainFacade,TestFacade,YeahFacade,],\n' +
  '})\n' +
  'export class ExampleDomainModule {}\n';

const EXAMPLE_DOMAIN_FACADE_EMPTY = 'import { Injectable } from \'@angular/core\';\n\n' +
  '@Injectable()\n' +
  'export class ExampleDomainFacade {\n' +
  '  constructor(\n' +
  '  ) {\n' +
  '  }\n' +
  '}\n';

const EXAMPLE_DOMAIN_FACADE = 'import { Injectable } from \'@angular/core\';\n' +
  'import { TestFacade } from \'./test/test.facade\';\n' +
  'import { YeahFacade } from \'./yeah/yeah.facade\';\n\n' +
  '@Injectable()\n' +
  'export class ExampleDomainFacade {\n' +
  '  testFacade: TestFacade;\n\n' +
  'yeahFacade: YeahFacade;\n\n' +
  'constructor(private testFacadeInternal: TestFacade,private yeahFacadeInternal: YeahFacade,) {this.testFacade = this.testFacadeInternal;this.yeahFacade = this.yeahFacadeInternal;}\n' +
  '}\n';

const EXAMPLE_DOMAIN_REDUCER_EMPTY = 'import { Action, createReducer } from \'@ngrx/store\';\n\n' +
  'export const EXAMPLE_DOMAIN_FEATURE_KEY = \'EXAMPLE_DOMAIN\';\n\n' +
  'export interface State {}\n\n' +
  'export interface ExampleDomainPartialState {\n' +
  '  readonly [EXAMPLE_DOMAIN_FEATURE_KEY]: State;\n' +
  '}\n\n' +
  'export const initialState: State = {\n' +
  '};\n\n' +
  'const exampleDomainReducer = createReducer(\n' +
  '  initialState,\n' +
  ');\n\n' +
  'export function reducer(state: State | undefined, action: Action) {\n' +
  '  return exampleDomainReducer(state, action);\n' +
  '}\n';

const EXAMPLE_DOMAIN_REDUCER = 'import { Action, createReducer } from \'@ngrx/store\';\n' +
  'import { TestState, testInitialState, getTestOns } from \'./test/test.reducer\';\n' +
  'import { YeahState, yeahInitialState, getYeahOns } from \'./yeah/yeah.reducer\';\n\n' +
  'export const EXAMPLE_DOMAIN_FEATURE_KEY = \'EXAMPLE_DOMAIN\';\n\n' +
  'export interface State extends TestState,YeahState,{}\n\n' +
  'export interface ExampleDomainPartialState {\n' +
  '  readonly [EXAMPLE_DOMAIN_FEATURE_KEY]: State;\n' +
  '}\n\n' +
  'export const initialState: State = {...testInitialState,...yeahInitialState,};\n\n' +
  'const exampleDomainReducer = createReducer(initialState,...getTestOns<State>(),...getYeahOns<State>(),);\n\n' +
  'export function reducer(state: State | undefined, action: Action) {\n' +
  '  return exampleDomainReducer(state, action);\n' +
  '}\n';

const EXAMPLE_DOMAIN_SELECTORS = 'import {\n' +
  '  EXAMPLE_DOMAIN_FEATURE_KEY,\n' +
  '  State,\n' +
  '} from \'./example-domain.reducer\';\n' +
  'import { createFeatureSelector } from \'@ngrx/store\';\n\n' +
  'export const getExampleDomainState = createFeatureSelector<State>(\n' +
  '  EXAMPLE_DOMAIN_FEATURE_KEY\n' +
  ');\n'

const DOMAIN_TEST_ACTIONS_EMPTY = 'import { createAction, props } from \'@ngrx/store\';';

const DOMAIN_TEST_ACTIONS = 'import { createAction, props } from \'@ngrx/store\';\n\n' +
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
  ');\n\n';

const DOMAIN_TEST_ACTIONS_RESETS_EMPTY = 'import { createAction } from \'@ngrx/store\';\n\n' +
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
  ' * resetTestAssets\n' +
  ' */\n' +
  'export const resetTestAssets = createAction(\n' +
  '  \'[ExampleDomain] resetTestAssets\'\n' +
  ');\n';

const DOMAIN_TEST_EFFECTS_EMPTY = 'import {act, Actions, createEffect, ofType} from \'@ngrx/effects\';\n' +
  'import * as TestActions from \'./test.actions\';\n' +
  'import {catchError, map, switchMap} from \'rxjs/operators\';\n' +
  'import {of} from \'rxjs\';\n' +
  'import {Injectable} from \'@angular/core\';\n\n' +
  '@Injectable()\n' +
  'export class TestEffects {\n' +
  '  constructor(private actions$: Actions,private testService: TestService,) {\n' +
  '  }\n' +
  '}\n';

const DOMAIN_TEST_EFFECTS = '' +
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
  'constructor(private actions$: Actions,private testService: TestService,) {\n' +
  '  }\n' +
  '}\n';

const DOMAIN_TEST_FACADE_EMPTY = 'import { Injectable } from \'@angular/core\';\n' +
  'import { select, Store } from \'@ngrx/store\';\n' +
  'import * as TestSelectors from \'./test.selectors\';\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\n' +
  'import * as TestActions from \'./test.actions\';\n' +
  'import {TestResetsFacade} from \'./test.facade.resets\';\n\n' +
  '@Injectable()\n' +
  'export class TestFacade extends TestResetsFacade {\n' +
  '  constructor(\n' +
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
  '  test$ = this.store.pipe(select(TestSelectors.getTest));testList$ = this.store.pipe(select(TestSelectors.getTestList));loadTestListPending$ = this.store.pipe(select(TestSelectors.getLoadTestListPending));loadTestListSuccess$ = this.store.pipe(select(TestSelectors.getLoadTestListSuccess));loadTestListFailure$ = this.store.pipe(select(TestSelectors.getLoadTestListFailure));loadTestByIdPending$ = this.store.pipe(select(TestSelectors.getLoadTestByIdPending));loadTestByIdSuccess$ = this.store.pipe(select(TestSelectors.getLoadTestByIdSuccess));loadTestByIdFailure$ = this.store.pipe(select(TestSelectors.getLoadTestByIdFailure));createTestPending$ = this.store.pipe(select(TestSelectors.getCreateTestPending));createTestSuccess$ = this.store.pipe(select(TestSelectors.getCreateTestSuccess));createTestFailure$ = this.store.pipe(select(TestSelectors.getCreateTestFailure));updateTestPending$ = this.store.pipe(select(TestSelectors.getUpdateTestPending));updateTestSuccess$ = this.store.pipe(select(TestSelectors.getUpdateTestSuccess));updateTestFailure$ = this.store.pipe(select(TestSelectors.getUpdateTestFailure));deleteTestPending$ = this.store.pipe(select(TestSelectors.getDeleteTestPending));deleteTestSuccess$ = this.store.pipe(select(TestSelectors.getDeleteTestSuccess));deleteTestFailure$ = this.store.pipe(select(TestSelectors.getDeleteTestFailure));loadTestList(id: string) {\n' +
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
  'constructor(\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\n' +
  '  ) {\n' +
  '    super(store);\n' +
  '  }\n' +
  '}\n';

const DOMAIN_TEST_FACADE_RESETS_EMPTY = 'import { Injectable } from \'@angular/core\';\n' +
  'import { Action, Store } from \'@ngrx/store\';\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\n' +
  'import * as TestResetsActions from \'./test.actions.resets\';\n\n' +
  '@Injectable()\n' +
  'export class TestResetsFacade {\n' +
  '  resetTestAssets() {\n' +
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

const DOMAIN_TEST_REDUCER_EMPTY = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\n' +
  'import * as TestActions from \'./test.actions\';\n' +
  'import {getTestResetsOns} from \'./test.reducer.resets\';\n' +
  'import {replaceArrayItem} from \'@tpx1/util\';\n\n' +
  'export interface TestState {}\n\n' +
  'export const testInitialState: TestState = {\n' +
  '   // Use carefully! testInitialState should be empty.\n' +
  '   // Arrays should be initiated with undefined or null to differ between unloaded array and loaded empty array.\n' +
  '};\n\n' +
  'export function getTestOns<T extends TestState>(): ReducerTypes<T, ActionCreator[]>[] {\n' +
  '  return [...getTestResetsOns<T>(),];\n' +
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
  'deleteTestFailure?: Error;}\n\n' +
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
  '];\n' +
  '}\n';

const DOMAIN_TEST_REDUCER_RESETS_EMPTY = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\n' +
  'import * as TestResetsActions from \'./test.actions.resets\';\n' +
  'import {TestState} from \'./test.reducer\';\n\n' +
  'export function getTestResetsOns<T extends TestState>(): ReducerTypes<T, ActionCreator[]>[] {\n' +
  '  return [\n' +
  '    /*\n' +
  '     * resetTestAssets\n' +
  '     */\n' +
  '    on(TestResetsActions.resetTestAssets, (state) => ({...state,})),\n' +
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
  'deleteTestFailure: null,})),\n' +
  '  ];\n' +
  '}\n';

const DOMAIN_TEST_SELECTORS_EMPTY = 'import { getExampleDomainState } from \'../example-domain.selectors\';\n' +
  'import { State } from \'../example-domain.reducer\';\n' +
  'import { createSelector } from \'@ngrx/store\';';

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
  ');\n\n';

const DOMAIN_YEAH_ACTIONS_EMPTY = 'import { createAction, props } from \'@ngrx/store\';';

const DOMAIN_YEAH_ACTIONS = 'import { createAction, props } from \'@ngrx/store\';\n\n' +
  '/*\n' +
  ' * loadYeahList\n' +
  ' */\n' +
  'export const loadYeahList = createAction(\n' +
  '  \'[ExampleDomain] loadYeahList\',\n' +
  '  props<{ id: string }>()\n' +
  ');\n' +
  'export const loadYeahListSuccess = createAction(\n' +
  '  \'[ExampleDomain] loadYeahListSuccess\',\n' +
  '  props<{ yeahList: Yeah[] }>()\n' +
  ');\n' +
  'export const loadYeahListFailure = createAction(\n' +
  '  \'[ExampleDomain] loadYeahListFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * loadYeahById\n' +
  ' */\n' +
  'export const loadYeahById = createAction(\n' +
  '  \'[ExampleDomain] loadYeahById\',\n' +
  '  props<{ yeahId: string }>()\n' +
  ');\n' +
  'export const loadYeahByIdSuccess = createAction(\n' +
  '  \'[ExampleDomain] loadYeahByIdSuccess\',\n' +
  '  props<{ yeah: Yeah }>()\n' +
  ');\n' +
  'export const loadYeahByIdFailure = createAction(\n' +
  '  \'[ExampleDomain] loadYeahByIdFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * createYeah\n' +
  ' */\n' +
  'export const createYeah = createAction(\n' +
  '  \'[ExampleDomain] createYeah\',\n' +
  '  props<{ yeah: Yeah }>()\n' +
  ');\n' +
  'export const createYeahSuccess = createAction(\n' +
  '  \'[ExampleDomain] createYeahSuccess\',\n' +
  '  props<{ yeah: Yeah }>()\n' +
  ');\n' +
  'export const createYeahFailure = createAction(\n' +
  '  \'[ExampleDomain] createYeahFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * updateYeah\n' +
  ' */\n' +
  'export const updateYeah = createAction(\n' +
  '  \'[ExampleDomain] updateYeah\',\n' +
  '  props<{ yeahId: string; yeah: Yeah }>()\n' +
  ');\n' +
  'export const updateYeahSuccess = createAction(\n' +
  '  \'[ExampleDomain] updateYeahSuccess\',\n' +
  '  props<{ yeah: Yeah }>()\n' +
  ');\n' +
  'export const updateYeahFailure = createAction(\n' +
  '  \'[ExampleDomain] updateYeahFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n' +
  '/*\n' +
  ' * deleteYeah\n' +
  ' */\n' +
  'export const deleteYeah = createAction(\n' +
  '  \'[ExampleDomain] deleteYeah\',\n' +
  '  props<{ yeahId: string }>()\n' +
  ');\n' +
  'export const deleteYeahSuccess = createAction(\n' +
  '  \'[ExampleDomain] deleteYeahSuccess\',\n' +
  '  props<{ yeahId: string }>()\n' +
  ');\n' +
  'export const deleteYeahFailure = createAction(\n' +
  '  \'[ExampleDomain] deleteYeahFailure\',\n' +
  '  props<{ error: Error }>()\n' +
  ');\n\n';

const DOMAIN_YEAH_ACTIONS_RESETS_EMPTY = 'import { createAction } from \'@ngrx/store\';\n\n' +
  '/*\n' +
  ' * resetYeahAssets\n' +
  ' */\n' +
  'export const resetYeahAssets = createAction(\n' +
  '  \'[ExampleDomain] resetYeahAssets\'\n' +
  ');\n';

const DOMAIN_YEAH_ACTIONS_RESETS = 'import { createAction } from \'@ngrx/store\';\n\n' +
  '/*\n' +
  ' * resetYeah\n' +
  ' */\n' +
  'export const resetYeah = createAction(\n' +
  '  \'[ExampleDomain] resetYeah\',\n' +
  ');\n\n' +
  '/*\n' +
  ' * resetYeahList\n' +
  ' */\n' +
  'export const resetYeahList = createAction(\n' +
  '  \'[ExampleDomain] resetYeahList\',\n' +
  ');\n\n' +
  '/*\n' +
  ' * resetYeahAssets\n' +
  ' */\n' +
  'export const resetYeahAssets = createAction(\n' +
  '  \'[ExampleDomain] resetYeahAssets\'\n' +
  ');\n';

const DOMAIN_YEAH_EFFECTS_EMPTY = 'import {act, Actions, createEffect, ofType} from \'@ngrx/effects\';\n' +
  'import * as YeahActions from \'./yeah.actions\';\n' +
  'import {catchError, map, switchMap} from \'rxjs/operators\';\n' +
  'import {of} from \'rxjs\';\n' +
  'import {Injectable} from \'@angular/core\';\n\n' +
  '@Injectable()\n' +
  'export class YeahEffects {\n' +
  '  constructor(private actions$: Actions,private yeahService: YeahService,) {\n' +
  '  }\n' +
  '}\n';

const DOMAIN_YEAH_EFFECTS = '' +
  'import {act, Actions, createEffect, ofType} from \'@ngrx/effects\';\n' +
  'import * as YeahActions from \'./yeah.actions\';\n' +
  'import {catchError, map, switchMap} from \'rxjs/operators\';\n' +
  'import {of} from \'rxjs\';\n' +
  'import {Injectable} from \'@angular/core\';\n\n' +
  '@Injectable()\n' +
  'export class YeahEffects {\n' +
  '  loadYeahList$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(YeahActions.loadYeahList),\n' +
  '    switchMap((act) =>\n' +
  '      this.yeahService.loadYeahList().pipe(\n' +
  '        map(() =>\n' +
  '          YeahActions.loadYeahListSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            YeahActions.loadYeahListFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'loadYeahById$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(YeahActions.loadYeahById),\n' +
  '    switchMap((act) =>\n' +
  '      this.yeahService.loadYeahById().pipe(\n' +
  '        map(() =>\n' +
  '          YeahActions.loadYeahByIdSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            YeahActions.loadYeahByIdFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'createYeah$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(YeahActions.createYeah),\n' +
  '    switchMap((act) =>\n' +
  '      this.yeahService.createYeah().pipe(\n' +
  '        map(() =>\n' +
  '          YeahActions.createYeahSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            YeahActions.createYeahFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'updateYeah$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(YeahActions.updateYeah),\n' +
  '    switchMap((act) =>\n' +
  '      this.yeahService.updateYeah().pipe(\n' +
  '        map(() =>\n' +
  '          YeahActions.updateYeahSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            YeahActions.updateYeahFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'deleteYeah$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(YeahActions.deleteYeah),\n' +
  '    switchMap((act) =>\n' +
  '      this.yeahService.deleteYeah().pipe(\n' +
  '        map(() =>\n' +
  '          YeahActions.deleteYeahSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            YeahActions.deleteYeahFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'constructor(private actions$: Actions,private yeahService: YeahService,) {\n' +
  '  }\n' +
  '}\n';

const DOMAIN_YEAH_FACADE_EMPTY = 'import { Injectable } from \'@angular/core\';\n' +
  'import { select, Store } from \'@ngrx/store\';\n' +
  'import * as YeahSelectors from \'./yeah.selectors\';\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\n' +
  'import * as YeahActions from \'./yeah.actions\';\n' +
  'import {YeahResetsFacade} from \'./yeah.facade.resets\';\n\n' +
  '@Injectable()\n' +
  'export class YeahFacade extends YeahResetsFacade {\n' +
  '  constructor(\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\n' +
  '  ) {\n' +
  '    super(store);\n' +
  '  }\n' +
  '}\n';

const DOMAIN_YEAH_FACADE = 'import { Injectable } from \'@angular/core\';\n' +
  'import { select, Store } from \'@ngrx/store\';\n' +
  'import * as YeahSelectors from \'./yeah.selectors\';\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\n' +
  'import * as YeahActions from \'./yeah.actions\';\n' +
  'import {YeahResetsFacade} from \'./yeah.facade.resets\';\n\n' +
  '@Injectable()\n' +
  'export class YeahFacade extends YeahResetsFacade {\n' +
  '  yeah$ = this.store.pipe(select(YeahSelectors.getYeah));yeahList$ = this.store.pipe(select(YeahSelectors.getYeahList));loadYeahListPending$ = this.store.pipe(select(YeahSelectors.getLoadYeahListPending));loadYeahListSuccess$ = this.store.pipe(select(YeahSelectors.getLoadYeahListSuccess));loadYeahListFailure$ = this.store.pipe(select(YeahSelectors.getLoadYeahListFailure));loadYeahByIdPending$ = this.store.pipe(select(YeahSelectors.getLoadYeahByIdPending));loadYeahByIdSuccess$ = this.store.pipe(select(YeahSelectors.getLoadYeahByIdSuccess));loadYeahByIdFailure$ = this.store.pipe(select(YeahSelectors.getLoadYeahByIdFailure));createYeahPending$ = this.store.pipe(select(YeahSelectors.getCreateYeahPending));createYeahSuccess$ = this.store.pipe(select(YeahSelectors.getCreateYeahSuccess));createYeahFailure$ = this.store.pipe(select(YeahSelectors.getCreateYeahFailure));updateYeahPending$ = this.store.pipe(select(YeahSelectors.getUpdateYeahPending));updateYeahSuccess$ = this.store.pipe(select(YeahSelectors.getUpdateYeahSuccess));updateYeahFailure$ = this.store.pipe(select(YeahSelectors.getUpdateYeahFailure));deleteYeahPending$ = this.store.pipe(select(YeahSelectors.getDeleteYeahPending));deleteYeahSuccess$ = this.store.pipe(select(YeahSelectors.getDeleteYeahSuccess));deleteYeahFailure$ = this.store.pipe(select(YeahSelectors.getDeleteYeahFailure));loadYeahList(id: string) {\n' +
  '  this.dispatch(YeahActions.loadYeahList({ id }));\n' +
  '}\n\n' +
  'loadYeahById(yeahId: string) {\n' +
  '  this.dispatch(YeahActions.loadYeahById({ yeahId }));\n' +
  '}\n\n' +
  'createYeah(yeah: Yeah) {\n' +
  '  this.dispatch(YeahActions.createYeah({ yeah }));\n' +
  '}\n\n' +
  'updateYeah(yeahId: string, yeah: Yeah) {\n' +
  '  this.dispatch(YeahActions.updateYeah({ yeahId, yeah }));\n' +
  '}\n\n' +
  'deleteYeah(yeahId: string) {\n' +
  '  this.dispatch(YeahActions.deleteYeah({ yeahId }));\n' +
  '}\n\n' +
  'constructor(\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\n' +
  '  ) {\n' +
  '    super(store);\n' +
  '  }\n' +
  '}\n';

const DOMAIN_YEAH_FACADE_RESETS_EMPTY = 'import { Injectable } from \'@angular/core\';\n' +
  'import { Action, Store } from \'@ngrx/store\';\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\n' +
  'import * as YeahResetsActions from \'./yeah.actions.resets\';\n\n' +
  '@Injectable()\n' +
  'export class YeahResetsFacade {\n' +
  '  resetYeahAssets() {\n' +
  '    this.dispatch(YeahResetsActions.resetYeahAssets());\n' +
  '  }\n\n' +
  '  constructor(\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\n' +
  '  ) {}\n\n' +
  '  protected dispatch(action: Action) {\n' +
  '    this.store.dispatch(action);\n' +
  '  }\n' +
  '}\n';

const DOMAIN_YEAH_FACADE_RESETS = 'import { Injectable } from \'@angular/core\';\n' +
  'import { Action, Store } from \'@ngrx/store\';\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\n' +
  'import * as YeahResetsActions from \'./yeah.actions.resets\';\n\n' +
  '@Injectable()\n' +
  'export class YeahResetsFacade {\n' +
  '  resetYeah() {\n' +
  '  this.dispatch(YeahResetsActions.resetYeah());\n' +
  '}\n\n' +
  'resetYeahList() {\n' +
  '  this.dispatch(YeahResetsActions.resetYeahList());\n' +
  '}\n\n' +
  'resetYeahAssets() {\n' +
  '    this.dispatch(YeahResetsActions.resetYeahAssets());\n' +
  '  }\n\n' +
  '  constructor(\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\n' +
  '  ) {}\n\n' +
  '  protected dispatch(action: Action) {\n' +
  '    this.store.dispatch(action);\n' +
  '  }\n' +
  '}\n';

const DOMAIN_YEAH_REDUCER_EMPTY = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\n' +
  'import * as YeahActions from \'./yeah.actions\';\n' +
  'import {getYeahResetsOns} from \'./yeah.reducer.resets\';\n' +
  'import {replaceArrayItem} from \'@tpx1/util\';\n\n' +
  'export interface YeahState {}\n\n' +
  'export const yeahInitialState: YeahState = {\n' +
  '   // Use carefully! yeahInitialState should be empty.\n' +
  '   // Arrays should be initiated with undefined or null to differ between unloaded array and loaded empty array.\n' +
  '};\n\n' +
  'export function getYeahOns<T extends YeahState>(): ReducerTypes<T, ActionCreator[]>[] {\n' +
  '  return [...getYeahResetsOns<T>(),];\n' +
  '}\n';

const DOMAIN_YEAH_REDUCER = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\n' +
  'import * as YeahActions from \'./yeah.actions\';\n' +
  'import {getYeahResetsOns} from \'./yeah.reducer.resets\';\n' +
  'import {replaceArrayItem} from \'@tpx1/util\';\n\n' +
  'export interface YeahState {yeah?: Yeah;yeahList?: Yeah[];loadYeahListPending?: boolean;\n' +
  'loadYeahListSuccess?: boolean;\n' +
  'loadYeahListFailure?: Error;loadYeahByIdPending?: boolean;\n' +
  'loadYeahByIdSuccess?: boolean;\n' +
  'loadYeahByIdFailure?: Error;createYeahPending?: boolean;\n' +
  'createYeahSuccess?: boolean;\n' +
  'createYeahFailure?: Error;updateYeahPending?: boolean;\n' +
  'updateYeahSuccess?: boolean;\n' +
  'updateYeahFailure?: Error;deleteYeahPending?: boolean;\n' +
  'deleteYeahSuccess?: boolean;\n' +
  'deleteYeahFailure?: Error;}\n\n' +
  'export const yeahInitialState: YeahState = {\n' +
  '   // Use carefully! yeahInitialState should be empty.\n' +
  '   // Arrays should be initiated with undefined or null to differ between unloaded array and loaded empty array.\n' +
  '};\n\n' +
  'export function getYeahOns<T extends YeahState>(): ReducerTypes<T, ActionCreator[]>[] {\n' +
  '  return [...getYeahResetsOns<T>(),\n\n' +
  '/*\n' +
  ' * loadYeahList\n' +
  ' */\n' +
  'on(YeahActions.loadYeahList, (state) => ({\n' +
  '  ...state,\n' +
  '  yeahList: null,\n' +
  '  loadYeahListPending: true,\n' +
  '  loadYeahListSuccess: false,\n' +
  '  loadYeahListFailure: null,\n' +
  '})),\n' +
  'on(YeahActions.loadYeahListSuccess, (state, {yeahList}) => ({\n' +
  '  ...state,\n' +
  '  yeahList: yeahList,\n' +
  '  loadYeahListPending: false,\n' +
  '  loadYeahListSuccess: true,\n' +
  '})),\n' +
  'on(YeahActions.loadYeahListFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  loadYeahListPending: false,\n' +
  '  loadYeahListFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * loadYeahById\n' +
  ' */\n' +
  'on(YeahActions.loadYeahById, (state) => ({\n' +
  '  ...state,\n' +
  '  yeah: null,\n' +
  '  loadYeahByIdPending: true,\n' +
  '  loadYeahByIdSuccess: false,\n' +
  '  loadYeahByIdFailure: null,\n' +
  '})),\n' +
  'on(YeahActions.loadYeahByIdSuccess, (state, {yeah}) => ({\n' +
  '  ...state,\n' +
  '  yeah: yeah,\n' +
  '  loadYeahByIdPending: false,\n' +
  '  loadYeahByIdSuccess: true,\n' +
  '})),\n' +
  'on(YeahActions.loadYeahByIdFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  loadYeahByIdPending: false,\n' +
  '  loadYeahByIdFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * createYeah\n' +
  ' */\n' +
  'on(YeahActions.createYeah, (state) => ({\n' +
  '  ...state,\n' +
  '  createYeahPending: true,\n' +
  '  createYeahSuccess: false,\n' +
  '  createYeahFailure: null,\n' +
  '})),\n' +
  'on(YeahActions.createYeahSuccess, (state, {yeah}) => ({\n' +
  '  ...state,\n' +
  '  yeah: yeah,\n' +
  '  yeahList: [...(state.yeahList || []), yeah],\n' +
  '  createYeahPending: false,\n' +
  '  createYeahSuccess: true,\n' +
  '})),\n' +
  'on(YeahActions.createYeahFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  createYeahPending: false,\n' +
  '  createYeahFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * updateYeah\n' +
  ' */\n' +
  'on(YeahActions.updateYeah, (state) => ({\n' +
  '  ...state,\n' +
  '  updateYeahPending: true,\n' +
  '  updateYeahSuccess: false,\n' +
  '  updateYeahFailure: null,\n' +
  '})),\n' +
  'on(YeahActions.updateYeahSuccess, (state, {yeah}) => ({\n' +
  '  ...state,\n' +
  '  yeah: yeah,\n' +
  '  yeahList: replaceArrayItem(state.yeahList, yeah, \'id\'),\n' +
  '  updateYeahPending: false,\n' +
  '  updateYeahSuccess: true,\n' +
  '})),\n' +
  'on(YeahActions.updateYeahFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  updateYeahPending: false,\n' +
  '  updateYeahFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * deleteYeah\n' +
  ' */\n' +
  'on(YeahActions.deleteYeah, (state) => ({\n' +
  '  ...state,\n' +
  '  deleteYeahPending: true,\n' +
  '  deleteYeahSuccess: false,\n' +
  '  deleteYeahFailure: null,\n' +
  '})),\n' +
  'on(YeahActions.deleteYeahSuccess, (state, {yeahId}) => ({\n' +
  '  ...state,\n' +
  '  yeahList: [...state.yeahList?.filter(v => v.id !== yeahId) || []],\n' +
  '  deleteYeahPending: false,\n' +
  '  deleteYeahSuccess: true,\n' +
  '})),\n' +
  'on(YeahActions.deleteYeahFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  deleteYeahPending: false,\n' +
  '  deleteYeahFailure: error,\n' +
  '})),\n\n' +
  '];\n' +
  '}\n';

const DOMAIN_YEAH_REDUCER_RESETS_EMPTY = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\n' +
  'import * as YeahResetsActions from \'./yeah.actions.resets\';\n' +
  'import {YeahState} from \'./yeah.reducer\';\n\n' +
  'export function getYeahResetsOns<T extends YeahState>(): ReducerTypes<T, ActionCreator[]>[] {\n' +
  '  return [\n' +
  '    /*\n' +
  '     * resetYeahAssets\n' +
  '     */\n' +
  '    on(YeahResetsActions.resetYeahAssets, (state) => ({...state,})),\n' +
  '  ];\n' +
  '}\n';

const DOMAIN_YEAH_REDUCER_RESETS = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\n' +
  'import * as YeahResetsActions from \'./yeah.actions.resets\';\n' +
  'import {YeahState} from \'./yeah.reducer\';\n\n' +
  'export function getYeahResetsOns<T extends YeahState>(): ReducerTypes<T, ActionCreator[]>[] {\n' +
  '  return [\n' +
  '    /*\n' +
  ' * resetYeah\n' +
  ' */\n' +
  'on(YeahResetsActions.resetYeah, (state) => ({\n' +
  '  ...state,\n' +
  '  yeah: null,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * resetYeahList\n' +
  ' */\n' +
  'on(YeahResetsActions.resetYeahList, (state) => ({\n' +
  '  ...state,\n' +
  '  yeahList: null,\n' +
  '})),\n\n' +
  '/*\n' +
  '     * resetYeahAssets\n' +
  '     */\n' +
  '    on(YeahResetsActions.resetYeahAssets, (state) => ({...state,loadYeahListPending: false,\n' +
  'loadYeahListSuccess: false,\n' +
  'loadYeahListFailure: null,loadYeahByIdPending: false,\n' +
  'loadYeahByIdSuccess: false,\n' +
  'loadYeahByIdFailure: null,createYeahPending: false,\n' +
  'createYeahSuccess: false,\n' +
  'createYeahFailure: null,updateYeahPending: false,\n' +
  'updateYeahSuccess: false,\n' +
  'updateYeahFailure: null,deleteYeahPending: false,\n' +
  'deleteYeahSuccess: false,\n' +
  'deleteYeahFailure: null,})),\n' +
  '  ];\n' +
  '}\n';

const DOMAIN_YEAH_SELECTORS_EMPTY = 'import { getExampleDomainState } from \'../example-domain.selectors\';\n' +
  'import { State } from \'../example-domain.reducer\';\n' +
  'import { createSelector } from \'@ngrx/store\';';

const DOMAIN_YEAH_SELECTORS = 'import { getExampleDomainState } from \'../example-domain.selectors\';\n' +
  'import { State } from \'../example-domain.reducer\';\n' +
  'import { createSelector } from \'@ngrx/store\';\n\n' +
  'export const getYeah = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.yeah\n' +
  ');\n\n' +
  'export const getYeahList = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.yeahList\n' +
  ');\n\n' +
  'export const getLoadYeahListPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadYeahListPending\n' +
  ');\n\n' +
  'export const getLoadYeahListSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadYeahListSuccess\n' +
  ');\n\n' +
  'export const getLoadYeahListFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadYeahListFailure\n' +
  ');\n\n' +
  'export const getLoadYeahByIdPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadYeahByIdPending\n' +
  ');\n\n' +
  'export const getLoadYeahByIdSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadYeahByIdSuccess\n' +
  ');\n\n' +
  'export const getLoadYeahByIdFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.loadYeahByIdFailure\n' +
  ');\n\n' +
  'export const getCreateYeahPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.createYeahPending\n' +
  ');\n\n' +
  'export const getCreateYeahSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.createYeahSuccess\n' +
  ');\n\n' +
  'export const getCreateYeahFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.createYeahFailure\n' +
  ');\n\n' +
  'export const getUpdateYeahPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.updateYeahPending\n' +
  ');\n\n' +
  'export const getUpdateYeahSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.updateYeahSuccess\n' +
  ');\n\n' +
  'export const getUpdateYeahFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.updateYeahFailure\n' +
  ');\n\n' +
  'export const getDeleteYeahPending = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.deleteYeahPending\n' +
  ');\n\n' +
  'export const getDeleteYeahSuccess = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.deleteYeahSuccess\n' +
  ');\n\n' +
  'export const getDeleteYeahFailure = createSelector(\n' +
  '  getExampleDomainState,\n' +
  '  (state: State) => state.deleteYeahFailure\n' +
  ');\n\n';
