export function generateLinkByPath(pathname: string, page_value: string): string {
  const clearPathnameArray = pathname.split("/").filter((item) => item != "");

  const limitLinkIndex = clearPathnameArray.indexOf(page_value);

  const pathToLink = clearPathnameArray
    .filter((_, index) => {
      return index <= limitLinkIndex;
    })
    .join("/");

  return `/${pathToLink}`;
}
