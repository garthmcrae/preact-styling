import { useWindowLocationPathname } from "./useWindowLocationPathname";

export const useGoToPathname = () => {
  const [, setLocationPathname] = useWindowLocationPathname();

  const goToPathname = (argument: MouseEvent | string) => {
    if (typeof argument === 'string' || argument instanceof String) {
      window.history.pushState({}, "", argument as string);
      setLocationPathname(argument);
      return;
    }
    const element = argument.target as HTMLAnchorElement;
    if (element.tagName === 'A') {
      argument.preventDefault();
      const pathname = element.getAttribute("href");
      window.history.pushState({}, "", pathname);
      setLocationPathname(pathname);
      return;
    }
    return;
  };

  return goToPathname;
};
