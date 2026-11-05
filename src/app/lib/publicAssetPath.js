export function publicAssetPath(path) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
