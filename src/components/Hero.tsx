import React, { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scroll position
  const calculateOpacity = () => {
    const maxScroll = 300; // Adjust this value to control when the text completely fades out
    const opacity = Math.max(0, 1 - scrollY / maxScroll);
    return opacity;
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('header.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div
          className="text-center px-4 py-8 max-w-4xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            opacity: calculateOpacity(),
          }}
        >
          <h1
            className="text-white font-optima font-bold text-4xl md:text-5xl lg:text-6xl mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Experience Artisan Coffee & Sourdough
          </h1>
          <p
            className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            A cozy, stylish café where every loaf is crafted with passion and
            every cup brewed to perfection
          </p>
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            <button
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="button-primary"
            >
              Discover Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Updated to be centered */}
      <div
        className="absolute bottom-8 left-0 right-0 mx-auto w-full flex justify-center z-20 opacity-0 animate-fade-in"
        style={{
          animationDelay: "1.2s",
          animationFillMode: "forwards",
          opacity: calculateOpacity(),
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-float"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
