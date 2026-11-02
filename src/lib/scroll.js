/** Jump to the top of the page instantly, even though the site uses smooth scrolling elsewhere. */
export function resetScroll() {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  html.style.scrollBehavior = previous;
}

/** After a page change, move keyboard / screen-reader focus to the main content. */
export function focusMain() {
  const main = document.getElementById('main');
  if (main) main.focus({ preventScroll: true });
}
