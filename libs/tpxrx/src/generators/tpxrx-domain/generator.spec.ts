import {createTreeWithEmptyWorkspace} from '@nrwl/devkit/testing';
import {Tree} from '@nrwl/devkit';
import {generatorWrapper} from '../common/generator';
import {generateDomain} from './generator';
import {generateLib} from '../tpxrx-lib/generator';

const exampleDomainModulePath = 'libs/example/domain/src/lib/example-domain.module.ts';
const exampleDomainFacadePath = 'libs/example/domain/src/lib/+state/example-domain.facade.ts';
const exampleDomainReducerPath = 'libs/example/domain/src/lib/+state/example-domain.reducer.ts';
const domainDoohActionsPath = 'libs/example/domain/src/lib/+state/dooh/dooh.actions.ts';
const domainDoohActionsResetsPath = 'libs/example/domain/src/lib/+state/dooh/dooh.actions.resets.ts';
const domainDoohEffectsPath = 'libs/example/domain/src/lib/+state/dooh/dooh.effects.ts';
const domainDoohFacadePath = 'libs/example/domain/src/lib/+state/dooh/dooh.facade.ts';
const domainDoohFacadeResetsPath = 'libs/example/domain/src/lib/+state/dooh/dooh.facade.resets.ts';
const domainDoohReducerPath = 'libs/example/domain/src/lib/+state/dooh/dooh.reducer.ts';
const domainDoohReducerResetsPath = 'libs/example/domain/src/lib/+state/dooh/dooh.reducer.resets.ts';
const domainDoohSelectorsPath = 'libs/example/domain/src/lib/+state/dooh/dooh.selectors.ts';

