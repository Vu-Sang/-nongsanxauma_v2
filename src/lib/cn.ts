/** Ghép className có điều kiện, bỏ qua giá trị falsy. Không cần thêm thư viện. */
export type ClassValue = string | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}
