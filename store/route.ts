import { Router } from './schema/type';
const LIST_ROUTER: Router[] = [
  new Router('/', 'Home'),
  new Router('/post-man', 'Postman'),
];

export { LIST_ROUTER };
