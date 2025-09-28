import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-iphone.jpg';

const HeroSection = () => {
  return (
    <section className="gradient-hero py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                The latest.
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Take a look at what's new, right now.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-white font-semibold shadow-primary">
                Shop iPhone 15 Pro
              </Button>
              <Button variant="outline" size="lg" className="font-semibold">
                Explore All Products
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative bg-gradient-to-br from-white to-muted rounded-3xl p-8 shadow-hover">
              <img
                src={heroImage}
                alt="Latest iPhone 15 Pro"
                className="w-full h-auto object-contain max-w-md mx-auto"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                NEW
              </div>
              
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-card">
                <div className="text-sm font-semibold">iPhone 15 Pro</div>
                <div className="text-xs text-muted-foreground">Starting at $999</div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button 
              variant="outline" 
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 shadow-card bg-card/90 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 shadow-card bg-card/90 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;