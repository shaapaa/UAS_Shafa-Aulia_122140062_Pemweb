import { renderHook } from '@testing-library/react';
import useFetch from './useFetch';

jest.useFakeTimers();

describe('useFetch', () => {
  it('should set data after fetcher resolves', async () => {
    const fetcher = jest.fn().mockResolvedValue('hello');
    const { result, waitForNextUpdate } = renderHook(() => useFetch(fetcher, []));
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.data).toBe('hello');
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should set error if fetcher rejects', async () => {
    const fetcher = jest.fn().mockRejectedValue(new Error('fail'));
    const { result, waitForNextUpdate } = renderHook(() => useFetch(fetcher, []));
    await waitForNextUpdate();
    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.loading).toBe(false);
  });
});
