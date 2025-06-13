import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, CakeSlice, X } from "lucide-react";

interface MenuCard {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuCard | null>(null);

  const menus: MenuCard[] = [
    {
      title: "Menu",
      description:
        "Explore our artisanal sourdough bread, pastries, and carefully crafted breakfast and lunch options.",
      imageUrl: "/images/menu/menu.jpeg",
      link: "https://anyflip.com/mrnzi/zmra/",
    },
    {
      title: "Birthday Menu",
      description:
        "Discover our selection of specialty coffees, teas, and seasonal drink offerings.",
      imageUrl: "/images/menu/birthday.jpg",
      link: "https://anyflip.com/mrnzi/ccjq/",
    },
  ];

  return (
    <section id="menu" className="cafe-section relative overflow-hidden w-full">
      {/* Textured background with coffee theme */}
      <div className="absolute inset-0 bg-levain-beige/50 opacity-70 z-0">
        <div className="absolute inset-0 bg-texture opacity-10"></div>
        <div className="absolute inset-0 bg-paper opacity-10"></div>
      </div>

      {/* Coffee bean ornaments */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10 z-0">
        <img
          src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="w-full h-full object-contain rounded-full"
        />
      </div>
      <div className="absolute bottom-10 right-20 w-48 h-48 opacity-10 rotate-45 z-0">
        <img
          src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="w-full h-full object-contain rounded-full"
        />
      </div>

      {/* Decorative coffee and cake icons */}
      <div className="absolute top-20 right-20 opacity-10 z-0">
        <Coffee size={120} className="text-levain-brown" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 z-0">
        <CakeSlice size={100} className="text-levain-brown" />
      </div>

      {/* Content container */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <span className="handwritten-accent">Taste & Experience</span>
          <h2 className="section-title mt-2">Our Menus</h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto">
            Browse our carefully crafted menus featuring seasonal ingredients
            and our signature sourdough bread and pastries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {menus.map((menu, index) => (
            <div key={index} className="relative group">
              <Card className="overflow-hidden transform transition-all duration-500 group-hover:shadow-xl bg-white/90 backdrop-blur-sm border-levain-brown/20">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={menu.imageUrl}
                    alt={menu.title}
                    className="absolute inset-0 h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="font-optima text-white text-2xl font-medium mb-1">
                        {menu.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-3">
                        {menu.description}
                      </p>
                      <Button
                        className="bg-levain-brown hover:bg-levain-mid-brown text-white"
                        onClick={() => (window.location.href = menu.link)}
                      >
                        View Menu
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Enhanced decorative elements with texture */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-levain-brown/40 -z-10 before:content-[''] before:absolute before:inset-0 before:bg-levain-beige/30 before:rounded-bl-lg"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-levain-brown/40 -z-10 before:content-[''] before:absolute before:inset-0 before:bg-levain-beige/30 before:rounded-tr-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
