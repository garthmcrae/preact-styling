export const formatPathname = (string: string) => {
  if (string.length === 1) {
    return string;
  }
  return string.endsWith('/') ? string.slice(0, -1) : string;
};