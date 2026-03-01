export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/projects/project-1.jpg",
    alt: "Modern Dashboard Interface",
    width: 800,
    height: 600,
    category: "UI Design",
  },
  {
    src: "/images/projects/project-1.jpg",
    alt: "E-commerce App Flow",
    width: 600,
    height: 800,
    category: "Product",
  },
  {
    src: "/images/projects/project-1.jpg",
    alt: "Brand Identity Design",
    width: 800,
    height: 1000,
    category: "Branding",
  },
  {
    src: "/images/projects/project-1.jpg",
    alt: "SaaS Landing Page",
    width: 1000,
    height: 700,
    category: "Web Design",
  },
  {
    src: "/images/projects/project-1.jpg",
    alt: "Mobile App Dark Mode",
    width: 600,
    height: 900,
    category: "Mobile",
  },
  {
    src: "/images/projects/project-1.jpg",
    alt: "Analytics Dashboard",
    width: 900,
    height: 600,
    category: "UI/UX",
  },
];
