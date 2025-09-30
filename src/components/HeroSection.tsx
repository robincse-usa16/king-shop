import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const heroSlides = [
    {
      id: 1,
      title: "MacBook Pro",
      subtitle: "M4 PRO",
      description: "Hello, Apple Intelligence.",
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=600&fit=crop",
      gradient: "from-slate-900 to-slate-800",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "iPad",
      subtitle: "Air",
      description: "Flight speed",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop",
      gradient: "from-blue-600 to-purple-600",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "iPhone 15",
      subtitle: "Pro Max",
      description: "Titanium. So strong. So light.",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop",
      gradient: "from-gray-900 to-black",
      textColor: "text-white",
    },
  ];

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Hero Carousel */}
          <div className="lg:col-span-3">
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 5000 })]}
              className="w-full"
            >
              <CarouselContent>
                {heroSlides.map((slide) => (
                  <CarouselItem key={slide.id}>
                    <div
                      className={`relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br ${slide.gradient}`}
                    >
                      <div className="absolute inset-0 flex items-center justify-between p-8 lg:p-12">
                        <div
                          className={`space-y-4 ${slide.textColor} max-w-md`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                <span className="text-black font-bold text-sm">
                                  👑
                                </span>
                              </div>
                              <h1 className="text-3xl lg:text-5xl font-bold">
                                {slide.title}
                                <span className="block text-2xl lg:text-4xl opacity-90">
                                  {slide.subtitle}
                                </span>
                              </h1>
                            </div>
                            <p className="text-lg lg:text-xl opacity-90 font-medium">
                              {slide.description}
                            </p>
                          </div>
                        </div>

                        <div className="hidden lg:block">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-80 h-60 object-cover rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      {/* Navigation Arrows */}
                      <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <CarouselPrevious className="static bg-white/20 border-white/30 text-white hover:bg-white/30" />
                      </div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <CarouselNext className="static bg-white/20 border-white/30 text-white hover:bg-white/30" />
                      </div>

                      {/* Dot indicators */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {heroSlides.map((_, index) => (
                          <div
                            key={index}
                            className="w-2 h-2 rounded-full bg-white/50 data-[active]:bg-white transition-all"
                          />
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Side Banners */}
          <div className="space-y-6">
            {/* CMF Buds Banner */}
            <div className="relative h-[235px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-medium text-blue-900 mb-2">
                    cmf
                  </div>
                  <div className="text-xl font-bold text-blue-900">
                    BUDS PRO 2
                  </div>
                </div>
                <div className="flex justify-end">
                  <img
                    src="https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=200&h=150&fit=crop"
                    alt="CMF Buds Pro 2"
                    className="w-24 h-20 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Galaxy Watch Banner */}
            <div className="relative h-[235px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div>
                  <div className="text-xl font-bold mb-2">
                    Galaxy Watch Ultra
                  </div>
                  <div className="text-sm opacity-90">Galaxy AI ✨</div>
                </div>
                <div className="flex justify-end">
                  <img
                    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200&h=150&fit=crop"
                    alt="Galaxy Watch Ultra"
                    className="w-24 h-20 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
