/**
 * useBoolean - A custom hook for managing boolean state.
 * @param {boolean} initialValue - The initial value of the boolean state.
 * @returns {[boolean, { setTrue: () => void, setFalse: () => void, toggle: () => void }]} - The current state and methods to update it.
 */
declare const useBoolean: (initialValue?: boolean) => (
  | boolean
  | {
      setTrue: () => void;
      setFalse: () => void;
      toggle: () => void;
    }
)[];
export default useBoolean;
