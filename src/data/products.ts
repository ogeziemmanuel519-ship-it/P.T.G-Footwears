import type { Product } from '@/types';

export const collectionProducts: Product[] = [
  { id: 'c1', name: 'USA Slide Sandals', image: '/images/IMG-20260331-WA0011.jpg', hasPrice: false },
  { id: 'c2', name: 'Patterned Clog Sandals', image: '/images/IMG-20260330-WA0019.jpg', hasPrice: false },
  { id: 'c3', name: 'Classic Flip Flops', image: '/images/IMG-20260205-WA0001.jpg', hasPrice: false },
  { id: 'c4', name: 'Orient Bow Clogs', image: '/images/IMG-20260407-WA0021.jpg', hasPrice: false },
  { id: 'c5', name: 'Rhinestone Zigzag Slides', image: '/images/IMG-20260407-WA0010.jpg', hasPrice: false },
  { id: 'c6', name: 'Rhinestone Dot Slides', image: '/images/IMG-20260417-WA0012.jpg', hasPrice: false },
  { id: 'c7', name: 'Yeezy-Style Slides', image: '/images/IMG-20260206-WA0003.jpg', hasPrice: false },
  { id: 'c8', name: 'Kids Striped Clogs', image: '/images/IMG-20260417-WA0010.jpg', hasPrice: false },
  { id: 'c9', name: 'Kids Orient Cartoon Clogs', image: '/images/IMG-20260417-WA0005.jpg', hasPrice: false },
  { id: 'c10', name: 'Kids All-Black Slides', image: '/images/IMG-20260124-WA0007.jpg', hasPrice: false },
  { id: 'c11', name: 'Birkenstock-Style Sandals', image: '/images/IMG-20260323-WA0000.jpg', hasPrice: false },
  { id: 'c12', name: 'LUOFU Flip Flops', image: '/images/IMG-20251229-WA0011.jpg', hasPrice: false },
  { id: 'c13', name: 'Beaded Massage Slides', image: '/images/IMG-20260207-WA0004.jpg', hasPrice: false },
  { id: 'c14', name: 'Yeezy-Style Kids Slides', image: '/images/IMG-20260206-WA0002.jpg', hasPrice: false },
  { id: 'c15', name: 'Jeweled Flip Flops', image: '/images/IMG-20260417-WA0017.jpg', hasPrice: false },
  { id: 'c16', name: 'Camo Charm Clogs', image: '/images/IMG-20260130-WA0001.jpg', hasPrice: false },
  { id: 'c17', name: 'Traditional Beaded Slippers', image: '/images/IMG-20260414-WA0006.jpg', hasPrice: false },
  { id: 'c18', name: 'Kids Nike-Style Clogs', image: '/images/IMG-20260417-WA0011.jpg', hasPrice: false },
  { id: 'c19', name: 'Adidas Stripe Slides', image: '/images/IMG-20260414-WA0008.jpg', hasPrice: false },
  { id: 'c20', name: 'Adidas Sport Slides', image: '/images/IMG-20260414-WA0007.jpg', hasPrice: false },
];

export const featuredProducts = collectionProducts.slice(0, 8);