describe('tpxrx domain generator', () => {
  let tree: Tree;

  beforeEach(async() => {
    tree = createTreeWithEmptyWorkspace(2);
    tree.write('.gitignore', '');
    await generatorWrapper(tree, {
      name: 'example/domain',
      domains: 'test,yeah',
      crud: true,
    }, generateLib);
  });

  it('create empty domain', async () => {
    await generatorWrapper(tree, {
      name: 'dooh',
      project: 'example/domain'
    }, generateDomain);

    expect(tree.exists(domainDoohActionsPath)).toBeTruthy();
    expect(tree.exists(domainDoohActionsResetsPath)).toBeTruthy();
    expect(tree.exists(domainDoohEffectsPath)).toBeTruthy();
    expect(tree.exists(domainDoohFacadePath)).toBeTruthy();
    expect(tree.exists(domainDoohFacadeResetsPath)).toBeTruthy();
    expect(tree.exists(domainDoohReducerPath)).toBeTruthy();
    expect(tree.exists(domainDoohReducerResetsPath)).toBeTruthy();
    expect(tree.exists(domainDoohSelectorsPath)).toBeTruthy();

    const exampleDomainModuleContent = tree.read(exampleDomainModulePath).toString();
    const exampleDomainFacadeContent = tree.read(exampleDomainFacadePath).toString();
    const exampleDomainReducerContent = tree.read(exampleDomainReducerPath).toString();
    const domainDoohActionsContent = tree.read(domainDoohActionsPath).toString();
    const domainDoohActionsResetsContent = tree.read(domainDoohActionsResetsPath).toString();
    const domainDoohEffectsContent = tree.read(domainDoohEffectsPath).toString();
    const domainDoohFacadeContent = tree.read(domainDoohFacadePath).toString();
    const domainDoohFacadeResetsContent = tree.read(domainDoohFacadeResetsPath).toString();
    const domainDoohReducerContent = tree.read(domainDoohReducerPath).toString();
    const domainDoohReducerResetsContent = tree.read(domainDoohReducerResetsPath).toString();
    const domainDoohSelectorsContent = tree.read(domainDoohSelectorsPath).toString();

    expect(exampleDomainModuleContent).toBe(EXAMPLE_DOMAIN_MODULE);
    expect(exampleDomainFacadeContent).toBe(EXAMPLE_DOMAIN_FACADE);
    expect(exampleDomainReducerContent).toBe(EXAMPLE_DOMAIN_REDUCER);
    expect(domainDoohActionsContent).toBe(DOMAIN_DOOH_ACTIONS_EMPTY);
    expect(domainDoohActionsResetsContent).toBe(DOMAIN_DOOH_ACTIONS_RESETS_EMPTY);
    expect(domainDoohEffectsContent).toBe(DOMAIN_DOOH_EFFECTS_EMPTY);
    expect(domainDoohFacadeContent).toBe(DOMAIN_DOOH_FACADE_EMPTY);
    expect(domainDoohFacadeResetsContent).toBe(DOMAIN_DOOH_FACADE_RESETS_EMPTY);
    expect(domainDoohReducerContent).toBe(DOMAIN_DOOH_REDUCER_EMPTY);
    expect(domainDoohReducerResetsContent).toBe(DOMAIN_DOOH_REDUCER_RESETS_EMPTY);
    expect(domainDoohSelectorsContent).toBe(DOMAIN_DOOH_SELECTORS_EMPTY);
  });

  it('create crud domain', async () => {
    await generatorWrapper(tree, {
      name: 'dooh',
      project: 'example/domain',
      crud: true,
    }, generateDomain);

    expect(tree.exists(domainDoohActionsPath)).toBeTruthy();
    expect(tree.exists(domainDoohActionsResetsPath)).toBeTruthy();
    expect(tree.exists(domainDoohEffectsPath)).toBeTruthy();
    expect(tree.exists(domainDoohFacadePath)).toBeTruthy();
    expect(tree.exists(domainDoohFacadeResetsPath)).toBeTruthy();
    expect(tree.exists(domainDoohReducerPath)).toBeTruthy();
    expect(tree.exists(domainDoohReducerResetsPath)).toBeTruthy();
    expect(tree.exists(domainDoohSelectorsPath)).toBeTruthy();

    const exampleDomainModuleContent = tree.read(exampleDomainModulePath).toString();
    const exampleDomainFacadeContent = tree.read(exampleDomainFacadePath).toString();
    const exampleDomainReducerContent = tree.read(exampleDomainReducerPath).toString();
    const domainDoohActionsContent = tree.read(domainDoohActionsPath).toString();
    const domainDoohActionsResetsContent = tree.read(domainDoohActionsResetsPath).toString();
    const domainDoohEffectsContent = tree.read(domainDoohEffectsPath).toString();
    const domainDoohFacadeContent = tree.read(domainDoohFacadePath).toString();
    const domainDoohFacadeResetsContent = tree.read(domainDoohFacadeResetsPath).toString();
    const domainDoohReducerContent = tree.read(domainDoohReducerPath).toString();
    const domainDoohReducerResetsContent = tree.read(domainDoohReducerResetsPath).toString();
    const domainDoohSelectorsContent = tree.read(domainDoohSelectorsPath).toString();

    expect(exampleDomainModuleContent).toBe(EXAMPLE_DOMAIN_MODULE);
    expect(exampleDomainFacadeContent).toBe(EXAMPLE_DOMAIN_FACADE);
    expect(exampleDomainReducerContent).toBe(EXAMPLE_DOMAIN_REDUCER);
    expect(domainDoohActionsContent).toBe(DOMAIN_DOOH_ACTIONS);
    expect(domainDoohActionsResetsContent).toBe(DOMAIN_DOOH_ACTIONS_RESETS);
    expect(domainDoohEffectsContent).toBe(DOMAIN_DOOH_EFFECTS);
    expect(domainDoohFacadeContent).toBe(DOMAIN_DOOH_FACADE);
    expect(domainDoohFacadeResetsContent).toBe(DOMAIN_DOOH_FACADE_RESETS);
    expect(domainDoohReducerContent).toBe(DOMAIN_DOOH_REDUCER);
    expect(domainDoohReducerResetsContent).toBe(DOMAIN_DOOH_REDUCER_RESETS);
    expect(domainDoohSelectorsContent).toBe(DOMAIN_DOOH_SELECTORS);
  });
});

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
  'import { YeahEffects } from \'./+state/yeah/yeah.effects\';\n' +
  'import { DoohFacade } from \'./+state/dooh/dooh.facade\';\n' +
  'import { DoohEffects } from \'./+state/dooh/dooh.effects\';\n\n' +
  '@NgModule({\n' +
  '  imports: [\n' +
  '    CommonModule,\n' +
  '    HttpClientModule,\n' +
  '    StoreModule.forFeature(\n' +
  '      fromExampleDomain.EXAMPLE_DOMAIN_FEATURE_KEY,\n' +
  '      fromExampleDomain.reducer\n' +
  '    ),\n' +
  '    EffectsModule.forFeature([TestEffects,YeahEffects,DoohEffects,]),\n' +
  '  ],\n' +
  '  providers: [ExampleDomainFacade,TestFacade,YeahFacade,DoohFacade,],\n' +
  '})\n' +
  'export class ExampleDomainModule {}\n';

