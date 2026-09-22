import { useEffect, useState } from 'react';
import { ShoppingBasket, Minus, Plus, Trash2, CheckCircle2, Info } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { ProduceImage } from './components/ProductCard';
import Home from './pages/Home';
import Fresh from './pages/Fresh';
import Combos from './pages/Combos';
import { allProducts, changeQuantity, money, type Cart } from './catalog';
const currentRoute=()=>decodeURI(location.hash.slice(1)||'/');
function restoreCart():Cart{try{const saved:unknown=JSON.parse(localStorage.getItem('capnong-cart')||'{}');if(!saved||typeof saved!=='object'||Array.isArray(saved))return {};return Object.fromEntries(allProducts.flatMap(p=>{const n=(saved as Record<string,unknown>)[p.id];return typeof n==='number'&&Number.isInteger(n)&&n>0?[[p.id,Math.min(n,p.stock)]]:[];}));}catch{return {};}}
export default function App(){
 const [route,setRoute]=useState(currentRoute);const [cart,setCart]=useState<Cart>(restoreCart);const [cartOpen,setCartOpen]=useState(false);const [info,setInfo]=useState('');const [query,setQuery]=useState('');const [toast,setToast]=useState('');
 const isFresh=route.startsWith('/nong-san-tuoi');const isCombo=route.startsWith('/combo-tui-mu');
 const count=Object.values(cart).reduce((a,b)=>a+b,0);const total=allProducts.reduce((s,p)=>s+p.price*(cart[p.id]||0),0);
 useEffect(()=>{const listener=()=>setRoute(currentRoute());window.addEventListener('hashchange',listener);return ()=>window.removeEventListener('hashchange',listener);},[]);
 useEffect(()=>{try{localStorage.setItem('capnong-cart',JSON.stringify(cart));}catch{/* Session state still works when storage is unavailable. */}},[cart]);
 useEffect(()=>{if(!toast)return;const id=setTimeout(()=>setToast(''),3000);return()=>clearTimeout(id);},[toast]);
 useEffect(()=>{document.title=`${isFresh?'Nông sản tươi':isCombo?'Combo & Túi mù':'Nông sản xấu mã – Ngon thật'} · CapNong`;const anchor=isFresh||isCombo?route.split('/')[2]:route.slice(1);const frame=requestAnimationFrame(()=>{const target=anchor?document.getElementById(anchor):null;if(target)target.scrollIntoView({behavior:'instant'});else window.scrollTo(0,0);});return()=>cancelAnimationFrame(frame);},[route,isFresh,isCombo]);
 const add=(id:string)=>{setCart(c=>changeQuantity(c,id,1));setToast('Đã cập nhật giỏ hàng của bạn');};
 const showInfo=(title:string)=>{setCartOpen(false);setInfo(title);};
 return <><a href="#main-content" className="skip-link" onClick={e=>{e.preventDefault();document.getElementById('main-content')?.focus();}}>Đến nội dung chính</a><Header route={isFresh?'/nong-san-tuoi':isCombo?'/combo-tui-mu':route} count={count} onSearch={s=>{setQuery(s);if(isFresh){document.getElementById('san-pham')?.scrollIntoView();}else location.hash='/nong-san-tuoi/san-pham';}} onCart={()=>setCartOpen(true)} onInfo={showInfo}/>
 <main id="main-content" tabIndex={-1}>{isFresh?<Fresh query={query} setQuery={setQuery} onAdd={add} onInfo={showInfo}/>:isCombo?<Combos onAdd={add} onInfo={showInfo}/>:<Home onAdd={add} onInfo={showInfo}/>}</main><Footer onInfo={showInfo}/>
 {toast&&<div className="toast" role="status"><CheckCircle2 size={19}/>{toast}<button onClick={()=>{setToast('');setCartOpen(true);}}>Xem giỏ</button></div>}
 {cartOpen&&<Modal title="Giỏ nông sản của bạn" onClose={()=>setCartOpen(false)} wide>{count?<><div className="cart-items">{allProducts.filter(p=>cart[p.id]).map(p=><div className="cart-item" key={p.id}><ProduceImage src={p.image} alt={p.name}/><div className="cart-item-info"><h3>{p.name}</h3><p>{money(p.price)}/{p.unit}</p><div className="quantity-control"><button aria-label={`Giảm ${p.name}`} onClick={()=>setCart(c=>changeQuantity(c,p.id,-1))}><Minus size={14}/></button><span>{cart[p.id]}</span><button disabled={cart[p.id]>=p.stock} aria-label={`Tăng ${p.name}`} onClick={()=>setCart(c=>changeQuantity(c,p.id,1))}><Plus size={14}/></button></div></div><div className="cart-item-end"><strong>{money(p.price*cart[p.id])}</strong><button aria-label={`Xóa ${p.name}`} className="icon-button" onClick={()=>setCart(c=>changeQuantity(c,p.id,-c[p.id]))}><Trash2 size={16}/></button></div></div>)}</div><div className="cart-total"><span>Tạm tính</span><strong>{money(total)}</strong></div><p className="subtle">Phí giao hàng chưa được tính. Đây là giỏ hàng trải nghiệm, chưa tạo đơn thực tế.</p><button className="btn btn-green w-full mt-4" onClick={()=>showInfo('Thanh toán')}>Tiếp tục thanh toán</button></>:<div className="empty-state"><ShoppingBasket size={44}/><h3>Giỏ của bạn đang trống</h3><p>Chọn những nông sản ngon lành cho bữa ăn hôm nay.</p><a className="btn btn-green" href="#/nong-san-tuoi" onClick={()=>setCartOpen(false)}>Khám phá nông sản</a></div>}</Modal>}
 {info&&<Modal title={info} onClose={()=>setInfo('')}><div className="info-content"><Info size={32}/><p>Đây là giao diện trải nghiệm CapNong. Tính năng <strong>{info.toLowerCase()}</strong> chưa kết nối dịch vụ thực tế.</p><p>Bạn có thể thử tìm kiếm, lọc nông sản, chọn combo và quản lý giỏ hàng ngay trên website.</p><button className="btn btn-green" onClick={()=>setInfo('')}>Đã hiểu</button></div></Modal>}
 </>;
}
