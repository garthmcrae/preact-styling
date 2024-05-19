export const formatPathname = (string: string) => {
  if (string === '/' || string === '//') {
    return string;
  }
  return string.endsWith('/') ? string.slice(0, -1) : string;
};