const EXAMPLE_DOMAIN_FACADE = 'import { Injectable } from \'@angular/core\';\n' +
  'import { TestFacade } from \'./test/test.facade\';\n' +
  'import { YeahFacade } from \'./yeah/yeah.facade\';\n' +
  'import { DoohFacade } from \'./dooh/dooh.facade\';\n\n' +
  '@Injectable()\n' +
  'export class ExampleDomainFacade {\n' +
  '  testFacade: TestFacade;\n\n' +
  'yeahFacade: YeahFacade;\n\n' +
  'doohFacade: DoohFacade;\n\n' +
  'constructor(private testFacadeInternal: TestFacade,private yeahFacadeInternal: YeahFacade,private doohFacadeInternal: DoohFacade,) {this.testFacade = this.testFacadeInternal;this.yeahFacade = this.yeahFacadeInternal;this.doohFacade = this.doohFacadeInternal;}\n' +
  '}\n';

const EXAMPLE_DOMAIN_REDUCER = 'import { Action, createReducer } from \'@ngrx/store\';\n' +
  'import { TestState, testInitialState, getTestOns } from \'./test/test.reducer\';\n' +
  'import { YeahState, yeahInitialState, getYeahOns } from \'./yeah/yeah.reducer\';\n' +
  'import { DoohState, doohInitialState, getDoohOns } from \'./dooh/dooh.reducer\';\n\n' +
  'export const EXAMPLE_DOMAIN_FEATURE_KEY = \'EXAMPLE_DOMAIN\';\n\n' +
  'export interface State extends TestState,YeahState,DoohState,{}\n\n' +
  'export interface ExampleDomainPartialState {\n' +
  '  readonly [EXAMPLE_DOMAIN_FEATURE_KEY]: State;\n' +
  '}\n\n' +
  'export const initialState: State = {...testInitialState,...yeahInitialState,...doohInitialState,};\n\n' +
  'const exampleDomainReducer = createReducer(initialState,...getTestOns<State>(),...getYeahOns<State>(),...getDoohOns<State>(),);\n\n' +
  'export function reducer(state: State | undefined, action: Action) {\n' +
  '  return exampleDomainReducer(state, action);\n' +
  '}\n';

const DOMAIN_DOOH_ACTIONS_EMPTY = 'import { createAction, props } from \'@ngrx/store\';';

const DOMAIN_DOOH_ACTIONS = 'import { createAction, props } from \'@ngrx/store\';\n\n' +
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

const DOMAIN_DOOH_ACTIONS_RESETS_EMPTY = 'import { createAction } from \'@ngrx/store\';\n\n' +
  '/*\n' +
  ' * resetDoohAssets\n' +
  ' */\n' +
  'export const resetDoohAssets = createAction(\n' +
  '  \'[ExampleDomain] resetDoohAssets\'\n' +
  ');\n';

const DOMAIN_DOOH_ACTIONS_RESETS = 'import { createAction } from \'@ngrx/store\';\n\n' +
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
  ' * resetDoohAssets\n' +
  ' */\n' +
  'export const resetDoohAssets = createAction(\n' +
  '  \'[ExampleDomain] resetDoohAssets\'\n' +
  ');\n';

const DOMAIN_DOOH_EFFECTS_EMPTY = 'import {act, Actions, createEffect, ofType} from \'@ngrx/effects\';\n' +
  'import * as DoohActions from \'./dooh.actions\';\n' +
  'import {catchError, map, switchMap} from \'rxjs/operators\';\n' +
  'import {of} from \'rxjs\';\n' +
  'import {Injectable} from \'@angular/core\';\n\n' +
  '@Injectable()\n' +
  'export class DoohEffects {\n' +
  '  constructor(private actions$: Actions,private doohService: DoohService,) {\n' +
  '  }\n' +
  '}\n';

