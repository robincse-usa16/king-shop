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
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover our most popular Apple products
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Products
          </Button>
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
          <CarouselContent className="-ml-8">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-8 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="group bg-card rounded-2xl shadow-card hover:shadow-hover transition-smooth border overflow-hidden h-full">
                  {/* Product Image */}
                  <div className="relative overflow-hidden bg-muted/30">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Badge */}
                    <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white`}>
                      {product.badge}
                    </Badge>

                    {/* Wishlist Button */}
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute top-4 right-4 w-8 h-8 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>

                    {/* Quick Actions */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" className="gradient-primary text-white shadow-primary">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium ml-1">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-foreground">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button className="flex-1 gradient-primary text-white">
                        Buy Now
                      </Button>
                      <Button variant="outline" size="sm" className="px-3">
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
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