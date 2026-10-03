import { useCallback, useEffect, useRef, useState } from 'react';
import { getErrorMessage } from '../lib/errors';

/**
 * Trạng thái dữ liệu bất đồng bộ dạng discriminated union:
 * không thể vừa `isLoading` vừa có `error` như khi dùng 3 useState rời.
 */
export type AsyncState<T> =
  | { status: 'loading' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: T };

export type AsyncStatus = AsyncState<unknown>['status'];

/**
 * Gọi `load` khi mount và mỗi khi `deps` đổi. Bỏ qua kết quả của request cũ
 * nếu component đã unmount hoặc request mới đã chạy (tránh race condition).
 *
 * Ví dụ:
 *   const pending = useAsyncData(() => productService.getPendingProducts().then(r => r.result ?? []), []);
 *   pending.status === 'success' && pending.data.map(...)
 */
export function useAsyncData<T>(load: () => Promise<T>, deps: readonly unknown[]) {
  const [state, setState] = useState<AsyncState<T>>({ status: 'loading' });
  const requestId = useRef(0);
  const loadRef = useRef(load);
  loadRef.current = load;

  const run = useCallback(async () => {
    const id = ++requestId.current;
    setState({ status: 'loading' });
    try {
      const data = await loadRef.current();
      if (id === requestId.current) setState({ status: 'success', data });
    } catch (error) {
      if (id === requestId.current) setState({ status: 'error', error: getErrorMessage(error) });
    }
  }, []);

  useEffect(() => {
    void run();
    return () => {
      requestId.current++;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { ...state, reload: run } as AsyncState<T> & { reload: () => Promise<void> };
}
