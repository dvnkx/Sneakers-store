export const getPageName = () => {
  const pageHref = document.location.href.split("/");
  const hrefWord = pageHref[pageHref.length - 1];
  const uppercaseLetter = hrefWord.charAt(0).toUpperCase();

  return uppercaseLetter + hrefWord.slice(1);
};