const DOMAIN_DOOH_EFFECTS = '' +
  'import {act, Actions, createEffect, ofType} from \'@ngrx/effects\';\n' +
  'import * as DoohActions from \'./dooh.actions\';\n' +
  'import {catchError, map, switchMap} from \'rxjs/operators\';\n' +
  'import {of} from \'rxjs\';\n' +
  'import {Injectable} from \'@angular/core\';\n\n' +
  '@Injectable()\n' +
  'export class DoohEffects {\n' +
  '  loadDoohList$ = createEffect(() => {\n' +
  '  return this.actions$.pipe(\n' +
  '    ofType(DoohActions.loadDoohList),\n' +
  '    switchMap((act) =>\n' +
  '      this.doohService.loadDoohList().pipe(\n' +
  '        map(() =>\n' +
  '          DoohActions.loadDoohListSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            DoohActions.loadDoohListFailure({\n' +
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
  '    ofType(DoohActions.loadDoohById),\n' +
  '    switchMap((act) =>\n' +
  '      this.doohService.loadDoohById().pipe(\n' +
  '        map(() =>\n' +
  '          DoohActions.loadDoohByIdSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            DoohActions.loadDoohByIdFailure({\n' +
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
  '    ofType(DoohActions.createDooh),\n' +
  '    switchMap((act) =>\n' +
  '      this.doohService.createDooh().pipe(\n' +
  '        map(() =>\n' +
  '          DoohActions.createDoohSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            DoohActions.createDoohFailure({\n' +
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
  '    ofType(DoohActions.updateDooh),\n' +
  '    switchMap((act) =>\n' +
  '      this.doohService.updateDooh().pipe(\n' +
  '        map(() =>\n' +
  '          DoohActions.updateDoohSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            DoohActions.updateDoohFailure({\n' +
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
  '    ofType(DoohActions.deleteDooh),\n' +
  '    switchMap((act) =>\n' +
  '      this.doohService.deleteDooh().pipe(\n' +
  '        map(() =>\n' +
  '          DoohActions.deleteDoohSuccess({\n' +
  '          }),\n' +
  '        ),\n' +
  '        catchError((err) =>\n' +
  '          of(\n' +
  '            DoohActions.deleteDoohFailure({\n' +
  '              error: err,\n' +
  '            })\n' +
  '          )\n' +
  '        )\n' +
  '      )\n' +
  '    )\n' +
  '  );\n' +
  '});\n\n' +
  'constructor(private actions$: Actions,private doohService: DoohService,) {\n' +
  '  }\n' +
  '}\n';

const DOMAIN_DOOH_FACADE_EMPTY = 'import { Injectable } from \'@angular/core\';\n' +
  'import { select, Store } from \'@ngrx/store\';\n' +
  'import * as DoohSelectors from \'./dooh.selectors\';\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\n' +
  'import * as DoohActions from \'./dooh.actions\';\n' +
  'import {DoohResetsFacade} from \'./dooh.facade.resets\';\n\n' +
  '@Injectable()\n' +
  'export class DoohFacade extends DoohResetsFacade {\n' +
  '  constructor(\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\n' +
  '  ) {\n' +
  '    super(store);\n' +
  '  }\n' +
  '}\n';

