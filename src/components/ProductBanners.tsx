import React from 'react';
import { Button } from '@/components/ui/button';
import bannerImage from '@/assets/banner-gadgets.jpg';

const ProductBanners = () => {
  const banners = [
    {
      title: "iPhone 15 Series",
      subtitle: "Exclusive Deals",
      description: "Up to 20% off on all iPhone 15 models",
      image: bannerImage,
      cta: "Shop Now",
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "MacBook Pro M3",
      subtitle: "Professional Performance",
      description: "Starting from $1,299 - Limited time offer",
      image: bannerImage,
      cta: "Learn More",
      gradient: "from-gray-500/10 to-slate-500/10"
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {banners.map((banner, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${banner.gradient} border shadow-card hover:shadow-hover transition-smooth group cursor-pointer`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-card/95 to-transparent z-10" />
              
              <div className="relative z-20 p-8 lg:p-12">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">
                      {banner.subtitle}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                      {banner.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {banner.description}
                    </p>
                  </div>
                  
                  <Button className="gradient-primary text-white font-semibold shadow-primary group-hover:scale-105 transition-transform">
                    {banner.cta}
                  </Button>
                </div>
              </div>

              <div className="absolute right-0 top-0 h-full w-1/2 lg:w-2/3">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBanners;