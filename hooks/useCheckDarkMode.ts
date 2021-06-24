import { useState } from 'react';
export function useCheckDarkMode() {
  const [isDark, forceRender] = useState(true);
}
