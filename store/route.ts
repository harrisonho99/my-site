import { Router } from './schema/type';
const LIST_ROUTER: Router[] = [
  new Router('/', 'Home'),
  new Router('/post-man', 'Postman'),
  new Router('/repl', 'JS-Playground'),
];

export { LIST_ROUTER };