const DOMAIN_DOOH_FACADE = 'import { Injectable } from \'@angular/core\';\n' +
  'import { select, Store } from \'@ngrx/store\';\n' +
  'import * as DoohSelectors from \'./dooh.selectors\';\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\n' +
  'import * as DoohActions from \'./dooh.actions\';\n' +
  'import {DoohResetsFacade} from \'./dooh.facade.resets\';\n\n' +
  '@Injectable()\n' +
  'export class DoohFacade extends DoohResetsFacade {\n' +
  '  dooh$ = this.store.pipe(select(DoohSelectors.getDooh));doohList$ = this.store.pipe(select(DoohSelectors.getDoohList));loadDoohListPending$ = this.store.pipe(select(DoohSelectors.getLoadDoohListPending));loadDoohListSuccess$ = this.store.pipe(select(DoohSelectors.getLoadDoohListSuccess));loadDoohListFailure$ = this.store.pipe(select(DoohSelectors.getLoadDoohListFailure));loadDoohByIdPending$ = this.store.pipe(select(DoohSelectors.getLoadDoohByIdPending));loadDoohByIdSuccess$ = this.store.pipe(select(DoohSelectors.getLoadDoohByIdSuccess));loadDoohByIdFailure$ = this.store.pipe(select(DoohSelectors.getLoadDoohByIdFailure));createDoohPending$ = this.store.pipe(select(DoohSelectors.getCreateDoohPending));createDoohSuccess$ = this.store.pipe(select(DoohSelectors.getCreateDoohSuccess));createDoohFailure$ = this.store.pipe(select(DoohSelectors.getCreateDoohFailure));updateDoohPending$ = this.store.pipe(select(DoohSelectors.getUpdateDoohPending));updateDoohSuccess$ = this.store.pipe(select(DoohSelectors.getUpdateDoohSuccess));updateDoohFailure$ = this.store.pipe(select(DoohSelectors.getUpdateDoohFailure));deleteDoohPending$ = this.store.pipe(select(DoohSelectors.getDeleteDoohPending));deleteDoohSuccess$ = this.store.pipe(select(DoohSelectors.getDeleteDoohSuccess));deleteDoohFailure$ = this.store.pipe(select(DoohSelectors.getDeleteDoohFailure));loadDoohList(id: string) {\n' +
  '  this.dispatch(DoohActions.loadDoohList({ id }));\n' +
  '}\n\n' +
  'loadDoohById(doohId: string) {\n' +
  '  this.dispatch(DoohActions.loadDoohById({ doohId }));\n' +
  '}\n\n' +
  'createDooh(dooh: Dooh) {\n' +
  '  this.dispatch(DoohActions.createDooh({ dooh }));\n' +
  '}\n\n' +
  'updateDooh(doohId: string, dooh: Dooh) {\n' +
  '  this.dispatch(DoohActions.updateDooh({ doohId, dooh }));\n' +
  '}\n\n' +
  'deleteDooh(doohId: string) {\n' +
  '  this.dispatch(DoohActions.deleteDooh({ doohId }));\n' +
  '}\n\n' +
  'constructor(\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\n' +
  '  ) {\n' +
  '    super(store);\n' +
  '  }\n' +
  '}\n';

const DOMAIN_DOOH_FACADE_RESETS_EMPTY = 'import { Injectable } from \'@angular/core\';\n' +
  'import { Action, Store } from \'@ngrx/store\';\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\n' +
  'import * as DoohResetsActions from \'./dooh.actions.resets\';\n\n' +
  '@Injectable()\n' +
  'export class DoohResetsFacade {\n' +
  '  resetDoohAssets() {\n' +
  '    this.dispatch(DoohResetsActions.resetDoohAssets());\n' +
  '  }\n\n' +
  '  constructor(\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\n' +
  '  ) {}\n\n' +
  '  protected dispatch(action: Action) {\n' +
  '    this.store.dispatch(action);\n' +
  '  }\n' +
  '}\n';

const DOMAIN_DOOH_FACADE_RESETS = 'import { Injectable } from \'@angular/core\';\n' +
  'import { Action, Store } from \'@ngrx/store\';\n' +
  'import * as fromExampleDomain from \'../example-domain.reducer\';\n' +
  'import * as DoohResetsActions from \'./dooh.actions.resets\';\n\n' +
  '@Injectable()\n' +
  'export class DoohResetsFacade {\n' +
  '  resetDooh() {\n' +
  '  this.dispatch(DoohResetsActions.resetDooh());\n' +
  '}\n\n' +
  'resetDoohList() {\n' +
  '  this.dispatch(DoohResetsActions.resetDoohList());\n' +
  '}\n\n' +
  'resetDoohAssets() {\n' +
  '    this.dispatch(DoohResetsActions.resetDoohAssets());\n' +
  '  }\n\n' +
  '  constructor(\n' +
  '    protected store: Store<fromExampleDomain.ExampleDomainPartialState>,\n' +
  '  ) {}\n\n' +
  '  protected dispatch(action: Action) {\n' +
  '    this.store.dispatch(action);\n' +
  '  }\n' +
  '}\n';

