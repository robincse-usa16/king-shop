import React from 'react';
import { Smartphone, Laptop, Watch, Headphones, Wifi, Gamepad2, Speaker, Tablet } from 'lucide-react';

const FeaturedCategories = () => {
  const categories = [
    {
      icon: Smartphone,
      name: "Mobile Phone",
      count: "150+ items"
    },
    {
      icon: Laptop,
      name: "Laptop & Desktop",
      count: "80+ items"
    },
    {
      icon: Watch,
      name: "Smart Watch",
      count: "45+ items"
    },
    {
      icon: Headphones,
      name: "Airpods",
      count: "30+ items"
    },
    {
      icon: Wifi,
      name: "Wireless Headphone",
      count: "25+ items"
    },
    {
      icon: Headphones,
      name: "Wired Headphone",
      count: "20+ items"
    },
    {
      icon: Gamepad2,
      name: "Headphone",
      count: "35+ items"
    },
    {
      icon: Speaker,
      name: "Speakers",
      count: "40+ items"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Categories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our wide range of premium Apple products and accessories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-hover transition-smooth group-hover:scale-105 border">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-2 leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.count}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row - Additional Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-6">
          {[
            { icon: Tablet, name: "Tablet", count: "25+ items" },
            { icon: Watch, name: "Apple Watch", count: "15+ items" },
            { icon: Headphones, name: "Audio", count: "60+ items" },
            { icon: Laptop, name: "MacBook", count: "20+ items" },
            { icon: Smartphone, name: "iPhone", count: "30+ items" },
            { icon: Speaker, name: "HomePod", count: "5+ items" },
            { icon: Gamepad2, name: "Gaming", count: "40+ items" },
            { icon: Wifi, name: "Accessories", count: "100+ items" }
          ].map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-hover transition-smooth group-hover:scale-105 border">
                  <div className="bg-secondary/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                    <IconComponent className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-2 leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.count}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;