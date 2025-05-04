interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "food" | "drinks" | "interior" | "staff";
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    alt: "Artistic latte art in a ceramic cup",
    category: "drinks",
  },
  {
    id: 2,
    src: "cozy.jpg",
    alt: "Cozy cafe interior with warm lighting",
    category: "interior",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwYmVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    alt: "Fresh coffee beans in a wooden scoop",
    category: "drinks",
  },
  {
    id: 4,
    src: "process.webp",
    alt: "Barista preparing coffee with professional equipment",
    category: "staff",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhZmUlMjB3YWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    alt: "Minimalist cafe wall with hanging plants",
    category: "interior",
  },
  {
    id: 6,
    src: "cake.webp",
    alt: "Freshly baked croissants on a wooden board",
    category: "food",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZSUyMGJyZXdpbmclMjBzdGF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    alt: "Coffee brewing station with vintage equipment",
    category: "interior",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    alt: "Macarons and pastries display",
    category: "food",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFrZXJ5JTIwd29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    alt: "Coffee cup with cinnamon and beans decoration",
    category: "drinks",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhcmlzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    alt: "Cafe outdoor seating with string lights",
    category: "interior",
  },
  {
    id: 11,
    src: "header.jpg",
    alt: "Barista creating latte art",
    category: "staff",
  },
  {
    id: 12,
    src: "croque.webp",
    alt: "Coffee and dessert pairing on marble table",
    category: "food",
  },
];
