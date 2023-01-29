import { Quadtree } from '../../src/Quadtree';
import { Rectangle } from '../../src/Rectangle';

describe('Quadtree.update', () => {
  test('update a shape properly', () => {
    const tree = new Quadtree({ width: 100, height: 100 });
    const rect = new Rectangle({ x: 0, y: 0, width: 100, height: 100 });
    tree.insert(rect);

    const updatedRect = new Rectangle({
      x: 10,
      y: 10,
      width: 100,
      height: 100,
    });

    tree.update(rect, updatedRect);

    expect(tree.objects).toMatchObject([updatedRect]);
  });
});
