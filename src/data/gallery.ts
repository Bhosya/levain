interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "food" | "drinks" | "interior" | "staff";
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/drink/chocolate.jpg",
    alt: "Iced coffee with ice cubes and brown sugar rim",
    category: "drinks",
  },
  {
    id: 2,
    src: "/images/gallery/interior/cozy.jpg",
    alt: "Cozy cafe interior with warm lighting",
    category: "interior",
  },
  {
    id: 3,
    src: "/images/gallery/drink/latte.jpg",
    alt: "Latte with heart-shaped foam art in a glass",
    category: "drinks",
  },
  {
    id: 4,
    src: "/images/gallery/staff/2staff.jpg",
    alt: "Two cheerful baristas in festive Santa hats ready to serve with holiday spirit",
    category: "staff",
  },
  {
    id: 5,
    src: "/images/gallery/interior/4person.jpeg",
    alt: "Joyful, cozy moment with happy dog and friends dining",
    category: "interior",
  },
  {
    id: 6,
    src: "/images/gallery/food/cake.webp",
    alt: "Burnt cheesecake on plate with spoon and candle nearby",
    category: "food",
  },
  {
    id: 7,
    src: "/images/gallery/drink/redCitrus.jpg",
    alt: "Red Citrus tea with lemon and mint in a glass",
    category: "drinks",
  },
  {
    id: 8,
    src: "/images/gallery/food/matchaBurnt.jpg",
    alt: "Matcha burnt cheesecake with matcha sauce being poured",
    category: "food",
  },
  {
    id: 9,
    src: "/images/gallery/interior/caffeDate.jpeg",
    alt: "Cozy café date with warm, genuine conversation vibes",
    category: "interior",
  },
  {
    id: 10,
    src: "/images/gallery/interior/calm.jpg",
    alt: "Warm, modern, and welcoming perfect for casual gatherings or work",
    category: "interior",
  },
  {
    id: 11,
    src: "/images/gallery/staff/friendly.jpeg",
    alt: "Friendly barista serving coffee with a warm, genuine smile",
    category: "staff",
  },
  {
    id: 12,
    src: "/images/gallery/food/croque.webp",
    alt: "Croque with cheese and ham on a plate",
    category: "food",
  },
];
