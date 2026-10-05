import { useEffect, useState } from 'react'
import { HashRouter } from 'react-router-dom'
import { ShoppingBasket, Minus, Plus, Trash2, CheckCircle2, Info } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'
import { ProduceImage } from './components/ProductCard'
import Home from './pages/Home'
import Fresh from './pages/Fresh'
import Combos from './pages/Combos'
import AuthPage from './pages/AuthPage'
import type { AuthUser } from '@/features/auth'
import AiPage from './pages/AiPage'
import FarmerStoriesPage from './pages/FarmerStoriesPage'
import FarmerPortal from './pages/farmer/FarmerPortal'
import AdminPortal from './pages/admin/AdminPortal'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ProductDetail from './pages/product/ProductDetail'
import ShopPage from './pages/product/ShopPage'
import ShopVouchers from './pages/product/ShopVouchers'
import { allProducts, changeQuantity, money, type Cart } from './catalog'
import { PopupProvider } from './contexts/PopupContext'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { STORAGE_KEYS } from '@/utils'

const currentRoute = () => decodeURI(location.hash.slice(1) || '/')

function restoreCart(): Cart {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART) || '{}')
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return {}
    return Object.fromEntries(
      allProducts.flatMap((p) => {
        const n = (saved as Record<string, unknown>)[p.id]
        return typeof n === 'number' && Number.isInteger(n) && n > 0
          ? [[p.id, Math.min(n, p.stock)]]
          : []
      }),
    )
  } catch {
    return {}
  }
}

