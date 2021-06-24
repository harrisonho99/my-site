import { useReducer } from 'react';
export function useForceRender() {
  const [_, forceRender] = useReducer((count) => ++count, 0);
  return forceRender;
}
