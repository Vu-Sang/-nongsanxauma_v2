import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { AuthUser, UserRole } from '../pages/AuthPage';

/**
 * Sửa so với bản gốc:
 * 1. KHÔNG còn mặc định đăng nhập sẵn là "Quản trị viên Hệ thống" + token 'mock-admin-jwt-token'
 *    khi localStorage trống (ai mở web lần đầu cũng thành admin).
 * 2. Là nguồn sự thật DUY NHẤT cho user. App.tsx hiện tự giữ thêm một useState user riêng
 *    và cả hai cùng ghi key 'capnong-user', nên dễ lệch nhau. App nên dùng useAuth().
 * 3. Kiểm tra dữ liệu localStorage thay vì tin `JSON.parse` trả đúng kiểu.
 * 4. value được memo hóa để không re-render mọi consumer ở mỗi lần render Provider.
 */

export type SessionUser = AuthUser & { id: string };

type AuthContextValue = {
  user: SessionUser | null;
  token: string | null;
  isAuthenticated: boolean;
  hasRole: (...roles: UserRole[]) => boolean;
  /** token tùy chọn: các luồng đăng nhập demo hiện chưa có token thật từ backend. */
  login: (user: AuthUser & { id?: string | number }, token?: string) => void;
  logout: () => void;
};

const USER_KEY = 'capnong-user';
const TOKEN_KEY = 'capnong-token';
const ROLES: readonly UserRole[] = ['buyer', 'shop', 'shipper', 'admin', 'staff'];

function isSessionUser(value: unknown): value is SessionUser {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    (typeof v.id === 'string' || typeof v.id === 'number') &&
    typeof v.name === 'string' &&
    typeof v.email === 'string' &&
    typeof v.role === 'string' &&
    (ROLES as readonly string[]).includes(v.role)
  );
}

function readStorage<T>(key: string, guard: (v: unknown) => v is T): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return guard(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string | null) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    /* Trình duyệt chặn storage: phiên vẫn chạy trong bộ nhớ. */
  }
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(() => {
    // Bản cũ của App.tsx lưu user không có id: gán id tạm để không bắt đăng nhập lại.
    const legacy = readStorage(USER_KEY, (v): v is AuthUser & { id?: string | number } =>
      isSessionUser({ id: '', ...(typeof v === 'object' && v !== null ? v : {}) }),
    );
    return legacy ? { ...legacy, id: String(legacy.id ?? 'local') } : null;
  });
  const [token, setToken] = useState<string | null>(() => {
    try {
      return localStorage.getItem(TOKEN_KEY);
    } catch {
      return null;
    }
  });

  useEffect(() => writeStorage(USER_KEY, user ? JSON.stringify(user) : null), [user]);
  useEffect(() => writeStorage(TOKEN_KEY, token), [token]);

  const login = useCallback<AuthContextValue['login']>((next, nextToken) => {
    setUser({ ...next, id: next.id != null ? String(next.id) : crypto.randomUUID() });
    setToken(nextToken ?? null);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      token,
      isAuthenticated: user !== null,
      hasRole: (...roles) => user !== null && roles.includes(user.role),
      login,
      logout,
    }),
    [user, token, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/** Ném lỗi rõ ràng nếu quên bọc AuthProvider, thay vì âm thầm trả user null. */
export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth phải được dùng bên trong <AuthProvider>.');
  return ctx;
}
