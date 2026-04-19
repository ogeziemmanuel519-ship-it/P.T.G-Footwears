import { Link } from 'react-router-dom';
import { Award, Tag, Truck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { featuredProducts, collectionProducts } from '@/data/products';

export default function Home() {
  const heroImages = [
    collectionProducts[0],
    collectionProducts[4],
    collectionProducts[7],
    collectionProducts[15],
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f0' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <p
                className="text-xs font-medium tracking-[3px] mb-4"
                style={{ color: '#c9a96e' }}
              >
                PROSPERITY THROUGH GOD
              </p>
              <h1
                className="text-4xl lg:text-5xl leading-tight mb-4"
                style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}
              >
                Quality Footwear for Every Step
              </h1>
              <p className="text-base leading-relaxed mb-8 max-w-[440px]" style={{ color: '#666666' }}>
                Wholesale slides, clogs, sandals &amp; flip-flops for men, women &amp; children. Trusted Nigerian footwear supplier.
              </p>
              <Link
                to="/shop"
                className="inline-block text-xs font-medium tracking-[2px] text-white transition-opacity duration-200 hover:opacity-85"
                style={{ backgroundColor: '#1a1a1a', padding: '14px 32px' }}
              >
                SHOP NOW
              </Link>
            </div>

            {/* Hero Images Grid */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-2">
                {heroImages.map((product) => (
                  <div
                    key={product.id}
                    className="overflow-hidden"
                    style={{ backgroundColor: '#f5f5f0' }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      style={{ aspectRatio: '1/1' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl mb-2"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}
            >
              Our Collection
            </h2>
            <p className="text-sm" style={{ color: '#666666' }}>
              Handpicked footwear for the whole family
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="text-sm font-medium inline-block border-b transition-opacity duration-200 hover:opacity-70"
              style={{ color: '#1a1a1a', borderColor: '#1a1a1a', paddingBottom: '2px' }}
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: '#f5f5f0' }}>
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl text-center mb-12"
            style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}
          >
            Why Choose PTG Footwear?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award size={32} style={{ color: '#c9a96e' }} />
              </div>
              <h3 className="text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                Quality Products
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#666666' }}>
                Carefully sourced durable footwear built to last
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Tag size={32} style={{ color: '#c9a96e' }} />
              </div>
              <h3 className="text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                Wholesale Prices
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#666666' }}>
                Best prices for bulk orders and retailers
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Truck size={32} style={{ color: '#c9a96e' }} />
              </div>
              <h3 className="text-sm font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                Nationwide Delivery
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#666666' }}>
                Fast and reliable shipping across Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
