import { isURL } from './isURL';

export function formatJSON(json: object, node: HTMLElement): HTMLElement {
  node.style.overflowX = 'auto';

  node.innerHTML = JSON.stringify(
    json,
    (key, value) => {
      if (typeof value === 'string' && isURL(value)) {
        return `<a class="underline text-indigo-500 dark:text-green-500" href=${value}>${value}</a>`;
      }
      return value;
    },
    1
  );
  return node;
}
