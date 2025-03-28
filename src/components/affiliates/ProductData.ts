
export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Calming Essential Oil Blend",
    description: "A soothing blend of lavender, chamomile, and bergamot to promote relaxation and reduce anxiety.",
    price: "$24.99",
    rating: 4.8,
    reviews: 126,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    category: "Aromatherapy"
  },
  {
    id: 2,
    name: "Meditation Cushion Set",
    description: "Ergonomically designed meditation cushion and mat for comfortable, supported meditation practice.",
    price: "$59.99",
    rating: 4.7,
    reviews: 83,
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
    category: "Meditation"
  },
  {
    id: 3,
    name: "Wellness Journal",
    description: "Guided journal with prompts for gratitude, self-reflection, and personal growth tracking.",
    price: "$18.95",
    rating: 4.9,
    reviews: 214,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
    category: "Mindfulness"
  },
  {
    id: 4,
    name: "Sleep Sound Machine",
    description: "Create a peaceful sleep environment with white noise, nature sounds, and gentle melodies.",
    price: "$45.99",
    rating: 4.6,
    reviews: 97,
    image: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?auto=format&fit=crop&w=800&q=80",
    category: "Sleep"
  },
  {
    id: 5,
    name: "Herbal Stress Relief Tea",
    description: "Organic blend of adaptogenic herbs to support your body's response to stress and promote calm.",
    price: "$15.99",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1565799511371-2ac19066297e?auto=format&fit=crop&w=800&q=80",
    category: "Herbal Wellness"
  },
  {
    id: 6,
    name: "Weighted Blanket",
    description: "Premium weighted blanket that provides gentle, comforting pressure to improve sleep quality.",
    price: "$89.99",
    rating: 4.8,
    reviews: 243,
    image: "https://images.unsplash.com/photo-1572978122938-5dc1023b1f95?auto=format&fit=crop&w=800&q=80",
    category: "Sleep"
  }
];

export const categories = [
  "All Products", "Aromatherapy", "Meditation", "Mindfulness", 
  "Sleep", "Herbal Wellness", "Books", "Digital Products"
];
