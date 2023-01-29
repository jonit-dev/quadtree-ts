import { Quadtree } from '../../src/Quadtree';
import { Rectangle } from '../../src/Rectangle';

describe('Quadtree.clear', () => {
  test('Removes a shape properly', () => {
    const tree = new Quadtree({ width: 100, height: 100 });
    const rect = new Rectangle({ x: 0, y: 0, width: 100, height: 100 });
    tree.insert(rect);

    tree.remove(rect);

    expect(tree.objects).toEqual([]);
  });
});
