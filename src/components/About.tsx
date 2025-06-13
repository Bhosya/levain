import React from "react";

const About = () => {
  return (
    <section id="about" className="cafe-section">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <span className="handwritten-accent">Our Story</span>
          <h2 className="section-title mt-2 mb-12">About Levain Cafe</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6 text-left">
              <p className="text-lg">
                Nestled in the heart of the city, Levain Cafe was born from a
                simple passion for artisanal baking and exceptional coffee. Our
                journey began with a small kitchen and a big dream.
              </p>
              <p className="text-lg">
                Today, we pride ourselves on creating sourdough breads using
                traditional slow fermentation methods, allowing for complex
                flavors and a perfect crust. Our coffee beans are ethically
                sourced and roasted in small batches to ensure the freshest
                experience.
              </p>
              <p className="handwritten-accent text-left">
                Where every bite tells a story...
              </p>
            </div>

            <div className="relative">
              <div className="card p-3 rotate-3 hover-scale">
                <img
                  src="about.heic"
                  alt="Artisan bread making"
                  className="rounded-md object-cover w-full h-64"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 card p-3 -rotate-6 hover-scale z-10">
                <img
                  src="/images/gallery/food/cake.webp"
                  alt="Coffee preparation"
                  className="rounded-md object-cover w-48 h-48"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 hover-scale relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                style={{
                  backgroundImage: "url('process.webp')",
                }}
              ></div>
              <div className="relative z-10">
                <h3 className="font-optima text-xl font-medium mb-4">
                  Artisanal Process
                </h3>
                <p className="text-levain-black/80 sm:hidden lg:block">
                  Our sourdough is made using a natural levain and a slow
                  24-hour fermentation process for incredible flavor and
                  texture.
                </p>
              </div>
            </div>

            <div className="card p-8 hover-scale relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                style={{
                  backgroundImage: "url('croque.webp')",
                }}
              ></div>
              <div className="relative z-10">
                <h3 className="font-optima text-xl font-medium mb-4">
                  Quality Ingredients
                </h3>
                <p className="text-levain-black/80 sm:hidden lg:block">
                  We use locally sourced organic flour and ingredients whenever
                  possible, supporting local farmers and producers.
                </p>
              </div>
            </div>

            <div className="card p-8 hover-scale relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                style={{
                  backgroundImage: "url('cozy.jpg')",
                }}
              ></div>
              <div className="relative z-10">
                <h3 className="font-optima text-xl font-medium mb-4">
                  Cozy Ambiance
                </h3>
                <p className="text-levain-black/80 sm:hidden lg:block">
                  Our café offers a warm and inviting atmosphere where you can
                  enjoy your coffee and bread in a stylish, Instagram-worthy
                  setting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
