import {createTreeWithEmptyWorkspace} from '@nrwl/devkit/testing';
import {Tree} from '@nrwl/devkit';
import {generateLib} from './generator';
import {generatorWrapper} from '../common/generator';

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
    console.log(tree.read('libs/example/domain/src/lib'));
  });

  it('create lib with empty domains', () => {
  });

  it('create lib with crud domains', () => {
  });
});


const EXAMPLE_DOMAIN_MODULE =
