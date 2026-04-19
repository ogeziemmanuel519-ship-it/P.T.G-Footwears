export interface Product {
  id: string;
  name: string;
  image: string;
  price?: number;
  hasPrice: boolean;
}

export interface AdminProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  createdAt: number;
}
