import { useCallback, useState } from 'react';

/**
 * useBoolean - A custom hook for managing boolean state.
 * @param {boolean} initialValue - The initial value of the boolean state.
 * @returns {[boolean, { setTrue: () => void, setFalse: () => void, toggle: () => void }]} - The current state and methods to update it.
 */
const useBoolean = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return [value, { setTrue, setFalse, toggle }];
};

export default useBoolean;
