export { default as Newsletter } from './components/Newsletter'

/**
 * Id các section trên trang chủ. Link dạng #/quy-trinh mở trang chủ và cuộn tới section;
 * đường dẫn một cấp không nằm trong danh sách này là trang 404.
 */
export const HOME_SECTION_IDS = [
  'danh-muc',
  'giai-cuu-hom-nay',
  'quy-trinh',
  'cong-dong-tieu-dung',
  'dang-ky-dong-hanh',
  'newsletter-contact',
] as const
