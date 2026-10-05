import { RouterProvider } from 'react-router-dom'
import { PopupProvider } from '@/contexts/PopupContext'
import { router } from '../router'

/** Bọc mọi Provider ở một chỗ để main.tsx và App.tsx gọn. */
export default function AppProviders() {
  return (
    <PopupProvider>
      <RouterProvider router={router} />
    </PopupProvider>
  )
}
