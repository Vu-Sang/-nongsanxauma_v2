import { MapPin, ShoppingBasket, Leaf } from 'lucide-react';
import { money, type Product } from '../catalog';
import { useState } from 'react';
export function ProduceImage({src,alt,className=''}:{src:string;alt:string;className?:string}) {
 const [failed,setFailed] = useState(false);
 return src && !failed ? <img src={src} alt={alt} className={className} loading="lazy" onError={()=>setFailed(true)}/> : <div className={`image-fallback ${className}`} role="img" aria-label={alt}><Leaf size={42}/><span>{alt}</span></div>;
}
export default function ProductCard({product:p,onAdd}:{product:Product;onAdd:(id:string)=>void}) {
 return <article className="product-card group">
  <div className="product-image"><ProduceImage src={p.image} alt={p.name}/><span className="discount">-{Math.round((1-p.price/p.original)*100)}%</span><span className="quality-score" title="Điểm minh họa trong bản demo">AI {p.score}%</span><span className="flaw">{p.flaw}</span></div>
  <div className="product-origin"><span><MapPin size={13}/>{p.farm}</span><span>{p.region}</span></div>
  <h3>{p.name}</h3><div className="product-price"><strong>{money(p.price)}</strong><del>{money(p.original)}/{p.unit}</del></div>
  <div className="progress-label"><span>Đã giải cứu {p.rescued}%</span><span>Còn {p.stock} {p.unit}</span></div><div className="progress-track"><span style={{width:`${p.rescued}%`}}/></div>
  <button className="btn btn-green w-full mt-4" onClick={()=>onAdd(p.id)}><ShoppingBasket size={17}/>Thêm vào giỏ</button>
 </article>;
}
