import { Quadtree } from '../../src/Quadtree';
import { Rectangle } from '../../src/Rectangle';

describe('Quadtree.remove', () => {
  const GRID_WIDTH = 16;
  const GRID_HEIGHT = 16;

  test('Removes a shape properly', () => {
    const tree = new Quadtree({
      x: -16 * GRID_WIDTH,
      y: 0 * GRID_HEIGHT,
      width: 32 * GRID_WIDTH,
      height: 32 * GRID_HEIGHT,
      maxObjects: 0,
    });
    const rect = new Rectangle({
      x: -10 * GRID_WIDTH,
      y: 10 * GRID_HEIGHT,
      width: GRID_WIDTH,
      height: GRID_HEIGHT,
    });
    tree.insert(rect);

    tree.remove(rect);

    const result = tree.retrieve(rect);

    expect(result).toMatchObject([]);
  });
});
