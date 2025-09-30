import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Bell,
  RotateCcw,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Apple Products", href: "/apple" },
    { name: "Phones", href: "/phones" },
    { name: "Tablet", href: "/tablet" },
    { name: "Sound Equipment", href: "/audio" },
    { name: "Power & Accessories", href: "/accessories" },
    { name: "Fitness & Wearable", href: "/wearable" },
    { name: "Peripherals", href: "/peripherals" },
    { name: "Cover & Glass", href: "/protection" },
    { name: "Smart Electronics", href: "/smart" },
    { name: "Used Device", href: "/used" },
  ];

  return (
    <header className="bg-card border-b shadow-card sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-muted py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm text-muted-foreground">
          <div>Free shipping on orders over $100</div>
          <div className="flex gap-4">
            <span>📞 +8801XXXXXXXXX</span>
            <span>📧 support@applestore.com</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-foreground">
              👑 <span className="text-primary">King </span> Shop
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search for products..."
                className="pl-10 pr-4 py-2 w-full rounded-full border-border focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:flex items-center gap-2"
            >
              📝 Blog
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:flex items-center gap-2"
            >
              <Bell className="w-4 h-4" />
              Pre-order
            </Button>

            <Button
              variant="secondary"
              size="sm"
              className="hidden lg:flex items-center gap-2"
            >
              🔥 Offers
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:flex items-center gap-2"
            >
              <Scale className="w-4 h-4" />
              Compare
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground min-w-[1.25rem] h-5 flex items-center justify-center text-xs">
                2
              </Badge>
            </Button>

            {/* User */}
            <Button variant="ghost" size="sm">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search for products..."
              className="pl-10 pr-4 py-2 w-full rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-muted/50 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden lg:flex items-center justify-center space-x-8 py-3">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-2 animate-slide-up">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
