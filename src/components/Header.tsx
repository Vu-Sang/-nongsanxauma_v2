import { Leaf, Search, Camera, ShoppingBasket, Store, UserRound, Menu, X, Zap } from 'lucide-react';
import { useState, useEffect, type FormEvent } from 'react';
const links = [
  ['/','Trang chủ'],
  ['/nong-san-tuoi','Nông sản tươi'],
  ['/combo-tui-mu','Combo & Túi mù'],
  ['/cong-nghe-ai','Công nghệ AI'],
  ['/cau-chuyen-nong-dan','Câu chuyện nông dân']
];

export default function Header({route,count,onSearch,onCart,onInfo}:{route:string;count:number;onSearch:(s:string)=>void;onCart:()=>void;onInfo:(s:string)=>void}) {
  const [query,setQuery]=useState('');
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      setScrolled(window.scrollY > 120);
    };
    handleScroll();
    window.addEventListener('scroll',handleScroll,{passive:true});
    return ()=>window.removeEventListener('scroll',handleScroll);
  },[]);

  const isHome = route === '/' || route === '';
  const showNav = open || !isHome || scrolled;

  function submit(e:FormEvent){
    e.preventDefault();
    onSearch(query);
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="announcement">
        <Zap size={14}/> Freeship đơn từ 150k · Giải cứu hôm nay giảm đến 40% · Hỗ trợ nông dân trực tiếp
      </div>
      <div className="page-container header-main">
        <a href="#/" className="brand" aria-label="CapNong – Trang chủ">
          <span className="brand-leaf"><Leaf size={29}/></span>
          <span><strong>CapNong</strong><small>Nông sản xấu mã – Ngon thật</small></span>
        </a>
        <form onSubmit={submit} className="header-search">
          <Search size={19}/>
          <input
            aria-label="Tìm nông sản"
            value={query}
            onChange={e=>setQuery(e.target.value)}
            placeholder="Tìm rau củ, trái cây hoặc nhà vườn..."
          />
          <button type="submit" aria-label="Tìm kiếm"><Search size={18}/></button>
          <button type="button" className="ai-search" onClick={()=>onInfo('Tìm bằng ảnh AI')}>
            <Camera size={18}/>
            <span>Tìm AI</span>
          </button>
        </form>
        <div className="header-actions">
          <button className="btn btn-gold vendor-button" onClick={()=>onInfo('Đăng ký nhà vườn')}>
            <Store size={16}/>Bán nông sản
          </button>
          <button className="icon-button cart-trigger" aria-label={`Giỏ hàng, ${count} sản phẩm`} onClick={onCart}>
            <ShoppingBasket/>
            <span>{count}</span>
          </button>
          <button className="icon-button account-button" aria-label="Tài khoản" onClick={()=>onInfo('Tài khoản CapNong')}>
            <UserRound/>
          </button>
          <button
            className="icon-button mobile-toggle"
            aria-label={open?'Đóng menu':'Mở menu'}
            aria-expanded={open}
            onClick={()=>setOpen(!open)}
          >
            {open?<X/>:<Menu/>}
          </button>
        </div>
      </div>
      <div className={`nav-bar ${open?'is-open':''} ${showNav?'is-visible':'is-hidden'}`}>
        <div className="page-container nav-inner">
          <nav aria-label="Điều hướng chính">
            {links.map(([path,label])=>(
              <a
                key={path}
                href={`#${path}`}
                aria-current={route===path?'page':undefined}
                onClick={()=>setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