const DOMAIN_DOOH_REDUCER_EMPTY = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\n' +
  'import * as DoohActions from \'./dooh.actions\';\n' +
  'import {getDoohResetsOns} from \'./dooh.reducer.resets\';\n' +
  'import {replaceArrayItem} from \'@tpx1/util\';\n\n' +
  'export interface DoohState {}\n\n' +
  'export const doohInitialState: DoohState = {\n' +
  '   // Use carefully! doohInitialState should be empty.\n' +
  '   // Arrays should be initiated with undefined or null to differ between unloaded array and loaded empty array.\n' +
  '};\n\n' +
  'export function getDoohOns<T extends DoohState>(): ReducerTypes<T, ActionCreator[]>[] {\n' +
  '  return [...getDoohResetsOns<T>(),];\n' +
  '}\n';

const DOMAIN_DOOH_REDUCER = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\n' +
  'import * as DoohActions from \'./dooh.actions\';\n' +
  'import {getDoohResetsOns} from \'./dooh.reducer.resets\';\n' +
  'import {replaceArrayItem} from \'@tpx1/util\';\n\n' +
  'export interface DoohState {dooh?: Dooh;doohList?: Dooh[];loadDoohListPending?: boolean;\n' +
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
  'export const doohInitialState: DoohState = {\n' +
  '   // Use carefully! doohInitialState should be empty.\n' +
  '   // Arrays should be initiated with undefined or null to differ between unloaded array and loaded empty array.\n' +
  '};\n\n' +
  'export function getDoohOns<T extends DoohState>(): ReducerTypes<T, ActionCreator[]>[] {\n' +
  '  return [...getDoohResetsOns<T>(),\n\n' +
  '/*\n' +
  ' * loadDoohList\n' +
  ' */\n' +
  'on(DoohActions.loadDoohList, (state) => ({\n' +
  '  ...state,\n' +
  '  doohList: null,\n' +
  '  loadDoohListPending: true,\n' +
  '  loadDoohListSuccess: false,\n' +
  '  loadDoohListFailure: null,\n' +
  '})),\n' +
  'on(DoohActions.loadDoohListSuccess, (state, {doohList}) => ({\n' +
  '  ...state,\n' +
  '  doohList: doohList,\n' +
  '  loadDoohListPending: false,\n' +
  '  loadDoohListSuccess: true,\n' +
  '})),\n' +
  'on(DoohActions.loadDoohListFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  loadDoohListPending: false,\n' +
  '  loadDoohListFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * loadDoohById\n' +
  ' */\n' +
  'on(DoohActions.loadDoohById, (state) => ({\n' +
  '  ...state,\n' +
  '  dooh: null,\n' +
  '  loadDoohByIdPending: true,\n' +
  '  loadDoohByIdSuccess: false,\n' +
  '  loadDoohByIdFailure: null,\n' +
  '})),\n' +
  'on(DoohActions.loadDoohByIdSuccess, (state, {dooh}) => ({\n' +
  '  ...state,\n' +
  '  dooh: dooh,\n' +
  '  loadDoohByIdPending: false,\n' +
  '  loadDoohByIdSuccess: true,\n' +
  '})),\n' +
  'on(DoohActions.loadDoohByIdFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  loadDoohByIdPending: false,\n' +
  '  loadDoohByIdFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * createDooh\n' +
  ' */\n' +
  'on(DoohActions.createDooh, (state) => ({\n' +
  '  ...state,\n' +
  '  createDoohPending: true,\n' +
  '  createDoohSuccess: false,\n' +
  '  createDoohFailure: null,\n' +
  '})),\n' +
  'on(DoohActions.createDoohSuccess, (state, {dooh}) => ({\n' +
  '  ...state,\n' +
  '  dooh: dooh,\n' +
  '  doohList: [...(state.doohList || []), dooh],\n' +
  '  createDoohPending: false,\n' +
  '  createDoohSuccess: true,\n' +
  '})),\n' +
  'on(DoohActions.createDoohFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  createDoohPending: false,\n' +
  '  createDoohFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * updateDooh\n' +
  ' */\n' +
  'on(DoohActions.updateDooh, (state) => ({\n' +
  '  ...state,\n' +
  '  updateDoohPending: true,\n' +
  '  updateDoohSuccess: false,\n' +
  '  updateDoohFailure: null,\n' +
  '})),\n' +
  'on(DoohActions.updateDoohSuccess, (state, {dooh}) => ({\n' +
  '  ...state,\n' +
  '  dooh: dooh,\n' +
  '  doohList: replaceArrayItem(state.doohList, dooh, \'id\'),\n' +
  '  updateDoohPending: false,\n' +
  '  updateDoohSuccess: true,\n' +
  '})),\n' +
  'on(DoohActions.updateDoohFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  updateDoohPending: false,\n' +
  '  updateDoohFailure: error,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * deleteDooh\n' +
  ' */\n' +
  'on(DoohActions.deleteDooh, (state) => ({\n' +
  '  ...state,\n' +
  '  deleteDoohPending: true,\n' +
  '  deleteDoohSuccess: false,\n' +
  '  deleteDoohFailure: null,\n' +
  '})),\n' +
  'on(DoohActions.deleteDoohSuccess, (state, {doohId}) => ({\n' +
  '  ...state,\n' +
  '  doohList: [...state.doohList?.filter(v => v.id !== doohId) || []],\n' +
  '  deleteDoohPending: false,\n' +
  '  deleteDoohSuccess: true,\n' +
  '})),\n' +
  'on(DoohActions.deleteDoohFailure, (state, {error}) => ({\n' +
  '  ...state,\n' +
  '  deleteDoohPending: false,\n' +
  '  deleteDoohFailure: error,\n' +
  '})),\n\n' +
  '];\n' +
  '}\n';

