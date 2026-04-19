import { useState, useRef, type FormEvent } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Lock, Upload, Trash2, LogOut, Package } from 'lucide-react';

const ADMIN_PASSWORD = 'mamadaniel2026';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem('ptg_admin_logged_in') === 'true';
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { products, addProduct, deleteProduct } = useLocalStorage();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      sessionStorage.setItem('ptg_admin_logged_in', 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('ptg_admin_logged_in');
    setPassword('');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!productName.trim() || !productPrice.trim() || !previewImage) {
      setError('Please fill in all fields and select an image.');
      return;
    }

    setUploading(true);

    addProduct({
      name: productName.trim(),
      price: parseFloat(productPrice),
      image: previewImage,
    });

    // Reset form
    setProductName('');
    setProductPrice('');
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setError('');
    setUploading(false);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
    }
  };

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f5f5f0' }}>
        <Navbar />

        <main className="flex-1 pt-24 pb-20 flex items-center justify-center">
          <div className="max-w-[400px] w-full mx-auto px-4">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Lock size={40} style={{ color: '#c9a96e' }} />
              </div>
              <h1
                className="text-2xl mb-2"
                style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}
              >
                Admin Panel
              </h1>
              <p className="text-sm" style={{ color: '#666666' }}>
                Enter your password to access the admin dashboard
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 text-sm bg-white border outline-none transition-colors duration-200 focus:border-[#c9a96e]"
                  style={{ borderColor: '#e0e0d8' }}
                />
              </div>

              {error && (
                <p className="text-xs" style={{ color: '#dc2626' }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full text-xs font-medium tracking-[1.5px] text-white py-3 transition-opacity duration-200 hover:opacity-85"
                style={{ backgroundColor: '#1a1a1a' }}
              >
                LOGIN
              </button>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f5f5f0' }}>
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h1
              className="text-2xl"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}
            >
              Manage Products
            </h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-xs font-medium tracking-[1px] transition-opacity duration-200 hover:opacity-70"
              style={{ color: '#666666' }}
            >
              <LogOut size={16} />
              LOGOUT
            </button>
          </div>

          {/* Upload Form */}
          <div
            className="bg-white p-6 mb-10"
            style={{ border: '1px solid #e0e0d8' }}
          >
            <h2 className="text-sm font-semibold mb-4" style={{ color: '#1a1a1a' }}>
              Add New Product
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: '#666666' }}>
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="e.g. Classic Black Slides"
                    className="w-full px-4 py-3 text-sm bg-white border outline-none transition-colors duration-200 focus:border-[#c9a96e]"
                    style={{ borderColor: '#e0e0d8' }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: '#666666' }}>
                    Price (₦)
                  </label>
                  <input
                    type="number"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    placeholder="e.g. 5000"
                    min="0"
                    step="1"
                    className="w-full px-4 py-3 text-sm bg-white border outline-none transition-colors duration-200 focus:border-[#c9a96e]"
                    style={{ borderColor: '#e0e0d8' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: '#666666' }}>
                  Product Image
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-3 text-sm bg-white border outline-none file:mr-4 file:px-4 file:py-2 file:text-xs file:font-medium file:border-0 file:bg-[#1a1a1a] file:text-white"
                  style={{ borderColor: '#e0e0d8' }}
                />
              </div>

              {previewImage && (
                <div className="w-32 h-32 overflow-hidden" style={{ backgroundColor: '#f5f5f0' }}>
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {error && (
                <p className="text-xs" style={{ color: '#dc2626' }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={uploading}
                className="flex items-center gap-2 text-xs font-medium tracking-[1.5px] text-white py-3 px-6 transition-opacity duration-200 hover:opacity-85 disabled:opacity-50"
                style={{ backgroundColor: '#1a1a1a' }}
              >
                <Upload size={16} />
                ADD PRODUCT
              </button>
            </form>
          </div>

          {/* Product List */}
          <div>
            <h2 className="text-sm font-semibold mb-4" style={{ color: '#1a1a1a' }}>
              Your Products ({products.length})
            </h2>

            {products.length === 0 ? (
              <div className="text-center py-12 bg-white" style={{ border: '1px solid #e0e0d8' }}>
                <div className="flex justify-center mb-3">
                  <Package size={40} style={{ color: '#cccccc' }} />
                </div>
                <p className="text-sm" style={{ color: '#999999' }}>
                  No products uploaded yet
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 bg-white p-4"
                    style={{ border: '1px solid #e0e0d8' }}
                  >
                    <div
                      className="w-16 h-16 flex-shrink-0 overflow-hidden"
                      style={{ backgroundColor: '#f5f5f0' }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate" style={{ color: '#1a1a1a' }}>
                        {product.name}
                      </p>
                      <p className="text-sm font-semibold" style={{ color: '#c9a96e' }}>
                        ₦{product.price.toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="p-2 transition-opacity duration-200 hover:opacity-70 flex-shrink-0"
                      style={{ color: '#dc2626' }}
                      aria-label="Delete product"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
