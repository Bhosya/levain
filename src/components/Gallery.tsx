import React, { useEffect, useState } from "react";
import { X, Camera, Images } from "lucide-react";
import { galleryImages } from "../data/gallery";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: "all", label: "All" },
    { id: "food", label: "Food" },
    { id: "drinks", label: "Drinks" },
    { id: "interior", label: "Interior" },
    { id: "staff", label: "Staff" },
  ];

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(
        galleryImages.filter((image) => image.category === activeCategory)
      );
    }
    setShowAll(false);
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "transform-none");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".gallery-item").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".gallery-item").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [filteredImages, showAll]);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 4);

  return (
    <section
      id="gallery"
      className="cafe-section bg-levain-beige/50 relative overflow-hidden w-full"
    >
      {/* Textured background with photo theme - full screen width */}
      <div className="absolute inset-0 w-full h-full opacity-70 z-0">
        <div className="absolute inset-0 w-full h-full bg-texture opacity-10"></div>
        <div className="absolute inset-0 w-full h-full bg-paper opacity-10"></div>
      </div>

      {/* Gallery ornaments - camera, photo frames - positioned for full width effect */}
      <div className="absolute top-12 left-8 opacity-10 z-0 transform -rotate-12">
        <Camera size={100} className="text-levain-brown" />
      </div>
      <div className="absolute bottom-16 right-8 opacity-10 z-0 transform rotate-12">
        <Images size={120} className="text-levain-brown" />
      </div>

      {/* Decorative photo frames - expanded and repositioned */}
      <div className="absolute top-40 right-12 w-36 h-24 border-4 border-levain-brown/10 transform rotate-6"></div>
      <div className="absolute bottom-32 left-16 w-40 h-28 border-4 border-levain-brown/10 transform -rotate-3"></div>

      {/* Film strip decorations - extended to span more width */}
      <div className="absolute top-8 right-40 h-64 w-8 bg-levain-brown/5 flex flex-col justify-between py-1">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-6 w-full bg-white/20 border border-levain-brown/10"
          ></div>
        ))}
      </div>
      <div className="absolute bottom-10 left-40 h-8 w-64 bg-levain-brown/5 flex justify-between px-1 items-center">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-full w-6 bg-white/20 border border-levain-brown/10"
          ></div>
        ))}
      </div>

      {/* Extended ornaments to span full width */}
      <div className="absolute left-0 top-1/4 w-24 h-48 opacity-5 border-r border-levain-brown">
        <Camera
          size={60}
          className="absolute -right-7 top-1/2 transform -translate-y-1/2 text-levain-brown"
        />
      </div>
      <div className="absolute right-0 top-2/3 w-24 h-48 opacity-5 border-l border-levain-brown">
        <Camera
          size={60}
          className="absolute -left-7 top-1/2 transform -translate-y-1/2 text-levain-brown"
        />
      </div>

      {/* Large film strip across entire width (expanded for large screens) */}
      <div className="absolute top-1/2 left-0 right-0 h-1 w-screen bg-levain-brown/5 z-0">
        <div className="flex justify-around absolute top-1/2 transform -translate-y-1/2 w-screen">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="h-4 w-4 rounded-full bg-levain-brown/10"
            ></div>
          ))}
        </div>
      </div>

      {/* Edge to edge decorative elements */}
      <div className="absolute top-1/3 -left-12 right-0 h-px w-screen bg-levain-brown/10 z-0"></div>
      <div className="absolute bottom-1/3 left-0 -right-12 h-px w-screen bg-levain-brown/10 z-0"></div>

      {/* Full-width camera ornaments at edges */}
      <div className="absolute -left-6 top-1/3 transform -translate-y-1/2">
        <div className="w-12 h-12 rounded-full bg-levain-brown/5 flex items-center justify-center">
          <Camera size={20} className="text-levain-brown/30" />
        </div>
      </div>
      <div className="absolute -right-6 bottom-1/3 transform translate-y-1/2">
        <div className="w-12 h-12 rounded-full bg-levain-brown/5 flex items-center justify-center">
          <Camera size={20} className="text-levain-brown/30" />
        </div>
      </div>

      {/* Shutter effect across full screen width */}
      <div className="absolute top-0 left-0 right-0 w-screen h-2 bg-levain-brown/5"></div>
      <div className="absolute bottom-0 left-0 right-0 w-screen h-2 bg-levain-brown/5"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="handwritten-accent">Visual Journey</span>
          <h2 className="section-title mt-2">Our Gallery</h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto">
            Take a visual tour through our café, exploring our artisan bread,
            specialty coffees, cozy interior, and team at work.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-text-light hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item opacity-0 transform translate-y-8 transition-all duration-700 ease-out overflow-hidden rounded-lg cursor-pointer relative group"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <p className="px-10 text-center text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-levain-brown hover:bg-levain-mid-brown text-white px-8 py-2 rounded-md"
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-20 right-4 text-white hover:text-accent"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <img
              src={galleryImages.find((img) => img.id === selectedImage)?.src}
              alt={galleryImages.find((img) => img.id === selectedImage)?.alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