function MainApp() {
  const [route, setRoute] = useState(currentRoute)
  const [cart, setCart] = useState<Cart>(restoreCart)
  // Một nguồn user duy nhất: AuthContext (trước đây App giữ thêm một state riêng).
  const { user, login, logout } = useAuth()
  const [cartOpen, setCartOpen] = useState(false)
  const [info, setInfo] = useState('')
  const [query, setQuery] = useState('')
  const [toast, setToast] = useState('')

  const isFresh = route.startsWith('/nong-san-tuoi')
  const isCombo = route.startsWith('/combo-tui-mu')
  const isAi = route.startsWith('/cong-nghe-ai')
  const isFarmer = route.startsWith('/cau-chuyen-nong-dan') || route.startsWith('/stories')
  const isPrivacy =
    route.startsWith('/bao-mat-thong-tin') ||
    route.startsWith('/privacy') ||
    route.startsWith('/chinh-sach-bao-mat')
  const isProductDetail =
    route.startsWith('/san-pham') ||
    route.startsWith('/product') ||
    route.startsWith('/chi-tiet-san-pham')
  const isShopDetail =
    route.startsWith('/cua-hang') ||
    route.startsWith('/shop-detail') ||
    route.startsWith('/shop-page')
  const isShopVouchers = route.startsWith('/shop-vouchers') || route.startsWith('/voucher-shop')
  const isShop =
    route.startsWith('/shop') ||
    route.startsWith('/farmer') ||
    route.startsWith('/kenh-nguoi-ban') ||
    route.startsWith('/seller')
  const isAdmin =
    route.startsWith('/admin') ||
    route.startsWith('/quan-tri') ||
    route.startsWith('/administrator')
  const isAuth =
    route.startsWith('/dang-nhap') ||
    route.startsWith('/dang-ky') ||
    route.startsWith('/login') ||
    route.startsWith('/register')

  const count = Object.values(cart).reduce((a, b) => a + b, 0)
  const total = allProducts.reduce((s, p) => s + p.price * (cart[p.id] || 0), 0)

  useEffect(() => {
    const listener = () => setRoute(currentRoute())
    window.addEventListener('hashchange', listener)
    return () => window.removeEventListener('hashchange', listener)
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart))
    } catch {
      /* Session state still works when storage is unavailable. */
    }
  }, [cart])

  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => setToast(''), 3500)
    return () => clearTimeout(id)
  }, [toast])

  useEffect(() => {
    const titlePrefix = isAdmin
      ? 'Trung Tâm Quản Trị Hệ Thống · CapNong Admin'
      : isShop
        ? 'Bảng Điều Khiển Nông Dân · Kênh Người Bán'
        : isProductDetail
          ? 'Chi Tiết Nông Sản & Nhà Vườn'
          : isShopDetail
            ? 'Gian Hàng Nông Dân'
            : isShopVouchers
              ? 'Voucher & Ưu Đãi Gian Hàng'
              : isAuth
                ? route.includes('dang-ky') || route.includes('register')
                  ? 'Đăng ký tài khoản (Buyer, Shop, Shipper, Admin)'
                  : 'Đăng nhập thành viên'
                : isPrivacy
                  ? 'Chính Sách Bảo Mật Thông Tin'
                  : isFarmer
                    ? 'Chuyện Nông Dân & Diễn Đàn'
                    : isAi
                      ? 'Công nghệ AI Tiên phong'
                      : isFresh
                        ? 'Nông sản tươi'
                        : isCombo
                          ? 'Combo & Túi mù'
                          : 'Nông sản xấu mã – Ngon thật'

    document.title = `${titlePrefix} · CapNong`

    const anchor = isFresh || isCombo ? route.split('/')[2] : route.slice(1)
    const frame = requestAnimationFrame(() => {
      const target = anchor ? document.getElementById(anchor) : null
      if (target) target.scrollIntoView({ behavior: 'instant' })
      else window.scrollTo(0, 0)
    })
    return () => cancelAnimationFrame(frame)
  }, [
    route,
    isFresh,
    isCombo,
    isAi,
    isFarmer,
    isPrivacy,
    isAuth,
    isShop,
    isAdmin,
    isProductDetail,
    isShopDetail,
    isShopVouchers,
  ])

  const add = (id: string) => {
    const product = allProducts.find((p) => p.id === id)
    if (!product) {
      setToast('Sản phẩm này chưa mở bán trực tuyến.')
      return
    }
    if ((cart[id] ?? 0) >= product.stock) {
      setToast(`Bạn đã chọn tối đa ${product.stock} ${product.unit} ${product.name}.`)
      return
    }
    setCart((c) => changeQuantity(c, id, 1))
    setToast(`Đã thêm ${product.name} vào giỏ`)
  }

  const showInfo = (title: string) => {
    setCartOpen(false)
    setInfo(title)
  }

  const handleLoginSuccess = (loggedInUser: AuthUser) => {
    login(loggedInUser)
    setToast(`Chào mừng ${loggedInUser.name} (${loggedInUser.role.toUpperCase()})!`)
    if (loggedInUser.role === 'admin') {
      location.hash = '/admin'
    } else if (loggedInUser.role === 'shop') {
      location.hash = '/shop'
    } else {
      location.hash = '/'
    }
  }

  const handleLogout = () => {
    logout()
    setToast('Bạn đã đăng xuất khỏi hệ thống CapNong.')
    location.hash = '/'
  }

  // Determine initial role and mode for AuthPage based on hash
  let initialRole: 'buyer' | 'shop' | 'shipper' = 'buyer'
  if (route.includes('role=shop') || route.includes('ban-nong-san') || route.includes('nha-vuon')) {
    initialRole = 'shop'
  } else if (route.includes('role=shipper') || route.includes('giao-hang')) {
    initialRole = 'shipper'
  }

  const initialMode =
    route.startsWith('/dang-ky') || route.startsWith('/register') ? 'register' : 'login'

  const routeSegments = route.split('/').filter(Boolean)
  const detailProductId = isProductDetail ? routeSegments[1] || '701' : '701'
  const detailShopId = isShopDetail || isShopVouchers ? routeSegments[1] || '101' : '101'

  // Render Full-Screen Dedicated Admin Portal
  if (isAdmin) {
    return (
      <AdminPortal
        user={user}
        onLogout={handleLogout}
        onNavigateStore={() => {
          location.hash = '/'
        }}
        onInfo={showInfo}
      />
    )
  }

  // Render Full-Screen Dedicated Shop Portal
  if (isShop) {
    return (
      <FarmerPortal
        user={user}
        onLogout={handleLogout}
        onNavigateStore={() => {
          location.hash = '/'
        }}
        onInfo={showInfo}
      />
    )
  }

  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('main-content')?.focus()
        }}
      >
        Đến nội dung chính
      </a>

      <Header
        route={
          isFresh
            ? '/nong-san-tuoi'
            : isCombo
              ? '/combo-tui-mu'
              : isAi
                ? '/cong-nghe-ai'
                : isFarmer
                  ? '/cau-chuyen-nong-dan'
                  : isAuth
                    ? '/dang-nhap'
                    : isProductDetail
                      ? '/nong-san-tuoi'
                      : isShopDetail
                        ? '/nong-san-tuoi'
                        : route
        }
        count={count}
        user={user}
        onLogout={handleLogout}
        onSearch={(s) => {
          setQuery(s)
          if (isFresh) {
            document.getElementById('san-pham')?.scrollIntoView()
          } else {
            location.hash = '/nong-san-tuoi/san-pham'
          }
        }}
        onCart={() => setCartOpen(true)}
        onInfo={showInfo}
      />

      <main id="main-content" tabIndex={-1}>
        {isAuth ? (
          <AuthPage
            key={route}
            initialMode={initialMode}
            initialRole={initialRole}
            onLoginSuccess={handleLoginSuccess}
            onInfo={showInfo}
          />
        ) : isProductDetail ? (
          <div className="pt-6">
            <ProductDetail
              productId={detailProductId}
              onBack={() => {
                location.hash = '/'
              }}
            />
          </div>
        ) : isShopDetail ? (
          <div className="pt-6">
            <ShopPage
              shopId={detailShopId}
              onBack={() => {
                location.hash = '/'
              }}
            />
          </div>
        ) : isShopVouchers ? (
          <div className="pt-6">
            <ShopVouchers
              shopId={detailShopId}
              onBack={() => {
                location.hash = `/cua-hang/${detailShopId}`
              }}
            />
          </div>
        ) : isAi ? (
          <AiPage onInfo={showInfo} />
        ) : isFarmer ? (
          <FarmerStoriesPage onAdd={add} onInfo={showInfo} />
        ) : isPrivacy ? (
          <PrivacyPolicy
            onNavigateHome={() => {
              location.hash = '/'
            }}
          />
        ) : isFresh ? (
          <Fresh query={query} setQuery={setQuery} onAdd={add} onInfo={showInfo} cart={cart} />
        ) : isCombo ? (
          <Combos onAdd={add} onInfo={showInfo} />
        ) : (
          <Home onAdd={add} onInfo={showInfo} cart={cart} />
        )}
      </main>

      <Footer onInfo={showInfo} />

      {toast && (
        <div className="toast" role="status">
          <CheckCircle2 size={19} />
          <span>{toast}</span>
          <button
            onClick={() => {
              setToast('')
              setCartOpen(true)
            }}
          >
            Xem giỏ
          </button>
        </div>
      )}

      {cartOpen && (
        <Modal title="Giỏ nông sản của bạn" onClose={() => setCartOpen(false)} wide>
          {count ? (
            <>
              <div className="cart-items">
                {allProducts
                  .filter((p) => cart[p.id])
                  .map((p) => (
                    <div className="cart-item" key={p.id}>
                      <ProduceImage src={p.image} alt={p.name} />
                      <div className="cart-item-info">
                        <h3>{p.name}</h3>
                        <p>
                          {money(p.price)}/{p.unit}
                        </p>
                        <div className="quantity-control">
                          <button
                            aria-label={`Giảm ${p.name}`}
                            onClick={() => setCart((c) => changeQuantity(c, p.id, -1))}
                          >
                            <Minus size={14} />
                          </button>
                          <span>{cart[p.id]}</span>
                          <button
                            disabled={cart[p.id] >= p.stock}
                            aria-label={`Tăng ${p.name}`}
                            onClick={() => setCart((c) => changeQuantity(c, p.id, 1))}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <div className="cart-item-end">
                        <strong>{money(p.price * cart[p.id])}</strong>
                        <button
                          aria-label={`Xóa ${p.name}`}
                          className="icon-button"
                          onClick={() => setCart((c) => changeQuantity(c, p.id, -c[p.id]))}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="cart-total">
                <span>Tạm tính</span>
                <strong>{money(total)}</strong>
              </div>
              <p className="subtle">
                Phí giao hàng chưa được tính. Đây là giỏ hàng trải nghiệm, chưa tạo đơn thực tế.
              </p>
              <button className="btn btn-green w-full mt-4" onClick={() => showInfo('Thanh toán')}>
                Tiếp tục thanh toán
              </button>
            </>
          ) : (
            <div className="empty-state">
              <ShoppingBasket size={44} />
              <h3>Giỏ của bạn đang trống</h3>
              <p>Chọn những nông sản ngon lành cho bữa ăn hôm nay.</p>
              <a
                className="btn btn-green"
                href="#/nong-san-tuoi"
                onClick={() => setCartOpen(false)}
              >
                Khám phá nông sản
              </a>
            </div>
          )}
        </Modal>
      )}

      {info && (
        <Modal title={info} onClose={() => setInfo('')}>
          <div className="info-content">
            <Info size={32} />
            <p>
              Đây là giao diện trải nghiệm CapNong. Tính năng <strong>{info.toLowerCase()}</strong>{' '}
              chưa kết nối dịch vụ thực tế.
            </p>
            <p>
              Bạn có thể thử tìm kiếm, lọc nông sản, chọn combo, đăng ký vai trò
              Buyer/Shop/Shipper/Admin và quản lý giỏ hàng ngay trên website.
            </p>
            <button className="btn btn-green" onClick={() => setInfo('')}>
              Đã hiểu
            </button>
          </div>
        </Modal>
      )}
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <PopupProvider>
        <AuthProvider>
          <MainApp />
        </AuthProvider>
      </PopupProvider>
    </HashRouter>
  )
}
