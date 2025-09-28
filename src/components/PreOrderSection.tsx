import React from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PreOrderSection = () => {
  const preOrderProducts = [
    {
      id: 1,
      name: "iPhone 17 Pro Max",
      price: "TBA",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      color: "orange",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      id: 2,
      name: "iPhone 17 Pro", 
      price: "TBA",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      color: "blue",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      name: "iPhone 17",
      price: "TBA", 
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      color: "cyan",
      gradient: "from-cyan-400 to-cyan-600"
    },
    {
      id: 4,
      name: "iPhone Air",
      price: "TBA",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop", 
      color: "gray",
      gradient: "from-gray-400 to-gray-600"
    },
    {
      id: 5,
      name: "Apple Watch Series X",
      price: "৳ 62000",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop",
      color: "black", 
      gradient: "from-gray-800 to-black"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready for <span className="gradient-text">Pre-Order</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Be the first to get the latest Apple products
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="w-8 h-8 p-0 rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0 rounded-full">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Products Carousel */}
        <Carousel
          opts={{ 
            align: "start", 
            loop: false,
            slidesToScroll: 1
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {preOrderProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="group bg-card rounded-2xl shadow-card hover:shadow-hover transition-smooth border overflow-hidden h-full">
                  {/* Product Image */}
                  <div className={`relative h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-32 h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="text-xl font-bold text-muted-foreground">
                      {product.price}
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full gradient-primary text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Pre-Order Now
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default PreOrderSection;