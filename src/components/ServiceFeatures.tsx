import React from 'react';
import { CreditCard, Truck, RotateCcw, DollarSign, Headphones } from 'lucide-react';

const ServiceFeatures = () => {
  const features = [
    {
      icon: CreditCard,
      title: "36 Months EMI",
      description: "Flexible payment options available"
    },
    {
      icon: Truck,
      title: "Fastest Home Delivery",
      description: "Same day delivery in major cities"
    },
    {
      icon: RotateCcw,
      title: "Exchange Facility",
      description: "Easy exchange and return policy"
    },
    {
      icon: DollarSign,
      title: "Best Price Deals",
      description: "Competitive pricing guaranteed"
    },
    {
      icon: Headphones,
      title: "After Sell Service",
      description: "24/7 customer support available"
    }
  ];

  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-smooth"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;