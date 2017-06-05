function normalize(value, min, max) {
  return (value - min) / (max - min);
}

function lerp(norm, min, max) {
  return (max - min) * norm + min;
}

export function map(value, sourceMin, sourceMax, destMin, destMax) {
  return lerp(normalize(value, sourceMin, sourceMax), destMin, destMax);
}
