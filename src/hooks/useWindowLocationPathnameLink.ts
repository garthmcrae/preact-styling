import { useWindowLocationPathname } from "../hooks/useWindowLocationPathname";

export const useWindowLocationPathnameLink = () => {
  const [, setState] = useWindowLocationPathname();

  const handleClick = (argument: MouseEvent | string) => {
    if (typeof argument === 'string' || argument instanceof String) {
      window.history.pushState({}, "", argument as string);
      setState(argument);
      return;
    }
    const element = argument.target as HTMLAnchorElement;
    if (element.tagName === 'A') {
      argument.preventDefault();
      const pathname = element.getAttribute("href");
      window.history.pushState({}, "", pathname);
      setState(pathname);
      return;
    }
    return;
  };

  return handleClick;
};
