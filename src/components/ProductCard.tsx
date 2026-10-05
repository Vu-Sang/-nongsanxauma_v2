import { MapPin, ShoppingBasket, Leaf, Eye } from 'lucide-react'
import { money, type Product } from '../catalog'
import { useState } from 'react'

export function ProduceImage({
  src,
  alt,
  className = '',
}: {
  src: string
  alt: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)
  return src && !failed ? (
    <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} />
  ) : (
    <div className={`image-fallback ${className}`} role="img" aria-label={alt}>
      <Leaf size={42} />
      <span>{alt}</span>
    </div>
  )
}

const getDetailId = (id: string) => {
  const map: Record<string, number> = {
    carrot: 702,
    tomato: 704,
    pomelo: 703,
    potato: 701,
    cabbage: 702,
    spinach: 702,
    pumpkin: 705,
  }
  return map[id] || 701
}

export default function ProductCard({
  product: p,
  onAdd,
}: {
  product: Product
  onAdd: (id: string) => void
}) {
  const detailUrl = `#/san-pham/${getDetailId(p.id)}`
  return (
    <article className="product-card group">
      <a
        href={detailUrl}
        className="product-image block cursor-pointer"
        title={`Xem chi tiết ${p.name}`}
      >
        <ProduceImage src={p.image} alt={p.name} />
        <span className="discount">-{Math.round((1 - p.price / p.original) * 100)}%</span>
        <span className="quality-score" title="Điểm minh họa trong bản demo">
          AI {p.score}%
        </span>
        <span className="flaw">{p.flaw}</span>
      </a>
      <div className="product-origin">
        <span>
          <MapPin size={13} />
          {p.farm}
        </span>
        <span>{p.region}</span>
      </div>
      <h3>
        <a href={detailUrl} className="hover:text-primary transition-colors">
          {p.name}
        </a>
      </h3>
      <div className="product-price">
        <strong>{money(p.price)}</strong>
        <del>
          {money(p.original)}/{p.unit}
        </del>
      </div>
      <div className="progress-label">
        <span>Đã giải cứu {p.rescued}%</span>
        <span>
          Còn {p.stock} {p.unit}
        </span>
      </div>
      <div className="progress-track">
        <span style={{ width: `${p.rescued}%` }} />
      </div>
      <div className="flex gap-2 mt-4">
        <a
          href={detailUrl}
          className="btn btn-secondary px-3 py-2 flex items-center justify-center text-xs font-bold"
          title="Xem chi tiết"
        >
          <Eye size={15} />
        </a>
        <button className="btn btn-green flex-1" onClick={() => onAdd(p.id)}>
          <ShoppingBasket size={17} />
          Thêm vào giỏ
        </button>
      </div>
    </article>
  )
}
