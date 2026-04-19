import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className="group cursor-pointer transition-all duration-300"
      style={{
        transform: 'translateY(0)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      <div
        className="w-full overflow-hidden"
        style={{ aspectRatio: '1/1', backgroundColor: '#f5f5f0' }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <p className="text-sm font-medium" style={{ color: '#1a1a1a' }}>
          {product.name}
        </p>
        {product.hasPrice && product.price !== undefined && (
          <p className="text-sm font-semibold mt-1" style={{ color: '#c9a96e' }}>
            ₦{product.price.toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
}
