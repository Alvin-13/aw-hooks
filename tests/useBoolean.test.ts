import { act, renderHook } from '@testing-library/react-hooks';
import useBoolean from '../src/useBoolean';

const setUp = (initialValue) => renderHook(() => useBoolean(initialValue));

it('should init state to true', () => {
  const { result } = setUp(true);

  expect(result.current[0]).toBe(true);
  expect(typeof result.current[1]).toBe('function');
});
