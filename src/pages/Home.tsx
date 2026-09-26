import Hero from '../design/Hero';
import RescueProcess from '../design/RescueProcess';
import AiFeatures from '../design/AiFeatures';
import Categories from '../design/Categories';
import TodayRescue from '../design/TodayRescue';
import CombosTeaser from '../design/CombosTeaser';
import FarmerStory from '../design/FarmerStory';
import Testimonials from '../design/Testimonials';
import Newsletter from '../components/Newsletter';
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
 }}><Hero/><Categories/>
 <TodayRescue onAdd={onAdd}/>
 <CombosTeaser onAdd={onAdd}/>
 <RescueProcess/>
 <AiFeatures onInfo={onInfo}/>
 <FarmerStory/><Testimonials/><Newsletter onInfo={onInfo}/></div>;
}
