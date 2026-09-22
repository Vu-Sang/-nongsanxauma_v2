import { Flame, ArrowRight } from 'lucide-react';
import Hero from '../design/Hero';
import Values from '../design/Values';
import AiFeatures from '../design/AiFeatures';
import RescueProcess from '../design/RescueProcess';
import Categories from '../design/Categories';
import CombosTeaser from '../design/CombosTeaser';
import Quality from '../design/Quality';
import FarmerStory from '../design/FarmerStory';
import Testimonials from '../design/Testimonials';
import Partners from '../design/Partners';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { products } from '../catalog';
export default function Home({onAdd,onInfo}:{onAdd:(id:string)=>void;onInfo:(s:string)=>void}) {
 return <div onClick={event=>{
  const anchor=(event.target as HTMLElement).closest('a');
  if(anchor){
   const text=anchor.textContent?.trim() || '';
   if(/Xem bảo chứng|Xem chính sách|Đăng ký/.test(text)){event.preventDefault();onInfo(text.replace(/arrow_forward/g,'').trim());return;}
   if(text.includes('Combo tiết kiệm')){event.preventDefault();location.hash='/combo-tui-mu';return;}
  }
  // Static editorial buttons are upgraded here without changing approved markup.
  const button=(event.target as HTMLElement).closest('button');
  if(button && button.closest('[data-editorial]')) {
   const label=button.textContent?.trim() || 'CapNong';
   if(label.includes('túi mù'))onAdd('mystery');else if(label.includes('combo'))location.hash='/combo-tui-mu';else onInfo(label.replace(/^[a-z_]+\s*/,''));
  }
 }}><Hero/><Values/><div data-editorial><AiFeatures/></div><RescueProcess/><Categories/>
 <section id="giai-cuu-hom-nay" className="section-pad bg-surface-container-low"><div className="page-container"><div className="section-heading"><div><span className="eyebrow"><Flame size={18}/>Tươi ngon mỗi ngày</span><h2>Giải cứu hôm nay</h2></div><a href="#/nong-san-tuoi" className="text-link">Xem tất cả nông sản<ArrowRight size={17}/></a></div><div className="product-grid">{products.map(p=><ProductCard key={p.id} product={p} onAdd={onAdd}/>)}</div></div></section>
 <div data-editorial><CombosTeaser/></div><Quality/><FarmerStory/><Testimonials/><div data-editorial><Partners/></div><Newsletter/></div>;
}
