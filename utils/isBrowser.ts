export function isBrowser(): boolean {
  if (typeof window !== 'undefined') {
    return true;
  }
  return false;
}
