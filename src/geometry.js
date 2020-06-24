const square = x => x * x;

export const distance = (point1, point2) => Math.sqrt(
  square(point1.x - point2.x) + square(point1.y - point2.y)
);

export const rotate = ({x, y}, alpha, o) => {
  let length = distance({x, y}, o);
  let theta = Math.atan2(y - o.y, x - o.x);
  let newTheta = theta + alpha;
  return {
    x: o.x + Math.cos(newTheta) * length,
    y: o.y + Math.sin(newTheta) * length
  };
};

export const multiply = (v1, v2, o = { x: 0, y: 0 }) =>
  (v1.x - o.x) * (v2.y - o.y) - (v1.y - o.y) * (v2.x - o.x);

export const gravity = (p1, p2) => 1000 / square(distance(p1, p2));

/**
 * Find closest point to given (x, y) within given circle.
 */
export const closestTo = (x, y, circle) => {
  let direction = { x: x - circle.x, y: y - circle.y };
  let normalized = normalize(direction);
  return {
    x: circle.x + normalized.x * circle.radius,
    y: circle.y + normalized.y * circle.radius
  };
}

/**
 * Cast given vector to vector with same direction and length = 1.
 */
const normalize = (vector) => {
  let length = distance({ x: 0, y: 0 }, vector);
  return { x: vector.x / length, y: vector.y / length };
}
