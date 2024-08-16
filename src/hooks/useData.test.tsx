import { renderHook, waitFor } from '@testing-library/react';

import { mockFetch } from '@/utils/testHelpers';

import { useData } from './useData';

describe('useData', () => {
  it('returns an initial empty array', async () => {
    mockFetch([{ abc: '123' }]);

    const { result } = renderHook(useData, {
      initialProps: '/data.json',
    });

    // We want jest to return whenever the data is equal to the empty array (initial state), and not wait for the fetch to be done
    await waitFor(() => expect(result.current.data).toStrictEqual([]));

    expect(result.current.data).toStrictEqual([]);
  });

  it('returns data when resolved', async () => {
    mockFetch([{ abc: '123' }]);

    const { result } = renderHook(useData, {
      initialProps: '/data.json',
    });

    await waitFor(() => expect(result.current.data).toStrictEqual([{ abc: '123' }]));

    expect(result.current.data).toStrictEqual([{ abc: '123' }]);
  });
});