const DOMAIN_DOOH_REDUCER_RESETS_EMPTY = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\n' +
  'import * as DoohResetsActions from \'./dooh.actions.resets\';\n' +
  'import {DoohState} from \'./dooh.reducer\';\n\n' +
  'export function getDoohResetsOns<T extends DoohState>(): ReducerTypes<T, ActionCreator[]>[] {\n' +
  '  return [\n' +
  '    /*\n' +
  '     * resetDoohAssets\n' +
  '     */\n' +
  '    on(DoohResetsActions.resetDoohAssets, (state) => ({...state,})),\n' +
  '  ];\n' +
  '}\n';

const DOMAIN_DOOH_REDUCER_RESETS = 'import {ActionCreator, on, ReducerTypes} from \'@ngrx/store\';\n' +
  'import * as DoohResetsActions from \'./dooh.actions.resets\';\n' +
  'import {DoohState} from \'./dooh.reducer\';\n\n' +
  'export function getDoohResetsOns<T extends DoohState>(): ReducerTypes<T, ActionCreator[]>[] {\n' +
  '  return [\n' +
  '    /*\n' +
  ' * resetDooh\n' +
  ' */\n' +
  'on(DoohResetsActions.resetDooh, (state) => ({\n' +
  '  ...state,\n' +
  '  dooh: null,\n' +
  '})),\n\n' +
  '/*\n' +
  ' * resetDoohList\n' +
  ' */\n' +
  'on(DoohResetsActions.resetDoohList, (state) => ({\n' +
  '  ...state,\n' +
  '  doohList: null,\n' +
  '})),\n\n' +
  '/*\n' +
  '     * resetDoohAssets\n' +
  '     */\n' +
  '    on(DoohResetsActions.resetDoohAssets, (state) => ({...state,loadDoohListPending: false,\n' +
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

const DOMAIN_DOOH_SELECTORS_EMPTY = 'import { getExampleDomainState } from \'../example-domain.selectors\';\n' +
  'import { State } from \'../example-domain.reducer\';\n' +
  'import { createSelector } from \'@ngrx/store\';';

const DOMAIN_DOOH_SELECTORS = 'import { getExampleDomainState } from \'../example-domain.selectors\';\n' +
  'import { State } from \'../example-domain.reducer\';\n' +
  'import { createSelector } from \'@ngrx/store\';\n\n' +
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
