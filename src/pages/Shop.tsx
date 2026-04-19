import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { collectionProducts } from '@/data/products';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { Product } from '@/types';
import { ShoppingBag } from 'lucide-react';

export default function Shop() {
  const [activeTab, setActiveTab] = useState<'collection' | 'forsale'>('collection');
  const { products: adminProducts } = useLocalStorage();

  const forSaleProducts: Product[] = adminProducts.map((ap) => ({
    id: ap.id,
    name: ap.name,
    image: ap.image,
    price: ap.price,
    hasPrice: true,
  }));

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f5f5f0' }}>
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl text-center mb-8"
            style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}
          >
            All Products
          </h1>

          {/* Tabs */}
          <div className="flex justify-center gap-6 mb-10">
            <button
              onClick={() => setActiveTab('collection')}
              className="text-xs font-medium tracking-[1.5px] pb-2 transition-all duration-200"
              style={{
                color: activeTab === 'collection' ? '#1a1a1a' : '#999999',
                borderBottom: activeTab === 'collection' ? '2px solid #1a1a1a' : '2px solid transparent',
              }}
            >
              COLLECTION
            </button>
            <button
              onClick={() => setActiveTab('forsale')}
              className="text-xs font-medium tracking-[1.5px] pb-2 transition-all duration-200"
              style={{
                color: activeTab === 'forsale' ? '#1a1a1a' : '#999999',
                borderBottom: activeTab === 'forsale' ? '2px solid #1a1a1a' : '2px solid transparent',
              }}
            >
              FOR SALE
            </button>
          </div>

          {/* Collection Tab */}
          {activeTab === 'collection' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collectionProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* For Sale Tab */}
          {activeTab === 'forsale' && (
            <>
              {forSaleProducts.length === 0 ? (
                <div className="text-center py-20">
                  <div className="flex justify-center mb-4">
                    <ShoppingBag size={48} style={{ color: '#cccccc' }} />
                  </div>
                  <p className="text-lg font-medium mb-2" style={{ color: '#999999' }}>
                    No products for sale yet
                  </p>
                  <p className="text-sm" style={{ color: '#bbbbbb' }}>
                    Check back soon for new arrivals!
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {forSaleProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
