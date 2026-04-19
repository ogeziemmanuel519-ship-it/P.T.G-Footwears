import { useState, useEffect } from 'react';
import type { AdminProduct } from '@/types';

const STORAGE_KEY = 'ptg_admin_products';

export function useLocalStorage() {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProducts(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading from localStorage:', e);
    }
    setLoaded(true);
  }, []);

  const saveProducts = (newProducts: AdminProduct[]) => {
    setProducts(newProducts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProducts));
  };

  const addProduct = (product: Omit<AdminProduct, 'id' | 'createdAt'>) => {
    const newProduct: AdminProduct = {
      ...product,
      id: Date.now().toString(),
      createdAt: Date.now(),
    };
    const updated = [...products, newProduct];
    saveProducts(updated);
    return newProduct;
  };

  const deleteProduct = (id: string) => {
    const updated = products.filter((p) => p.id !== id);
    saveProducts(updated);
  };

  return { products, addProduct, deleteProduct, loaded };
}
