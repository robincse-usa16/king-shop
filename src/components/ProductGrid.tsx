import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 1199,
      originalPrice: 1299,
      rating: 4.8,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      badge: "Best Seller",
      badgeColor: "bg-primary"
    },
    {
      id: 2,
      name: "MacBook Air M3",
      price: 1099,
      originalPrice: 1199,
      rating: 4.9,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
      badge: "New Arrival",
      badgeColor: "bg-success"
    },
    {
      id: 3,
      name: "AirPods Pro 2nd Gen",
      price: 249,
      originalPrice: 279,
      rating: 4.7,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=400&fit=crop",
      badge: "20% OFF",
      badgeColor: "bg-destructive"
    },
    {
      id: 4,
      name: "Apple Watch Series 9",
      price: 399,
      originalPrice: 429,
      rating: 4.6,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
      badge: "Limited",
      badgeColor: "bg-warning"
    },
    {
      id: 5,
      name: "iPad Pro 12.9\"",
      price: 1099,
      originalPrice: 1199,
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      badge: "Popular",
      badgeColor: "bg-info"
    },
    {
      id: 6,
      name: "Studio Display",
      price: 1599,
      originalPrice: 1699,
      rating: 4.5,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      badge: "Premium",
      badgeColor: "bg-secondary text-secondary-foreground"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex gap-8 items-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Featured <span className="text-gradient">Products</span>
            </h2>
            <div className="flex gap-4">
              <Button variant="default" className="bg-foreground text-background rounded-full px-6">
                BEST DEALS
              </Button>
              <Button variant="ghost" className="text-muted-foreground rounded-full px-6">
                TOP SELLING
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
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
          <CarouselContent className="-ml-6">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div 
                  className="group bg-card rounded-xl shadow-card hover:shadow-hover transition-smooth border overflow-hidden h-full cursor-pointer"
                  onClick={() => window.location.href = `/product/${product.id}`}
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden bg-muted/30 p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge */}
                    <Badge className={`absolute top-6 left-6 text-xs px-2 py-1 rounded-full ${
                      product.badge === 'Best Seller' ? 'bg-success text-success-foreground' :
                      product.badge === 'New Arrival' ? 'bg-info text-info-foreground' :
                      product.badge.includes('OFF') ? 'bg-destructive text-destructive-foreground' :
                      'bg-warning text-warning-foreground'
                    }`}>
                      {product.badge}
                    </Badge>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-base text-foreground mb-2 line-clamp-2 leading-tight">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-xl font-bold text-foreground">
                        ৳ {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ৳ {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Discount Badge */}
                    {product.originalPrice && (
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs bg-success/10 text-success border-success/20">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex -left-12" />
          <CarouselNext className="hidden lg:flex -right-12" />
        </Carousel>

        {/* View All Button - Mobile */}
        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" className="w-full max-w-sm">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;